import { tw } from 'twind';
import { Icon } from '../assets/icons';
import { useOpenNewTab } from '../hooks';
import { MY_INFO } from '../data';

export default function IconTab({ navTw, iconColor }: { navTw?: string; iconColor?: string }) {
  const openNewTab = useOpenNewTab();

  return (
    <nav className={tw`h-full px-2 flex items-center gap-2 border-x-1 ${navTw}`}>
      <li onClick={() => openNewTab(`mailto:${MY_INFO.email}`)}>
        <Icon name='email' color={iconColor} />
      </li>
      <li onClick={() => openNewTab(MY_INFO.githubUrl)}>
        <Icon name='github' color={iconColor} />
      </li>
      <li onClick={() => openNewTab(MY_INFO.blogUrl)}>
        <Icon name='tstory' color={iconColor} />
      </li>
    </nav>
  );
}
