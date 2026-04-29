"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Lottie from "lottie-react";
import animationData from "../../../public/No Item Found.json";
import Footer from "@/components/Footer";

type ProjectType = {
  _id: string;
  projectDetails: string;
  phone: string;
  country: string;
  state: string;
  city: string;
  createdAt: string;
};

export default function MyProjectsPage() {
  const router = useRouter();
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("/api/projects/my", {
          method: "GET",
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
    }

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#d6e0ec]">
        <p className="font-bold text-[#142342]">Loading projects...</p>
      </main>
    );
  }

  return (
    <>
    <main className="min-h-screen bg-[#d6e0ec] bg-[url('/bg.png')] bg-cover bg-center px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl mt-24 font-bold text-[#142342] text-center">
          My Projects
        </h1>

        <p className="text-center text-gray-700 mt-2">
          View your submitted project details
        </p>

        {projects.length === 0 ? (
          <div className="mt-10 rounded-3xl bg-white/20 backdrop-blur-md border border-white/30 shadow-xl p-8 text-center">
            <p className="font-bold text-[#142342]">No projects found</p>

            <div className="mx-auto mt-4 w-72 max-w-full">
              <Lottie animationData={animationData} loop autoplay />
            </div>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project._id}
                className="rounded-3xl bg-white/20 backdrop-blur-md border border-white/30 shadow-xl p-6"
              >
                <h2 className="text-xl font-bold text-[#142342] mb-3">
                  Project Details
                </h2>

                <p className="text-gray-800 leading-relaxed whitespace-pre-line">
                  {project.projectDetails}
                </p>

                <div className="mt-5 space-y-2 text-sm text-gray-800">
                  <p><b className="text-[#142342]">Phone:</b> {project.phone}</p>
                  <p><b className="text-[#142342]">Country:</b> {project.country}</p>
                  <p><b className="text-[#142342]">State:</b> {project.state}</p>
                  <p><b className="text-[#142342]">City / Village:</b> {project.city}</p>
                  <p>
                    <b className="text-[#142342]">Submitted:</b>{" "}
                    {new Date(project.createdAt).toLocaleDateString()}
                  </p>
                </div>

                <button
                    onClick={() => router.push(`/payment/${project._id}`)}
                    className="w-50 h-12 mt-4 rounded-[32px] bg-gradient-to-br from-[#d6f0ee] via-[#bed3ee] to-[#c4c4f4] backdrop-blur-md border border-white/25 text-[#142342] font-bold text-lg hover:scale-[1.02] transition-transform disabled:opacity-50"
                  >
                    Make Payment
                  </button>

              </div>
            ))}
          </div>
        )}
      </div>
    </main>
    <Footer />
    </>
  );
}