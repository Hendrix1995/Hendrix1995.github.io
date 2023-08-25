import { tw } from 'twind';

export default function ArrowRectangle() {
  return (
    <div className={tw`relative min-w-[300px] min-h-[300px] h-[300px]`}>
      <div className={tw`w-full h-full border-b-1 border-r-1`} />
      <div className={tw`absolute top-[-76px] left-[38.5%] w-[340px] h-[300px] border-b-1 rotate-45`} />
    </div>
  );
}
