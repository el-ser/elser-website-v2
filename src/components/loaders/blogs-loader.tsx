export default function BlogsLoader(): JSX.Element {
  return (
    <>
      <hr className="skeleton-bg border-[0.5px] rounded-full w-[95%] animate-pulse" />
      <div className="flex flex-col gap-4 justify-center items-center w-full animate-pulse md:flex-row">
        <div
          id="image-placeholder"
          className="transition-theme skeleton-bg h-40 w-80 mx-8 mb-8"
        />
        <div className="transition-theme flex flex-col w-full items-center gap-2 px-8 md:pr-8">
          <div
            id="title-placeholder"
            className="flex flex-col justify-center h-24 w-full gap-2">
            <div className="skeleton-bg w-full h-12 rounded-2xl" />
            <div className="skeleton-bg w-full h-12 rounded-2xl" />
            <div className="skeleton-bg w-1/4 h-12 rounded-2xl" />
          </div>
          <div
            id="date-placeholder"
            className="skeleton-bg w-2/5 h-4 self-start rounded-2xl"
          />
          <div
            id="description-placeholder"
            className="flex flex-col items-center justify-start w-full gap-2 rounded-2xl">
            <div className="h-6 w-full skeleton-bg rounded-2xl" />
            <div className="h-6 w-full skeleton-bg rounded-2xl" />
            <div className="h-6 w-full skeleton-bg rounded-2xl" />
            <div className="h-6 w-1/2 self-start skeleton-bg rounded-2xl" />
          </div>
        </div>
      </div>

      <hr className="skeleton-bg border-[0.5px] rounded-full w-[95%] animate-pulse" />
      <div className="flex flex-col gap-4 justify-center items-center w-full animate-pulse md:flex-row">
        <div
          id="image-placeholder"
          className="transition-theme skeleton-bg h-40 w-80 mx-8 mb-8"
        />
        <div className="transition-theme flex flex-col w-full items-center gap-2 px-8 md:pr-8">
          <div
            id="title-placeholder"
            className="flex flex-col justify-center h-24 w-full gap-2">
            <div className="skeleton-bg w-full h-12 rounded-2xl" />
            <div className="skeleton-bg w-full h-12 rounded-2xl" />
            <div className="skeleton-bg w-1/4 h-12 rounded-2xl" />
          </div>
          <div
            id="date-placeholder"
            className="skeleton-bg w-2/5 h-4 self-start rounded-2xl"
          />
          <div
            id="description-placeholder"
            className="flex flex-col items-center justify-start w-full gap-2 rounded-2xl">
            <div className="h-6 w-full skeleton-bg rounded-2xl" />
            <div className="h-6 w-full skeleton-bg rounded-2xl" />
            <div className="h-6 w-1/2 self-start skeleton-bg rounded-2xl" />
          </div>
        </div>
      </div>
    </>
  );
}
