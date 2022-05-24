import React from "react";
import { useNavigate } from "react-router-dom";
import AppButton from "../../projects/app-button/AppButton";

const MoviesCard = ({ item }) => {
  const { title, release_date, vote_average, poster_path, id } = item;
  const navigate = useNavigate();
  return (
    <div className="flex flex-col movie-item p-3 rounded-lg bg-slate-800 h-full">
      <div className="w-full h-[250px] mb-5 rounded-lg overflow-hidden">
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt=""
          className="object-cover w-full h-full select-none"
        />
      </div>
      <div className="flex-1 flex flex-col">
        <h3 className="text-white font-semibold text-xl mb-3">{title}</h3>
        <div className="flex justify-between items-center text-gray-300 mb-5">
          <span className="text-base">
            {new Date(release_date).getFullYear()}
          </span>
          <span className="text-base">{vote_average}</span>
        </div>
        <AppButton onClick={() => navigate(`/movie/${id}`)}>
          Watch now
        </AppButton>
      </div>
    </div>
  );
};

export default MoviesCard;
