import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HostLoginPage from "./pages/host/HostLoginPage";
import GuestLoginPage from "./pages/guest/GuestLoginPage";
import HostLoadingPage from "./pages/host/HostLoadingPage";
import HostNicknamePage from "./pages/host/HostNicknamePage";
import GuestFacePage from "./pages/guest/GuestFacePage";
import GuestEmojiPage from "./pages/guest/GuestEmojiPage";
import GuestColorPage from "./pages/guest/GuestColorPage";
import GuestLoadingPage from "./pages/guest/GuestLoadingPage";
import GuestFirstImpressionPage from "./pages/guest/GuestFirstImpressionPage";
import GuestPresentImpresssionPage from "./pages/guest/GuestPresentImpresssionPage";
import HostUrlDeployPage from "./pages/host/HostUrlDeployPage";
import GuestMyResultPage from "./pages/guest/GuestMyResultPage";
import GuestOthersResultPage from "./pages/guest/GuestOthersResultPage";
import HostIndividualResultPage from "./pages/host/HostIndividualResultPage";
import HostTotalResultPage from "./pages/host/HostTotalResultPage";
import HostStatisticsPage from "./pages/host/HostStatisticsPage";
import { RecoilRoot } from "recoil"; // RecoilRoot 추가

const App = () => {
  return (
    <RecoilRoot>
      {" "}
      {/* RecoilRoot로 앱 감싸기 */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HostLoginPage />} />
          <Route path="/guestface" element={<GuestFacePage />} />
          <Route path="/guestemoji" element={<GuestEmojiPage />} />
          <Route path="/guestcolor" element={<GuestColorPage />} />
          <Route
            path="/firstimpression"
            element={<GuestFirstImpressionPage />}
          />
          <Route
            path="/presentimpression"
            element={<GuestPresentImpresssionPage />}
          />
          <Route path="/deploy" element={<HostUrlDeployPage />} />
          <Route path="/guestLoading" element={<GuestLoadingPage />} />
          <Route path="/guestLogin" element={<GuestLoginPage />} />
          <Route path="/hostLogin" element={<HostLoginPage />} />
          <Route path="/hostLoading" element={<HostLoadingPage />} />
          <Route path="/hostNickname" element={<HostNicknamePage />} />
          <Route path="/guestResult" element={<GuestMyResultPage />} />
          <Route path="/guestOtherResult" element={<GuestOthersResultPage />} />
          <Route path="/hostResult" element={<HostIndividualResultPage />} />
          <Route path="/hostTotalResult" element={<HostTotalResultPage />} />
          <Route path="/hostStatistics" element={<HostStatisticsPage />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
