import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="space-y-4 text-center md:text-left">
                        <a href="/" className="text-xl font-bold font-display tracking-tight">
                            Nitin<span className="text-blue-500">Sharma</span>
                        </a>
                        <p className="text-zinc-500 text-sm max-w-xs">
                            MERN Stack Developer & ECE Student at IIIT Una.
                            Building the future of web applications.
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-4">
                        <div className="flex gap-6">
                            {[
                                { Icon: Github, href: "https://github.com/nitin22234" },
                                { Icon: Linkedin, href: "https://www.linkedin.com/in/nitinsharma234/" },
                                { Icon: Mail, href: "mailto:nitinsharma010403@gmail.com" },
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    className="text-zinc-400 hover:text-blue-500 transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <social.Icon size={20} />
                                </a>
                            ))}
                        </div>
                        <p className="text-zinc-500 text-sm italic">
                            &copy; {currentYear} Nitin Sharma. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
