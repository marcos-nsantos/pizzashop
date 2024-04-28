import "./global.css";
import { router } from "@/routes.tsx";
import { RouterProvider } from "react-router-dom";

export function App() {
  return <RouterProvider router={router} />;
}
