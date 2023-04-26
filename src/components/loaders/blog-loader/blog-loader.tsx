export default function BlogLoader(): JSX.Element {
  return (
    <>
      <div
        id="loader-container"
        className="flex flex-col items-center gap-8 md:px-36">
        <div
          id="image-holder"
          className="transition-theme skeleton-bg h-60 w-96 md:h-96 md:w-3/4"
        />
        <div
          id="title-holder"
          className="flex flex-col items-center h-full w-full gap-2">
          <div className="skeleton-bg h-9 w-4/5 rounded-2xl" />
          <div className="skeleton-bg h-9 w-3/5 rounded-2xl" />
        </div>
        <div
          id="date-holder"
          className="flex justify-center h-full w-full gap-4">
          <span className="skeleton-bg h-9 w-36 rounded-2xl" />
          <span className="skeleton-bg h-9 w-36 rounded-2xl" />
        </div>
        <div
          id="details-holder"
          className="flex flex-col items-center h-full w-full gap-1">
          <div className="skeleton-bg h-6 w-full rounded-2xl" />
          <div className="skeleton-bg h-6 w-full rounded-2xl" />
          <div className="skeleton-bg h-6 w-full rounded-2xl" />
          <div className="skeleton-bg h-6 w-full rounded-2xl" />
          <div className="skeleton-bg h-6 w-full rounded-2xl" />
          <div className="skeleton-bg h-6 w-1/2 self-start rounded-2xl" />
          <br />
          <div className="skeleton-bg h-6 w-full rounded-2xl" />
          <div className="skeleton-bg h-6 w-full rounded-2xl" />
          <div className="skeleton-bg h-6 w-full rounded-2xl" />
          <div className="skeleton-bg h-6 w-3/4 self-start rounded-2xl" />
        </div>
      </div>
    </>
  );
}
