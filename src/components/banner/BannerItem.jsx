import React from "react";
import { useNavigate } from "react-router-dom";
import AppButton from "../../projects/app-button/AppButton";

const BannerItem = ({ item }) => {
  const { poster_path, title, id } = item;
  const navigate = useNavigate();
  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,.5)] to-[rgba(0,0,0,.5)]"></div>

      <img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt=""
        className="object-cover w-full h-full select-none"
      />
      <div className="absolute bottom-0 w-full left-5">
        <h2 className="mb-5 text-3xl font-bold text-white">{title}</h2>
        <div className="flex gap-3 mb-5">
          <span className="px-4 py-2 text-sm text-white border border-gray-200 border-solid rounded-lg">
            Action
          </span>
          <span className="px-4 py-2 text-sm text-white border border-gray-200 border-solid rounded-lg">
            Action
          </span>
          <span className="px-4 py-2 text-sm text-white border border-gray-200 border-solid rounded-lg">
            Action
          </span>
        </div>
        <AppButton className="mb-5 w-auto" onClick={() => navigate(`/movie/${id}`)}>
          Watch now
        </AppButton>
      </div>
    </div>
  );
};

export default BannerItem;
