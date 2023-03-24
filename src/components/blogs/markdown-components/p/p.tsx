import React from "react";

export default function P(props: React.PropsWithChildren) {
  return <p className="blog-text text-xl">{props.children}</p>;
}
