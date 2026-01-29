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
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="group cursor-pointer perspective-1000"
                        >
                            <div
                                className={`w-full aspect-[4/3] rounded-2xl mb-4 overflow-hidden relative ${project.image} transform transition-transform duration-700 ease-out group-hover:scale-[1.02] shadow-2xl`}
                            >
                                {/* Placeholder Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                {/* Image Reveal Effect - Simulation */}
                                <motion.div
                                    initial={{ scale: 1.2, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 1.2, ease: "easeOut" }}
                                    className="absolute inset-0 bg-inherit"
                                />
                            </div>

                            <div className="flex justify-between items-center">
                                <div>
                                    <h3 className="text-xl font-semibold group-hover:text-white transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-secondary text-sm transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-300">{project.category}</p>
                                </div>
                                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center opacity-0 -translate-x-5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out bg-white text-black">
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
