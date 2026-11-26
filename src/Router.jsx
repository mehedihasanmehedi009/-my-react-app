import { createBrowserRouter } from "react-router";
import { Rout } from "./Rout";

import { Suspense } from "react";
import { HomeDetails } from "./Componet/User/HomeDetails";
import { Home } from "./Componet/User/Home";
import { Error } from "./Error";
    
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
  path: "Home/:id",
  loader: ({ params }) =>
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
  element: <HomeDetails/>
},


    ],
    errorElement:<Error/>
  },
]);