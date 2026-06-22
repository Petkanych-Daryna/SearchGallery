import React, { useEffect } from "react";
import styles from "./Modal.module.css";

export const Modal = ({ image, close }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [close]);

  return (
    <>
      <div
      className={styles.overlay}
        onClick={close}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "rgba(0,0,0,0.6)",
          zIndex: 9998,
        }}
      />
      <div
      className={styles.modal}
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 9999,
        }}
      >
        <img
        className={styles.image}
          src={image}
          alt=""
          style={{
            maxWidth: "90vw",
            maxHeight: "90vh",
          }}
        />
      </div>
    </>
  );
};