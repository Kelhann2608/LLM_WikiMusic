import { useState, useEffect } from "react";
import TagCard from "../cards/TagCard";
import axios from "axios";
import "./home.css";

const Home = () => {
  const apiKey = "api_key=edabdc8efa6ff44658d08a93a343cf21";
  const [tags, setTags] = useState();

  useEffect(() => {
    axios
      .get(
        `https://ws.audioscrobbler.com/2.0/?method=tag.getTopTags&${apiKey}&format=json`
      )
      .then((res) => res.data.toptags.tag)
      .then((data) => setTags(data));
  }, []);

  return (
    <div className="cardsContainer">
      {tags &&
        tags.map((tag, index) => <TagCard key={index} name={tag.name} />)}
      je suis home
    </div>
  );
};

export default Home;
