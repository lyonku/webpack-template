import { createRoot } from "react-dom/client";
import App from "./components/App";
import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Counter } from "@/pages/Counter";

const root = document.getElementById("root");

if (!root) {
  throw new Error("root not found");
}

const container = createRoot(root);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/counter",
        element: (
          <Suspense fallback={"loading..."}>
            <Counter />
          </Suspense>
        ),
      },
    ],
  },
]);

container.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
