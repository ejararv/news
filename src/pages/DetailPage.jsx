import React, { useEffect, useState } from "react";
import "./../styles/styles.css";
import { useParams } from "react-router";
import APIService from "../API/APIService";
import { useFetch } from "../hooks/useFetch";

const DetailPage = () => {
  const params = useParams();
  const [news, setNews] = useState([]);

  const [fetchNewsById, isLoading, error] = useFetch(async (id) => {
    const response = await APIService.getNewsById(id);
    setNews(response.data);
  });

  useEffect(() => {
    fetchNewsById(params.id);
    console.log(news);
  });

  return (
    <div className="container">
      <h4>News detail wih id {params.id}</h4>
      <div className="news_detail">{news.body}</div>
    </div>
  );
};

export default DetailPage;
