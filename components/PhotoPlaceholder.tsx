import type { ReactNode } from "react";

export function PhotoPlaceholder({
  label,
  ratio = "4/5",
  heading = false,
  children,
  className,
}: {
  label: string;
  ratio?: string;
  heading?: boolean;
  children?: ReactNode;
  className?: string;
}) {
  const LabelTag = heading ? "h2" : "figcaption";
  return (
    <figure
      className={className ? `frame ${className}` : "frame"}
      style={{ aspectRatio: ratio }}
    >
      <LabelTag className="frame-label">{label}</LabelTag>
      {children ? <div className="frame-body">{children}</div> : null}
    </figure>
  );
}
