import { createBrowserRouter } from "react-router";
import { Rout } from "./Rout";

import { Suspense } from "react";
import { HomeDetails } from "./Componet/User/HomeDetails";
import { Home } from "./Componet/User/Home";
import { Error } from "./Error";
import { Listed } from "./Componet/Listed/Listed";
import { Wishlist } from "./Componet/Wishlist/Wishlist";
    
    const promisce = fetch("Books.json")
    .then(res => res.json())

 export const router = createBrowserRouter([
  {
    path: "/",
    element:<Rout/>,
    children:[
          {
        path:"/",
        element:<Suspense fallback={<span> Loding......</span>}>
          <Home promisce={promisce}></Home>
        </Suspense>
        },
        {
  path: "Home/:bookId",
  loader: async ({ params }) => {
    const res = await fetch("/Books.json")
    .then((res)=> res.json());
    return (
      res.find((book) => Number(book.bookId) === Number(params.bookId)) ??
      null
    );
  },
 
  element: <HomeDetails />,
},
 {
    path:"/listed",
    element:<Listed/>
  },
  {
    path:"/wishliste",
    element:<Wishlist/>
  }
    ],
    errorElement:<Error/>
  },
]);