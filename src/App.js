import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeCard from './components/Hero';
import About from './components/About';
import Projects from "./components/Projects";
import Contact from "./components/contact"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeCard />} />
        <Route path="/about" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}
