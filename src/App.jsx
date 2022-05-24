import { Route, Routes } from "react-router-dom";
import "swiper/scss";
import Main from "./components/layouts/Main";
import HomePage from "./pages/HomePage";
import MoviesDetailPage from "./pages/MoviesDetailPage";
import MoviesPage from "./pages/MoviesPage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Main></Main>}>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/movies" element={<MoviesPage></MoviesPage>}></Route>
          <Route
            path="/movie/:movieId"
            element={<MoviesDetailPage></MoviesDetailPage>}
          ></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
