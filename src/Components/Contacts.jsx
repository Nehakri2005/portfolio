import emailjs from '@emailjs/browser';

export default function Contacts() {
  //   const [particlesVisible, setParticlesVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = document.getElementById("name")?.value;
    const email = document.getElementById("email")?.value;
    const subject = document.getElementById("subject")?.value;
    const message = document.getElementById("message")?.value;

    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields");
      return;
    }

    const templateParams = {
    from_name: name,
    from_email: email,
    subject: subject,
    message: message,
  };

  emailjs
    .send(
      "service_lb0fz09", // e.g., service_123abc
      "template_6yfy1sk", // e.g., template_xyz456
      templateParams,
      "VzB6ps_GlGEekWgpw"   // e.g., a1b2C3D4E5F6g7H8
    )
    .then((response) => {
      alert("Thank you for your message! I will get back to you soon.");
      document.getElementById("contact-form")?.reset();
    })
    .catch((error) => {
      console.error("EmailJS error:", error);
      alert("Failed to send message. Please try again later.");
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container  px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Get In Touch</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-10"></div>

        <div className="flex flex-col md:flex-row justify-center gap-4 px-4 lg:px-20 ">
          <div className="   md:w-1/2 px-4  ">
            <h3 className="text-xl font-bold mb-6 text-gray-800  ">
              Contact Information
            </h3>

            <div className="space-y-6 px-2 sm:px-4 ">
              <div className="flex items-start gap-3 sm:gap-3">
                <div className="bg-blue-100 rounded-full  p-3 sm:p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Email</h4>
                  <p className="text-gray-600">
                    nehakri901@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-3 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Phone</h4>
                  <p className="text-gray-600">+91 9973526980</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-3 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Location</h4>
                  <p className="text-gray-600">Pune,Maharashtra</p>
                </div>
              </div>
            </div>

            <div className="mt-10 ">
              <h3 className="text-xl font-bold mb-6 text-gray-800">
                Follow Me
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/neha-kumari-659025273/"
                  className="bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors p-3 rounded-full"
                >
                  <i className="fab fa-linkedin-in text-lg"></i>
                </a>
                <a
                  href="https://github.com/Nehakri2005"
                  className="bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors p-3 rounded-full"
                >
                  <i className="fab fa-github text-lg"></i>
                </a>
                
              </div>
            </div>
          </div>

          <div className="md:w-1/2 ">
            <h3 className="text-xl font-bold mb-6 text-gray-800 ">
              Send Me a Message
            </h3>

            <form id="contact-form" className="space-y-4 mr-10" onSubmit={handleSubmit} >
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Subject"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your message"
                ></textarea>
              </div>

              <div className="text-center md:text-left">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                 
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
