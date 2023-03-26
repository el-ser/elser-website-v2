import React from "react";

export default function Ul(props: React.PropsWithChildren) {
  return (
    <ul className="marker:text-accent-light dark:marker:text-accent-dark list-disc pl-4">
      {props.children}
    </ul>
  );
}
