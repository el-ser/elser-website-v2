const TerminalHeader = ({
  title,
  textClass,
}: {
  title?: string;
  textClass?: string;
}) => {
  return (
    <div className="flex items-center w-full h-8 bg-black/90 rounded-t-2xl">
      <div id="terminal-header" className="flex items-center justify-center">
        <span className="h-3 w-3 rounded-full ml-2 mr-2 bg-red-400" />
        <span className="h-3 w-3 rounded-full mr-2 bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-green-500" />
      </div>

      <h2
        className={`flex justify-center items-center gap-1 w-full text-smoke-600 font-ubuntuMono text-xl mr-8 whitespace-nowrap ${textClass}`}
      >
        {title}
      </h2>
    </div>
  );
};

export default TerminalHeader;
