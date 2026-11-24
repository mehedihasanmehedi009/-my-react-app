import { createBrowserRouter } from "react-router";
import { Rout } from "./Rout";
import { User } from "./Componet/User/User";
import { Users } from "./Componet/User/Users";
import { Suspense } from "react";
import { UserDetails } from "./Componet/User/UserDetails";
    
    const promisce = fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())

 export const router = createBrowserRouter([
  {
    path: "/",
    element:<Rout/>,
    children:[
        {
   path:"/user",
    loader:() => fetch("https://jsonplaceholder.typicode.com/users"),
    Component:User

        },
        {
        path:"/users",
        element:<Suspense fallback={<span> Loding......</span>}>
          <Users promisce={promisce}></Users>
        </Suspense>
        },
        {
  path: "users/:id",
  loader: ({ params }) =>
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
  element: <UserDetails/>
}

                  

    ]
  },
]);