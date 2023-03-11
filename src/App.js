import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import SinglePage from "./pages/singlepage/SinglePage";
import NewPage from "./pages/newpage/NewPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { productInputs, userInputs } from "./formsource";
import "./styles/dark.scss";
import {
  DarkModeContext,
  DarkModeContextProvider,
} from "./context/darkModeContext";
import { useContext } from "react";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "/users",
    element: <List title={"Add New User"} type={"users"} />,
  },
  {
    path: "/users/:userId",
    element: <SinglePage />,
  },
  {
    path: "/users/new",
    element: <NewPage inputs={userInputs} title={"Add New User"} />,
  },
  {
    path: "/products",
    element: <List title={"Add New Product"} type={"products"} />,
  },
  {
    path: "/products/:productId",
    element: <SinglePage />,
  },
  {
    path: "/products/new",
    element: <NewPage inputs={productInputs} title={"Add New Product"} />,
  },
]);

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "dark" : ""}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
