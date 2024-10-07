import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Movie from './components/pages/Movie';
import MovieDetails from './components/MovieDetails'; // Import the new MovieDetailsPage component
import TvShows from './components/pages/TvShows';
import TvShowsDetails from './components/TvShowsDetails';
import Home from './components/pages/Home';
import SearchResults from './components/SearchResults';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/tvshows" element={<TvShows />} />
        <Route path="/tvshows/:id" element={<TvShowsDetails />} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/search-results/:id" element={<MovieDetails /> || <TvShowsDetails/>} />
      </Routes>
    </Router>
  );
};

export default App;
