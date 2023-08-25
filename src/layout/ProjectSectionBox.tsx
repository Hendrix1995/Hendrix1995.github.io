import { tw } from 'twind';
import { Project } from '../types';
import './style.css';

export default function ProjectSectionBox({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <div
      id='project-thumbnail'
      className={tw`place-content-end flex flex-col items-start text-white transition cursor-pointer bg-cover grayscale`}
      style={{
        backgroundImage: `url(${project.thumbnail})`,
      }}
      onClick={onClick}
    >
      <div className={tw`p-2 w-full bg-[rgba(0,0,0,0.4)]`}>
        <div className={tw`text-[40px] font-bold`}>{project.name}</div>
        <div>{project.info}</div>
      </div>
    </div>
  );
}
