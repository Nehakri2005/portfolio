import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-full bg-white">
      <nav className="w-full px-4 py-3 flex items-center justify-between">
        {/* Left: Portfolio Title */}
        {/* <div className=" text-blue-500 text-xl  hover:underline  ">
          <span>nehakri901@gmail.com</span> 
          <span>+91 9973526980</span>
        </div> */}

         <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 text-gray-700 font-medium text-base sm:text-lg">
          <a  className="font-medium nav-link text-gray-700 hover:text-blue-600 transition-colors">
            nehakri901@gmail.com
          </a>
          <a className="font-medium nav-link text-gray-700 hover:text-blue-600 transition-colors">
            +919973526980
          </a>

          <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/neha-kumari-659025273/"
                  className="bg-blue-100 text-blue-600 transition-colors p-3  hover:text-white hover:bg-slate-900  rounded-full  "
                >
                  <i className="fab fa-linkedin-in text-lg"></i>
                </a>
                <a
                  href="https://github.com/Nehakri2005"
                  className="bg-blue-100 text-blue-600 hover:text-white hover:bg-slate-900   transition-colors p-3 rounded-full"
                >
                  <i className="fab fa-github text-lg"></i>
                </a>
                
              </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <a
            href="#about"
            className="text-blue-500 hover:text-white hover:bg-slate-900 px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </a>
          <a
            href="#skills"
            className="text-blue-500 hover:text-white hover:bg-slate-900 px-3 py-2 rounded-md text-base font-medium"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-blue-500 hover:text-white hover:bg-slate-900 px-3 py-2 rounded-md text-base font-medium"
          >
            Projects
          </a>
          
          <a
            href="#contact"
            className="text-blue-500 hover:text-white hover:bg-slate-900 px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </a>
        </div>

        {/* Toggle Button (Visible on Mobile) */}
        <button
          className="md:hidden text-blue"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu (Dropdown) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-800 px-4 pt-2 pb-4 space-y-2">
          <a
            href="#about"
            className="block text-slate-300 hover:text-white hover:bg-slate-900 px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </a>
         
          <a
            href="#skills"
            className="block text-slate-300 hover:text-white hover:bg-slate-900 px-3 py-2 rounded-md text-base font-medium"
          >
            Skills
          </a>
           <a
            href="#projects"
            className="block text-slate-300 hover:text-white hover:bg-slate-900 px-3 py-2 rounded-md text-base font-medium"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block text-slate-300 hover:text-white hover:bg-slate-900 px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </a>
        </div>
      )}
    </div>
  );
}
