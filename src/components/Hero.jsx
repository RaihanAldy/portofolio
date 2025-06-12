import { useState, useEffect } from 'react';
import { FaInstagram, FaFacebookF, FaGithub, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Gunakan Link hanya jika kamu pakai BrowserRouter

export default function HomeCard() {
  const [isFront, setIsFront] = useState(true);

  const frontImage = '/assets/Pro3.png';
  const backImage = '/assets/Pro2.jpg';

  useEffect(() => {
    const flipOnce = setTimeout(() => setIsFront(false), 1000);
    const interval = setInterval(() => setIsFront((prev) => !prev), 5000);
    return () => {
      clearTimeout(flipOnce);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between font-sans">
      {/* Header */}
      <header className="flex justify-between items-center p-6 text-sm">
        <h1 className="font-bold text-lg">
          RAIHAN ALDY <span className="text-indigo-600">/ DEVELOPER , DATA SCIENTIST</span>
        </h1>
        <nav className="space-x-6">
          {/* Gunakan <Link> jika ingin SPA route, atau <a href="#about"> jika tidak */}
          <Link to="/about" className="hover:underline">ABOUT ME</Link>
          <a href="https://drive.google.com/file/d/1SbiPH35lcV7eYHVWWSw3nnCEKANTGdIG/view?usp=sharing" 
            className="hover:underline">RESUME</a>
          <a href="/Projects" className="hover:underline">PROJECTS</a>
          <a href="/Contact" className="hover:underline">CONTACT</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-col md:flex-row justify-center items-center px-4 md:px-12 py-8 md:py-16 gap-12">
        {/* Card */}
        <div className="bg-purple-200 rounded-3xl shadow-lg w-[300px] h-[430px] p-6 flex flex-col items-center justify-between">
          <div className="w-40 h-40 rounded-full overflow-hidden">
            <img 
              src={isFront ? frontImage : backImage} 
              alt="Profile" 
              className="w-full h-full object-cover transition duration-500 ease-in-out" 
            />
          </div>
          <div className="text-center mt-4">
            <h2 className="text-md font-bold tracking-wider">RAIHANALDY ASH-SHAFA</h2>
            <div className="my-1 border-b border-black w-16 mx-auto" />
            <p className="mt-2 text-sm text-gray-600">Front-End / Mobile Developer, Data Scientist</p>
          </div>
          <p className="text-sm text-gray-500">Follow On</p>
        <div className="flex justify-center space-x-4 text-lg">
          <a href="https://github.com/RaihanAldy/" rel="noopener noreferrer" target="_blank" className="hover:text-black"><FaGithub/></a>
          <a href="https://linkedin.com/in/raihan-aldy-6b66012a9" rel="noopener noreferrer" target="_blank" className="hover:text-black"><FaLinkedin/></a>
          <a href="https://instagram.com/rhnaldy_" rel="noopener noreferrer" target="_blank" className="hover:text-pink-600"><FaInstagram /></a>
          <a href="https://wa.me/6289510889127" rel="noopener noreferrer" target="_blank" className="hover:text-green-500"><FaWhatsapp /></a>
          <a href="https://facebook.com/rhnaldy" rel="noopener noreferrer" target="_blank" className="hover:text-blue-700"><FaFacebookF /></a>
        </div>
        </div>

        {/* Text */}
        <div className="max-w-lg text-left">
          <h2 className="text-4xl font-sans mb-3">HELLO EVERYONE</h2>
          <p className="text-xl mb-6">Here’s Who I am & What I do.</p>
          <div className="flex space-x-4 mb-6">
            <a href="https://drive.google.com/file/d/1SbiPH35lcV7eYHVWWSw3nnCEKANTGdIG/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer">
            <button className="bg-indigo-800 text-white px-4 py-2 rounded-full font-semibold">RESUME</button>
            </a>
            <a href="/Projects">
            <button className="border border-black px-4 py-2 rounded-full font-semibold">PROJECTS</button>
            </a>
          </div>
          <p className="text-sm text-gray-700 text-justify">
            Final-Year student majoring in computer Engineering at Dian Nuswantoro University.
            Has creative ideas and great interest in technology, especially in the field of informatics technology such as 
            programming and software development. 
            Like to exploring and learning new things, adaptable to the environment and working together with others.       
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-indigo-900 text-white p-4 flex justify-between text-xs">
        <span>© 2025 Copyright All right Reserved.</span>
        <div className="flex space-x-8">
          <span>📞 +(62)8951-0889-127</span>
          <span>📧 rhnaldy4@gmail.com</span>
        </div>
      </footer>
    </div>
  );
}
