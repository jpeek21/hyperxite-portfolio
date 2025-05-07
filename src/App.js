import { useState } from "react";
import Tabs from "./components/Tabs"; // ⬅️ You just made this
import "./App.css";

const projects = [
  {
    title: "MHD Quadcopter Research",
    category: "Research", // ⬅️ Important for filtering!
    timeframe: "Winter–Spring 2025",
    role: "Undergraduate Research Assistant",
    summary:
      "Designed and tested MHD thrusters for underwater quadcopter propulsion. Modeled components in SolidWorks, fabricated using resin 3D printing, and integrated Arduino-based control logic.",
    tools: ["SolidWorks", "Arduino", "3D Printing", "Multimeter", "Voltage Generator", "Soldering"],
    status: "Currently building second-generation thruster",
    images: ["/img/MHD_ASSEMBLY1.png", "/img/MHD_SCALE1.png"],
  },
  // You can add more projects here (e.g., Robotics, Software, CAD)
];


export default function App() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter((proj) =>
    filter === "All" ? true : proj.category === filter
  );

  return (
    <main className="p-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">Jonathan Peek – Engineering Portfolio</h1>
      <p className="mb-10 text-lg text-gray-600">
        UCI Mechanical Engineering | HyperXite Applicant | Research in Propulsion & Controls
      </p>

      <Tabs onTabChange={setFilter} />

      {filteredProjects.map((proj, i) => (
        <section key={i} className="mb-16">
          <h2 className="text-3xl font-semibold mb-2">{proj.title}</h2>
          <p className="text-sm text-gray-500 mb-4">{proj.timeframe} • {proj.role}</p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {proj.images.map((src, j) => (
              <img key={j} src={src} className="rounded-xl shadow-md" alt={`${proj.title} ${j + 1}`} />
            ))}
          </div>

          <p className="mb-4">{proj.summary}</p>

          <ul className="list-disc list-inside text-sm mb-2">
            <li><strong>Tools Used:</strong> {proj.tools.join(", ")}</li>
            <li><strong>Status:</strong> {proj.status}</li>
          </ul>
        </section>
      ))}
    </main>
  );
}

