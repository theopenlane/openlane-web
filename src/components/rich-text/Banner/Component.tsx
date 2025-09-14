import React from "react";
import { Info, AlertCircle, CheckCircle2, AlertTriangle } from "lucide-react"; // icons
import RichText from "../RichText.tsx";

type Props = {
  className?: string;
} & any;

export const BannerBlock: React.FC<Props> = ({ className, content, style }) => {
  const iconMap: Record<string, React.ReactNode> = {
    info: <Info className="w-5 h-5 text-blue-500" />,
    error: <AlertCircle className="w-5 h-5 text-red-500" />,
    success: <CheckCircle2 className="w-5 h-5 text-green-500" />,
    warning: <AlertTriangle className="w-5 h-5 text-yellow-500" />,
  };

  return (
    <div className={`mx-auto my-8 w-full ${className || ""}`}>
      <div
        className={
          "border py-3 px-4 flex items-start gap-3 rounded " +
          (style === "info" ? "border-border bg-summary-info/30" : "") +
          (style === "error" ? "border-error bg-summary-error/30" : "") +
          (style === "success" ? "border-success bg-summary-success/30" : "") +
          (style === "warning" ? "border-warning bg-summary-warning/30" : "") +
          (style === "summary"
            ? "border-border bg-summary-info/30 font-cursive"
            : "")
        }
      >
        <div className="shrink-0 mt-1">{iconMap[style]}</div>

        <RichText data={content} enableGutter={false} enableProse={false} />
      </div>
    </div>
  );
};
