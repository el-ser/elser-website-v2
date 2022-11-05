const CustomButton = ({
  children,
  buttonClass,
}: {
  children: JSX.Element;
  buttonClass?: string;
}) => (
  <button
    className={`text-color border-4 border-navy-blue-700 dark:border-smoke-600 border-opacity-70 font-ubuntuMono px-4 py-2 rounded-xl text-3xl transition-all duration-500 hover:scale-105 md:text-4xl ${buttonClass}`}
  >
    {children}
  </button>
);

export default CustomButton;
