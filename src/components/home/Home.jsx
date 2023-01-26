import { useState, useEffect } from "react";
import TagCard from "../cards/TagCard";
import axios from "axios";
import "./home.css";
import vinyl from "../../assets/vinyl.png";
import loupeSearch from "../../assets/search.png";

const Home = () => {
  const apiKey = "api_key=edabdc8efa6ff44658d08a93a343cf21";
  const [tags, setTags] = useState();
  const [loading, setLoading] = useState(true);
  const [searchTag, setSearchTag] = useState("");

  useEffect(() => {
    setTimeout(
      () =>
        axios
          .get(
            `https://ws.audioscrobbler.com/2.0/?method=tag.getTopTags&${apiKey}&format=json`
          )
          .then((res) => res.data.toptags.tag)
          .then((data) => {
            setTags(data);
            setLoading(false);
          }),
      500
    );
  }, []);

  return (
    <div className="home-div">
      <div className="inputSearch">
        {" "}
        <label>
 albumLength
          <img src={loupeSearch} alt="" width="18px" />

          <img src={loupeSearch} alt="" width="20px" />
 main
        </label>
        <input
          className="searchInput"
          type="text"
          placeholder="rechercher un thème"
          value={searchTag}
          onChange={(e) => setSearchTag(e.target.value.toLowerCase())}
        />
      </div>
      {loading ? (
        <div className="vinylContainer">
 albumLength
          <img className="vinyl" alt="" src={vinyl} height="300" width="300" />

          <img className="vinyl" src={vinyl} alt="" height="300" width="300" />
 main
        </div>
      ) : null}
      <div className="cardsContainer">
        {tags &&
          tags
            .filter((tag) => tag.name.toLowerCase().includes(searchTag))
            .map((tag, index) => <TagCard key={index} name={tag.name} />)}
      </div>
    </div>
  );
};

export default Home;
