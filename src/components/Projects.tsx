import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
    {
        title: "Storo – Smart Luggage Storage",
        description: "A MERN stack platform featuring Mapbox for location services and Razorpay for secure payments. Allows users to book luggage storage in partner shops nearby.",
        tech: ["MongoDB", "Express", "React", "Node", "Mapbox", "Razorpay"],
        github: "https://github.com/nitin22234",
        demo: "https://demo.com",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    },
    {
        title: "KrishiConnect",
        description: "An agricultural marketplace with real-time messaging using Socket.IO, AI insights powered by Gemini API, and Stripe payment integration.",
        tech: ["Next.js", "Socket.IO", "Gemini AI", "Stripe", "PostgreSQL"],
        github: "https://github.com/nitin22234",
        demo: "https://demo.com",
        image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&q=80",
    },
    {
        title: "AI Career Coach",
        description: "Personalized career recommendation platform that leverages AI to provide insights based on skills and preferences. Built with Next.js and Prisma.",
        tech: ["Next.js", "Prisma", "Gemini AI", "Tailwind CSS"],
        github: "https://github.com/nitin22234",
        demo: "https://demo.com",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="section-padding bg-zinc-50 dark:bg-zinc-900/50">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold font-display">Featured <span className="text-blue-500">Projects</span></h2>
                        <p className="text-zinc-600 dark:text-zinc-400 max-w-xl text-lg">
                            A selection of my recent work, focusing on full-stack development and AI integration.
                        </p>
                    </div>
                    <a href="https://github.com/nitin22234" target="_blank" rel="noopener noreferrer" className="text-blue-500 font-medium flex items-center gap-2 hover:underline">
                        View all on GitHub <ExternalLink size={16} />
                    </a>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
                        >
                            <div className="relative h-48 w-full bg-zinc-200 dark:bg-zinc-800">
                                <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-blue-500/0 transition-colors z-10" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                            <div className="p-8 space-y-4">
                                <h3 className="text-xl font-bold group-hover:text-blue-500 transition-colors">{project.title}</h3>
                                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t, j) => (
                                        <span key={j} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4 pt-4">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
                                        <Github size={20} />
                                    </a>
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
