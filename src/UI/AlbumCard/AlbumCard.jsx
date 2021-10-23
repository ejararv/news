import React from "react";
import classes from "./AlbumCard.module.css";

const AlbumCard = (props) => {
  return (
    <div className={classes.card}>
      <img src={props.imgUrl} className={classes.card_media} alt="test" />
      <h4>text</h4>
    </div>
  );
};

export default AlbumCard;
