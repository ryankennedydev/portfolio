import "./App.css";
import Teste from "./section/Home";
import Projects from "./section/Projects";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const projects = [
  {
    name: "Wallet UI",
    description: "A modern interface for personal finance management.",
    language: "JavaScript",
    link: "https://github.com/ryankennedydev/wallet-ui",
  },
  {
    name: "AboutDev",
    description:
      "A platform that helps developers discover tools and resources.",
    language: "JavaScript",
    link: "https://github.com/ryankennedydev/aboutdev",
  },
  {
    name: "Library System",
    description:
      "A terminal-based library management system for adding, borrowing, returning, and managing books.",
    language: "Python",
    link: "https://github.com/ryankennedydev/library-system-python",
  },
  {
    name: "Portfolio",
    description:
      "A personal developer portfolio showcasing my projects, skills, and experience.",
    language: "JavaScript",
    link: "https://github.com/ryankennedydev/portfolio",
  },
];
  return (
    <Routes>
      <Route path="/" element={<Teste projects={projects} />} />
      <Route path="/projects" element={<Projects projects={projects} />} />
    </Routes>
  );
};

export default App;
