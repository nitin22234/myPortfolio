import { motion } from "framer-motion";
import { GraduationCap, Code, Rocket, Cpu } from "lucide-react";

export default function About() {
    const details = [
        {
            icon: GraduationCap,
            title: "Education",
            desc: "B.Tech in ECE at IIIT Una",
            sub: "CGPA: 7.39",
        },
        {
            icon: Code,
            title: "MERN Stack",
            desc: "Full Stack Development",
            sub: "MongoDB, Express, React, Node",
        },
        {
            icon: Cpu,
            title: "Interest",
            desc: "Scalable Systems",
            sub: "REST APIs & Architecture",
        },
        {
            icon: Rocket,
            title: "AI & Modern Web",
            desc: "AI-Powered Apps",
            sub: "Gemini, OpenAI, Payments",
        },
    ];

    return (
        <section id="about" className="section-padding bg-zinc-50 dark:bg-zinc-900/50">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-display">
                        Engineering <span className="text-blue-500">Excellence</span> through Code
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                        I am a final-year Electronics and Communication Engineering student at
                        <strong> IIIT Una</strong> with a profound passion for high-performance
                        web development. My journey resides at the intersection of hardware logic
                        and software scalability.
                    </p>
                    <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                        Over the past few years, I have specialized in the <strong>MERN Stack</strong>,
                        building production-ready applications that integrate complex features like
                        AI-driven workflows, multi-gateway payment systems, and secure authentication models.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 gap-6">
                    {details.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/50 transition-all shadow-sm"
                        >
                            <item.icon className="text-blue-500 mb-4" size={32} />
                            <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                            <p className="text-zinc-900 dark:text-zinc-100 font-medium text-sm">{item.desc}</p>
                            <p className="text-zinc-500 text-xs mt-1">{item.sub}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
