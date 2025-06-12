import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
    const items = [
      {
        image: "/assets/Frame 28.png",
        title: "Gempa Edukasi",
        desc: "An Interactive Web About natural phenomena, Earthquake",
        tag: "UI-App, Front-End, Website App, React.js",
        year: "2024",
        githubLink: "https://github.com/RaihanAldy/gempa-edukasi",
        details: "A comprehensive educational platform about earthquakes with interactive simulations and learning modules."
      },
      {
        image: "/assets/Saltchic.png",
        title: "Saltchic",
        desc: "Application to order chicken with multi-platform",
        tag: "Website App, Mobile App, Java",
        year: "2022",
        githubLink: "https://github.com/RaihanAldy/SaltChic-MobileDev",
        details: "Multi-platform food ordering system with real-time tracking and payment integration."
      },
      {
        image: "/assets/1.jpg",
        title: "FoodKcal",
        desc: "Machine Learning's model to convert Calorie from Image",
        tag: "Machine Learning, Image Processing, Mask R-CNN, Python",
        year: "2024",
        githubLink: "https://github.com/RaihanAldy/Foodkcal",
        details: "Computer vision application that estimates calorie content from food images using deep learning."
      },
      {
        image: "/assets/Bengkel.png",
        title: "Bengkel Online",
        desc: "An Interactive Web about Vehicle Workshop and ordering Sparepart",
        tag: "UI-App, Front-End, Website App, React.js",
        year: "2025",
        githubLink: "https://github.com/RaihanAldy/Bengkel_online",
        details: "Complete workshop management system with spare parts inventory and appointment scheduling."
      },
      {
        image: "/assets/diklat.png",
        title: "Sewa Gedung Balai Diklat",
        desc: "Government website for rental of education and training center building",
        tag: "Full-stack, Website App, React.js, Express.js, Firebase, MySQL",
        year: "2025",
        githubLink: "https://github.com/SholehHidayat18/web-booking",
        details: "Government portal for facility management with booking system and administrative features."
      },
    ];
  
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
            <a href="#contact" className="hover:underline">CONTACT</a>
          </nav>
        </header>

        <section id="projects" className="min-h-screen bg-white py-16 px-4 md:px-12">
          <h2 className="text-3xl font-sans text-center mb-12">My Projects</h2>
    
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-3xl shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tag.split(", ").map((tag, i) => (
                        <span key={i} className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {item.details && (
                      <p className="text-gray-500 text-sm mb-4">{item.details}</p>
                    )}
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <div className="text-gray-400 font-medium">{item.year}</div>
                    <div className="flex space-x-3">
                      {item.githubLink && (
                        <a 
                          href={item.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-700 hover:text-indigo-600 transition-colors"
                          aria-label="GitHub repository"
                        >
                          <FaGithub size={20} />
                        </a>
                      )}
                      {item.liveDemo && (
                        <a 
                          href={item.liveDemo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-700 hover:text-indigo-600 transition-colors"
                          aria-label="Live demo"
                        >
                          <FaExternalLinkAlt size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} by Raihanaldy. Created with ❤️ & Tailwind CSS.
        </footer>
      </div>
    );
}