import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./loader";
import GifList from "./GifList";

const TrendingComponent = () => {
  const [loading, setLoading] = useState(false);
  const [giphyData, setGiphyData] = useState([]);

  useEffect(() => {
    const fetchTrendingData = async () => {
      setLoading(true);
      const trendingData = await axios.get(
        `https://api.giphy.com/v1/gifs/trending?api_key=5pz3ijoel9TP8PVJPb0SDND5kdXihPyc&rating=g`
      );
      setGiphyData(trendingData.data.data);
      setLoading(false);
      console.log(trendingData);
    };
    fetchTrendingData();
  }, []);

  return (
    <div className="container">
      {loading ? <Loader /> : <GifList giphyData={giphyData} />}
    </div>
  );
};

export default TrendingComponent;
