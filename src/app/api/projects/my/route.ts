import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Project from "@/models/Project";
import { getUser } from "@/lib/getUser";

export async function GET() {
  try {
    const user = await getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();

    const projects = await Project.find({
      userId: user.id, // 🔥 FILTER HERE
    }).sort({ createdAt: -1 });

    return NextResponse.json({ projects }, { status: 200 });
  } catch (error) {
    console.error("Get my projects error:", error);
    return NextResponse.json({ error: "Failed to load projects" }, { status: 500 });
  }
}