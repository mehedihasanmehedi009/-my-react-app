 import { use } from "react";
import { NavLink } from "react-router";
import { Salider } from "../Salider/Salider";

export const Home = ({ promisce }) => {
  const users = use(promisce);

  return (
    <>
      <Salider />

      <div className="max-w-6xl mx-auto px-5 py-8 text-slate-900">
        <div className=" text-center gap-4 mb-6">
          <h2 className="text-2xl font-bold text-slate-900">
            All Books({users?.length ?? 0})
          </h2>
        </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((book) => (
          <article
            key={book.bookId}
            className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
          >
            {/* Book Cover Box */}
            <div className="bg-[#f8fafc] border border-slate-100 rounded-xl h-56 flex items-center justify-center p-4 mb-4 overflow-hidden">
              <img
                src={book.image}
                alt={book.bookName}
                className="h-full w-auto object-contain rounded-md shadow-xs transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-3">
              {book.tags?.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs font-medium text-[#3730a3] bg-indigo-50 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title & Author */}
            <h3 className="text-lg font-bold text-slate-900 line-clamp-1">
              {book.bookName}
            </h3>
            <p className="text-sm text-slate-500 mt-0.5">
              By <span className="font-medium text-slate-700">{book.author}</span>
            </p>

            {/* Short Review */}
            <p className="mt-3 text-sm text-slate-600 line-clamp-2 leading-relaxed">
              {book.review}
            </p>

            {/* Footer Meta: Category, Pages & Rating */}
            <div className="mt-auto pt-4 mt-4 border-t border-dashed border-slate-200 flex items-center justify-between text-xs font-medium text-slate-600">
              <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">
                {book.category}
              </span>
              <span>{book.totalPages} pages</span>
              <span className="text-amber-600 font-semibold">
                ★ {book.rating}
              </span>
            </div>

            {/* Details Button */}
            <NavLink
              to={`/book/${book.bookId}`}
              className="mt-4 block text-center py-2.5 px-4 rounded-lg bg-[#3730a3] hover:bg-[#2e278c] text-white text-sm font-semibold transition-colors no-underline"
            >
              View Details
            </NavLink>
          </article>
        ))}
      </div>
      </div>
    </>
  );
};