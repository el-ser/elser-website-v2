import TerminalHeader from "./terminal-header";

const TerminalContainer = ({
  children,
  textClass,
  containerClass,
  hasCursor,
}: {
  children: string | JSX.Element;
  textClass?: string;
  containerClass?: string;
  hasCursor?: boolean;
}) => {
  return (
    <div
      id="terminal-container"
      className={`flex flex-col transition-theme bg-transparent dark:bg-black/20 backdrop-blur-lg rounded-2xl mx-[5%] shadow-2xl shadow-slate-70 dark:shadow-lg dark:shadow-slate-500 hover:scale-105 w-3/4 md:w-1/2 ${containerClass}`}
    >
      <TerminalHeader />

      <p
        className={`transition-theme text-color w-full font-ubuntuMono text-justify px-[1%] text-lg md:text-xl ${textClass}`}
      >
        {children}
        {hasCursor && (
          <span className="w-2 h-4 bg-smoke-600 animate-ping">{`_`}</span>
        )}
      </p>
    </div>
  );
};

export default TerminalContainer;
