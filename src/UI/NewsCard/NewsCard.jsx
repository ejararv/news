import React from "react";
import classes from "./NewsCard.module.css";
import LikeButton from "../LikeButton/LikeButton";

const NewsCard = ({ children, ...props }) => {
  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <h4 className={classes.title}>{props.title}</h4>
        <h4 className={classes.body}>{props.text}</h4>
        <LikeButton />
        <div className={classes.card_footer}>{children}</div>
      </div>
    </div>
  );
};

export default NewsCard;
