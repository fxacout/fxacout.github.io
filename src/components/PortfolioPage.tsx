import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Challenges from './Challenges';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';
import { translations } from '../i18n/translations';

interface PortfolioPageProps {
  lang: 'en' | 'es';
}

const PortfolioPage = ({ lang }: PortfolioPageProps) => {
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-background">
      <Navbar 
        lang={lang}
        translations={{
          about: t['nav.about'],
          experience: t['nav.experience'],
          skills: t['nav.skills'],
          contact: t['nav.contact'],
          portfolio: t['nav.portfolio'],
          cv: t['nav.cv'],
        }}
      />
      <Hero 
        translations={{
          role: t['hero.role'],
          name: t['hero.name'],
          description: t['hero.description'],
          ctaExperience: t['hero.cta.experience'],
          ctaContact: t['hero.cta.contact'],
        }}
      />
      <About 
        translations={{
          label: t['about.label'],
          title: t['about.title'],
          titleHighlight: t['about.titleHighlight'],
          description1: t['about.description1'],
          description2: t['about.description2'],
          statApis: t['about.stat.apis'],
          statRequests: t['about.stat.requests'],
          statCoffees: t['about.stat.coffees'],
        }}
      />
      <Experience 
        translations={{
          label: t['experience.label'],
          title: t['experience.title'],
          titleHighlight: t['experience.titleHighlight'],
          current: t['experience.current'],
          fever: {
            role: t['experience.fever.role'],
            company: t['experience.fever.company'],
            description: t['experience.fever.description'],
            highlights: t['experience.fever.highlights'] as unknown as string[],
          },
          seedtag: {
            role: t['experience.seedtag.role'],
            company: t['experience.seedtag.company'],
            description: t['experience.seedtag.description'],
            highlights: t['experience.seedtag.highlights'] as unknown as string[],
          },
          sync: {
            role: t['experience.sync.role'],
            company: t['experience.sync.company'],
            description: t['experience.sync.description'],
            highlights: t['experience.sync.highlights'] as unknown as string[],
          },
        }}
      />
      <Challenges 
        translations={{
          label: t['challenges.label'],
          title: t['challenges.title'],
          titleHighlight: t['challenges.titleHighlight'],
          problem: t['challenges.problem'],
          solution: t['challenges.solution'],
          impact: t['challenges.impact'],
          challenges: [
            {
              company: t['challenges.seedtag.company'],
              problem: t['challenges.seedtag.problem'],
              solution: t['challenges.seedtag.solution'],
              impact: t['challenges.seedtag.impact'],
            },
            {
              company: t['challenges.seedtag2.company'],
              problem: t['challenges.seedtag2.problem'],
              solution: t['challenges.seedtag2.solution'],
              impact: t['challenges.seedtag2.impact'],
            },
            {
              company: t['challenges.sync.company'],
              problem: t['challenges.sync.problem'],
              solution: t['challenges.sync.solution'],
              impact: t['challenges.sync.impact'],
            },
          ],
        }}
      />
      <Skills 
        translations={{
          label: t['skills.label'],
          title: t['skills.title'],
          titleHighlight: t['skills.titleHighlight'],
          languages: t['skills.languages'],
          backend: t['skills.backend'],
          cloud: t['skills.cloud'],
          data: t['skills.data'],
          architecture: t['skills.architecture'],
          practices: t['skills.practices'],
          languagesList: t['skills.languagesList'] as unknown as string[],
          backendList: t['skills.backendList'] as unknown as string[],
          cloudList: t['skills.cloudList'] as unknown as string[],
          dataList: t['skills.dataList'] as unknown as string[],
          architectureList: t['skills.architectureList'] as unknown as string[],
          practicesList: t['skills.practicesList'] as unknown as string[],
        }}
      />
      <Contact 
        translations={{
          label: t['contact.label'],
          title: t['contact.title'],
          titleHighlight: t['contact.titleHighlight'],
          description: t['contact.description'],
        }}
      />
      <Footer 
        translations={{
          brewed: t['footer.brewed'],
          made: t['footer.made'],
        }}
      />
    </div>
  );
};

export default PortfolioPage;
