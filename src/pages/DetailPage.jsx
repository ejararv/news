import React, { useEffect, useState } from "react";
import "./../styles/styles.css";
import { useParams } from "react-router";
import APIService from "../API/APIService";

const DetailPage = () => {
  const params = useParams();
  const [news, setNews] = useState(null);
  useEffect(() => {
    APIService.getById();
  });

  return (
    <div className="container">
      <h4>News detail wih id {params.id}</h4>
      <div className="news_detail"></div>
    </div>
  );
};

export default DetailPage;
