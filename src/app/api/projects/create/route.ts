import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Project from "@/models/Project";
import { getUser } from "@/lib/getUser";

export async function POST(req: Request) {
  try {
    const user = await getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();

    const body = await req.json();
    const { projectDetails, phone, country, state, city } = body;

    const project = await Project.create({
      userId: user.id, // 🔥 MUST SAVE THIS
      projectDetails,
      phone,
      country,
      state,
      city,
    });

    return NextResponse.json({ project }, { status: 201 });
  } catch (error) {
    console.error("Create project error:", error);
    return NextResponse.json({ error: "Failed to save project" }, { status: 500 });
  }
}