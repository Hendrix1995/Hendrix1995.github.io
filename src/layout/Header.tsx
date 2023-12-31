import { apply, tw } from 'twind';
import { HEADER_HEIGHT } from './index';
import { css } from 'twind/css';

const SECTIONS = ['Intro', 'About', 'Skills', 'Projects', 'Contact'];

const Header = () => {
  const scroll = (index: number) => {
    const body = document.querySelector(`#body`) as HTMLElement;
    const section = (document.querySelector(`#section_${index}`) as HTMLElement).offsetTop;
    return body.scrollTo({ top: section - HEADER_HEIGHT, behavior: 'smooth' });
  };

  return (
    <div
      className={tw`z-50 bg-white sticky top-0 flex justify-between items-center border-y-1 px-3 h-[${HEADER_HEIGHT}px] mo:(flex-col justify-center items-start)`}
    >
      <h1 className={tw`text-28 font-bold`}>HENDRIX PORTFOLIO</h1>
      <ul
        className={tw(
          `flex gap-6`,
          css`
            li {
              ${apply`cursor-pointer`}
            }
          `
        )}
      >
        {SECTIONS.map((el, index) => (
          <li key={index} onClick={() => scroll(index)}>
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
