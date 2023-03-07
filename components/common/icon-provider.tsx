import { IconContext } from "react-icons";

import { useAppSelector } from "../../store/hooks";
import { selectUseDarkMode } from "../../store/navigation/navigation.selector";
import tailwindConfig from "../../tailwind.config";

const ReactIconProvider = ({ children }: { children: JSX.Element }) => {
  const useDarkMode = useAppSelector(selectUseDarkMode);
  const colors = tailwindConfig.theme?.extend?.colors as {
    [key: string]: string;
  };

  return (
    <IconContext.Provider
      value={{
        color: useDarkMode ? colors["smoke-600"] : colors["navy-blue-700"],
      }}>
      {children}
    </IconContext.Provider>
  );
};

export default ReactIconProvider;
