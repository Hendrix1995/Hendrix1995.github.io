import { tw } from 'twind';
import { Banner, Header, Footer, SECTION_HEIGHT } from './layout';
import { ReactElement } from 'react';
import { Intro, About, Skills, Projects, Contact } from './section';

const sections: { element: ReactElement<any, any> }[] = [
  {
    element: <Intro />,
  },
  {
    element: <About />,
  },
  {
    element: <Skills />,
  },
  {
    element: <Projects />,
  },
  {
    element: <Contact />,
  },
];

export default function AppInner() {
  return (
    <div id='body' className={tw`fixed h-screen w-full min-w-[514px] overflow-x-hidden`}>
      <Banner />
      <Header />
      {sections.map((section, index) => (
        <div key={index} id={`section_${index}`} className={tw`border-b-1 min-h-[${SECTION_HEIGHT}px]`}>
          {section.element}
        </div>
      ))}
      <Footer />
    </div>
  );
}
