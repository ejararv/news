import React, { useEffect, useState, useRef } from "react";
import APIService from "../API/APIService";
import { useFetch } from "../hooks/useFetch";
import { getPageCount } from "../utils/pagesCounter";
import "./../styles/styles.css";
import AlbumsList from "./AlbumsList";

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const [limit, setLimit] = useState(200);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [fetchAlbums, isLoading] = useFetch(async () => {
    const response = await APIService.getAllAlbums(limit, page);
    setAlbums(response.data);
    const total = response.headers["x-total-count"];
    setTotalPages(getPageCount(total, limit));
  });

  const lastElement = useRef();
  const observer = useRef();

  //IntersectionObserver
  useEffect(() => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();
    var callback = function (entries) {
      if (entries[0].isI) {
        console.log("Div is visible");
        setPage(page + 1);
      }
    };
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(lastElement.current);
  }, [isLoading]);

  useEffect(() => {
    fetchAlbums(limit, page);
  }, [page]);

  return (
    <div className="container_albums">
      <AlbumsList albums={albums} key={albums.id} />
      <div ref={lastElement} style={{ height: 20, background: "red" }} />
      <div></div>
    </div>
  );
};

export default Albums;
