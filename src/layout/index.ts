import { apply } from 'twind';

export { default as Header } from './Header';
export { default as Banner } from './Banner';
export { default as Footer } from './Footer';

export { default as ArrowRectangle } from './ArrowRectangle';
export { default as IconTab } from './IconTab';
export { default as ProjectInfoContainer } from './ProjectInfoContainer';
export { default as LinkButton } from './LinkButton';

export const HEADER_HEIGHT = 100 as const;
export const MOBILE_HEADER_HEIGHT = 40 as const;
export const BANNER_HEIGHT = 54 as const;
export const FOOTER_HEIGHT = 176 as const;
export const INNER_HEIGHT = window.innerHeight;
export const SECTION_HEIGHT = INNER_HEIGHT - HEADER_HEIGHT;

export const title = apply`text-[60px] font-bold mo:(text-[40px])`;
export const centerWrapper = apply`w-full flex flex-col mo:(px-5 py-5 ml-0 min-h-0)`;
export const chip = apply`min-w-[5px] min-h-[5px] bg-primary rounded-full`;
