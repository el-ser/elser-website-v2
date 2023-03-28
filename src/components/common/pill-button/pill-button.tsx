export default function PillButton({
  children,
  textSize,
}: {
  children: JSX.Element | string;
  textSize?: string;
  isLink?: boolean;
}) {
  const defaultTextSize = "text-3xl md:text-4xl";

  return (
    <button
      className={`text-color border-4 border-navy-blue-700 dark:border-smoke-600 border-opacity-70 font-ubuntuMono px-4 py-2 rounded-xl hover:scale-105 hover-pill-color ${
        textSize ? textSize : defaultTextSize
      }`}>
      {children}
    </button>
  );
}
