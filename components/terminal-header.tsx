const TerminalHeader = () => {
  return (
    <div
      id="terminal-header"
      className="flex items-center w-full h-8 bg-black/90 rounded-t-2xl"
    >
      <span className="h-3 w-3 rounded-full ml-2 mr-2 bg-red-400" />
      <span className="h-3 w-3 rounded-full mr-2 bg-yellow-400" />
      <span className="h-3 w-3 rounded-full bg-green-500" />
    </div>
  );
};

export default TerminalHeader;
