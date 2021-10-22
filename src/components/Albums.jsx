import React, { useEffect, useState } from "react";
import AlbumCard from "../UI/AlbumCard/AlbumCard";
const BASE_URL = `https://jsonplaceholder.typicode.com/photos?_limit=`;
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
    <div>
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
