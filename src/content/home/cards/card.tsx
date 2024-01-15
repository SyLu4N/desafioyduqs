import { useState } from 'react';

interface CardProps {
  src: string;
  Icon: any;
  title: string;
  text: string;
}

export function Card({ Icon, src, text, title }: CardProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="relative flex justify-center overflow-hidden h-[450px]"
      onMouseOver={() => setIsVisible(true)}
      onMouseOut={() => setIsVisible(false)}
    >
      <img
        src={src}
        alt={`Card ${title}`}
        className="absolute object-cover w-full h-full"
      />
      <div
        className={`
          bg-primary-500 ${isVisible ? 'opacity-60' : 'opacity-30'}
          absolute transition duration-500 w-full h-full
        `}
      />

      <div className="relative z-[2] my-8 mx-6 border w-full">
        <Icon className={isVisible ? 'text-secundary-500' : 'text-white'} />

        <p className={`${isVisible ? 'block' : 'hidden'}`}>{text}</p>
        <p
          className={`
            absolute transition-all duration-500 text-white text-[26px] font-light bottom-[20%] max-w-[180px]
            ${isVisible && 'bottom-[60%]'}
          `}
        >
          {title}
        </p>
      </div>
    </div>
  );
}
