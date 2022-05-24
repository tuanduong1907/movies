import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiKey, fetcher } from "../../../configs/config";

const MovieCreadits = () => {
  const { movieId } = useParams();
  const { data } = useSWR(
    `
      https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`,
    fetcher
  );
  if (!data) return null;
  const { cast } = data;
  if (!cast || cast.length <= 0) return null;
  return (
    <section className="mb-10">
      <h2 className="text-center text-2xl mb-10">Cast</h2>
      <div className="grid grid-cols-5 gap-5">
        {cast.slice(0, 5).map((item) => (
          <div className="cast-item" key={item.id}>
            <img
              src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
              alt=""
              className="w-full h-[350px] object-cover rounded-lg mb-3"
            />
            <h3 className="text-center text-xl font-medium truncate">
              {item.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MovieCreadits;
