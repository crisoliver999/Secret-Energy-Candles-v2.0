import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AboutUs from "./pages/AboutUs/AboutUs";
import Shop from "./pages/Shop/Shop";
import ContactUs from "./pages/ContactUs/ContactUs";
import Blog from "./pages/Blog/Blog";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="/" element={<Home />} />
                    <Route path="about-us" element={<AboutUs />} />
                    <Route path="shop" element={<Shop />} />
                    <Route path="contact-us" element={<ContactUs />} />
                    <Route path="blog" element={<Blog />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
