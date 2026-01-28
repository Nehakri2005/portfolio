export default function About() {
  return (
    <section id="about">
      <main className="container mx-auto px-6 md:px-12 py-12">
        <div className="mb-10  ">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            About <span className="gradient-text">Me</span>
          </h1>

          <div className=" w-full max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10">
            {/* Who I Am */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">Who I Am</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
               <b>MERN Stack Developer</b>  and a 2nd-year <b>Computer Science and
                Engineering student </b>at MIT ADT University, Pune. <br />
                I enjoy
                building responsive, scalable, user-friendly web applications
                that solve real-world problems, <br />
                With hands-on experience in
                <b>MongoDB, Express.js, React.js, and Node.js.</b> Strong foundation in
                <b>JavaScript, HTML, CSS, and REST APIs. </b>
              </p>
              <p className="text-gray-700 leading-relaxed">
                I’ve worked on several
                personal and academic projects that have sharpened my skills in
                both <b>front-end and back-end development.</b> <br />
                 I'm constantly learning
                and experimenting with new tools and technologies to stay ahead
                in the fast-evolving world of web development.
              </p>
            </div>
            {/* Education & Certifications */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Education 
              </h2>
              <div className="grid md:grid-cols-1 gap-6">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-medium mb-2">
                    B.Tech in Computer Science and Engineering
                  </h3>
                  <p className="text-gray-700">
                    MIT ADT University,Pune <br />
                     2023 to 2027
                  </p>
                </div>
                {/* <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-medium mb-2">
                    AWS Certified Solutions Architect
                  </h3>
                  <p className="text-gray-700">Amazon Web Services, 2019</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
