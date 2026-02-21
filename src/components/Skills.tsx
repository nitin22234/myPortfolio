import { motion } from "framer-motion";

const skills = [
    {
        category: "Programming",
        items: [
            { name: "C++", level: 85 },
            { name: "JavaScript", level: 90 },
            { name: "HTML/CSS", level: 95 },
            { name: "SQL", level: 80 },
        ],
    },
    {
        category: "Frontend",
        items: [
            { name: "React.js", level: 90 },
            { name: "Next.js", level: 85 },
            { name: "Tailwind CSS", level: 95 },
        ],
    },
    {
        category: "Backend",
        items: [
            { name: "Node.js", level: 85 },
            { name: "Express.js", level: 90 },
            { name: "REST APIs", level: 95 },
            { name: "Prisma ORM", level: 80 },
        ],
    },
    {
        category: "Database & Tools",
        items: [
            { name: "MongoDB", level: 90 },
            { name: "PostgreSQL", level: 80 },
            { name: "Docker", level: 75 },
            { name: "Git/GitHub", level: 90 },
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="section-padding">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold font-display">Technical <span className="text-blue-500">Toolkit</span></h2>
                    <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-lg">
                        A comprehensive overview of my technical expertise across different domains of software engineering.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                    {skills.map((group, i) => (
                        <div key={i} className="space-y-8">
                            <h3 className="text-xl font-bold flex items-center gap-3">
                                <span className="w-8 h-px bg-blue-500"></span>
                                {group.category}
                            </h3>
                            <div className="space-y-6">
                                {group.items.map((skill, j) => (
                                    <div key={j} className="space-y-2">
                                        <div className="flex justify-between items-center text-sm font-medium">
                                            <span>{skill.name}</span>
                                            <span className="text-blue-500">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, ease: "easeOut", delay: j * 0.1 }}
                                                className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
