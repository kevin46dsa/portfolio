import React from "react";
import "./SplitVideoSection.css";

type SplitVideoSectionProps = {
  /** YouTube video ID (easiest). If provided, `src` is ignored. */
  videoId?: string;
  /** Full iframe src (use this if not YouTube). */
  src?: string;
  /** Heading above the description. */
  title?: string;
  /** Description/content on the text side. Can be JSX. */
  description?: React.ReactNode;
  /** Place video on the left or right. Default: "left". */
  videoSide?: "left" | "right";
  /** Optional call-to-action button. */
  cta?: { label: string; href: string; target?: "_blank" | "_self" };
  /** Override the default ~65/35 split. Any CSS unit, e.g. "70% 30%" or "2fr 1fr". */
  columnRatio?: string;
  /** Extra className if you need to hook more styles. */
  className?: string;
};

export default function SplitVideoSection({
  videoId,
  src,
  title,
  description,
  videoSide = "left",
  cta,
  columnRatio,
  className,
}: SplitVideoSectionProps) {
  const embed = videoId
    ? `https://www.youtube.com/embed/${videoId}`
    : src || "";

  return (
    <div
      className={[
        "svs",
        videoSide === "right" ? "is-right" : "is-left",
        className || "",
      ].join(" ")}
      style={
        columnRatio
          ? ({ ["--svs-cols" as any]: columnRatio } as React.CSSProperties)
          : undefined
      }
    >
      {/* VIDEO */}
      <div className="svs-pane svs-videoPane">
        <div className="svs-videoRatio">
          <iframe
            src={embed}
            title={title || "Video"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>

      {/* TEXT */}
      <div className="svs-pane svs-textPane">
        {title ? <h3 className="svs-title">{title}</h3> : null}
        <div className="svs-desc">{description}</div>
        {cta ? (
          <a
            className="svs-cta"
            href={cta.href}
            target={cta.target ?? "_blank"}
            rel="noopener noreferrer"
          >
            {cta.label}
          </a>
        ) : null}
      </div>
    </div>
  );
}
