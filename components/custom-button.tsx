import Link from "next/link";

export enum ButtonTypes {
  base = "base",
  normal = "normal",
  inverted = "inverted",
  outlined = "outlined",
}

const getButtonStyle = (buttonType: ButtonTypes): string => {
  return {
    [ButtonTypes.base]: "button-style",
    [ButtonTypes.normal]: "button-style",
    [ButtonTypes.inverted]: "button-style text-color",
    [ButtonTypes.outlined]:
      "button-style text-color border-2 border-navy-blue-800/60 dark:border-smoke-600/60  hover:bg-accent-light dark:hover:bg-accent-dark",
  }[buttonType];
};

const CustomButton = ({
  buttonType = ButtonTypes.normal,
  href,
  additionalClass,
  children,
}: {
  buttonType?: ButtonTypes;
  href: string;
  additionalClass?: string;
  children: string;
}) => {
  const buttonStyle = getButtonStyle(buttonType);

  return (
    <button
      className={`${buttonStyle} ${additionalClass} hover:scale-105 transition-all duration-200`}
    >
      <Link href={href}>{children}</Link>
    </button>
  );
};

export default CustomButton;
