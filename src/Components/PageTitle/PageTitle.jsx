import React from "react";

export default function PageTitle({
  children,
  className,
  imgSrc,
  imgAlt,
}) {
  return (
    <div
      style={{
        marginTop: "2rem",
        maxWidth: "85%",
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <h1 style={{ width: "100%" }} className={className}>
        {children}
      </h1>
      {imgSrc && (
        <img
          src={imgSrc}
          alt={imgAlt}
          style={{ paddingTop: "6px", paddingBottom: "12px", width: "100%" }}
        />
      )}
    </div>
  );
}
