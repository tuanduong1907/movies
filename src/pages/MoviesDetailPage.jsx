import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import MovieCreadits from "../components/layouts/movieCreadits/MovieCreadits";
import MovieSimilar from "../components/layouts/movieSimilar/MovieSimilar";
import MovieVideos from "../components/layouts/movieVideos/MovieVideos";
import { apiKey, fetcher } from "../configs/config";

const MoviesDetailPage = () => {
  const { movieId } = useParams();
  const { data } = useSWR(
    `
    https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`,
    fetcher
  );
  if (!data) return null;
  const { backdrop_path, poster_path, title, genres, overview } = data;
  return (
    <section className="movies-detail page-container mb-10">
      <div className="w-full h-[600px] relative">
        <div className="absolute inset-0 bg-black  bg-opacity-60"></div>
        <div
          className="w-full h-full bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
          }}
        ></div>
      </div>
      <div className="w-[800px] h-[400px] mx-auto -mt-[200px] relative z-10 mb-10">
        <img
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <h1 className="text-3xl font-bold text-center text-white mb-10">
        {title}
      </h1>
      {genres.length > 0 && (
        <div className="flex gap-x-10 items-center justify-center mb-10">
          {genres.map((item) => (
            <span
              key={item.id}
              className="py-2 px-4 rounded border border-solid border-primary text-primary font-medium"
            >
              {item.name}
            </span>
          ))}
        </div>
      )}
      <p className="text-center text-base leading-relaxed max-w-[800px] mx-auto mb-10">
        {overview}
      </p>
      <MovieCreadits></MovieCreadits>
      <MovieVideos></MovieVideos>
      <MovieSimilar></MovieSimilar>
    </section>
  );
};

export default MoviesDetailPage;
