import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Routes, Route, HashRouter } from "react-router";
import "./styles.scss";
import HomePage from "./pages/HomePage.tsx";
import SmartHomePage from "./pages/SmartHomePage.tsx";
import IndoorLocalisationPage from "./pages/IndoorLocalisationPage.tsx";
import MojeSerijePage from "./pages/MojeSerijePage.tsx";
import SecureChatPage from "./pages/SecureChatPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import NavigationHelper from "./helpers/NavigationHelper.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <NavigationHelper />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/projects">
          <Route path="smart-home" element={<SmartHomePage />} />
          <Route
            path="indoor-localisation"
            element={<IndoorLocalisationPage />}
          />
          <Route path="moje-serije" element={<MojeSerijePage />} />
          <Route path="secure-chat" element={<SecureChatPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
);
