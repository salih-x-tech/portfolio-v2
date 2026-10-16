import { cookies } from "next/headers";
import { isAdminAuthenticated } from "@/lib/auth";
import { connectDB } from "@/lib/mongodb";
import Cv from "@/lib/models/Cv";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
const headers = { "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" };

export async function HEAD() {
  try {
    await connectDB();
    const cv = await Cv.exists({ _id: "primary" });
    return new Response(null, { status: cv ? 200 : 404, headers });
  } catch {
    return new Response(null, { status: 503, headers });
  }
}

export async function GET() {
  try {
    await connectDB();
    const cv = await Cv.findById("primary").select("+data");
    if (!cv) return Response.json({ message: "CV is not available yet" }, { status: 404, headers });
    return new Response(new Uint8Array(cv.data), {
      headers: { ...headers, "Content-Type": "application/pdf", "Content-Disposition": 'attachment; filename="Salih-Hayat-CV.pdf"' },
    });
  } catch {
    return Response.json({ message: "CV is temporarily unavailable" }, { status: 503, headers });
  }
}

export async function POST(request: Request) {
  try {
    const token = (await cookies()).get("admin_token")?.value;
    if (!await isAdminAuthenticated(token)) return Response.json({ message: "Unauthorized" }, { status: 401 });
    const maxSize = 3 * 1024 * 1024;
    if (Number(request.headers.get("content-length")) > maxSize + 65536) {
      return Response.json({ message: "PDF must be 3 MB or smaller" }, { status: 413 });
    }
    const file = (await request.formData()).get("file");
    if (!(file instanceof File) || file.type !== "application/pdf" || !file.name.toLowerCase().endsWith(".pdf")) {
      return Response.json({ message: "Choose a PDF file" }, { status: 400 });
    }
    if (!file.size || file.size > maxSize) return Response.json({ message: "Choose a PDF between 1 byte and 3 MB" }, { status: 400 });
    const data = Buffer.from(await file.arrayBuffer());
    if (data.subarray(0, 5).toString() !== "%PDF-") return Response.json({ message: "File is not a valid PDF" }, { status: 400 });
    await connectDB();
    await Cv.findByIdAndUpdate("primary", { $set: { data, size: data.length } }, { upsert: true, runValidators: true });
    return Response.json({ success: true, message: "CV uploaded. Visitors can download it now." }, { headers });
  } catch {
    return Response.json({ message: "Upload failed. Please try again." }, { status: 500 });
  }
}
