import IntroSection from './IntroSection';
import AboutSection from './AboutSection';
import ProjectSection from './ProjectSection';
import ContactSection from './ContactSection';

const HomeSection: {
  Intro: typeof IntroSection;
  About: typeof AboutSection;
  Project: typeof ProjectSection;
  Contact: typeof ContactSection;
} = {
  Intro: IntroSection,
  About: AboutSection,
  Project: ProjectSection,
  Contact: ContactSection,
};

export default HomeSection;
