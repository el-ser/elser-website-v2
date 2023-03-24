import React from "react";

export default function Li(props: React.PropsWithChildren) {
  return (
    <li className="before:content-['-'] blog-text my-2">{props.children}</li>
  );
}
