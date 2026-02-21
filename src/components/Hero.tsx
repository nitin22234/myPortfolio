import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center section-padding pt-32 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -z-10 animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -z-10 animate-pulse delay-700" />

            <div className="max-w-4xl w-full text-center space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-sm font-medium mb-4"
                >
                    Available for new opportunities
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold font-display tracking-tight leading-tight"
                >
                    I&apos;m <span className="gradient-text">Nitin Sharma</span>
                    <br />
                    Full Stack Developer
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed"
                >
                    Building scalable and intelligent web applications. Passionate MERN stack developer
                    with experience in AI integration, payment systems, and robust backend architectures.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-4 pt-4"
                >
                    <a
                        href="#projects"
                        className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium flex items-center gap-2 transition-all hover:scale-105"
                    >
                        View Projects <ArrowRight size={18} />
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3 rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-medium hover:opacity-90 transition-all hover:scale-105"
                    >
                        Contact Me
                    </a>
                    <button
                        className="px-8 py-3 rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 font-medium flex items-center gap-2 transition-all hover:scale-105"
                    >
                        Resume <Download size={18} />
                    </button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex justify-center gap-6 pt-12"
                >
                    {[
                        { Icon: Github, href: "https://github.com/nitin22234" },
                        { Icon: Linkedin, href: "https://www.linkedin.com/in/nitinsharma234/" },
                        { Icon: Mail, href: "mailto:nitinsharma010403@gmail.com" },
                    ].map((social, i) => (
                        <a
                            key={i}
                            href={social.href}
                            className="text-zinc-500 hover:text-blue-500 transition-colors p-2 hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <social.Icon size={24} />
                        </a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
