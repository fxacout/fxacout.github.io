import { useState, useEffect } from "react";
import { Coffee, Globe, FileText } from "lucide-react";

interface NavbarProps {
  lang: 'en' | 'es';
  translations: {
    about: string;
    experience: string;
    skills: string;
    contact: string;
    portfolio: string;
    cv: string;
  };
}

const Navbar = ({ lang, translations }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const alternateLang = lang === 'en' ? 'es' : 'en';
  const alternatePath = lang === 'en' ? '/es' : '/';
  const cvPath = lang === 'en' ? '/cv' : '/es/cv';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 lg:px-16 ${
        scrolled
          ? "py-3 bg-background/80 backdrop-blur-lg border-b border-border shadow-warm"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href={lang === 'en' ? '/' : '/es'} className="flex items-center gap-2 text-foreground">
          <Coffee className="w-5 h-5 text-caramel" />
          <span className="font-serif font-bold text-lg">{translations.portfolio}</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {[
            { key: 'about', label: translations.about },
            { key: 'experience', label: translations.experience },
            { key: 'skills', label: translations.skills },
            { key: 'contact', label: translations.contact },
          ].map((item) => (
            <a
              key={item.key}
              href={`#${item.key}`}
              className="text-muted-foreground font-sans text-sm tracking-wide hover:text-foreground transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
          
          <a
            href={cvPath}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <FileText className="w-4 h-4" />
            <span className="font-sans text-sm font-medium">{translations.cv}</span>
          </a>
          
          <a
            href={alternatePath}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-card transition-all duration-300"
          >
            <Globe className="w-4 h-4" />
            <span className="font-sans text-sm uppercase">{alternateLang}</span>
          </a>
        </div>

        {/* Mobile buttons */}
        <div className="md:hidden flex items-center gap-2">
          <a
            href={cvPath}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 text-primary"
          >
            <FileText className="w-4 h-4" />
          </a>
          <a
            href={alternatePath}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border text-muted-foreground"
          >
            <Globe className="w-4 h-4" />
            <span className="font-sans text-sm uppercase">{alternateLang}</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
