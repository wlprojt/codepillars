"use client";

import Footer from "@/components/Footer";
import { useState } from "react";
import countryList from "react-select-country-list";
import { useMemo } from "react";

export default function CreateProject() {
  const countries = useMemo(() => countryList().getData(), []);
  const [loading, setLoading] = useState(false);

  const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >
) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value,
  });
};

  const [form, setForm] = useState({
    projectDetails: "",
    phone: "",
    country: "",
    state: "",
    city: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await fetch("/api/projects/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Failed to save project");
        return;
      }

      alert("Project submitted successfully!");
      window.location.href = "/my-projects";

      setForm({
        projectDetails: "",
        phone: "",
        country: "",
        state: "",
        city: "",
      });
      setLoading(false);
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
      setLoading(false);
    }
  };

  return (
    <>
    <main className="min-h-screen bg-[#d6e0ec] bg-[url('/bg.png')] bg-cover bg-center px-4 py-12">
      <div className="max-w-3xl mt-25 mx-auto rounded-3xl bg-white/20 backdrop-blur-md border border-white/30 shadow-xl p-6 md:p-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#142342] text-center">
          Create Your Project
        </h1>

        <p className="text-center text-gray-700 mt-2">
          Add your project details and contact information
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label className="font-bold text-[#142342]">Project Details</label>
            <textarea
              name="projectDetails"
              value={form.projectDetails}
              onChange={handleChange}
              required
              rows={6}
              placeholder="Describe your app or website idea..."
              className="mt-2 w-full rounded-2xl bg-white/60 border border-white/40 p-4 outline-none focus:ring-2 focus:ring-[#142342]"
            />
          </div>

          <div>
            <label className="font-bold text-[#142342]">WhatsApp / Telegram / Signal Number</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              type="tel"
              placeholder="+91 9876543210"
              className="mt-2 w-full rounded-2xl bg-white/60 border border-white/40 p-4 outline-none focus:ring-2 focus:ring-[#142342]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="font-bold text-[#142342]">Country</label>
              <select
                name="country"
                value={form.country}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-2xl bg-white/60 border border-white/40 p-4 outline-none focus:ring-2 focus:ring-[#142342]"
              >
                <option value="">Select Country</option>

                {countries.map((c) => (
                  <option key={c.value} value={c.label}>
                    {c.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="font-bold text-[#142342]">State</label>
              <input
                name="state"
                value={form.state}
                onChange={handleChange}
                required
                placeholder="Uttar Pradesh"
                className="mt-2 w-full rounded-2xl bg-white/60 border border-white/40 p-4 outline-none focus:ring-2 focus:ring-[#142342]"
              />
            </div>
          </div>

          <div>
            <label className="font-bold text-[#142342]">City / Village</label>
            <input
              name="city"
              value={form.city}
              onChange={handleChange}
              required
              placeholder="Your city or village"
              className="mt-2 w-full rounded-2xl bg-white/60 border border-white/40 p-4 outline-none focus:ring-2 focus:ring-[#142342]"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full h-14 rounded-[32px] bg-gradient-to-br from-[#d6f0ee] via-[#bed3ee] to-[#c4c4f4] border border-white/30 text-[#142342] font-bold text-lg hover:scale-[1.02] transition-transform"
          >
            {loading ? "Processing..." : "Submit Project"}
          </button>
        </form>
      </div>
    </main>
    <Footer />
    </>
  );
}