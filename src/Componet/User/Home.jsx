 import { use } from "react";
import { NavLink } from "react-router";
import { Salider } from "../Salider/Salider";

export const Home = ({ promisce }) => {
  const users = use(promisce);

  return (
    <>
      <Salider />

      <div className="max-w-6xl mx-auto px-5 py-8 bg-white text-slate-900">
        <div className="flex items-center justify-between gap-4 mb-6">
          <h2 className="text-2xl font-bold text-slate-900">
            All Books({users?.length ?? 0})
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {users?.map((user) => (
            <div
              key={user.id}
              className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col gap-2"
            >
              <span className="text-xs font-semibold text-[#3730a3] bg-indigo-50 px-2.5 py-0.5 rounded-full w-fit">
                @{user.username}
              </span>

              <h3 className="mt-1 text-lg font-semibold text-slate-900">
                {user.name}
              </h3>

              <p className="text-sm text-slate-600 break-all">
                <strong className="font-medium text-slate-800">Email:</strong>{" "}
                {user.email}
              </p>

              <p className="text-sm text-slate-600">
                <strong className="font-medium text-slate-800">Phone:</strong>{" "}
                {user.phone}
              </p>

              <p className="text-sm text-slate-600">
                <strong className="font-medium text-slate-800">City:</strong>{" "}
                {user.address?.city}
              </p>

              <div className="mt-auto pt-3 border-t border-slate-100 text-xs text-slate-500">
                Company:{" "}
                <strong className="font-semibold text-slate-700">
                  {user.company?.name}
                </strong>
              </div>

              <NavLink
                to={`/Home/${user.id}`}
                className="mt-2 block text-center py-2 px-3 rounded-lg bg-[#3730a3] hover:bg-[#2e278c] text-white text-sm font-medium transition-colors no-underline"
              >
                Details
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};