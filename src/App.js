import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";
import RestrauntMenu from "./Components/RestrauntMenu";
import { Provider } from "react-redux";
import store from "./utils/store";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainContainer />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:id",
        element: <RestrauntMenu />,
      },
    ],
  },
]);
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
};

export default App;
