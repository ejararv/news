import React, { useEffect, useState } from "react";
import APIService from "../API/APIService";
import AlbumCard from "../UI/AlbumCard/AlbumCard";
import "./../styles/styles.css";

const Albums = () => {
  const [albums, setAlbums] = useState([]);

  async function fetchData() {
    const response = await APIService.getAllPhotos();
    setAlbums(response.data);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container_albums">
      {albums.map((a) => {
        return (
          <>
            <div className="card" key={a.id}>
              <AlbumCard imgUrl={a.thumbnailUrl.toString()} />
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Albums;
