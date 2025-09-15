import React from "react";
import './index.css'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-800 antialiased">
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* HERO */}
        <section className="text-center py-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Hi, I’m <span className="text-blue-600">Abhishek Yadav</span>
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            First-year BTech student & MERN Stack Developer in progress
          </p>
          <p className="mt-2 text-slate-500">
            Building impactful projects with Web, AI, and Automation.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a
              href="#projects"
              className="px-5 py-2 rounded-full bg-blue-600 text-white font-medium shadow hover:shadow-md hover:-translate-y-0.5 transition-transform"
            >
              View My Work
            </a>
            <a
              href="/about"
              className="px-5 py-2 rounded-full border border-slate-200 bg-white font-medium shadow-sm hover:bg-slate-50"
            >
              About Me
            </a>
          </div>
        </section>

        {/* HIGHLIGHTS */}
        <section className="mt-20">
          <h2 className="text-2xl font-bold text-center">What I Do</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <HighlightCard title="MERN Development" desc="Full-stack apps with React & Node.js" />
            <HighlightCard title="AI & Automation" desc="Telegram bots, face swap & AI APIs" />
            <HighlightCard title="Networking & Security" desc="Deep networking & CEH learning" />
            <HighlightCard title="Cloud Projects" desc="Home lab server & cloud experiments" />
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mt-20">
          <h2 className="text-2xl font-bold text-center">Featured Projects</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="Authentication System"
              desc="JWT, cookies, email verification for secure logins."
            />
            <ProjectCard
              title="Telegram Bot"
              desc="Face swap & subscription-based AI automation bot."
            />
            <ProjectCard
              title="Personal Cloud Server"
              desc="NVMe-powered home server for storage & cloud experiments."
            />
          </div>
        </section>

        {/* VISION */}
        <section className="mt-20 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold">My Vision</h2>
          <p className="mt-4 text-slate-600">
            From overcoming personal struggles to building a disciplined mindset, I
            believe in consistency, clarity, and using technology to solve real-world
            problems. My vision is to grow as a developer and create impactful startups.
          </p>
        </section>

        {/* CTA */}
        <section className="mt-20 bg-gradient-to-r from-blue-50 to-slate-50 p-10 rounded-2xl shadow text-center">
          <h2 className="text-xl sm:text-2xl font-bold">Let’s build something meaningful together</h2>
          <a
            href="#contact"
            className="mt-6 inline-block px-6 py-3 rounded-full bg-blue-600 text-white font-medium shadow hover:shadow-lg hover:-translate-y-0.5 transition-transform"
          >
            Get in Touch
          </a>
        </section>

        {/* FOOTER */}
        <footer className="mt-20 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Abhishek Yadav — Built with ❤️ using React & TailwindCSS
          <div className="mt-2 flex justify-center gap-4 text-slate-500">
            <a href="#" className="hover:text-blue-600">GitHub</a>
            <a href="#" className="hover:text-blue-600">LinkedIn</a>
            <a href="#" className="hover:text-blue-600">YouTube</a>
          </div>
        </footer>
      </main>
    </div>
  );
}

/* ---------- Helper components ---------- */
function HighlightCard({ title, desc }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow ring-1 ring-slate-100">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{desc}</p>
    </div>
  );
}

function ProjectCard({ title, desc }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all ring-1 ring-slate-100">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{desc}</p>
      <button className="mt-4 px-4 py-2 text-sm rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 font-medium">
        Learn More
      </button>
    </div>
  );
}
