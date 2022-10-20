import Link from "next/link";

import { useAppSelector } from "../store/hooks";
import { selectNavigationList } from "../store/navigation/navigation.selector";

const NavigationLinks = ({ additionalClass }: { additionalClass?: string }) => {
  const navigationList = useAppSelector(selectNavigationList);

  return (
    <>
      {navigationList.map((path, idx) => {
        return (
          <Link key={idx} href={path.to}>
            <a
              className={`font-poppins no-underline transition-theme text-navy-blue-700 dark:text-smoke-600 ${additionalClass}`}
            >
              {path.text}
            </a>
          </Link>
        );
      })}
    </>
  );
};

export default NavigationLinks;
