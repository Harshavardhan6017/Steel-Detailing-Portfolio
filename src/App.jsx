export default function Portfolio() {
  const projects = [
    "Airbus FAL – USA",
    "Hotel Spark – USA",
    "INEOS Project 1 – Netherlands",
    "Miami Project – USA",
    "Shore Club – USA",
    "Project Sakura – UK",
  ];

  const skills = [
    "Tekla Structures",
    "3D Modelling",
    "GA Editing",
    "Tekla Open API",
    "Automation",
    "AutoCAD",
    "React.js",
    "Git",
  ];

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* Background Glow */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-[120px] opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-500 rounded-full blur-[120px] opacity-20"></div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-black/40 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-400">
            Harshavardhan's Portfolio- Steel Detailing
          </h1>

          <div className="hidden md:flex gap-8 text-gray-300">
            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>
            <a href="#skills" className="hover:text-blue-400 transition">
              Skills
            </a>
            <a href="#projects" className="hover:text-blue-400 transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 md:px-20 py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>
            <p className="uppercase tracking-[5px] text-blue-400 mb-4">
              Tekla Steel Detailer & API Developer
            </p>

            <h1 className="text-6xl md:text-7xl font-black leading-tight mb-6">
              Harshavardhan
            </h1>

            <p className="text-gray-400 text-lg leading-8 mb-10">
              Building efficient structural workflows using Tekla Structures,
              automation tools, and modern engineering technologies.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/resume.pdf"
                download
                className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-2xl font-semibold shadow-lg shadow-blue-500/30"
              >
                Download Resume
              </a>

              <a
                href="mailto:namalaharshavardhan@gmail.com"
                className="border border-gray-700 hover:border-blue-500 px-8 py-4 rounded-2xl transition"
              >
                Contact Me
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-16">
              <div>
                <h2 className="text-4xl font-bold text-blue-400">
                  2.8+
                </h2>
                <p className="text-gray-500 mt-2">
                  Years Experience
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-blue-400">
                  7+
                </h2>
                <p className="text-gray-500 mt-2">
                  International Projects
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-blue-400">
                  100%
                </h2>
                <p className="text-gray-500 mt-2">
                  Accuracy
                </p>
              </div>
            </div>
          </div>

          {/* Profile */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-30 group-hover:opacity-50 transition"></div>

              <img
                src="/profile.jpg"
                alt="Harsha"
                className="relative w-[380px] h-[480px] object-cover rounded-[40px] border border-blue-500/40 shadow-2xl"
              />

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-lg px-6 py-3 rounded-2xl border border-gray-700">
                <p className="text-blue-400 font-semibold">
                  Tekla Expert
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="px-6 md:px-20 py-24"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-14">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 hover:border-blue-500/40 transition">
              <h3 className="text-2xl font-bold text-blue-400 mb-6">
                Professional Summary
              </h3>

              <p className="text-gray-400 leading-8 text-lg">
                Experienced Tekla Steel Detailer skilled in 3D modeling,
                shop drawing coordination, connection detailing,
                and Tekla Open API automation for commercial
                and industrial projects.
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 hover:border-blue-500/40 transition">
              <h3 className="text-2xl font-bold text-blue-400 mb-6">
                Career Highlights
              </h3>

              <ul className="space-y-5 text-gray-400 text-lg">
                <li>✔ Completed project 53% ahead of schedule</li>
                <li>✔ 110%+ profit margin achievement</li>
                <li>✔ Tekla Open API automation development</li>
                <li>✔ International commercial project exposure</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="px-6 md:px-20 py-24"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-14">
            Core Skills
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 text-center hover:-translate-y-2 hover:border-blue-500 transition duration-300"
              >
                <p className="text-lg font-semibold">
                  {skill}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="px-6 md:px-20 py-24"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-14">
            Major Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-10 hover:border-blue-500 hover:-translate-y-2 transition duration-300"
              >
                <div className="text-6xl mb-6">
                  🏗️
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {project}
                </h3>

                <p className="text-gray-400 leading-7">
                  Tekla detailing, shop drawing coordination,
                  and engineering workflow execution.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
<section
  id="contact"
  className="px-6 md:px-20 py-24"
>
  <div className="max-w-5xl mx-auto text-center">

    <h2 className="text-6xl font-bold mb-8">
      Let’s Work Together
    </h2>

    <p className="text-gray-400 text-xl leading-9 mb-12">
      Available for Tekla detailing projects,
      automation development, and engineering workflows.
    </p>

    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">

      <a
        href="mailto:namalaharshavardhan@gmail.com"
        className="bg-blue-600 hover:bg-blue-700 transition px-10 py-5 rounded-2xl text-lg font-semibold shadow-lg shadow-blue-500/30"
      >
        📧 Email Me
      </a>

      <a
        href="/resume.pdf"
        download
        className="border border-gray-700 hover:border-blue-500 transition px-10 py-5 rounded-2xl text-lg"
      >
        📄 Download Resume
      </a>

      <div className="border border-gray-700 px-10 py-5 rounded-2xl text-lg text-gray-300 hover:border-blue-500 transition">
        📱 +91 8970542162
      </div>

    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-500">
        © 2026 N Harshavardhan • Portfolio
      </footer>
    </div>
  );
}