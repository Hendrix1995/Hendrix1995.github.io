import { tw } from 'twind';
import { ArrowRectangle, title } from '../layout';
import { MY_SKILLS } from '../data';

export default function Skills() {
  return (
    <div className={tw`h-full flex flex-col  justify-center mx-[10%] px-[30px] border-x-1`}>
      <h2 className={tw(title, `mb-6`)}>SKILLS</h2>
      <div className={tw`min-w-[300px] flex justify-start items-center gap-5`}>
        <ArrowRectangle />
        <div className={tw`flex flex-col gap-4 font-medium`}>
          {MY_SKILLS.map((skill, index) => (
            <div key={index} className={tw`flex flex-col gap-1 whitespace-nowrap`}>
              <div key={skill.name} className={tw`text-18`}>
                {skill.name}
              </div>
              <div className={tw`flex justify-start items-center gap-2`}>
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
