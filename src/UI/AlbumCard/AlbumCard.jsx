import React, { useState, useEffect } from "react";
import APIService from "../../API/APIService";
import classes from "./AlbumCard.module.css";

const AlbumCard = (props) => {
  const [firstPhoto, setFirstPhoto] = useState([]);
  const getFirstPhoto = async (id) => {
    let res = await APIService.getFirstPhotoOfAlbum(id);
    setFirstPhoto(res);
    return res;
  };

  useEffect(() => {
    getFirstPhoto(props.userId);
  });

  return (
    <div className={classes.card}>
      <img src={firstPhoto} className={classes.card_media} alt="test" />
      <h4>{props.id} Id</h4>
      <h4>{props.userId} UserId</h4>
      <h4>{props.title}</h4>
    </div>
  );
};

export default AlbumCard;
