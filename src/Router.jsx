import { createBrowserRouter } from "react-router";
import { Rout } from "./Rout";

import { Suspense } from "react";
import { HomeDetails } from "./Componet/User/HomeDetails";
import { Home } from "./Componet/User/Home";
    
    const promisce = fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())

 export const router = createBrowserRouter([
  {
    path: "/",
    element:<Rout/>,
    children:[
          {
        path:"/Home",
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


    ]
  },
]);