import React, { useEffect, useState } from "react";
import MenuItem from "./menu-item";
const Menu = (props) => {
  const [items, setItems] = useState([]);
  let info = [];
  useEffect(() => {
    fetch("https://swapi.dev/api").then((res) => {
      res.json().then((data) => {
        for (const key in data) {
          let label = {
            key: key.toUpperCase(),
            url: data[key],
          };
          info.push(label);
        }
        setItems(info);
      });
    });
  }, info);

  return (
    <div
      style={{
        width: 241,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#121212",
        overflow: "visible",
      }}
    >
      <div
        style={{
          width: "100%",
          flexShrink: 0,
          height: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor:
            "var(--token-f804f6d4-a2fc-4e16-bcc4-31c3196c40bd, #ffbd2e)",
          overflow: "visible",
          padding: "20px 0px 20px 0px ",
        }}
      >
        <h1
          style={{
            width: "auto" /* 151px */,
            height: "auto" /* 43px */,
            flexShrink: 0,
            overflow: "visible",
            whiteSpace: "pre",
            lineHeight: 1.2,
            color: "#ffffff",
            fontSize: 36,
            fontWeight: 900,
            fontFamily: `"Inter-Black", "Inter", sans-serif`,
            textTransform: "uppercase",
            letterSpacing: 5.5,
            margin: 0,
            padding: 0,
          }}
        >
          Swapi
        </h1>
        <p
          style={{
            width: "100%",
            flexShrink: 0,
            height: 16,
            overflow: "hidden",
            whiteSpace: "pre-wrap",
            wordWrap: "break-word",
            wordBreak: "break-word",
            lineHeight: 1.2,
            letterSpacing: 0,
            textAlign: "center",
            fontSize: 14,
            color: "#ffffff",
            fontWeight: 100,
            fontFamily: `"Inter-Thin", "Inter", sans-serif`,
            margin: 0,
            padding: 0,
          }}
        >
          The Star Wars API
        </p>
      </div>
      <div
        style={{
          boxSizing: "border-box",
          width: "100%",
          flexShrink: 0,
          height: 64,
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: 20,
          overflow: "hidden",
        }}
      >
        <p
          style={{
            width: "auto" /* 93px */,
            height: "auto" /* 24px */,
            flexShrink: 0,
            overflow: "visible",
            whiteSpace: "pre",
            letterSpacing: 0,
            lineHeight: 1.2,
            color: "#ffffff",
            fontSize: 20,
            fontWeight: 700,
            fontFamily: `"Inter-Bold", "Inter", sans-serif`,
          }}
        >
          MENU
        </p>
      </div>
      {items.map((el, i) => (
        <MenuItem text={el.key} url={el.url} key={el.i}></MenuItem>
      ))}
    </div>
  );
};

export default Menu;
