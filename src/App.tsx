import { createRoutesFromElements, RouterProvider } from "react-router-dom";
import { Route, createBrowserRouter } from "react-router-dom";

//pages
import Home from "./features/home/Home";
import Error from "./features/error/Error";

//layouts
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
