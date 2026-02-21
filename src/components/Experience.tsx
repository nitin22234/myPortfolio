import { motion } from "framer-motion";
import { Briefcase, Award, Users } from "lucide-react";

const experiences = [
    {
        company: "Transcend Infosystems Pvt. Ltd.",
        role: "Web Developer Intern",
        period: "Presents",
        desc: "Building scalable frontend and backend features using MERN stack. Developed secure REST APIs and robust authentication systems.",
        icon: Briefcase,
    },
    {
        company: "DRDO",
        role: "Research Intern",
        period: "Previous",
        desc: "Designed MEMS microheater using COMSOL, improving system efficiency by 30%. Focused on thermal analysis and optimization.",
        icon: Award,
    },
    // {
    //     company: "CDAC",
    //     role: "Cybersecurity Intern",
    //     period: "Previous",
    //     desc: "Explored network security protocols and threat mitigation strategies in high-security environments.",
    //     icon: Briefcase,
    // },
];

const leadership = [
    {
        org: "ECOVA, IIIT Una",
        role: "Volunteering Head",
    },
    {
        org: "ZENITH, IIIT Una",
        role: "Executive Member",
    },
];

export default function Experience() {
    return (
        <section id="experience" className="section-padding">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-16">
                <div className="lg:col-span-2 space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold font-display">Work <span className="text-blue-500">Experience</span></h2>
                        <p className="text-zinc-600 dark:text-zinc-400 text-lg">My professional journey in the tech industry.</p>
                    </div>

                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-200 dark:before:via-zinc-800 before:to-transparent">
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                            >
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-500 group-[.is-active]:text-blue-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                    <exp.icon size={18} />
                                </div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm transition-all hover:border-blue-500/30">
                                    <div className="flex items-center justify-between mb-2">
                                        <h4 className="font-bold text-zinc-900 dark:text-zinc-100">{exp.company}</h4>
                                        <span className="text-xs font-medium text-blue-500 bg-blue-500/10 px-2 py-0.5 rounded-full">{exp.period}</span>
                                    </div>
                                    <div className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-2">{exp.role}</div>
                                    <p className="text-sm text-zinc-500 leading-relaxed">{exp.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold font-display">Leadership</h2>
                        <p className="text-zinc-600 dark:text-zinc-400 text-lg">Beyond engineering.</p>
                    </div>

                    <div className="space-y-4">
                        {leadership.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 flex items-start gap-4 transition-all hover:bg-zinc-100 dark:hover:bg-zinc-800/80"
                            >
                                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500">
                                    <Users size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold">{item.org}</h4>
                                    <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-1">{item.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
