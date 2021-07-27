import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import styles from './menuItem.module.scss'
const MenuItem = ({text, url, style}) => {
  const [active, setActive] = useState('')
    const onClick = (data, url) => {
        console.log(url);
        return data
    }
  return (
    <div
     className={styles.item}
      onClick={()=> {onClick(text, url)}}
    >
      <p
        className={styles.text}
      >
      {text}
      </p>
    </div>
  );
};
export default MenuItem;
