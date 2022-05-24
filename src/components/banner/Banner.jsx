import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { apiKey, fetcher } from "../../configs/config";
import BannerItem from "./BannerItem";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  const [movies, setMovies] = useState([]);
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`,
    fetcher
  );
  useEffect(() => {
    if (data && data.results) setMovies(data.results);
  }, [data]);
  return (
    <section className="banner h-[500px] page-container mb-20">
      <Swiper grabCursor={true} spaceBetween={20}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem item={item}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default Banner;
