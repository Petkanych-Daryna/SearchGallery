import styles from "./Button.module.css";
import { useContext} from "react";

import {GalleryContext } from "./GalleryContext";


export const Button = () => {

    const {setPage, images}= useContext(GalleryContext);

    if (images.length === 0 ) return null

    return(
        <button className={styles.button}  onClick={() => setPage(prev => prev + 1)} >Load more</button>
    )

}

// 1