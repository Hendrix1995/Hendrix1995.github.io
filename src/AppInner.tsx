import { tw } from 'twind';
import { Banner, Header, Footer, SECTION_HEIGHT } from './layout';
import { ReactElement } from 'react';
import { Intro, About, Skills, Projects, Contact } from './section';

const sections: { path: string; element: ReactElement<any, any> }[] = [
  {
    path: '/',
    element: <Intro />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/skills',
    element: <Skills />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
];

export default function AppInner() {
  return (
    <div id='body' className={tw`absolute h-full w-full min-w-[514px] overflow-x-hidden`}>
      <Banner />
      <Header />
      {sections.map((section, index) => (
        <div key={index} id={`section_${index}`} className={tw`border-b-1 h-[${SECTION_HEIGHT}px]`}>
          {section.element}
        </div>
      ))}
      <Footer />
    </div>
  );
}
