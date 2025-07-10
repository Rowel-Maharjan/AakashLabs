import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Movie } from "./pages/Movie";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { MovieDetail } from "./pages/MovieDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
