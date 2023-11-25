import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HostLoginPage from "./pages/host/HostLoginPage";
import GuestFacePage from "./pages/guest/GuestFacePage";
import GuestEmojiPage from "./pages/guest/GuestEmojiPage";
import { RecoilRoot } from 'recoil'; // RecoilRoot 추가
import { animalImageState } from "./context/AnimalImageState"; // AnimalImageState 추가
const App = () => {
  return (
    <RecoilRoot> {/* RecoilRoot로 앱 감싸기 */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HostLoginPage />} />
          <Route path="/guestface" element={<GuestFacePage />} />
          <Route path="/guestemoji" element={<GuestEmojiPage />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;

