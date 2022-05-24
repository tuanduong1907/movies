import React, { useEffect, useState } from "react";
import MoviesCard from "./MoviesCard";
import { Swiper, SwiperSlide } from "swiper/react";
import AppTitleMovies from "../../projects/app-title-movies/AppTitleMovies";
import useSWR from "swr";
import { apiKey, fetcher } from "../../configs/config";

const MoviesList = ({ title, type }) => {
  const [movies, setMovies] = useState([]);
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${type}?api_key=${apiKey}`,
    fetcher
  );
  useEffect(() => {
    if (data && data.results) setMovies(data.results);
  }, [data]);
  return (
    <section className="movies-layout page-container mb-20">
      {title && <AppTitleMovies title={title}></AppTitleMovies>}
      <div className="movies-list">
        <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"}>
          {movies.length > 0 &&
            movies.map((item) => (
              <SwiperSlide key={item.id}>
                <MoviesCard item={item}></MoviesCard>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default MoviesList;
