import { tw } from 'twind';
import { title } from '../layout';
import { MY_INFO } from '../data';
import { Icon } from '../assets/icons';
import { useOpenNewTab } from '../hooks';

export default function Contact() {
  const openNewTab = useOpenNewTab();

  return (
    <div className={tw`p-20 flex flex-col items-center gap-10 text(18)`}>
      <div className={tw(title)}>CONTACT</div>

      <div className={tw`flex flex-col items-center gap-10`}>
        <div
          className={tw`flex items-center gap-1 cursor-pointer text(20)`}
          onClick={() => openNewTab(`mailto:${MY_INFO.email}`)}
        >
          <Icon name='email' />
          <span>{MY_INFO.email}</span>
        </div>

        <div className={tw`flex items-center gap-6`}>
          <Icon name='github' size={100} onClick={() => openNewTab(MY_INFO.githubUrl)} />
          <Icon name='tstory' size={100} onClick={() => openNewTab(MY_INFO.blogUrl)} />
          <div
            onClick={() => openNewTab(MY_INFO.resume)}
            className={tw`bg-[#4A4A4A] rounded-full w-[70px] h-[70px] flex justify-center items-center m-[18px]`}
          >
            <Icon name='notion' size={45} color='white' />
          </div>
        </div>
      </div>
    </div>
  );
}
