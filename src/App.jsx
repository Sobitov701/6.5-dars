import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Contact, About, Product } from "./pages";

import MainLayout from "./leyouts/MainLayout";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/product",
          element: <Product />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
