import React from "react";

export default function H1(props: React.PropsWithChildren) {
  return <h1 className="blog-text text-4xl font-bold">{props.children}</h1>;
}
