import { tw } from 'twind';
import { BANNER_HEIGHT, IconTab } from '.';
import { useOpenNewTab } from '../hooks';

export default function Banner() {
  const openNewTab = useOpenNewTab();

  return (
    <div className={tw`h-[${BANNER_HEIGHT}px] flex justify-end items-center`}>
      <IconTab />
      <div className={tw`p-2 text-txt-1`}>2023.08.15</div>
    </div>
  );
}
