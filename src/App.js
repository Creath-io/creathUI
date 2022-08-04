import "./App.css";
import Navbar from "./pages/Navbar";
import React from "react";
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./pages/Footer";
import PagesRoutes from "./pages/Routes";
import SubscriptionPage from "./pages/SubscriptionPage";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        {PagesRoutes()}
        <Route
          path="/subscription-confirmation"
          element={<SubscriptionPage />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
// {
//   id: 26,
//   title: "Parents' Inheritance",
//   artist: "Wolfman",
//   description:
//     "Two brothers keep fighting fiercely over what they will get from their parents. They keep pointing and naming all the things they want to own after their parents are gone.\nThe problem is, they’re only focused on the material inheritances, forgetting to ask questions about the immaterial ones they will be getting too. \nWhat about the name? What is the reputation? What about the ideals they are left with?What are the benefits these inheritances come with? \nOr are they just an addition to the menaces and woes of society?",
//   style: "Sculpture",
//   price: 1500,
//   img: "",
// },
