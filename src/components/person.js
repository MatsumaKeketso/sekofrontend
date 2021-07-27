import React from "react";
import styles from "./person.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
const Person = ({name, onPress}) => {
  return (
    <div className={styles.person} onClick={onPress}>
      <div className={styles.decor}></div>
      <div className={styles.content}>
        <p className={styles.view}>{name}</p>
        <div className={styles.stack}>
          <p className={styles.viewSmall}>VIEW</p>
          <FontAwesomeIcon style={{color: 'white'}} icon={faChevronRight} />
        </div>
      </div>
    </div>
  );
};

export default Person;
