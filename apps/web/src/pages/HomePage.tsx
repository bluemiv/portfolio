import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { scrollIntoComponent } from '../service/utilService';
import FloatingButton from '../features/FloatingButton';
import HomeSection from '../features/HomeSection';

let sectionIdx = 0;
let moveLoading = false;

const HomePage = () => {
  const outerRef = useRef<null | HTMLDivElement>(null);
  const introRef = useRef<null | HTMLDivElement>(null);
  const aboutRef = useRef<null | HTMLDivElement>(null);
  const projectRef = useRef<null | HTMLDivElement>(null);
  const contactRef = useRef<null | HTMLDivElement>(null);

  const sections = useMemo(() => [introRef, aboutRef, projectRef, contactRef], []);

  const scrollIntoSection = useCallback(
    (idx: number) => {
      if (idx < 0 || idx > sections.length - 1) return;
      moveLoading = true;
      sectionIdx = idx;
      scrollIntoComponent(sections[sectionIdx]);
      setTimeout(() => (moveLoading = false), 1200);
    },
    [sections]
  );

  const scrollEventHandler = useCallback(
    (event: WheelEvent) => {
      event.preventDefault();
      if ((event.deltaY < 15 && event.deltaY > -15) || moveLoading) return;

      const nextSectionIdx = event.deltaY > 0 ? sectionIdx + 1 : sectionIdx - 1;
      scrollIntoSection(nextSectionIdx);
    },
    [scrollIntoSection]
  );

  useEffect(() => {
    window.addEventListener('wheel', scrollEventHandler, { passive: false });
    return () => window.removeEventListener('wheel', scrollEventHandler);
  }, [scrollEventHandler]);

  useEffect(() => scrollIntoComponent(sections[0]), [sections]);

  return (
    <>
      <div ref={outerRef}>
        <HomeSection.Intro ref={introRef} />
        <HomeSection.About ref={aboutRef} />
        <HomeSection.Project ref={projectRef} />
        <HomeSection.Contact ref={contactRef} />
      </div>
      <FloatingButton.Theme />
      <FloatingButton.ScrollUp onClick={() => scrollIntoSection(sectionIdx - 1)} />
      <FloatingButton.ScrollDown onClick={() => scrollIntoSection(sectionIdx + 1)} />
    </>
  );
};

export default HomePage;
