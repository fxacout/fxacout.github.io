import { Coffee } from "lucide-react";

interface FooterProps {
  translations: {
    brewed: string;
    made: string;
  };
}

const Footer = ({ translations }: FooterProps) => (
  <footer className="py-8 px-6 border-t border-border">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2 text-muted-foreground">
        <Coffee className="w-4 h-4 text-caramel" />
        <span className="font-sans text-sm">{translations.brewed} © {new Date().getFullYear()}</span>
      </div>
      <p className="font-sans text-sm text-muted-foreground">
        {translations.made}
      </p>
    </div>
  </footer>
);

export default Footer;
