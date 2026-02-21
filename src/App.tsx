import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect } from "react";

function App() {
    // Simple dark mode implementation for React without next-themes for now
    // Or I could install next-themes, it works with React too.
    // Let's just use a simple state for now.

    useEffect(() => {
        // Default to dark mode
        document.documentElement.classList.add('dark');
    }, []);

    return (
        <main className="relative min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300 overflow-x-hidden">
            <Header />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
            <Footer />
        </main>
    );
}

export default App;
