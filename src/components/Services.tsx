import { motion } from "framer-motion";
import { Layout, Smartphone, Code, PenTool } from "lucide-react";

const services = [
    {
        icon: <Layout size={24} />,
        title: "Web Design",
        description: "Visually stunning and user-friendly website designs that capture your brand's essence.",
    },
    {
        icon: <Smartphone size={24} />,
        title: "Mobile App Design",
        description: "Intuitive mobile interfaces designed for optimal user experience across all devices.",
    },
    {
        icon: <Code size={24} />,
        title: "Development",
        description: "Clean, efficient code using modern frameworks to bring designs to life.",
    },
    {
        icon: <PenTool size={24} />,
        title: "Branding",
        description: "Comprehensive branding packages including logo design, typography, and color systems.",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-20 bg-surface/30">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Services</h2>
                    <p className="text-secondary max-w-md mx-auto">
                        I offer a range of services to help you build a strong online presence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-2xl bg-surface border border-white/5 hover:border-white/10 transition-colors"
                        >
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white">
                                {service.icon}
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                            <p className="text-sm text-secondary leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
