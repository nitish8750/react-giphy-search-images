import { useEffect, useState } from "react";
import axios from "axios";
import GifList from "./components/GifList";
import SearchBar from "./components/SearchBar";
import "./styles.css";
import Loader from "./components/loader";
import { useNavigate } from "react-router-dom";
// import {}

export default function App() {
  const history = useNavigate();
  const [paginate, setPaginate] = useState(0);
  const [loading, setLoading] = useState(false);
  const [searchtext, setSearchText] = useState("");
  const [giphyData, setGiphyData] = useState([]);

  useEffect(() => {}, []);

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setSearchText(e.target.value);
  };

  const fetchGifs = async () => {
    setLoading(true);
    const gifsData = await axios.get(
      `https://api.giphy.com/v1/gifs/search?api_key=5pz3ijoel9TP8PVJPb0SDND5kdXihPyc&q=${searchtext}`
    );
    setGiphyData(gifsData.data.data);
    setLoading(false);
    console.log(gifsData);
  };

  const handleSearchGifs = (e) => {
    e.preventDefault();
    if (searchtext === "") return false;
    fetchGifs();
  };

  const handleNavigate = () => {
    history("/trending");
  };

  // const fetchNextPage = () => {
  //   const item = giphyData.
  // }

  return (
    <div className="App">
      <div className="container">
        <button type="button" onClick={handleNavigate}>
          View Trending gifs
        </button>
        <SearchBar
          searchVal={searchtext}
          onChangeSearchInput={handleInputChange}
          onGifsSubmit={handleSearchGifs}
        />
        {loading ? <Loader /> : <GifList giphyData={giphyData} />}
      </div>
    </div>
  );
}
