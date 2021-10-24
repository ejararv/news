import React from "react";
import AlbumCard from "../UI/AlbumCard/AlbumCard";
import "./../styles/styles.css";

const AlbumsList = ({ albums }) => {
  if (!albums.length) {
    return (
      <div>
        <h4>Albums not found</h4>
      </div>
    );
  }

  return (
    <>
      {albums.map((a) => {
        if (a.id % 10 === 1) {
          return (
            <>
              <div className="card" key={a.id}>
                <AlbumCard title={a.title} id={a.id} userId={a.userId} />
              </div>
            </>
          );
        }
      })}
    </>
  );
};

export default AlbumsList;

//
