import React from "react";

const MenuItem = ({text, url}) => {
    const onClick = (data, url) => {
        console.log(url);
        return data
    }
  return (
    <div
      style={{
        boxSizing: "border-box",
        height: "auto" /* 61px */,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 20,
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        overflow: "hidden",
        marginBottom: 5,
        cursor: 'pointer'
      }}
      onClick={()=> {onClick(text, url)}}
    >
      <p
        style={{
          width: "auto" /* 59px */,
          height: "auto" /* 21px */,
          flexShrink: 0,
          overflow: "visible",
          whiteSpace: "pre",
          letterSpacing: 0,
          lineHeight: 1.2,
          fontSize: 18,
          fontWeight: 500,
          fontFamily: `"Inter-Medium", "Inter", sans-serif`,
          color: "#ffffff",
          margin: 0,
          padding: 0,
        }}
      >
       {text}
      </p>
    </div>
  );
};
export default MenuItem;
