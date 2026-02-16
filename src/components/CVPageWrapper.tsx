import CVPage from './CVPage';
import { translations } from '../i18n/translations';

interface CVPageWrapperProps {
  lang: 'en' | 'es';
}

const CVPageWrapper = ({ lang }: CVPageWrapperProps) => {
  const t = translations[lang];

  return (
    <CVPage 
      translations={{
        downloadPdf: t['cv.downloadPdf'],
        contact: t['cv.contact'],
        experience: t['cv.experience'],
        education: t['cv.education'],
        skills: t['cv.skills'],
        languages: t['cv.languages'],
        aboutMe: t['cv.aboutMe'],
        aboutMeText: t['cv.aboutMeText'],
        degree: t['cv.degree'],
        university: t['cv.university'],
        specialization: t['cv.specialization'],
        spanish: t['cv.spanish'],
        english: t['cv.english'],
        native: t['cv.native'],
        excellent: t['cv.excellent'],
        headerRole: t['cv.headerRole'],
        present: t['cv.present'],
        feverCompany: t['cv.feverCompany'],
        seedtagCompany: t['cv.seedtagCompany'],
        syncCompany: t['cv.syncCompany'],
        skillsList: t['cv.skillsList'] as unknown as string[],
        feverRole: t['cv.feverRole'],
        feverDesc: t['cv.feverDesc'],
        feverBullets: [
          t['cv.feverBullet1'],
          t['cv.feverBullet2'],
          t['cv.feverBullet3'],
          t['cv.feverBullet4'],
        ],
        seedtagRole: t['cv.seedtagRole'],
        seedtagDesc: t['cv.seedtagDesc'],
        seedtagBullets: [
          t['cv.seedtagBullet1'],
          t['cv.seedtagBullet2'],
          t['cv.seedtagBullet3'],
          t['cv.seedtagBullet4'],
          t['cv.seedtagBullet5'],
          t['cv.seedtagBullet6'],
          t['cv.seedtagBullet7'],
        ],
        syncRole: t['cv.syncRole'],
        syncDesc: t['cv.syncDesc'],
        syncBullets: [
          t['cv.syncBullet1'],
          t['cv.syncBullet2'],
          t['cv.syncBullet3'],
          t['cv.syncBullet4'],
          t['cv.syncBullet5'],
        ],
      }}
    />
  );
};

export default CVPageWrapper;
