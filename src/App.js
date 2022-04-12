import * as React from "react";
import { ThemeProvider } from "@mui/material";
import "./style.css";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrivacyPolicy } from "./pages/privacy-policy";
import { About } from "./pages/about";
import Layout from "./pages/layout";
import { WhatsNew } from "./pages/what's-new";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { theme } from "./theme";
import { ContactUs } from "./pages/contact-us";

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
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="contact-us" element={<ContactUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
