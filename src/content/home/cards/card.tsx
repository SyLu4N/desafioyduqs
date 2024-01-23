import { Fragment, useEffect, useState } from 'react';

import { ArrowMore } from '@/components/icons/arrow-more';

interface CardProps {
  src: string;
  Icon: any;
  title: string;
  text: string;
}

export function Card({ Icon, src, text, title }: CardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [newTitle, setNewTitle] = useState<string[]>([]);

  useEffect(() => {
    if (!title) return setNewTitle(['']);

    if (!isVisible) {
      setTimeout(() => {
        return setNewTitle(title.split(' '));
      }, 150);
    }

    return setNewTitle([title]);
  }, [isVisible]);

  const titleLength = newTitle.length;

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
          absolute transition duration-500 w-full h-full bg-primary-500
          ${isVisible ? 'opacity-80' : 'opacity-30'}
        `}
      />

      <div className='relative z-[2] py-12 pt-[64px] px-8 w-full text-white flex flex-col justify-between'>
        <Icon className={isVisible ? 'text-secundary-500' : 'text-white'} />

        <p
          className={`
                transition-all duration-500 text-white text-[26px] font-normal absolute
                ${isVisible ? '!font-bold bottom-[57%]' : 'bottom-[9%]'}
              `}
        >
          {newTitle.map((party, index) => (
            <Fragment key={index}>
              {index + 1 === titleLength && !isVisible && <br />}
              {`${party} `}
            </Fragment>
          ))}
        </p>

        <div className='flex flex-col justify-between relative'>
          <div className='flex flex-col gap-4 transition-all duration-500 relative'>
            <p
              className={`text-[21px] mt-1 font-light
              ${isVisible ? 'block' : 'hidden'}`}
            >
              {text}
            </p>
          </div>
        </div>

        <p
          className={`
              ${isVisible ? 'flex' : 'hidden'}
              items-center underline gap-2 text-[16px] font-light
            `}
        >
          Saiba mais <ArrowMore className='size-5' />
        </p>
      </div>
    </div>
  );
}
