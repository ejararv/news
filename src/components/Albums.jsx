import React, { useEffect, useState } from "react";
import AlbumCard from "../UI/AlbumCard/AlbumCard";
import "./../styles/styles.css";
const BASE_URL = `https://jsonplaceholder.typicode.com/photos?_limit=10`;
const Albums = () => {
  const [albums, setAlbums] = useState([]);

  async function fetchData() {
    await fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => setAlbums(data));
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container_albums">
      {albums.map((album) => {
        return (
          <>
            <div className="card" key={album.id}>
              <AlbumCard imgUrl={album.thumbnailUrl.toString()} />
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Albums;
