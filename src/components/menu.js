import React, { useEffect, useState } from "react";
import MenuItem from "./menu-item";
import styles from './menu.module.scss'

const Menu = (props) => {
  const [items, setItems] = useState([]);
  let info = [];
  const itemHandler = (data) => {
    console.log(data);
  };
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
    <div className={styles.stack}>
      {items.map((el, i) => (
        <MenuItem style={{borderBottom: 'solid 2px white'}} text={el.key} url={el.url} key={i}></MenuItem>
      ))}
    </div>
  );
};

export default Menu;
