import { tw } from 'twind';
import { cat } from '../assets';
import { ProjectInfoContainer, title } from '../layout';
import ProjectSectionBox from '../layout/ProjectSectionBox';
import { useMemo, useState } from 'react';
import { MY_PROJECTS } from '../data';

export default function Projects() {
  const [isMoveRight, setIsMoveRight] = useState(false);
  const [selectedProjectName, setSelectedProjectName] = useState<string>(MY_PROJECTS[0].name);

  const clickProject = (projectName: string) => {
    setIsMoveRight(true);
    setSelectedProjectName(projectName);
  };

  const selectedProject = useMemo(
    () => MY_PROJECTS.find((el) => el.name === selectedProjectName),
    [selectedProjectName]
  );

  return (
    <div className={tw`relative h-screen mo:(w-screen)`}>
      <div className={tw`h-full flex flex-col mx-[10%] border-x-1 mo:(mx-0)`}>
        <div className={tw`flex justify-between items-end border-b-1 px-[30px]`}>
          <h2 className={tw(title, `mt-6`)}>PROJECTS</h2>
          <div className={tw`w-1/4`}>
            <img src={cat} alt='run_cat' className={tw`w-[100px]`} loading='lazy' />
          </div>
        </div>
        <div className={tw`h-full grid grid-cols-2`}>
          {MY_PROJECTS.map((el, index) => (
            <ProjectSectionBox key={index} project={el} onClick={() => clickProject(el.name)} />
          ))}
        </div>
      </div>

      <ProjectInfoContainer
        selectedProject={selectedProject}
        isMoveRight={isMoveRight}
        setIsMoveRight={setIsMoveRight}
      />
    </div>
  );
}
