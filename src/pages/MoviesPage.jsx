/* eslint-disable jsx-a11y/heading-has-content */
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import useSWR from "swr";
import MoviesCard from "../components/movies/MoviesCard";
import { apiKey, fetcher } from "../configs/config";
import useDebounce from "../hooks/useDebounce";

const itemsPerPage = 20;

const MoviesPage = () => {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [nextPage, setNextPage] = useState(1);
  const [filter, setFilter] = useState("");
  const filterDebounce = useDebounce(filter, 500);
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${nextPage}`
  );
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  const { data, error } = useSWR(url, fetcher);
  const loading = !data && !error;
  useEffect(() => {
    if (filterDebounce) {
      setUrl(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${filterDebounce}&page=${nextPage}`
      );
    } else {
      setUrl(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${nextPage}`
      );
    }
  }, [filterDebounce, nextPage]);
  const movies = data?.results || [];
  useEffect(() => {
    if (!data || !data.total_results) return;
    setPageCount(Math.ceil(data.total_results / itemsPerPage));
  }, [data, itemOffset]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.total_results;
    setItemOffset(newOffset);
    setNextPage(event.selected + 1);
  };
  return (
    <section className="py-10 page-container">
      <div className="flex mb-10">
        <input
          type="text"
          placeholder="Type here to search"
          className="flex-1 p-4 outline-none bg-slate-800 text-white"
          onChange={handleFilterChange}
        />
        <button className="p-4 bg-primary text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      {loading && (
        <div className="grid grid-cols-4 gap-10">
          {Array(8)
            .fill()
            .map((item, index) => (
              <div
                key={index}
                className="flex flex-col movie-item p-3 bg-slate-800 rounded-lg h-full"
              >
                <div className="w-full h-[250px] mb-5 ani rounded-lg bg-slate-700 overflow-hidden animate-pulse	"></div>
                <div className="flex-1 flex flex-col">
                  <h3 className=" mb-3 h-5 rounded-lg bg-slate-700 animate-pulse"></h3>
                  <h3 className=" mb-3 h-2 rounded-lg bg-slate-700 animate-pulse"></h3>
                  <div className="flex justify-between items-center mb-5">
                    <span className="text-base h-5 rounded-lg bg-slate-700 animate-pulse	"></span>
                  </div>
                  <button className="w-full mt-auto cursor-default h-10 rounded-lg bg-slate-700 animate-pulse"></button>
                </div>
              </div>
            ))}
        </div>
      )}
      <div className="grid grid-cols-4 gap-10">
        {!loading &&
          movies.length > 0 &&
          movies.map((item) => (
            <MoviesCard key={item.id} item={item}></MoviesCard>
          ))}
      </div>
      <div className="mt-10">
        <ReactPaginate
          breakLabel="..."
          nextLabel={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          }
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          }
          renderOnZeroPageCount={null}
          className="pagination"
        />
      </div>
    </section>
  );
};

export default MoviesPage;
