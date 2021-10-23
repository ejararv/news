import React, { useEffect, useState, useRef } from "react";
import APIService from "../API/APIService";
import { useFetch } from "../hooks/useFetch";
import AlbumCard from "../UI/AlbumCard/AlbumCard";
import "./../styles/styles.css";
import AlbumsList from "./AlbumsList";

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [fetchAlbums, isLoading] = useFetch(async (limit, page) => {
    const response = await APIService.getAllPhotos();
    setAlbums(response.data);
  });

  const lastElement = useRef();
  const observer = useRef();

  useEffect(() => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();
    var callback = function (entries) {
      if (entries[0].isIntersecting) {
        console.log("Div is visible");
        setPage(page + 1);
      }

      /* Content excerpted, show below */
    };
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(lastElement.current);
  }, [isLoading]);

  useEffect(() => {
    fetchAlbums(limit, page);
  }, [page]);

  const swipeAlbums = () => {};
  return (
    <div className="container_albums">
      <AlbumsList albums={albums} />
      <div ref={lastElement} style={{ height: "20px", background: "red" }} />
    </div>
  );
};

export default Albums;
