import { motion } from "framer-motion";
import { Server, Database, Cloud } from "lucide-react";

interface HeroProps {
  translations: {
    role: string;
    name: string;
    description: string;
    ctaExperience: string;
    ctaContact: string;
  };
}

const Hero = ({ translations }: HeroProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-16 py-24">
      <motion.div
        className="max-w-4xl mx-auto text-center space-y-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.div 
          className="flex justify-center gap-4 mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="p-3 rounded-xl bg-card border border-border shadow-warm">
            <Server className="w-6 h-6 text-caramel" />
          </div>
          <div className="p-3 rounded-xl bg-card border border-border shadow-warm">
            <Database className="w-6 h-6 text-primary" />
          </div>
          <div className="p-3 rounded-xl bg-card border border-border shadow-warm">
            <Cloud className="w-6 h-6 text-caramel" />
          </div>
        </motion.div>

        <p className="text-caramel font-sans text-sm tracking-[0.25em] uppercase font-medium">
          {translations.role}
        </p>
        
        <h1 className="text-5xl lg:text-7xl font-serif font-bold text-foreground leading-tight">
          {translations.name}
        </h1>
        
        <p className="text-muted-foreground font-sans text-xl leading-relaxed max-w-2xl mx-auto">
          {translations.description}
        </p>
        
        <div className="flex justify-center gap-4 pt-4">
          <a
            href="#experience"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-sans font-medium shadow-warm hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            {translations.ctaExperience}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 rounded-lg border border-border text-foreground font-sans font-medium hover:bg-card transition-all duration-300"
          >
            {translations.ctaContact}
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
