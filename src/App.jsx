import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import DefaultPage from "./views/DefaultPage";
import CreatePage from "./views/Create";
import UpdatePage from "./views/Update";
import "./app.css";

const router = createBrowserRouter([
  {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <DefaultPage />
        },
        {
          path: "/create",
          element: <CreatePage />
        },
        {
          path: "/update/:id",
          element: <UpdatePage />
        },
      ],
    }
  ],
      {
        basename: "/eventcalendar"
      }
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;