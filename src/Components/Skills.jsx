export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Skills</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-10 justify-center"></div>

        <div className="flex flex-wrap justify-center lg:w-1/2 lg:h-[75vh] mx-auto">
          {/* Technical Skills */}

          <div>
            <h3 className="text-xl font-semibold mb-6 text-center text-gray-800 justify-center">
              Languages & Framework
            </h3>

            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              <div className="skill-card bg-white p-6 rounded-xl shadow-md text-center frontend">
                <div className="skill-icon text-5xl mb-4 text-blue-500">
                  <i className="fab fa-html5"></i>
                </div>
                <h3 className="font-semibold text-gray-800">HTML5</h3>
              </div>

              <div className="skill-card bg-white p-6 rounded-xl shadow-md text-center frontend">
                <div className="skill-icon text-5xl mb-4 text-blue-600">
                  <i className="fab fa-css3-alt"></i>
                </div>
                <h3 className="font-semibold text-gray-800">CSS3</h3>
              </div>

              <div className="skill-card bg-white p-6 rounded-xl shadow-md text-center frontend">
                <div className="skill-icon text-5xl mb-4 text-yellow-500">
                  <i className="fab fa-js"></i>
                </div>
                <h3 className="font-semibold text-gray-800">JavaScript</h3>
              </div>

              <div className="skill-card bg-white p-6 rounded-xl shadow-md text-center frontend">
                <div className="skill-icon text-5xl mb-4 text-blue-400">
                  <i className="fab fa-react"></i>
                </div>
                <h3 className="font-semibold text-gray-800">React</h3>
              </div>

              <div className="skill-card bg-white p-6 rounded-xl shadow-md text-center frontend">
                <div className="skill-icon text-5xl mb-4 text-blue-700">
                  <i className="fab fa-bootstrap"></i>
                </div>
                <h3 className="font-semibold text-gray-800">Bootstrap</h3>
              </div>

              <div className="skill-card bg-white p-6 rounded-xl shadow-md text-center frontend">
                <div className="skill-icon text-5xl mb-4 text-teal-500">
                  <svg
                    className="w-12 h-12 mx-auto"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                  >
                    <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800">Tailwind CSS</h3>
              </div>

              <div className="skill-card bg-white p-6 rounded-xl shadow-md text-center backend">
                <div className="skill-icon text-5xl mb-4 text-gray-700">
                  {/* Express.js has no official icon, so we use stylized text */}
                  <span className="font-mono text-xl font-bold tracking-wide">
                    express
                  </span>
                </div>
                <h3 className="font-semibold text-gray-800">Express.js</h3>
              </div>

              <div className="skill-card bg-white p-6 rounded-xl shadow-md text-center frontend">
                <div className="skill-icon text-5xl mb-4 text-green-600">
                  <i className="fab fa-node-js"></i>
                </div>
                <h3 className="font-semibold text-gray-800">Node.js</h3>
              </div>

              <div className="skill-card bg-white p-6 rounded-xl shadow-md text-center frontend">
                <div className="skill-icon text-5xl mb-4 text-red-600">
                  <i className="fab fa-java"></i>
                </div>
                <h3 className="font-semibold text-gray-800">Java</h3>
              </div>

              <div className="skill-card bg-white p-6 rounded-xl shadow-md text-center backend">
                <div className="skill-icon text-5xl mb-4 text-blue-800">
                  <i className="fab fa-python"></i>
                </div>
                <h3 className="font-semibold text-gray-800">Python</h3>
              </div>

              <div className="skill-card bg-white p-6 rounded-xl shadow-md text-center database">
                <div className="skill-icon text-5xl mb-4 text-green-600">
                  <svg
                    className="w-12 h-12 mx-auto"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                  >
                    <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800">MongoDB</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
