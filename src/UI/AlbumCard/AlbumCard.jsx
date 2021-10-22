import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import clases from "./AlbumCard.module.css";

const AlbumCard = (props) => {
  return (
    <Card className={clases.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className="card_media"
          image={props.imgUrl}
          title="Contemplative Reptile"
        />
      </CardActionArea>
    </Card>
  );
};

export default AlbumCard;
