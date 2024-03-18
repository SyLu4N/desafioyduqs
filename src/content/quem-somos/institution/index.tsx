import { Lined } from '@/components/lined';

interface InstitutionProps {
  text: string;
  img: string;
  lined?: boolean;
}

export function Institution({ img, text, lined = true }: InstitutionProps) {
  return (
    <>
      <div className="flex flex-col items-center gap-9 sm:flex-row">
        <div className="flex w-full justify-center bg-white sm:justify-start sm:bg-transparent">
          <img
            src={`/assets/quem-somos/${img}`}
            className="min-h-[137px] min-w-[180px]"
          />
        </div>

        <p className="font-light">{text}</p>
      </div>

      {lined && <Lined className="my-6 h-[2px] bg-letter-600" />}
    </>
  );
}
