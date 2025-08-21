import React from 'react';
import { FaInstagram, FaFacebookF, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function AboutMe() {
    const [isFront, setIsFront] = useState(true);

    const frontImage = '/assets/Pro2.jpg';
    const backImage = '/assets/download.png';

    useEffect(() => {
        const flipOnce = setTimeout(() => setIsFront(false), 1000);
        const interval = setInterval(() => setIsFront((prev) => !prev), 5000);
        return () => {
            clearTimeout(flipOnce);
            clearInterval(interval);
        };
    }, []);

    // Data for certificates
    const certificates = [
        {
            title: "Web Developer",
            issuer: "BNSP Indonesia",
            date: "January 2025",
            proof: "https://drive.google.com/file/d/1gKkEOr_Mx4ycreJOlCSDxLHXJrKK644j/view?usp=drive_link",
        },
        {
            title: "TOEFL courses CFLT",
            issuer: "Universitas Dian Nuswantoro",
            date: "February 2025",
            proof: "https://drive.google.com/file/d/1zbkekM2QhsDzfn5OTPZJ3ajxNQ81Y-7s/view?usp=drive_link",
            image: "/assets/cert2.jpg"
        },
    ];

    // Languages data
    const languages = [
        { name: "Indonesian", level: "Native" },
        { name: "English", level: "Conversational Elementary" }
    ];

    // Skills data
    const skills = [
        { category: "Frontend", items: ["Native", "React", "Next.js", "Tailwind CSS", "HTML/CSS", "JavaScript"] },
        { category: "Mobile", items: ["Java", "Flutter"] },
        { category: "Data Science", items: ["Python", "Pandas", "NumPy", "Scikit-learn"] },
        { category: "Other", items: ["Git", "Figma", "Firebase", "MongoDb", "MySQL", "PHP", "etc."] }
    ];

    // Achievements data
    const achievements = [
        "Speakers at the event Socialization related to the dangers of phishing at SMPN 39 Semarang (community service)",
        "Speakers at the event Training Basic code from game at SMAN 1 Semarang(community service)",
        "Maintained 3.52 GPA throughout university"
    ];

    return (
        <div className="min-h-screen flex flex-col justify-between font-sans bg-white">
            <header className="flex justify-between items-center p-6 text-sm bg-white sticky top-0 z-10 shadow-sm">
                <h1 className="font-bold text-lg">
                    RAIHAN ALDY <span className="text-indigo-600">/ DEVELOPER , DATA SCIENTIST</span>
                </h1>
                <nav className="space-x-6">
                    <Link to="/" className="hover:underline">HOME</Link>
                    <Link to="/about" className="hover:underline">ABOUT ME</Link>
                    <a href="https://drive.google.com/file/d/1HaNEM6mWFkI-EtDZEQBMdEp2b3cVADEh/view?usp=drive_link"
                        className="hover:underline">RESUME</a>
                    <a href="/Projects" className="hover:underline">PROJECTS</a>
                    <a href="/Contact" className="hover:underline">CONTACT</a>
                </nav>
            </header>

            <div className="flex flex-1 overflow-hidden">
                {/* Profile Card - Fixed on the left side */}
                <div className="hidden md:block w-1/3 lg:w-1/4 bg-violet-100 p-6 sticky top-10 h-[calc(67vh-4rem)]">
                    <div className="flex flex-col items-center h-full">
                        <div className="w-48 h-48 rounded-full mb-6 overflow-hidden">
                            <img
                                src={isFront ? frontImage : backImage}
                                alt="Profile"
                                className="w-full h-full object-cover transition duration-500 ease-in-out"
                            />
                        </div>
                        <h2 className="text-xl font-semibold text-center">RAIHANALDY ASH-SHAFA</h2>
                        <p className="mt-2 text-sm text-gray-600 text-center">Front-End / Mobile Developer, Data Scientist</p>
                        <hr className="my-4 border-gray-300 w-1/2 mx-auto" />
                        <p className="text-sm text-gray-500 text-center">Follow On</p>
                        <div className="flex justify-center space-x-4 mt-4 text-lg">
                            <a href="https://github.com/RaihanAldy/" rel="noopener noreferrer" target="_blank" className="hover:text-black"><FaGithub /></a>
                            <a href="https://instagram.com/rhnaldy_" rel="noopener noreferrer" target="_blank" className="hover:text-pink-600"><FaInstagram /></a>
                            <a href="https://wa.me/6289510889127" rel="noopener noreferrer" target="_blank" className="hover:text-green-500"><FaWhatsapp /></a>
                            <a href="https://facebook.com/rhnaldy" rel="noopener noreferrer" target="_blank" className="hover:text-blue-700"><FaFacebookF /></a>
                        </div>
                    </div>
                </div>

                {/* Main Content - Scrollable area */}
                <div className="w-full md:w-2/3 lg:w-3/4 p-6 md:p-12 overflow-y-auto">
                    {/* Mobile Profile Card (shown only on small screens) */}
                    <div className="md:hidden bg-violet-100 rounded-2xl shadow-xl w-full text-center py-10 px-6 mb-8">
                        <div className="w-48 h-48 rounded-full mx-auto mb-6 overflow-hidden">
                            <img
                                src={isFront ? frontImage : backImage}
                                alt="Profile"
                                className="w-full h-full object-cover transition duration-500 ease-in-out"
                            />
                        </div>
                        <h2 className="text-xl font-semibold">RAIHANALDY ASH-SHAFA</h2>
                        <p className="mt-2 text-sm text-gray-600">Front-End / Mobile Developer, Data Scientist</p>
                        <hr className="my-4 border-gray-300 w-1/2 mx-auto" />
                        <p className="text-sm text-gray-500">Follow On</p>
                        <div className="flex justify-center space-x-4 mt-4 text-lg">
                            <a href="https://github.com/RaihanAldy/" rel="noopener noreferrer" target="_blank" className="hover:text-black"><FaGithub /></a>
                            <a href="https://instagram.com/rhnaldy_" rel="noopener noreferrer" target="_blank" className="hover:text-pink-600"><FaInstagram /></a>
                            <a href="https://wa.me/6289510889127" rel="noopener noreferrer" target="_blank" className="hover:text-green-500"><FaWhatsapp /></a>
                            <a href="https://facebook.com/rhnaldy" rel="noopener noreferrer" target="_blank" className="hover:text-blue-700"><FaFacebookF /></a>
                        </div>
                    </div>

                    <h1 className="text-4xl font-bold text-blue-950 mb-4">Hello Everyone</h1>
                    <h2 className="text-lg font-semibold mb-4 text-gray-600">Here's Who I am & What I do.</h2>

                    <div className="flex gap-4 mb-6">
                        <a href="https://drive.google.com/file/d/1HaNEM6mWFkI-EtDZEQBMdEp2b3cVADEh/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer">
                            <button className="bg-blue-950 text-white px-6 py-2 rounded-full shadow hover:bg-blue-800 transition">Resume</button>
                        </a>
                        <a href="/Projects">
                        <button className="border border-blue-950 text-blue-950 px-6 py-2 rounded-full shadow hover:bg-blue-50 transition">Projects</button></a>
                    </div>

                    <p className="text-base text-justify leading-relaxed text-gray-700 mb-8">
                        I am a 22-year-old Computer Engineering Graduate with a strong passion for technology, particularly in front-end development,
                        mobile applications, and data science. I have hands-on experience working with modern frameworks and tools,
                        and I enjoy transforming ideas into interactive, user-friendly digital solutions.
                        Known for being highly adaptable, detail-oriented, and a fast learner, I thrive in collaborative environments and constantly seek opportunities to grow and explore new technologies.
                        I am currently looking for opportunities to apply my skills in real-world projects and contribute meaningfully to a forward-thinking team.
                    </p>

                    {/* Languages Section */}
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold mb-4 text-blue-950 border-b pb-2">Languages</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {languages.map((lang, index) => (
                                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="font-medium">{lang.name}</h3>
                                    <p className="text-sm text-gray-600">{lang.level}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Skills Section */}
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold mb-4 text-blue-950 border-b pb-2">Skills</h2>
                        <div className="space-y-4">
                            {skills.map((skill, index) => (
                                <div key={index}>
                                    <h3 className="font-medium">{skill.category}</h3>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {skill.items.map((item, i) => (
                                            <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certificates Section */}
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold mb-4 text-blue-950 border-b pb-2">Certificates</h2>
                        <div className="space-y-6">
                            {certificates.map((cert, index) => (
                                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                                    <div className="flex flex-col md:flex-row gap-4">
                                        <div className="md:w-3/4">
                                            <h3 className="font-medium">{cert.title}</h3>
                                            <p className="text-sm text-gray-600">{cert.issuer} • {cert.date}</p>
                                            <a href={cert.proof} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm mt-2 inline-block">
                                                View Certificate
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Achievements Section */}
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold mb-4 text-blue-950 border-b pb-2">Achievements</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            {achievements.map((achievement, index) => (
                                <li key={index} className="text-gray-700">{achievement}</li>
                            ))}
                        </ul>
                    </div>

                    <footer className="mt-12 text-xs text-gray-500">
                        © 2025 by Raihanaldy. Created with ❤️ & Tailwind CSS.
                    </footer>
                </div>
            </div>
        </div>
    );
}