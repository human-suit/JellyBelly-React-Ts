import { createBrowserRouter } from "react-router-dom";
import { mas } from "./pages/allpage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <mas.Layout />,
    loader: mas.Loader,
    children: [
      { index: true, element: <mas.Home /> },
      { path: "*", element: <mas.NotFound /> },
      { path: "review", element: <mas.Review /> },
      { path: "history", element: <mas.History /> },
      { path: "combinations", element: <mas.Combinations /> },
      { path: "recipes", element: <mas.Recipes /> },
      { path: "facts", element: <mas.Facts /> },
      { path: "beans", element: <mas.Beans /> },
      { path: "bean/:id", element: <mas.BeanPage /> },
    ],
  },
]);

export default router;
