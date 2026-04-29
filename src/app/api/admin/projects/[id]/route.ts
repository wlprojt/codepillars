import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Project from "@/models/Project";
import { getUser } from "@/lib/getUser";

async function checkAdmin() {
  const user = await getUser();
  return user?.role === "admin";
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const isAdmin = await checkAdmin();

    if (!isAdmin) {
      return NextResponse.json({ error: "Admin only" }, { status: 403 });
    }

    await connectDB();

    const { id } = await params;
    const body = await req.json();

    const project = await Project.findByIdAndUpdate(
  id,
  {
    projectDetails: body.projectDetails,
    phone: body.phone,
    country: body.country,
    state: body.state,
    city: body.city,
    status: body.status,

    paymentAmount: body.paymentAmount,
    paymentCurrency: body.paymentCurrency,
    paymentStatus: body.paymentStatus,
  },
  { new: true }
);

    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json({ project });
  } catch (error) {
    console.error("Admin update project error:", error);
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const isAdmin = await checkAdmin();

    if (!isAdmin) {
      return NextResponse.json({ error: "Admin only" }, { status: 403 });
    }

    await connectDB();

    const { id } = await params;
    await Project.findByIdAndDelete(id);

    return NextResponse.json({ message: "Project deleted" });
  } catch (error) {
    console.error("Admin delete project error:", error);
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}