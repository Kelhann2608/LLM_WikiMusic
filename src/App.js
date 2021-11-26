import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import ArtistList from "./components/artistList/ArtistList";
import Artist from "./components/artist/Artist";
import "./app.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/genre/:tag" element={<ArtistList />} />
          <Route path="/genre/:tag/artist/:artistName" element={<Artist />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
