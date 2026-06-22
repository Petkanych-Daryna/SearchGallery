import { useContext, useEffect, useRef, useState } from "react";
import {GalleryContext } from "./GalleryContext";
import styles from "./Search.module.css";

export const Searchbar = () => {

  const {setQuery, setImages, setPage}= useContext(GalleryContext);
  const [input, setinput] = useState("")
  const inputRef = useRef(null)

  useEffect(()=> {
    inputRef.current.focus()
  },[])


  const handleSubmit = (e) => {
    e.preventDefault();

    const value = input.trim();
    if (!value) return;

    setQuery(value);
    setImages([]);
    setinput("")
    setPage(1)
    inputRef.current.focus()
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input className={styles.input} ref={inputRef} value={input} onChange={e => setinput(e.target.value)}  name="search" placeholder="Search images..." />
      <button className={styles.button} type="submit">Search</button>
    </form>
  );
};

// перечитати теорію, попрацювати з useRef