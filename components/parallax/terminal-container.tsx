import { useEffect, useState } from "react";

const TerminalContainer = ({
  children,
  textClass,
  fileText,
}: {
  children: string | JSX.Element;
  textClass?: string;
  fileText: string;
}) => {
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
  }, []);

  return (
    <div
      id="terminal-container"
      className="flex flex-col transition-theme bg-transparent dark:bg-black/20 backdrop-blur-lg rounded-2xl mx-[5%] shadow-2xl shadow-slate-70 dark:shadow-lg dark:shadow-slate-500 hover:scale-105 md:w-3/4"
    >
      <div
        id="terminal-header"
        className="flex items-center w-full h-8 bg-black/90 rounded-t-2xl"
      >
        <span className="h-3 w-3 rounded-full ml-2 mr-2 bg-red-400" />
        <span className="h-3 w-3 rounded-full mr-2 bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-green-500" />
      </div>

      <p
        className={`transition-theme text-color w-full font-ubuntuMono text-justify px-[1%] text-lg md:text-xl ${textClass}`}
      >
        {`Last login: ${dateState.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          day: "numeric",
          month: "long",
          hour12: true,
        })} `}
        <br />
        {`el-ser@MacBook ~ % ${fileText}`}
        <br />
        <br />
        {children}
        <span className="w-2 h-4 bg-smoke-600 animate-ping">{`_`}</span>
      </p>
    </div>
  );
};

export default TerminalContainer;
