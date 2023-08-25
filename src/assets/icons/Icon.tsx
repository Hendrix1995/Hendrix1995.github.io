import IcoMoon, { IconProps } from 'react-icomoon';

import iconSet from './selection.json';

const names = ['github', 'email', 'tstory', 'close', 'share_forward', 'notion'] as const;

export type IconNames = (typeof names)[number];

export const Icon = ({
  name,
  size = 40,
  color = '#4A4A4A',
  ...props
}: Omit<IconProps, 'icon'> & { name: IconNames }) => (
  <IcoMoon
    iconSet={iconSet}
    icon={name}
    size={size}
    style={{ fill: color, stroke: color, cursor: 'pointer' }}
    {...props}
  />
);
