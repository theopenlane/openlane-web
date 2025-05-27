import type { StaticImageData } from "next/image";

import React from "react";
import RichText from "../RichText";

import { Media } from "../Media";

type Props = any & {
  breakout?: boolean;
  captionClassName?: string;
  className?: string;
  enableGutter?: boolean;
  imgClassName?: string;
  staticImage?: StaticImageData;
  disableInnerContainer?: boolean;
};

export const MediaBlockComp: React.FC<Props> = (props) => {
  const {
    captionClassName,
    className,
    enableGutter = true,
    imgClassName,
    media,
    staticImage,
    disableInnerContainer,
  } = props;

  let caption;
  if (media && typeof media === "object") caption = media.caption;

  return (
    <div
      className={
        (enableGutter ? "container" : "") + (className ? ` ${className}` : "")
      }
    >
      {(media || staticImage) && (
        <Media
          imgClassName={
            "border border-border rounded-[0.8rem]" +
            (imgClassName ? ` ${imgClassName}` : "")
          }
          resource={media}
          src={staticImage}
        />
      )}
      {caption && (
        <div
          className={
            "mt-6" +
            (!disableInnerContainer ? " container" : "") +
            (captionClassName ? ` ${captionClassName}` : "")
          }
        >
          <RichText data={caption} enableGutter={false} />
        </div>
      )}
    </div>
  );
};
