import React, { useEffect, useState } from "react";
import APIService from "../API/APIService";
import { useFetch } from "../hooks/useFetch";

import NewsList from "./NewsList";

const News = () => {
  const [news, setNews] = useState([]);

  const [fetchNews] = useFetch(async (limit, page) => {
    const response = await APIService.getAllNews();
    setNews(response.data);
  });

  useEffect(() => {
    fetchNews();
  });

  return (
    <div>
      <NewsList news={news}></NewsList>
    </div>
  );
};

export default News;
