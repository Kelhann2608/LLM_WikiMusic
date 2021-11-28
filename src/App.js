import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import ArtistList from "./components/artistList/ArtistList";
import Artist from "./components/artist/Artist";
import Footer from "./components/footer/footer";
import Welcome from "./components/welcome/Welcome";
import "./app.css";

function App() {
  return (
    <div className="App">
      <Router basename="/LLM_WikiMusic/">
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route path="/genres" element={<><Header /><Home /></>} />
          <Route path="/genre/:tag" element={<><Header /><ArtistList /></>} />
          <Route path="/genre/:tag/artist/:artistName" element={<><Header /><Artist /></>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
