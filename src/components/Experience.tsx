import { motion } from "framer-motion";
import { Briefcase, Sparkles, Building2 } from "lucide-react";

interface ExperienceProps {
  translations: {
    label: string;
    title: string;
    titleHighlight: string;
    current: string;
    fever: { role: string; company: string; description: string; highlights: string[] };
    seedtag: { role: string; company: string; description: string; highlights: string[] };
    sync: { role: string; company: string; description: string; highlights: string[] };
  };
}

const Experience = ({ translations }: ExperienceProps) => {
  const experiences = [
    {
      role: translations.fever.role,
      company: translations.fever.company,
      description: translations.fever.description,
      highlights: translations.fever.highlights,
      isCurrent: true,
    },
    {
      role: translations.seedtag.role,
      company: translations.seedtag.company,
      description: translations.seedtag.description,
      highlights: translations.seedtag.highlights,
      isCurrent: false,
    },
    {
      role: translations.sync.role,
      company: translations.sync.company,
      description: translations.sync.description,
      highlights: translations.sync.highlights,
      isCurrent: false,
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 lg:px-16 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-3">
            <Briefcase className="w-5 h-5 text-caramel" />
            <p className="text-caramel font-sans text-sm tracking-[0.25em] uppercase font-medium">
              {translations.label}
            </p>
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground">
            {translations.title} <span className="italic text-primary">{translations.titleHighlight}</span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="p-6 rounded-2xl bg-background border border-border shadow-warm hover:shadow-warm-lg transition-all duration-500 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-secondary">
                      <Building2 className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-caramel font-sans text-sm font-medium">
                        {exp.company}
                      </p>
                    </div>
                  </div>
                  {exp.isCurrent && (
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary">
                      <Sparkles className="w-3 h-3" />
                      <span className="font-sans text-xs font-medium">{translations.current}</span>
                    </div>
                  )}
                </div>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {exp.highlights.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-sans px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
