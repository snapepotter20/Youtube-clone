import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import SearchPage from "./SearchPage";
import RecommendedVideos from "./RecommendedVideos";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/search/:searchTerm" element={<div className="app__page">
                  <SideBar />
                  <SearchPage />
                </div>} />
          <Route
            path="/"
            element={
                <div className="app__page">
                  <SideBar />
                  <RecommendedVideos />
                </div>
            }
          />
        </Routes>
      </Router>

      {/* <Header />
      <div className="app__page">
        <SideBar />
        <RecommendedVideos />
      </div> */}
    </div>
  );
}

export default App;
