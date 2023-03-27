export default function BlogLoader(): JSX.Element {
  return (
    <>
      <div
        id="loader-container"
        className="flex flex-col justify-center items-center mt-[12vh]">
        <div
          id="image-holder"
          className="transition-theme skeleton-bg h-60 md:h-96 w-full"></div>
        <div
          id="title-holder"
          className="transition-theme skeleton-bg h-9"></div>
        <div id="date-holder" className=""></div>
        <div id="details-holder" className=""></div>
      </div>
    </>
  );
}
