import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import ArtistList from "./components/artistList/ArtistList";
import Artist from "./components/artist/Artist";
import Track from "./components/track/Track";
import "./app.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/genre/:tag" element={<ArtistList />} />
          <Route path="genre/:tag/artist/:artistId" element={<Artist />} />
          <Route
            path="genre/:tag/artist/:artistName/track/:trackName"
            element={<Track />}
          />
        </Routes>
      </Router>

      <h1>Elle, elle aime ! dans app</h1>
    </div>
  );
}

export default App;
