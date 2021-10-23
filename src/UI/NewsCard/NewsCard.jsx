import React from "react";
import classes from "./NewsCard.module.css";

const NewsCard = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <h4 className={classes.title}>{props.title}</h4>
        <h4 className={classes.body}>{props.text}</h4>
      </div>
    </div>
  );
};

export default NewsCard;
