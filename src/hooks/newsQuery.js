import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { CategoryContext } from "../provider/CategoryProvider";

const useNewQuery = () => {
  const [allNews, setAllNews] = useState([]);
  const [loading, setLoading] = useState({
    state: true,
    message: "featching news",
  });
  const [error, setError] = useState(null);
  const { selectedCategory, setselectedCategory } = useContext(CategoryContext);

  const fetchNews = async (category = null) => {
    try {
      const response = await fetch("http://localhost:3000/allNews");
      if (!response.ok) {
        throw new Error("Failed to fetch news");
      }
      const data = await response.json();
      setAllNews(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading({
        state: false,
        message: "",
      });
    }
  };

  useEffect(() => {
    setLoading({
      state: true,
      message: "Finding news ... ",
    });
    if (selectedCategory) {
      fetchNews(selectedCategory);
    } else {
      fetchNews();
    }
  }, [selectedCategory]);

  return { allNews, error, loading };
};
export default useNewQuery;
