import { tw } from 'twind';
import { css } from 'twind/css';

const Intro = () => {
  const roundSize = window.innerHeight - 300;

  return (
    <div className={tw`w-full flex justify-between items-center px-[10%] py-[10%]`}>
      <div className={tw`flex flex-col max-w-[50%] z-20`}>
        <div className={tw`font-light text-[6.5vmin]`}>
          The only thing that never changes in the world is
          <br />
          <span className={tw`font-bold`}>the truth that change always happens</span>
        </div>
      </div>
      <div
        className={tw(
          `w-[${roundSize}px] h-[${roundSize}px] rounded-full z-10 absolute bottom-[10px] right-[10%]`,
          css`
            background: rgb(92, 85, 137);
            background: linear-gradient(
              45deg,
              rgba(92, 85, 137, 1) 0%,
              rgba(221, 74, 104, 1) 35%,
              rgba(186, 75, 132, 1) 100%
            );
          `
        )}
      />
    </div>
  );
};

export default Intro;
