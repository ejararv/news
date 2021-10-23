import React from "react";
import AlbumCard from "../UI/AlbumCard/AlbumCard";
import "./../styles/styles.css";

const AlbumsList = ({ albums }) => {
  return (
    <>
      {albums.map((a) => {
        return (
          <>
            <div className="card" key={a.id}>
              <AlbumCard imgUrl={a.thumbnailUrl.toString()} />
            </div>
          </>
        );
      })}
    </>
  );
};

export default AlbumsList;
