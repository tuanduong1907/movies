import React from "react";
import MoviesList from "../components/movies/MoviesList";
import Banner from "../components/banner/Banner"

const HomePage = () => {
  return (
    <>
    <Banner></Banner>
      <MoviesList title="Now playing" type="now_playing"></MoviesList>
      <MoviesList title="Top Rated" type="top_rated"></MoviesList>
      <MoviesList title="Trending" type="popular"></MoviesList>
    </>
  );
};

export default HomePage;
