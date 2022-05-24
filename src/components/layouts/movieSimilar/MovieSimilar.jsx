import React from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import { apiKey, fetcher } from "../../../configs/config";
import MoviesCard from "../../movies/MoviesCard";

const MovieSimilar = () => {
  const { movieId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${apiKey}`,
    fetcher
  );
  if (!data) return null;
  const { results } = data;
  if (!results || results.length <= 0) return null;
  console.log(results);
  return (
    <section>
      <h1>Similar Movies</h1>
      <div className="movies-list">
        <Swiper slidesPerView={"auto"} spaceBetween={40}>
          {results.map((item) => (
            <SwiperSlide key={item.id}>
              <MoviesCard item={item}></MoviesCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default MovieSimilar;
