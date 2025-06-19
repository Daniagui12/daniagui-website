import React from "react"

const AnimatedBackground = () => (
  <svg
    className="absolute inset-0 w-full h-full animate-pulse opacity-20 pointer-events-none"
    viewBox="0 0 800 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="200" cy="200" r="120" stroke="#64748b" strokeWidth="2" fill="none" />
    <circle cx="600" cy="200" r="80" stroke="#334155" strokeWidth="2" fill="none" />
    <polyline points="0,350 200,250 400,350 600,250 800,350" stroke="#0ea5e9" strokeWidth="2" fill="none" />
    <g className="animate-pulse">
      <circle cx="400" cy="100" r="8" fill="#f59e42" />
      <circle cx="300" cy="300" r="6" fill="#0ea5e9" />
      <circle cx="500" cy="320" r="5" fill="#a21caf" />
    </g>
  </svg>
)

const DataFlow = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <svg
      className="w-full h-full opacity-30"
      viewBox="0 0 800 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Data Flow Lines */}
      <path
        className="animate-flow-1"
        d="M-100,100 C100,100 200,200 400,200 S700,100 900,100"
        stroke="url(#flow-gradient)"
        strokeWidth="2.5"
        strokeDasharray="10,10"
        fill="none"
      />
      <path
        className="animate-flow-2"
        d="M-100,150 C100,150 300,250 500,250 S700,150 900,150"
        stroke="url(#flow-gradient)"
        strokeWidth="2.5"
        strokeDasharray="8,8"
        fill="none"
      />
      <path
        className="animate-flow-3"
        d="M-100,200 C100,200 200,300 400,300 S700,200 900,200"
        stroke="url(#flow-gradient)"
        strokeWidth="2.5"
        strokeDasharray="12,12"
        fill="none"
      />
      {/* Animated Data Points */}
      <g className="animate-data-point-1">
        <circle cx="200" cy="200" r="5" fill="#38bdf8" />
      </g>
      <g className="animate-data-point-2">
        <circle cx="400" cy="250" r="5" fill="#a21caf" />
      </g>
      <g className="animate-data-point-3">
        <circle cx="600" cy="200" r="5" fill="#f59e42" />
      </g>
      <defs>
        <linearGradient id="flow-gradient" x1="0" y1="0" x2="800" y2="0">
          <stop stopColor="#38bdf8" />
          <stop offset="0.5" stopColor="#6366f1" />
          <stop offset="1" stopColor="#a21caf" />
        </linearGradient>
      </defs>
    </svg>
  </div>
)

const DataWave = () => (
  <svg
    className="w-full h-12 md:h-16 mt-8"
    viewBox="0 0 800 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M0 30 Q 100 0 200 30 T 400 30 T 600 30 T 800 30 V60 H0 Z"
      fill="url(#wave-gradient)"
    />
    <defs>
      <linearGradient id="wave-gradient" x1="0" y1="0" x2="800" y2="0" gradientUnits="userSpaceOnUse">
        <stop stopColor="#334155" />
        <stop offset="0.5" stopColor="#64748b" />
        <stop offset="1" stopColor="#0ea5e9" />
      </linearGradient>
    </defs>
  </svg>
)

const HighlightCard = () => (
  <div className="absolute top-8 right-8 bg-slate-800/80 border border-cyan-400 rounded-xl shadow-lg px-6 py-3 backdrop-blur-md animate-fade-in">
    <span className="text-cyan-300 font-semibold">Now:</span>{" "}
    <span className="text-slate-200">Building data pipelines 🚀</span>
  </div>
)

const ContactForm = () => (
  <div className="w-full max-w-md mx-auto mt-10">
    <form className="flex flex-col gap-4 bg-slate-900/90 border border-slate-700 rounded-xl shadow-lg p-6 mb-3">
      <input
        type="text"
        placeholder="Your Name"
        className="p-2 rounded border border-slate-700 bg-slate-800 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-600"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="p-2 rounded border border-slate-700 bg-slate-800 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-600"
      />
      <textarea
        placeholder="Your Message"
        className="p-2 rounded border border-slate-700 bg-slate-800 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-600 min-h-[100px]"
      />
      <button
        type="submit"
        className="bg-cyan-700 text-white rounded py-2 font-semibold hover:bg-cyan-600 transition-colors"
        disabled
      >
        Send (coming soon)
      </button>
    </form>
    <div className="flex gap-6 justify-center">
      <a
        href="https://www.linkedin.com/in/your-linkedin/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl text-cyan-300 hover:text-white"
      >
        <span role="img" aria-label="LinkedIn">🔗</span>
      </a>
      <a
        href="https://github.com/your-github"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl text-cyan-300 hover:text-white"
      >
        <span role="img" aria-label="GitHub">🐙</span>
      </a>
    </div>
  </div>
)

const HeroSection = ({ showContact = false }: { showContact?: boolean }) => (
  <div className="flex flex-col items-center w-full">
    <section className="relative flex flex-col items-center w-full min-h-[75vh] text-center overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <AnimatedBackground />
      <DataFlow />
      <HighlightCard />
      <div className="flex flex-col items-center w-full z-10 pt-16 pb-8">
        <h1 className="relative text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-sky-400 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-lg animate-gradient-x">
          Hi, I&apos;m Daniagui
        </h1>
        <h2 className="relative text-xl md:text-2xl font-medium text-cyan-300 mb-4 animate-fade-in">
          Data Engineer & Data Enthusiast
        </h2>
        <div className="relative w-32 h-32 mb-6 animate-fade-in delay-100">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-400 via-slate-500 to-slate-600 rounded-full blur-md opacity-50"></div>
          <div className="relative w-full h-full rounded-full border-4 border-slate-600 overflow-hidden">
            <img
              src="/profile.jpg"
              alt="Daniagui"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <p className="relative max-w-xl text-lg text-slate-200 animate-fade-in delay-100">
          I build robust data pipelines, automate workflows, and turn data into insights. Welcome to my portfolio!
        </p>
        <DataWave />
      </div>
    </section>
    {showContact && <ContactForm />}
  </div>
)

export default HeroSection
