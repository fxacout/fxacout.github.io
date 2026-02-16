import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone } from "lucide-react";

interface ContactProps {
  translations: {
    label: string;
    title: string;
    titleHighlight: string;
    description: string;
  };
}

const Contact = ({ translations }: ContactProps) => {
  return (
    <section id="contact" className="py-24 px-6 lg:px-16">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="text-caramel font-sans text-sm tracking-[0.25em] uppercase font-medium">
            {translations.label}
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground">
            {translations.title} <span className="italic text-primary">{translations.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground font-sans text-lg max-w-md mx-auto">
            {translations.description}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <a
              href="mailto:fastcobos@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-sans font-medium shadow-warm hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4" />
              fastcobos@gmail.com
            </a>
            <a
              href="tel:+34644737540"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-sans font-medium hover:bg-card transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              +34 644 737 540
            </a>
          </div>

          <div className="flex justify-center gap-6 pt-6">
            {[
              { icon: Github, label: "GitHub", href: "https://github.com/fxacout" },
              { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/fastcobos/" },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-border text-muted-foreground hover:text-primary hover:border-primary/30 hover:shadow-warm transition-all duration-300"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
