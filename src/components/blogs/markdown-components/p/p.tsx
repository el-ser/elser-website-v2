import React from "react";
import Image from "next/image";

export default function P(props: React.PropsWithChildren) {
  /**
   * TODO: handle %[http://sample.com] string
   */

  if (props.children?.toString().startsWith("![")) {
    const text = props.children.toString();
    /**
     * * Regex take the image url in this syntax
     * * ![image-alt.jpg](http://image.sample.com align="center")
     * * Regex Result [1] should be http://image.sample.com
     */
    const regexResult = /!\[.*\]\((\S+).+\)/.exec(text);
    const imageLink = regexResult![1];

    return (
      <div id="image-container" className="relative h-40">
        <Image
          src={imageLink}
          /**
           * TODO: Add alt but fix image name first in md
           */
          // alt={`image-${}`}
          placeholder="blur"
          blurDataURL={imageLink}
          layout="fill"
          quality={80}
          objectFit="contain"
        />
      </div>
    );
  }

  return <p className="blog-text text-xl">{props.children}</p>;
}
