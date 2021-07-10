import React, { useEffect, useState } from "react";
import MenuItem from "./menu-item";
import { useFetch } from "./../data/data";
const Menu = (props) => {
  const [items, setItems] = useState([]);
  let info = [];
  const itemHandler =(data) => {
    console.log(data);
  }
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
  }, []);

  return (
    <div style={container}>
      <div style={header}>
        <h1 style={headerText}>Swapi</h1>
        <p style={headerDesc}>The Star Wars API</p>
      </div>
      <div style={menuContainer}>
        <p style={menuText}>MENU</p>
      </div>
      {/* Item Links */}
      {items.map((el, i) => (
        <MenuItem text={el.key} url={el.url} key={i}></MenuItem>
      ))}
    </div>
  );
};
// CSS
const container = {
  width: 241,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  backgroundColor: "#121212",
  overflow: "visible",
};
const header = {
  width: "100%",
  flexShrink: 0,
  height: "auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "var(--token-f804f6d4-a2fc-4e16-bcc4-31c3196c40bd, #ffbd2e)",
  overflow: "visible",
  padding: "20px 0px 20px 0px ",
};
const headerText = {
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
};
const headerDesc = {
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
};
const menuContainer = {
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
};
const menuText = {
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
};
export default Menu;
