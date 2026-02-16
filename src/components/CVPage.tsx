import { useRef } from "react";
import { Download, Mail, Phone, Linkedin, Github, MapPin, GraduationCap, Briefcase, Code2, Languages } from "lucide-react";

interface CVPageProps {
  translations: {
    downloadPdf: string;
    contact: string;
    experience: string;
    education: string;
    skills: string;
    languages: string;
    aboutMe: string;
    aboutMeText: string;
    degree: string;
    university: string;
    specialization: string;
    spanish: string;
    english: string;
    native: string;
    excellent: string;
    headerRole: string;
    present: string;
    feverCompany: string;
    seedtagCompany: string;
    syncCompany: string;
    skillsList: string[];
    feverRole: string;
    feverDesc: string;
    feverBullets: string[];
    seedtagRole: string;
    seedtagDesc: string;
    seedtagBullets: string[];
    syncRole: string;
    syncDesc: string;
    syncBullets: string[];
  };
}

const CVPage = ({ translations }: CVPageProps) => {
  const cvRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = async () => {
    if (!cvRef.current) return;
    
    const html2pdf = (await import("html2pdf.js")).default;
    
    const opt = {
      margin: 0,
      filename: "Fernando_Astorga_Cobos_CV.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };
    
    html2pdf().set(opt).from(cvRef.current).save();
  };

  const skills = translations.skillsList;

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      {/* Download Button */}
      <div className="mx-auto mb-6 flex justify-end print:hidden" style={{ width: '210mm', maxWidth: '100%' }}>
        <button
          onClick={handleDownloadPDF}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-sans font-medium shadow-warm hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-0.5"
        >
          <Download className="w-4 h-4" />
          {translations.downloadPdf}
        </button>
      </div>

      {/* CV Content - A4 size: 210mm x 297mm */}
      <div
        ref={cvRef}
        className="mx-auto bg-background shadow-warm-lg overflow-hidden border border-border"
        style={{ width: '210mm', height: '297mm', maxWidth: '100%' }}
      >
        {/* Header */}
        <div className="bg-primary text-primary-foreground" style={{ padding: '28px 36px' }}>
          <div className="flex gap-6 items-center">
            {/* Avatar */}
            <div 
              className="rounded-full bg-secondary/20 flex items-center justify-center font-serif font-bold shrink-0"
              style={{ width: '90px', height: '90px', fontSize: '32px' }}
            >
              FA
            </div>
            
            <div className="flex-1">
              <h1 style={{ fontSize: '32px', lineHeight: '1.2', marginBottom: '6px' }} className="font-serif font-bold">
                Fernando Astorga Cobos
              </h1>
              <p style={{ fontSize: '18px', marginBottom: '14px' }} className="font-sans opacity-90">
                {translations.headerRole}
              </p>
              
              {/* Contact Info */}
              <div className="flex flex-wrap gap-x-6 gap-y-2" style={{ fontSize: '14px' }}>
                <a href="mailto:fastcobos@gmail.com" className="flex items-center gap-2 opacity-90 hover:opacity-100 font-sans">
                  <Mail style={{ width: '15px', height: '15px' }} />
                  fastcobos@gmail.com
                </a>
                <a href="tel:+34644737540" className="flex items-center gap-2 opacity-90 hover:opacity-100 font-sans">
                  <Phone style={{ width: '15px', height: '15px' }} />
                  +34 644 737 540
                </a>
                <a href="https://linkedin.com/in/fastcobos" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 opacity-90 hover:opacity-100 font-sans">
                  <Linkedin style={{ width: '15px', height: '15px' }} />
                  linkedin.com/in/fastcobos
                </a>
                <a href="https://github.com/fxacout" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 opacity-90 hover:opacity-100 font-sans">
                  <Github style={{ width: '15px', height: '15px' }} />
                  github.com/fxacout
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Body - fills remaining height */}
        <div className="flex" style={{ height: 'calc(297mm - 160px)' }}>
          {/* Sidebar */}
          <div className="bg-card h-full" style={{ width: '35%', padding: '24px 28px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* About Me */}
              <section>
                <h2 className="font-serif font-semibold text-foreground flex items-center gap-2" style={{ fontSize: '16px', marginBottom: '10px' }}>
                  <span className="p-1.5 rounded bg-primary/10 inline-flex">
                    <MapPin style={{ width: '15px', height: '15px' }} className="text-primary" />
                  </span>
                  {translations.aboutMe}
                </h2>
                <p className="text-muted-foreground font-sans" style={{ fontSize: '13px', lineHeight: '1.6' }}>
                  {translations.aboutMeText}
                </p>
              </section>

              {/* Skills */}
              <section>
                <h2 className="font-serif font-semibold text-foreground flex items-center gap-2" style={{ fontSize: '16px', marginBottom: '10px' }}>
                  <span className="p-1.5 rounded bg-primary/10 inline-flex">
                    <Code2 style={{ width: '15px', height: '15px' }} className="text-primary" />
                  </span>
                  {translations.skills}
                </h2>
                <div className="flex flex-wrap" style={{ gap: '6px' }}>
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-sans rounded bg-secondary text-secondary-foreground"
                      style={{ fontSize: '11px', padding: '3px 8px' }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              {/* Education */}
              <section>
                <h2 className="font-serif font-semibold text-foreground flex items-center gap-2" style={{ fontSize: '16px', marginBottom: '10px' }}>
                  <span className="p-1.5 rounded bg-primary/10 inline-flex">
                    <GraduationCap style={{ width: '15px', height: '15px' }} className="text-primary" />
                  </span>
                  {translations.education}
                </h2>
                <div>
                  <h3 className="font-sans font-medium text-foreground" style={{ fontSize: '14px' }}>
                    {translations.degree}
                  </h3>
                  <p className="text-caramel font-sans" style={{ fontSize: '13px', marginTop: '4px' }}>
                    {translations.university}
                  </p>
                  <p className="text-muted-foreground font-sans" style={{ fontSize: '12px', marginTop: '4px' }}>
                    {translations.specialization}
                  </p>
                </div>
              </section>

              {/* Languages */}
              <section>
                <h2 className="font-serif font-semibold text-foreground flex items-center gap-2" style={{ fontSize: '16px', marginBottom: '10px' }}>
                  <span className="p-1.5 rounded bg-primary/10 inline-flex">
                    <Languages style={{ width: '15px', height: '15px' }} className="text-primary" />
                  </span>
                  {translations.languages}
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div>
                    <div className="flex justify-between items-center" style={{ marginBottom: '6px' }}>
                      <span className="font-sans text-foreground" style={{ fontSize: '14px' }}>{translations.spanish}</span>
                      <span className="font-sans text-muted-foreground" style={{ fontSize: '12px' }}>{translations.native}</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full overflow-hidden" style={{ height: '8px' }}>
                      <div className="w-full h-full bg-primary rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center" style={{ marginBottom: '6px' }}>
                      <span className="font-sans text-foreground" style={{ fontSize: '14px' }}>{translations.english}</span>
                      <span className="font-sans text-muted-foreground" style={{ fontSize: '12px' }}>{translations.excellent}</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full overflow-hidden" style={{ height: '8px' }}>
                      <div className="h-full bg-primary rounded-full" style={{ width: '95%' }} />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Main Content */}
          <div style={{ width: '65%', padding: '24px 28px' }}>
            {/* Experience */}
            <section>
              <h2 className="font-serif font-semibold text-foreground flex items-center gap-2" style={{ fontSize: '18px', marginBottom: '20px' }}>
                <span className="p-1.5 rounded bg-primary/10 inline-flex">
                  <Briefcase style={{ width: '17px', height: '17px' }} className="text-primary" />
                </span>
                {translations.experience}
              </h2>

              {/* Timeline container with continuous line */}
              <div className="relative" style={{ paddingLeft: '20px' }}>
                {/* Continuous timeline line */}
                <div 
                  className="absolute bg-primary/30"
                  style={{ width: '2px', left: '0', top: '0', bottom: '0' }}
                />

                {/* Fever */}
                <div className="relative" style={{ paddingBottom: '24px' }}>
                  <div 
                    className="absolute rounded-full bg-primary"
                    style={{ width: '12px', height: '12px', left: '-25px', top: '4px' }}
                  />
                  <div style={{ marginBottom: '8px' }}>
                    <h3 className="font-serif font-semibold text-foreground" style={{ fontSize: '15px' }}>
                      {translations.feverRole}
                      <span className="text-caramel font-sans font-medium" style={{ marginLeft: '10px', fontSize: '14px' }}>
                        @ {translations.feverCompany}
                      </span>
                      <span className="text-muted-foreground font-sans font-normal" style={{ marginLeft: '10px', fontSize: '12px' }}>
                        ({translations.present})
                      </span>
                    </h3>
                  </div>
                  <ul className="list-none" style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {translations.feverBullets.map((bullet, idx) => (
                      <li 
                        key={idx} 
                        className="text-muted-foreground font-sans relative"
                        style={{ fontSize: '12px', lineHeight: '1.5', paddingLeft: '14px' }}
                      >
                        <span className="absolute text-primary" style={{ left: '0' }}>•</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Seedtag */}
                <div className="relative" style={{ paddingBottom: '24px' }}>
                  <div 
                    className="absolute rounded-full bg-caramel"
                    style={{ width: '12px', height: '12px', left: '-25px', top: '4px' }}
                  />
                  <div style={{ marginBottom: '8px' }}>
                    <h3 className="font-serif font-semibold text-foreground" style={{ fontSize: '15px' }}>
                      {translations.seedtagRole}
                      <span className="text-caramel font-sans font-medium" style={{ marginLeft: '10px', fontSize: '14px' }}>
                        @ {translations.seedtagCompany}
                      </span>
                    </h3>
                  </div>
                  <ul className="list-none" style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {translations.seedtagBullets.map((bullet, idx) => (
                      <li 
                        key={idx} 
                        className="text-muted-foreground font-sans relative"
                        style={{ fontSize: '12px', lineHeight: '1.5', paddingLeft: '14px' }}
                      >
                        <span className="absolute text-primary" style={{ left: '0' }}>•</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* sync. */}
                <div className="relative">
                  <div 
                    className="absolute rounded-full bg-caramel"
                    style={{ width: '12px', height: '12px', left: '-25px', top: '4px' }}
                  />
                  <div style={{ marginBottom: '8px' }}>
                    <h3 className="font-serif font-semibold text-foreground" style={{ fontSize: '15px' }}>
                      {translations.syncRole}
                      <span className="text-caramel font-sans font-medium" style={{ marginLeft: '10px', fontSize: '14px' }}>
                        @ {translations.syncCompany}
                      </span>
                    </h3>
                  </div>
                  <ul className="list-none" style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {translations.syncBullets.map((bullet, idx) => (
                      <li 
                        key={idx} 
                        className="text-muted-foreground font-sans relative"
                        style={{ fontSize: '12px', lineHeight: '1.5', paddingLeft: '14px' }}
                      >
                        <span className="absolute text-primary" style={{ left: '0' }}>•</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVPage;
