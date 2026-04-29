"use client";

import { useEffect, useState } from "react";

type ProjectType = {
  _id: string;
  projectDetails: string;
  phone: string;
  country: string;
  state: string;
  city: string;
  status?: string;

  paymentAmount?: number;
  paymentCurrency?: "INR" | "USD";
  paymentStatus?: "unpaid" | "paid" | "failed";

  createdAt: string;
};

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [loading, setLoading] = useState(true);

  const loadProjects = async () => {
    try {
      const res = await fetch("/api/admin/projects", {
        credentials: "include",
        cache: "no-store",
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Failed to load projects");
        return;
      }

      setProjects(data.projects || []);
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const updateProject = async (project: ProjectType) => {
    const res = await fetch(`/api/admin/projects/${project._id}`, {
      method: "PATCH",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(project),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.error || "Update failed");
      return;
    }

    alert("Project updated");
    loadProjects();
  };

  const deleteProject = async (id: string) => {
    if (!confirm("Delete this project?")) return;

    const res = await fetch(`/api/admin/projects/${id}`, {
      method: "DELETE",
      credentials: "include",
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.error || "Delete failed");
      return;
    }

    setProjects((prev) => prev.filter((p) => p._id !== id));
  };

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#d6e0ec]">
        <p className="font-bold text-[#142342]">Loading admin projects...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#d6e0ec] bg-[url('/bg.png')] bg-cover bg-center px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl mt-25 md:text-4xl font-bold text-[#142342] text-center">
          Admin Projects
        </h1>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project._id}
              className="rounded-3xl bg-white/20 backdrop-blur-md border border-white/30 shadow-xl p-6"
            >
              <label className="font-bold text-[#142342]">Project Details</label>
              <textarea
                value={project.projectDetails}
                onChange={(e) => {
                  const copy = [...projects];
                  copy[index].projectDetails = e.target.value;
                  setProjects(copy);
                }}
                rows={5}
                className="mt-2 w-full rounded-2xl bg-white/60 p-4 outline-none"
              />

              <input
                value={project.phone}
                onChange={(e) => {
                  const copy = [...projects];
                  copy[index].phone = e.target.value;
                  setProjects(copy);
                }}
                placeholder="Phone"
                className="mt-3 w-full rounded-2xl bg-white/60 p-4 outline-none"
              />

              <input
                value={project.country}
                onChange={(e) => {
                  const copy = [...projects];
                  copy[index].country = e.target.value;
                  setProjects(copy);
                }}
                placeholder="Country"
                className="mt-3 w-full rounded-2xl bg-white/60 p-4 outline-none"
              />

              <input
                value={project.state}
                onChange={(e) => {
                  const copy = [...projects];
                  copy[index].state = e.target.value;
                  setProjects(copy);
                }}
                placeholder="State"
                className="mt-3 w-full rounded-2xl bg-white/60 p-4 outline-none"
              />

              <input
                value={project.city}
                onChange={(e) => {
                  const copy = [...projects];
                  copy[index].city = e.target.value;
                  setProjects(copy);
                }}
                placeholder="City / Village"
                className="mt-3 w-full rounded-2xl bg-white/60 p-4 outline-none"
              />

              <select
                value={project.status || "pending"}
                onChange={(e) => {
                  const copy = [...projects];
                  copy[index].status = e.target.value;
                  setProjects(copy);
                }}
                className="mt-3 w-full rounded-2xl bg-white/60 p-4 outline-none"
              >
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="working">Working</option>
                <option value="completed">Completed</option>
              </select>

              <div className="mt-4 rounded-2xl bg-white/40 p-4 space-y-2 text-sm text-gray-800">
  <p>
    <b className="text-[#142342]">Payment Amount:</b>{" "}
    {project.paymentAmount
      ? `${project.paymentCurrency === "INR" ? "₹" : "$"}${project.paymentAmount}`
      : "Not paid"}
  </p>

  <p>
    <b className="text-[#142342]">Payment Status:</b>{" "}
    <span
      className={`font-bold ${
        project.paymentStatus === "paid"
          ? "text-green-600"
          : project.paymentStatus === "failed"
          ? "text-red-600"
          : "text-orange-600"
      }`}
    >
      {project.paymentStatus || "unpaid"}
    </span>
  </p>
</div>

              <div className="flex gap-3 mt-5">
                <button
                  onClick={() => updateProject(project)}
                  className="flex-1 h-12 rounded-2xl bg-green-500 text-white font-bold"
                >
                  Update
                </button>

                <button
                  onClick={() => deleteProject(project._id)}
                  className="flex-1 h-12 rounded-2xl bg-red-500 text-white font-bold"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}