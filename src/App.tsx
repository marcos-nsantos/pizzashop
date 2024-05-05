import "./global.css";
import { ThemeProvider } from "@/components/theme/theme-provider.tsx";
import { router } from "@/routes.tsx";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="pizzashop-theme" defaultTheme="system">
        <Helmet titleTemplate="%s | pizza.shop" />
        <Toaster richColors />

        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  );
}
