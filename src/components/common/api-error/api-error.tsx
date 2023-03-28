import TerminalContainer from "../terminal-container/terminal-container";

export default function ApiError() {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <TerminalContainer textClass="flex flex-col items-center gap-8">
        <>
          <h1 className="text-7xl text-center">Error Occured</h1>
          <span className="text-3xl text-center">
            Oops! Please try again later!{" "}
          </span>
        </>
      </TerminalContainer>
    </div>
  );
}
