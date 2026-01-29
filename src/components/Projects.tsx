import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "E-Commerce Rebrand",
        category: "Branding & UI/UX",
        image: "bg-zinc-800", // Placeholder class
    },
    {
        id: 2,
        title: "Fintech Dashboard",
        category: "Product Design",
        image: "bg-zinc-700",
    },
    {
        id: 3,
        title: "Travel App",
        category: "Mobile Design",
        image: "bg-zinc-800",
    },
    {
        id: 4,
        title: "Architecture Portfolio",
        category: "Web Design",
        image: "bg-zinc-700",
    },
];

export default function Projects() {
    return (
        <section id="work" className="py-20 md:py-32">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Selected Work</h2>
                        <p className="text-secondary max-w-md">
                            A collection of projects showcasing my expertise in digital design and development.
                        </p>
                    </div>
                    <a
                        href="#"
                        className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-white transition-colors"
                    >
                        All Projects <ArrowUpRight size={16} />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group cursor-pointer"
                        >
                            <div
                                className={`w-full aspect-[4/3] rounded-2xl mb-4 overflow-hidden relative ${project.image}`}
                            >
                                {/* Placeholder Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-50 group-hover:scale-105 transition-transform duration-500 ease-out" />
                            </div>

                            <div className="flex justify-between items-center">
                                <div>
                                    <h3 className="text-xl font-semibold group-hover:text-white transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-secondary text-sm">{project.category}</p>
                                </div>
                                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                    <ArrowUpRight size={18} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <a href="#" className="inline-flex items-center gap-2 text-sm font-medium hover:text-white transition-colors">
                        All Projects <ArrowUpRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
}
