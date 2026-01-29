import { motion } from "framer-motion";

const skills = [
    "UX Research", "UI Design", "Prototyping",
    "React", "TypeScript", "TailwindCSS",
    "Framer Motion", "Node.js"
];

const experience = [
    {
        year: "2023 - Present",
        role: "Senior Product Designer",
        company: "TechFlow Inc."
    },
    {
        year: "2021 - 2023",
        role: "UI/UX Designer",
        company: "Creative Studio"
    },
    {
        year: "2019 - 2021",
        role: "Frontend Developer",
        company: "StartUp Lab"
    }
];

export default function About() {
    return (
        <section id="about" className="py-20 md:py-32">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
                    {/* Bio Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">About Me</h2>
                        <div className="text-secondary space-y-4 text-lg leading-relaxed">
                            <p>
                                I'm a passionate digital designer and developer with a focus on creating
                                intuitive and visually stunning user experiences. With a background in
                                both design and engineering, I bridge the gap between aesthetics and functionality.
                            </p>
                            <p>
                                My approach is rooted in user-centric design principles, ensuring that
                                every pixel serves a purpose. I love tackling complex problems and turning
                                them into simple, elegant solutions.
                            </p>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-white font-semibold mb-4">Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-surface border border-white/10 rounded-full text-sm text-secondary"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Experience Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold mb-6">Experience</h3>
                        <div className="space-y-6">
                            {experience.map((job, index) => (
                                <div
                                    key={index}
                                    className="group p-6 rounded-2xl border border-white/5 hover:bg-surface hover:border-white/10 transition-colors"
                                >
                                    <span className="text-sm text-secondary block mb-1">{job.year}</span>
                                    <h4 className="text-lg font-semibold text-white group-hover:text-amber-100 transition-colors">{job.role}</h4>
                                    <p className="text-secondary">{job.company}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
