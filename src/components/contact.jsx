import { FaGithub, FaInstagram, FaFacebookF, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { Link } from 'react-router-dom';



export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    'service_plnz3da', 
    'template_l9i5jcp', // Ganti dengan Template ID dari EmailJS
    form.current,
    '93eFSjair_f88e-wa' // Ganti dengan Public Key dari EmailJS
  )
  .then((result) => {
      alert('Message sent successfully!');
      form.current.reset();
  }, (error) => {
      alert('Failed to send message. Please try again later.');
  });
};
  return (
    <div className="min-h-screen flex flex-col justify-between font-sans">
      <header className="flex justify-between items-center p-6 text-sm">
        <h1 className="font-bold text-lg">
          RAIHAN ALDY <span className="text-indigo-600">/ DEVELOPER , DATA SCIENTIST</span>
        </h1>
        <nav className="space-x-6">
          <Link to="/" className="hover:underline">HOME</Link>
          <Link to="/about" className="hover:underline">ABOUT ME</Link>
          <a href="https://drive.google.com/file/d/1SbiPH35lcV7eYHVWWSw3nnCEKANTGdIG/view?usp=sharing" 
            className="hover:underline">RESUME</a>
          <Link to="/projects" className="hover:underline">PROJECTS</Link>
          <Link to="/Contact" className="hover:underline">CONTACT</Link>
        </nav>
      </header>

      <section className="py-12 px-4 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-indigo-600">Contact Information</h3>
                <p className="text-gray-600">Feel free to reach out to me for collaborations or just a friendly hello!</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="mt-1 text-indigo-600">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Location</h4>
                    <p className="text-gray-600">Semarang, Central Java, Indonesia</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="mt-1 text-indigo-600">
                    <FaEnvelope size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Email</h4>
                    <a href="mailto:raihanaldy03@gmail.com" className="text-gray-600 hover:text-indigo-600 transition">
                      rhnaldy4@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="mt-1 text-indigo-600">
                    <FaPhone size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Phone</h4>
                    <a href="tel:+6289510889127" className="text-gray-600 hover:text-indigo-600 transition">
                      +62 895-1088-9127
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-800 mb-3">Follow Me</h4>
                <div className="flex space-x-4">
                  <a href="https://github.com/RaihanAldy/" target="_blank" rel="noopener noreferrer" 
                    className="bg-gray-100 p-3 rounded-full text-gray-700 hover:bg-indigo-100 hover:text-indigo-600 transition">
                    <FaGithub size={20} />
                  </a>
                  <a href="https://instagram.com/rhnaldy_" target="_blank" rel="noopener noreferrer" 
                    className="bg-gray-100 p-3 rounded-full text-gray-700 hover:bg-pink-100 hover:text-pink-600 transition">
                    <FaInstagram size={20} />
                  </a>
                  <a href="https://wa.me/6289510889127" target="_blank" rel="noopener noreferrer" 
                    className="bg-gray-100 p-3 rounded-full text-gray-700 hover:bg-green-100 hover:text-green-600 transition">
                    <FaWhatsapp size={20} />
                  </a>
                  <a href="https://facebook.com/rhnaldy" target="_blank" rel="noopener noreferrer" 
                    className="bg-gray-100 p-3 rounded-full text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition">
                    <FaFacebookF size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-6 text-indigo-600">Send Me a Message</h3>
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} by Raihanaldy. Created with ❤️ & Tailwind CSS.
      </footer>
    </div>
  );
}