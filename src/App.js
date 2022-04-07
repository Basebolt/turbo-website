import * as React from "react";
import { ThemeProvider } from "@mui/material";
import "./style.css";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Roadmap } from "./pages/roadmap";
import { About } from "./pages/about";
import Layout from "./pages/layout";
import { WhatsNew } from "./pages/what's-new";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { theme } from "./theme";

export default function App() {
  React.useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="what's-new" element={<WhatsNew />} />
            <Route path="about" element={<About />} />
            <Route path="roadmap" element={<Roadmap />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
