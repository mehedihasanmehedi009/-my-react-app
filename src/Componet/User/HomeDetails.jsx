 import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router";

export const HomeDetails = () => {
  const book = useLoaderData();
  const navigate = useNavigate();

  const [addedToRead, setAddedToRead] = useState(false);
  const [addedToWishlist, setAddedToWishlist] = useState(false);
 

  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags = [],
    publisher,
    yearOfPublishing,
  } = book;

  return (
    <section className="max-w-5xl mx-auto my-6 px-4 sm:px-6 py-8 bg-white text-slate-900 rounded-2xl">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="mb-6 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-sm font-medium transition-colors cursor-pointer"
      >
        ← Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center">
        {/* Left: Book Cover Container */}
        <div className="md:col-span-5 bg-[#f3f3f3] rounded-2xl p-6 sm:p-10 flex items-center justify-center min-h-[340px] sm:min-h-[440px]">
          <img
            src={image}
            alt={bookName}
            className="max-h-80 sm:max-h-96 w-auto object-contain rounded-md shadow-md"
          />
        </div>

        {/* Right: Book Details */}
        <div className="md:col-span-7 flex flex-col">
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#131313] tracking-tight">
            {bookName}
          </h2>
          <p className="mt-2 text-sm sm:text-base font-medium text-slate-600">
            By : <span className="text-slate-700">{author}</span>
          </p>

          {/* Category */}
          <div className="mt-4 py-3 border-y border-slate-200 text-sm font-medium text-slate-700">
            {category}
          </div>

          {/* Review */}
          <div className="mt-4">
            <p className="text-sm leading-relaxed text-slate-600">
              <strong className="font-bold text-[#131313]">Review : </strong>
              {review}
            </p>
          </div>

          {/* Tags */}
          <div className="mt-5 pb-5 border-b border-slate-200 flex items-center flex-wrap gap-2.5">
            <span className="text-sm font-bold text-[#131313] mr-1">Tag</span>
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs font-semibold text-[#3730a3] bg-indigo-50 px-3.5 py-1.5 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Meta Info Rows */}
          <div className="mt-5 space-y-2.5 text-sm max-w-sm">
            <div className="grid grid-cols-2 gap-4">
              <span className="text-slate-500">Number of Pages:</span>
              <span className="font-bold text-[#131313]">{totalPages}</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <span className="text-slate-500">Publisher:</span>
              <span className="font-bold text-[#131313]">{publisher}</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <span className="text-slate-500">Year of Publishing:</span>
              <span className="font-bold text-[#131313]">
                {yearOfPublishing}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <span className="text-slate-500">Rating:</span>
              <span className="font-bold text-[#131313]">{rating}</span>
            </div>
          </div>

          {/* Read & Wishlist Buttons */}
          <div className="mt-7 flex flex-wrap items-center gap-3.5">
            <button
              type="button"
              onClick={() => setAddedToRead((prev) => !prev)}
              className={`px-6 py-3 rounded-lg text-sm font-semibold border transition-colors cursor-pointer ${
                addedToRead
                  ? "bg-[#3730a3] text-white border-[#3730a3]"
                  : "bg-white text-[#131313] border-slate-300 hover:bg-slate-50"
              }`}
            >
              {addedToRead ? "Read ✓" : "Read"}
            </button>

            <button
              type="button"
              onClick={() => setAddedToWishlist((prev) => !prev)}
              className={`px-6 py-3 rounded-lg text-sm font-semibold text-white transition-opacity cursor-pointer ${
                addedToWishlist
                  ? "bg-[#3730a3] hover:opacity-90"
                  : "bg-[#ec268f] hover:opacity-90"
              }`}
            >
              {addedToWishlist ? "Wishlist ✓" : "Wishlist"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};