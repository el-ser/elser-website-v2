const TerminalContainer = ({ text }: { text: string }) => {
  return (
    <div
      id="terminal-container"
      className="flex flex-col transition-theme bg-slate-50/60 dark:bg-black/50 backdrop-blur-md rounded-2xl mx-[5%]"
    >
      <div
        id="terminal-header"
        className="flex items-center w-full h-8 bg-black/90 rounded-t-2xl"
      >
        <span className="h-3 w-3 rounded-full ml-2 mr-2 bg-red-700" />
        <span className="h-3 w-3 rounded-full mr-2 bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-green-600" />
      </div>

      <p className="text-color w-full font-medium leading-relaxed tracking-wide text-justify px-[5%]">
        {text}
        <span className="text-color animate-ping font-medium">_</span>
      </p>
    </div>
  );
};

export default TerminalContainer;
