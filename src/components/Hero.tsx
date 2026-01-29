import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="flex flex-col items-center text-center space-y-8">
                    {/* Availability Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface border border-white/5 text-sm text-secondary"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        Available for new projects
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-6xl md:text-8xl font-bold tracking-tight text-white max-w-4xl"
                    >
                        Design that <span className="text-secondary">speaks</span> about your brand.
                    </motion.h1>

                    {/* Subheading */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-secondary max-w-2xl"
                    >
                        A premium portfolio template designed for creatives who want to showcase their work with style and sophistication.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center gap-4 pt-4"
                    >
                        <a
                            href="#work"
                            className="px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition-colors w-full sm:w-auto"
                        >
                            View Work
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-surface border border-white/10 text-white rounded-full font-medium hover:bg-white/5 transition-colors w-full sm:w-auto"
                        >
                            Contact Me
                        </a>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                >
                    <ArrowDown className="text-secondary animate-bounce" size={24} />
                </motion.div>
            </div>
        </section>
    );
}
