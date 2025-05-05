import "./App.css"; // Optional: for custom styling

export default function App() {
  return (
    <main className="p-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">Jonathan Peek – Engineering Portfolio</h1>
      <p className="mb-10 text-lg text-gray-600">
        UCI Mechanical Engineering | HyperXite Applicant | Research in Propulsion & Controls
      </p>

      {/* MHD Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-2">MHD Quadcopter Research</h2>
        <p className="text-sm text-gray-500 mb-4">Winter–Spring 2025 • Undergraduate Research Assistant</p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <img src="/img/MHD_ASSEMBLY1.png" className="rounded-xl shadow-md" alt="MHD Assembly" />
          <img src="/img/MHD_SCALE1.png" className="rounded-xl shadow-md" alt="MHD Scale Demo" />
        </div>

        <p className="mb-4">
          Designed and tested MHD thrusters for underwater quadcopter propulsion. Modeled components in SolidWorks,
          fabricated using resin 3D printing, and integrated Arduino-based control logic.
        </p>

        <ul className="list-disc list-inside text-sm mb-2">
          <li><strong>Tools Used:</strong> SolidWorks, Arduino, 3D Printing, Multimeter, Voltage Generator, Soldering</li>
          <li><strong>Status:</strong> Currently building second-generation thruster</li>
        </ul>
      </section>
    </main>
  );
}
