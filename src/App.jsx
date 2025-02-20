import { createBrowserRouter, RouterProvider } from "react-router-dom"

import HomePage from "./pages/HomePage"
import Layout from "./components/Layout"
import ReviewPage from "./pages/ReviewPage"
import CartPage from "./pages/CartPage"
import LoginPage from "./pages/LoginPage"
import MenuPage from "./pages/MenuPage"


function App() {

  const router = createBrowserRouter([
    {
      element: <Layout/>,
      children:[
        {
          path:"/",
          element:<HomePage/>
        },
        {
          path:"/reviews",
          element: <ReviewPage/>
        },
        {
          path: "/cart",
          element: <CartPage/>
        },
        {
          path:`/:id/menu`,
          element:<MenuPage/>
        }
      ]
    },
    {
      path: "/login",
      element:<LoginPage/>
    }
  ])


  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
