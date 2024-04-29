import { tw } from 'twind';
import { FOOTER_HEIGHT, IconTab } from './index';

const Footer = () => {
  return (
    <div
      className={tw`z-50 bg-black-2 text(white) relative bottom-0 flex justify-between items-center px-3 h-[${FOOTER_HEIGHT}px] mo:(w-screen)`}
    >
      <span className={tw`text(12) flex flex-col`}>
        <span className={tw`text(20) font-medium`}>THANKYOU FOR WATCHING</span>
        <span>Design by sunheekimmy</span>
        <span>
          Thank You for <span className={tw`text-primary font-medium`}>everything.</span>
        </span>
      </span>
      <div>
        <IconTab navTw='border-0' iconColor='#999999' />
      </div>
    </div>
  );
};

export default Footer;
