import { createBrowserRouter } from "react-router";
import { Rout } from "./Rout";
 
 export const router = createBrowserRouter([
  {
    path: "/",
    element:<Rout/>,
    children:[
        
    ]
  },
]);