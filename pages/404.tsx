import TerminalContainer from "../components/terminal-container";

export default function Custom404() {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <TerminalContainer textClass="flex flex-col items-center gap-8">
        <>
          <h1 className="text-9xl">Error 404</h1>
          <span className="text-3xl text-center">
            Oops! Are you sure you are accessing the correct page?{" "}
          </span>
        </>
      </TerminalContainer>
    </div>
  );
}
