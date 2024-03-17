export function Loading() {
  return (
    <div className="flex animate-pulse justify-center">
      <div className="relative flex w-full max-w-[1365px] items-center justify-end">
        <div className="absolute left-0 z-[1] mb-24 ml-auto flex w-full flex-col items-center gap-8 lg:w-auto lg:items-start">
          <div className="bg-gray-450 h-[40px] w-[400px]" />
          <div className="bg-gray-450 h-[30px] w-[200px]" />

          <div className="flex items-center gap-24">
            <div className="bg-gray-450 h-[24px] w-[110px] rounded-sm" />

            <div className="hidden gap-5 lg:flex">
              <div className="bg-gray-450 h-[24px] w-[24px] rounded-sm" />
              <div className="bg-gray-450 h-[24px] w-[24px] rounded-sm" />
            </div>
          </div>
        </div>

        <div className="relative flex h-full max-h-[500px] min-h-[440px] w-full max-w-[1032px] items-center justify-center overflow-hidden bg-gray-400 lg:justify-end" />
      </div>
    </div>
  );
}
