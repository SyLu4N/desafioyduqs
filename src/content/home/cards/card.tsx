import { useState } from 'react';

interface CardProps {
  card: {
    src: string;
    alt: string;
    icon: JSX.Element;
  };
}

export function Card({ card }: CardProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="relative flex justify-center overflow-hidden h-[450px]"
      onMouseOver={() => setIsVisible(true)}
      onMouseOut={() => setIsVisible(false)}
    >
      <img
        src={`/assets/${card.src}`}
        alt={card.alt}
        className="absolute object-cover w-full h-full"
      />
      <div className="bg-primary-500 opacity-30 absolute transition duration-500 w-full h-full" />

      <div
        className={`
            absolute transition duration-500 w-full h-full
            ${isVisible ? 'flex' : 'hidden'}
          `}
      >
        <div className="z-[2]">{card.icon}</div>
      </div>
    </div>
  );
}
