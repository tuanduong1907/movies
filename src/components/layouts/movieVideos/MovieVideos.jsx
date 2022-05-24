import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiKey, fetcher } from "../../../configs/config";

const MovieVideos = () => {
  const { movieId } = useParams();
  const { data } = useSWR(
    `
      https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`,
    fetcher
  );
  if (!data) return null;
  const { results } = data;
  if (!results || results.length <= 0) return null;
  return (
    <section className="mb-10">
      <h2 className="text-center text-2xl mb-10">Trailer</h2>
      <div className="flex flex-col gap-10">
        {results.slice(0, 2).map((item) => (
          <div className="" key={item.id}>
            <h3 className="text-lg mb-5 font-semibold bg-secondary inline-block p-3 rounded-lg">
              {item.name}
            </h3>
            <div className="w-full aspect-video">
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${item.key}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full object-fill"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MovieVideos;
