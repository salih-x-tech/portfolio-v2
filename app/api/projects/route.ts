import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { connectDB } from "@/lib/mongodb";
import Project from "@/lib/models/Project";
import { isAdminAuthenticated } from "@/lib/auth";

export async function GET() {
  try {
    await connectDB();

    const projects = await Project.find()
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json({
      success: true,
      projects,
    });
  } catch (error) {
    console.error("Projects API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch projects",
      },
      { status: 500 }
    );
  }
}

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

    await connectDB();

    const body = await request.json();

    if (!body.title || !body.slug || !body.description) {
      return NextResponse.json(
        {
          success: false,
          message: "Title, slug, and description are required",
        },
        { status: 400 }
      );
    }

    const existingProject = await Project.findOne({
      slug: body.slug,
    });

    if (existingProject) {
      return NextResponse.json(
        {
          success: false,
          message: "A project with this slug already exists",
        },
        { status: 409 }
      );
    }

    const project = await Project.create({
      title: body.title,
      slug: body.slug,
      description: body.description,
      longDescription: body.longDescription || "",
      problem: body.problem || "",
      solution: body.solution || "",
      category: body.category || "Frontend",
      type: body.type || "Project",
      technologies: body.technologies || [],
      features: body.features || [],
      challenges: body.challenges || [],
      learning: body.learning || "",
      images: body.images || [],
      github: body.github || "",
      liveDemo: body.liveDemo || "",
      featured: body.featured ?? false,
      status: body.status || "Completed",
    });

    return NextResponse.json(
      {
        success: true,
        project,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Create project API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create project",
      },
      { status: 500 }
    );
  }
}