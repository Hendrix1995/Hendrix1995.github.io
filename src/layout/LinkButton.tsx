import { ReactNode } from 'react';
import { tw } from 'twind';
import { useOpenNewTab } from '../hooks';

function LinkButton({ children, path }: { children: ReactNode; path: string }) {
  const openNewTab = useOpenNewTab();

  return (
    <div
      className={tw`flex justify-center items-center gap-1 min-w-[80px] rounded-20 text-white bg-[#555555] px-4 py-1 cursor-pointer mo:(text-13)`}
      onClick={() => openNewTab(path)}
    >
      {children}
    </div>
  );
}

export default LinkButton;
