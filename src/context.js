import React, { useEffect, useCallback, useState, useContext } from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [IsModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [pictures, setPictures] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [totalResults, setTotalResults] = useState(0);
  const [imageURL, setImageURL] = useState("");

  const closeFullscreenImage = () => setImageURL("");
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  const fetchData = useCallback(async () => {
    const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${searchTerm}&image_type=photo&pretty=true`;
    setLoading(true);
    try {
      let response = await fetch(url);
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
  }, [fetchData, searchTerm]);

  useEffect(() => {
    setModalContent("Click on the Image to view it in Full Size");
    setIsModalOpen(true);
  }, []);
  return (
    <AppContext.Provider
      value={{
        loading,
        IsModalOpen,
        setIsModalOpen,
        closeModal,
        modalContent,
        pictures,
        searchTerm,
        totalResults,
        setSearchTerm,
        imageURL,
        setImageURL,
        closeFullscreenImage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
