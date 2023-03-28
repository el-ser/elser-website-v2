import Link from "next/link";

import useAppSelector from "../../../hooks/use-app-selector";
import useAppDispatch from "../../../hooks/use-app-dispatch";
import {
  selectExternalLinks,
  selectInternalLinks,
} from "../../../store/navigation/navigation.selector";
import { setIsSideBarOpen } from "../../../store/navigation/navigation.slice";

type NavigationLinksProps = {
  internalOptions: {
    showIcon: boolean;
    className?: string;
  };
  externalOptions: {
    showText: boolean;
    className?: string;
  };
};
const NavigationLinks = ({
  internalOptions,
  externalOptions,
}: NavigationLinksProps) => {
  const dispatch = useAppDispatch();
  const internalLinks = useAppSelector(selectInternalLinks);
  const externalLinks = useAppSelector(selectExternalLinks);
  const linkClasses =
    "flex gap-8 items-center text-color font-ubuntuMono no-underline transition-theme text-navy-blue-700 dark:text-smoke-600 hover:scale-110 cursor-pointer hover-text-color";

  return (
    <>
      {internalLinks.map((link, idx) => {
        const { Icon } = link;
        return (
          <Link key={idx} href={link.href}>
            <a
              className={`${linkClasses} ${internalOptions.className}`}
              onClick={() => {
                dispatch(setIsSideBarOpen());
              }}>
              {internalOptions.showIcon && <Icon />}
              {link.text}
            </a>
          </Link>
        );
      })}
      {externalLinks.map((link, idx) => {
        const { Icon } = link;
        return (
          <Link key={idx} href={link.href}>
            <a
              className={`${linkClasses} ${externalOptions.className}`}
              onClick={() => {
                dispatch(setIsSideBarOpen());
              }}>
              <Icon className="w-6 h-6" />
              {externalOptions.showText && link.text}
            </a>
          </Link>
        );
      })}
    </>
  );
};

export default NavigationLinks;
