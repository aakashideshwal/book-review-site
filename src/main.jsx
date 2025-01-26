import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout";
import Herobanner from "./components/herobanner/herobanner";
import Aboutus from "./components/about us/aboutus";
import Signup from "./components/signup/signup";
import Login from "./components/login/login.jsx"; // Import Login component
import NewBook from "./components/new book form/newbook";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Herobanner />} />
      <Route path="aboutus" element={<Aboutus />} />
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} /> {/* Add Login route */}
      <Route path="newbook" element={<NewBook />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
