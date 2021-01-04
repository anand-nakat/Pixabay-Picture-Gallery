import React, { useEffect, useState, useCallback } from "react";

import SearchForm from "./components/SearchForm";
import PictureGallery from "./components/PictureGallery";

function App() {
  const [loading, setLoading] = useState(true);
  const [IsModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [pictures, setPictures] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [totalResults, setTotalResults] = useState(0);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      let response = await fetch(
        `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${searchTerm}
        &image_type=photo&pretty=true`
      );
      let data = await response.json();
      let { hits } = data;
      setLoading(false);
      setTotalResults(hits.length);
      setPictures(hits);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    setModalContent("Hover/Click on Image to view image in Full Size ");
    setIsModalOpen(true);
  }, []);
  return (
    <>
      <SearchForm setSearchTerm={setSearchTerm} searchTerm={searchTerm} />

      <PictureGallery
        searchTerm={searchTerm}
        pictures={pictures}
        totalHits={totalResults}
        loading={loading}
        setSearchTerm={setSearchTerm}
        modalContent={modalContent}
        setModalContent={setModalContent}
        closeModal={closeModal}
        IsModalOpen={IsModalOpen}
      />
    </>
  );
}

export default App;
