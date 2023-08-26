import { tw } from 'twind';
import { css } from 'twind/css';
import { img_hendrix } from '../assets';
import { title } from '../layout';
import { MY_INFO, MY_HISTORY } from '../data';

export default function About() {
  return (
    <div
      className={tw`h-screen flex justify-between items-center px-[10%] mo:(w-screen h-full flex-col justify-center px-[2%] py-[6%])`}
    >
      <div className={tw`flex flex-col items-start`}>
        <h2 className={tw(title, `mb-6 mo:(mb-0)`)}>HENDRIX</h2>
        <div className={tw`flex flex-col gap-8 mo:(gap-4)`}>
          <div className={tw`flex flex-col gap-2`}>
            <div>
              {MY_INFO.name} {MY_INFO.birthday}
            </div>
            <div>{MY_INFO.email}</div>
            <div>{MY_INFO.address}</div>
          </div>
          <div className={tw`flex flex-col gap-4`}>
            {MY_HISTORY.map((el, index) => (
              <div key={index} className={tw`flex justify-start items-center gap-4 mo:(flex-col items-start gap-1)`}>
                <div className={tw`min-w-[160px] text-18 font-medium`}>
                  {el.from} ~ {el.to}
                </div>
                <div>{el.contents}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={tw`h-full border-x-1 flex items-center mo:(border-none mt-6)`}>
        <div
          className={tw(
            `h-[442px] w-[377px] bg-contain bg-no-repeat border-y-1 mo:(border-none)`,
            css`
              background-image: url(${img_hendrix});
            `
          )}
        />
      </div>
    </div>
  );
}
