import Img from 'next/image';

interface TexturaProps {
  className?: string;
}

export function Textura({ className = '' }: TexturaProps) {
  return (
    <div className={`absolute ${className}`}>
      <Img width={296} height={82} alt='' src='/assets/box-textura.png' />
    </div>
  );
}
