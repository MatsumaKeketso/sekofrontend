import React from "react";
import styles from "./modal.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faChevronRight } from "@fortawesome/free-solid-svg-icons";
const ModalData = ({props, closeModal}) => {
  return (
    <div className={styles.main}>
      <div className={styles.modal}>
        <div className={styles.colorOffset}>
          <div className={styles.closer}>
            <div className={styles.close} onClick={closeModal}>
              <FontAwesomeIcon
                style={{ color: "white", margin: 0 }}
                icon={faTimes}
              ></FontAwesomeIcon>
            </div>
          </div>
          <div className={styles.nameWrapper}>
            <p className={styles.lukeSkywalker}>Luke Skywalker</p>
            <p className={styles.tatooine}>Planet</p>
          </div>
          <div className={styles.bio}>
            <div className={styles.bioItem}>
              <p className={styles.height}>height</p>
              <p className={styles.value}>177</p>
            </div>
            <div className={styles.bioItem}>
              <p className={styles.height}>mass</p>
              <p className={styles.value}>177</p>
            </div>
            <div className={styles.bioItem}>
              <p className={styles.height}>hair color</p>
              <p className={styles.value}>177</p>
            </div>
            <div className={styles.bioItem}>
              <p className={styles.height}>skin color</p>
              <p className={styles.value}>177</p>
            </div>
            <div className={styles.bioItem}>
              <p className={styles.height}>eye color</p>
              <p className={styles.value}>177</p>
            </div>
            <div className={styles.bioItem}>
              <p className={styles.height}>birth year</p>
              <p className={styles.value}>177</p>
            </div>
            <div className={styles.bioItem}>
              <p className={styles.height}>gender</p>
              <p className={styles.value}>177</p>
            </div>
          </div>
          <div className={styles.origin}>
            <div className={styles.originItem}>
              <p className={styles.films}>
                Films{" "}
                <FontAwesomeIcon
                  icon={faChevronRight}
                ></FontAwesomeIcon>
              </p>{" "}
            </div>
            <div className={styles.originItem}>
              <p className={styles.films}>
              Species{" "}
                <FontAwesomeIcon
                  icon={faChevronRight}
                ></FontAwesomeIcon>
              </p>{" "}
            </div>
            <div className={styles.originItem}>
              <p className={styles.films}>
              Vehicles{" "}
                <FontAwesomeIcon
                  icon={faChevronRight}
                ></FontAwesomeIcon>
              </p>{" "}
            </div>
            <div className={styles.originItem}>
              <p className={styles.films}>
              Starships{" "}
                <FontAwesomeIcon
                  icon={faChevronRight}
                ></FontAwesomeIcon>
              </p>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalData;
