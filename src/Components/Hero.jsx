export default function Hero() {
  return (
    <div className="bg-hero-pattern bg-dot min-h-screen flex flex-col justify-center bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Text Section */}
          <div className="space-y-8 text-center md:text-left">
            <div>
              <h2 className="text-2xl sm:text-2xl lg:text-1xl font-semibold mt-2 text-blue-500">
                Hello, I'm
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-2 text-white">
                Neha Kumari
              </h1>
              <p className="text-2xl sm:text-3xl text-slate-300 mt-4">
                Full Stack Developer
              </p>
            </div>

            <p className="text-slate-400 text-lg leading-relaxed">
             MERN Stack Developer and a 2nd-year Computer Science and
                Engineering student at MIT ADT University, Pune.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-medium rounded-lg hover:opacity-90 transition-all"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-slate-800 text-white font-medium rounded-lg hover:bg-slate-700 transition-all border border-slate-700"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right Image Section with Resume Button Below */}
          <div className="relative flex justify-center md:justify-end">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-indigo-500/20 rounded-full blur-3xl opacity-30"></div>

            <div className="relative flex flex-col items-center w-64 h-auto sm:w-80 md:w-[25rem]">
              {/* Profile Image */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-[25rem] md:h-[25rem] bg-slate-800 border border-slate-700 rounded-full shadow-xl animate-float">
                <img
                  src="/neha.jpg"
                  alt="profile"
                  className="w-full h-full object-cover object-top rounded-full"
                />
              </div>

              {/* Resume Button */}
              <div className="mt-4 px-6 py-3 bg-white rounded-lg shadow-lg">
                <div className="flex space-x-2 items-center">
                  <span className="flex h-3 w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <a href="/Resume.pdf" download>
                    <span className="font-medium nav-link text-gray-700 hover:text-blue-600 hover:underline transition-colors">
                      Download Resume
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Down Arrow Button */}
        <div className="mt-16 sm:mt-24 flex justify-center">
          <a
            href="#about"
            className="animate-bounce bg-slate-800 p-3 rounded-full"
          >
            <svg
              className="w-6 h-6 text-sky-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
