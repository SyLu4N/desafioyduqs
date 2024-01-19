import { useState } from 'react';

import { ArrowMore } from '@/components/icons/arrow-more';

interface CardProps {
  src: string;
  Icon: any;
  title: string;
  text: string;
}

export function Card({ Icon, src, text, title }: CardProps) {
  const [isVisible, setIsVisible] = useState(false);

  const newTitle = (title: string) => {
    return title.split(' ');
  };

  const titleLength = newTitle(title).length;

  return (
    <div
      className='relative flex justify-center h-[450px] overflow-hidden'
      onMouseOver={() => setIsVisible(true)}
      onMouseOut={() => setIsVisible(false)}
    >
      <img
        src={src}
        alt={`Card ${title}`}
        className='absolute object-cover w-full h-full'
      />
      <div
        className={`
          absolute transition duration-500 w-full h-full bg-primary-50
          ${isVisible ? 'opacity-80' : 'opacity-30'}
        `}
      />

      <div className='relative z-[2] my-12 mt-20 mx-8 w-full text-white'>
        <Icon className={isVisible ? 'text-secundary-500' : 'text-white'} />

        <p
          className={`
            transition-all duration-500 text-white text-[26px] font-normal mt-[70%]
            ${isVisible && '!mt-[10%] !font-bold !max-w-none'}
          `}
        >
          <>
            {newTitle(title).map((party, index) => (
              <>
                {index + 1 === titleLength && !isVisible && <br />}
                {`${party} `}
              </>
            ))}
          </>
        </p>

        <p
          className={`
            flex flex-col justify-between text-[21px] mt-1 font-light
            ${isVisible ? 'block' : 'hidden'}
          `}
        >
          {text}
        </p>

        <p
          className={`
            ${isVisible ? 'flex' : 'hidden'}
            absolute bottom-0 items-center underline gap-2 text-[16px] font-light
          `}
        >
          Saiba mais <ArrowMore className='size-5' />
        </p>
      </div>
    </div>
  );
}
