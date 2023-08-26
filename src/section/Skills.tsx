import { tw } from 'twind';
import { ArrowRectangle, title } from '../layout';
import { MY_SKILLS } from '../data';
import { useResponsive } from '../hooks';

export default function Skills() {
  const { isDesktop } = useResponsive();

  return (
    <div
      className={tw`h-screen flex flex-col justify-center mx-[10%] px-[30px] border-x-1 mo:(mx-0 px-[2%] border-none)`}
    >
      <h2 className={tw(title, `mb-6`)}>SKILLS</h2>
      <div className={tw`min-w-[300px] flex justify-start items-center gap-5`}>
        {isDesktop && <ArrowRectangle />}
        <div className={tw`flex flex-col gap-4 font-medium`}>
          {MY_SKILLS.map((skill, index) => (
            <div key={index} className={tw`flex flex-col gap-1 whitespace-nowrap)`}>
              <div key={skill.name} className={tw`text-18`}>
                {skill.name}
              </div>
              <div className={tw`flex justify-start items-center gap-2 mo:(flex-wrap)`}>
                {skill.contents.map((el, index) => (
                  <div key={el} className={tw`${index === 0 && `text-white bg-primary rounded-10 px-2`}`}>
                    #{el}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
