import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HostLoginPage from "./pages/host/HostLoginPage";
import GuestFacePage from "./pages/guest/GuestFacePage";
import GuestEmojiPage from "./pages/guest/GuestEmojiPage";
import { AnimalImageContextProvider } from "./context/AnimalImageContext";

const App = () => {
  return (
    <AnimalImageContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HostLoginPage />} />
        <Route path="/guestface" element={<GuestFacePage />} />
        <Route path="/guestemoji" element={<GuestEmojiPage />} />
      </Routes>
    </BrowserRouter>
    </AnimalImageContextProvider>
  );
};

export default App;
