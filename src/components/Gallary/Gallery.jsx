import styles from "./Gallery.module.css";
import { GalleryContext } from "./GalleryContext";

import React, { useContext} from "react";

export const Gallery = () => {
  const {images, onClick} = useContext(GalleryContext)



  return(
      <ul className={styles.list}>
    {images.map((img) => (
      <li key={img.id} className={styles.item}>
        <img
          className={styles.image}
          src={img.small}
          onClick={() => onClick(img.large)}
          alt=""
        />
      </li>
    ))}
  </ul>
  )
  
};