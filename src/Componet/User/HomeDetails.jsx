 import React from "react";
import { useLoaderData, useNavigate } from "react-router";

export const HomeDetails = () => {
  const user = useLoaderData();
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="max-w-xl mx-auto px-5 py-16 text-center">
        <p className="text-slate-600 text-base font-medium bg-slate-50 border border-slate-200 rounded-xl py-8 px-6">
          ইউজার ডেটা পাওয়া যায়নি।
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto px-5 py-10 bg-white text-slate-900">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="mb-5 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-800 text-sm font-medium transition-colors cursor-pointer"
      >
        ← Back
      </button>

      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col gap-3.5">
        <div className="border-b border-slate-100 pb-4">
          <span className="inline-block text-xs font-semibold text-[#3730a3] bg-indigo-50 px-3 py-1 rounded-full mb-2">
            @{user.username}
          </span>
          <h2 className="text-2xl font-bold text-slate-900">{user.name}</h2>
        </div>

        <p className="text-sm text-slate-600">
          <strong className="font-semibold text-slate-800">Email:</strong>{" "}
          {user.email}
        </p>

        <p className="text-sm text-slate-600">
          <strong className="font-semibold text-slate-800">Phone:</strong>{" "}
          {user.phone}
        </p>

        <p className="text-sm text-slate-600">
          <strong className="font-semibold text-slate-800">Website:</strong>{" "}
          <a
            href={`https://${user.website}`}
            target="_blank"
            rel="noreferrer"
            className="text-[#3730a3] hover:underline"
          >
            {user.website}
          </a>
        </p>

        <p className="text-sm text-slate-600">
          <strong className="font-semibold text-slate-800">Address:</strong>{" "}
          {user.address?.street}, {user.address?.suite}, {user.address?.city} -{" "}
          {user.address?.zipcode}
        </p>

        <div className="mt-2 pt-4 border-t border-slate-100 text-sm text-slate-600">
          <strong className="font-semibold text-slate-800">Company:</strong>{" "}
          {user.company?.name}{" "}
          {user.company?.catchPhrase && (
            <span className="text-slate-500 italic">
              ({user.company.catchPhrase})
            </span>
          )}
        </div>
      </div>
    </div>
  );
};