import "./App.css";
import React, { useEffect, useMemo, useState } from "react";
import { GalleryContext } from "./components/Gallary/GalleryContext";
import { Searchbar } from "./components/Gallary/Search";
import { Modal } from "./components/Gallary/Modal";
import { Gallery } from "./components/Gallary/Gallery";
import { Loader } from "./components/Gallary/Loader";
import { Button } from "./components/Gallary/Button";

const API_KEY = "52746634-048ebfd846d8921f5de123532";

const App = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isModal, setIsModal] = useState(null);

  useEffect(() => {
    if (!query) return;


    fetch(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&per_page=12`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages((prev) => [...prev, ...data.hits]);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [query, page]);

  const preparedImages = useMemo(() => {
    return images.map((img) => ({
      id: img.id,
      small: img.webformatURL,
      large: img.largeImageURL,
    }));
  }, [images]);

  const openModal = (url) => {
    setIsModal(url);
  };

  const closeModal = () => {
    setIsModal(null);
  };

  return (
    <GalleryContext.Provider
      value={{
        query,
        setQuery,
        images: preparedImages,
        setImages,
        page,
        setPage,
        openModal,
        onClick: openModal,
      }}
    >
      <div className="main">
        <Searchbar />
        <Gallery />
        {isModal && <Modal image={isModal} close={closeModal} />}
        {loading && <Loader />}
        {preparedImages.length > 0 && !loading && <Button />}
      </div>
    </GalleryContext.Provider>
  );
};

export default App;