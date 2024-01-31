import { Fragment, useEffect, useState } from 'react';

import { ArrowMore } from '@/components/icons/arrow-more';
import Link from 'next/link';

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
      className="relative flex h-[450px] justify-center overflow-hidden"
      onMouseOver={() => setIsVisible(true)}
      onMouseOut={() => setIsVisible(false)}
    >
      <img
        src={src}
        alt={`Card ${title}`}
        className="absolute h-full w-full object-cover"
      />
      <div
        className={`
          absolute h-full w-full bg-primary-500 transition duration-500
          ${isVisible ? 'opacity-80' : 'opacity-30'}
        `}
      />

      <div className="relative z-[2] flex w-full flex-col justify-between px-8 py-12 pt-[64px] text-white">
        <Icon className={isVisible ? 'text-secondary-500' : 'text-white'} />

        <p
          className={`
                absolute text-[26px] font-normal text-white transition-all duration-500
                ${isVisible ? 'bottom-[57%] !font-bold' : 'bottom-[9%]'}
              `}
        >
          {newTitle.map((party, index) => (
            <Fragment key={index}>
              {index + 1 === titleLength && !isVisible && <br />}
              {`${party} `}
            </Fragment>
          ))}
        </p>

        <div className="relative flex flex-col justify-between">
          <div className="relative flex flex-col gap-4 transition-all duration-500">
            <p
              className={`mt-1 text-[21px] font-light
              ${isVisible ? 'block' : 'hidden'}`}
            >
              {text}
            </p>
          </div>
        </div>

        <Link
          href=""
          className={`
              ${isVisible ? 'flex' : 'hidden'}
              cursor-pointer items-center gap-2 text-[16px] font-light underline
            `}
        >
          Saiba mais <ArrowMore className="size-5" />
        </Link>
      </div>
    </div>
  );
}
