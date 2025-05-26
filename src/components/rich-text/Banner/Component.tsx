import React from "react";
import RichText from "../RichText.tsx";

type Props = {
  className?: string;
} & any;

export const BannerBlock: React.FC<Props> = ({ className, content, style }) => {
  return (
    <div className={`mx-auto my-8 w-full ${className || ""}`}>
      <div
        className={
          "border py-3 px-6 flex items-center rounded " +
          (style === "info" ? "border-border bg-card" : "") +
          (style === "error" ? "border-error bg-error/30" : "") +
          (style === "success" ? "border-success bg-success/30" : "") +
          (style === "warning" ? "border-warning bg-warning/30" : "")
        }
      >
        <RichText data={content} enableGutter={false} enableProse={false} />
      </div>
    </div>
  );
};
