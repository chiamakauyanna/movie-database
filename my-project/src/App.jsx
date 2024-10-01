import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DisplayMovie from "./components/displaymovie";
import MovieDetails from "./components/MovieDetails"; // Import the new MovieDetailsPage component

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for the movie list */}
        <Route path="/" element={<DisplayMovie />} />
        {/* Route for the movie details page */}
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
};

export default App;