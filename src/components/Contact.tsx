import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import React, { useState } from "react";

export default function Contact() {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus("idle");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "80ef1243-4a26-462e-9a55-0a79ead05a45", // User needs to replace this
                    name: formState.name,
                    email: formState.email,
                    message: formState.message,
                }),
            });

            const result = await response.json();
            if (result.success) {
                setStatus("success");
                setFormState({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="section-padding bg-zinc-50 dark:bg-zinc-900/50">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold font-display">Let&apos;s <span className="text-blue-500">Connect</span></h2>
                        <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-lg">
                            I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                        </p>
                    </div>

                    <div className="space-y-6">
                        {[
                            { Icon: Mail, label: "Email", value: "nitinsharma010403@gmail.com", href: "mailto:nitinsharma010403@gmail.com" },
                            { Icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/nitinsharma234/", href: "https://www.linkedin.com/in/nitinsharma234/" },
                            { Icon: Github, label: "GitHub", value: "github.com/nitin22234", href: "https://github.com/nitin22234" },
                        ].map((contact, i) => (
                            <a
                                key={i}
                                href={contact.href}
                                className="flex items-center gap-4 group transition-all"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm group-hover:border-blue-500/50 transition-all text-zinc-500 group-hover:text-blue-500">
                                    <contact.Icon size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">{contact.label}</p>
                                    <p className="font-medium text-zinc-700 dark:text-zinc-300">{contact.value}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="p-8 md:p-10 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl"
                >
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Full Name</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="John Doe"
                                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    placeholder="john@example.com"
                                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Message</label>
                            <textarea
                                required
                                rows={4}
                                placeholder="Hi, I'd like to talk about..."
                                className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none"
                                value={formState.message}
                                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                            />
                        </div>
                        {status === "success" && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-500 text-sm font-medium text-center"
                            >
                                Message sent successfully! I&apos;ll get back to you soon.
                            </motion.div>
                        )}

                        {status === "error" && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-medium text-center"
                            >
                                Oops! Something went wrong. Please try again.
                            </motion.div>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold flex items-center justify-center gap-3 transition-all disabled:opacity-50 hover:scale-[1.02] active:scale-[0.98]"
                        >
                            {isSubmitting ? "Sending..." : "Send Message"} <Send size={18} />
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
