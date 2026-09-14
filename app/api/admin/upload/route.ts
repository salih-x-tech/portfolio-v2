import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { isAdminAuthenticated } from "@/lib/auth";
import cloudinary from "@/lib/cloudinary";

export async function POST(request: Request) {
  try {
    // Check admin authentication
    const cookieStore = await cookies();
    const token = cookieStore.get("admin_token")?.value;

    const isAdmin = await isAdminAuthenticated(token);

    if (!isAdmin) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized",
        },
        { status: 401 }
      );
    }

    // Read uploaded file
    const formData = await request.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json(
        {
          success: false,
          message: "No image file provided",
        },
        { status: 400 }
      );
    }

    // Validate file type
    if (!file.type.startsWith("image/")) {
      return NextResponse.json(
        {
          success: false,
          message: "Only image files are allowed",
        },
        { status: 400 }
      );
    }

    // Validate file size (5 MB maximum)
    const maxSize = 5 * 1024 * 1024;

    if (file.size > maxSize) {
      return NextResponse.json(
        {
          success: false,
          message: "Image must be smaller than 5 MB",
        },
        { status: 400 }
      );
    }

    // Convert file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Upload to Cloudinary
    const result = await new Promise<{
      secure_url: string;
      public_id: string;
    }>((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder: "portfolio-v2/projects",
            resource_type: "image",
          },
          (error, result) => {
            if (error) {
              reject(error);
              return;
            }

            if (!result) {
              reject(new Error("Cloudinary upload failed"));
              return;
            }

            resolve({
              secure_url: result.secure_url,
              public_id: result.public_id,
            });
          }
        )
        .end(buffer);
    });

    return NextResponse.json({
      success: true,
      message: "Image uploaded successfully",
      image: {
        url: result.secure_url,
        publicId: result.public_id,
      },
    });
  } catch (error) {
    console.error("Image upload error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to upload image",
      },
      { status: 500 }
    );
  }
}