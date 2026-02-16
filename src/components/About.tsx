import { motion } from "framer-motion";
import { User } from "lucide-react";

interface AboutProps {
  translations: {
    label: string;
    title: string;
    titleHighlight: string;
    description1: string;
    description2: string;
    statApis: string;
    statRequests: string;
    statCoffees: string;
  };
}

const About = ({ translations }: AboutProps) => {
  const stats = [
    { label: translations.statApis, value: "50+" },
    { label: translations.statRequests, value: "1000s" },
    { label: translations.statCoffees, value: "∞" },
  ];

  return (
    <section id="about" className="py-24 px-6 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-3">
            <User className="w-5 h-5 text-caramel" />
            <p className="text-caramel font-sans text-sm tracking-[0.25em] uppercase font-medium">
              {translations.label}
            </p>
          </div>

          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground">
            {translations.title} <span className="italic text-primary">{translations.titleHighlight}</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <p className="text-muted-foreground font-sans text-lg leading-relaxed">
              {translations.description1}
            </p>
            <p className="text-muted-foreground font-sans text-lg leading-relaxed">
              {translations.description2}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-5 rounded-xl bg-card border border-border shadow-warm text-center"
              >
                <p className="text-2xl font-serif font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground font-sans mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
