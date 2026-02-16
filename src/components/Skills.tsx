import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

interface SkillsProps {
  translations: {
    label: string;
    title: string;
    titleHighlight: string;
    languages: string;
    backend: string;
    cloud: string;
    data: string;
    architecture: string;
    practices: string;
    languagesList: string[];
    backendList: string[];
    cloudList: string[];
    dataList: string[];
    architectureList: string[];
    practicesList: string[];
  };
}

const Skills = ({ translations }: SkillsProps) => {
  const skillCategories = [
    {
      title: translations.languages,
      skills: translations.languagesList,
    },
    {
      title: translations.backend,
      skills: translations.backendList,
    },
    {
      title: translations.cloud,
      skills: translations.cloudList,
    },
    {
      title: translations.data,
      skills: translations.dataList,
    },
    {
      title: translations.architecture,
      skills: translations.architectureList,
    },
    {
      title: translations.practices,
      skills: translations.practicesList,
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-3">
            <Code2 className="w-5 h-5 text-caramel" />
            <p className="text-caramel font-sans text-sm tracking-[0.25em] uppercase font-medium">
              {translations.label}
            </p>
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground">
            {translations.title} <span className="italic text-primary">{translations.titleHighlight}</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border shadow-warm"
            >
              <h3 className="font-serif font-semibold text-lg text-foreground mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-sans text-sm px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
