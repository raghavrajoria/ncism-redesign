import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Topbar from "./Components/Topbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import ScrollToTopButton from "./Components/ScrollToTopButton"; // <-- New

import "swiper/css";
import "swiper/css/navigation";
import BrandingStrip from "./Components/BrandingStrip";
import Introduction from "./Pages/Introduction";
import ComingSoon from "./Pages/ComingSoom";
import MainObjectives from "./Pages/MainObjectives";
import Chairperson from "./Pages/Chairperson";
import AutonomousBoards from "./Pages/AutonomousBoards";
import { CompositionofCommission } from "./Pages/CompositionofCommission";
import MembersofAdvisory from "./Pages/MembersofAdvisory";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors">
        <Topbar />
        <BrandingStrip />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/introduction" element={<Introduction />} />
          <Route path="/about/main-objectives" element={<MainObjectives />} />
          <Route path="/about/chairperson" element={<Chairperson />} />
          <Route
            path="/about/board-of-ayurveda"
            element={<AutonomousBoards />}
          />

          <Route
            path="/about/composition-of-commission"
            element={<CompositionofCommission />}
          />
          <Route path="/about/advisory-board" element={<MembersofAdvisory />} />
        </Routes>
        <ScrollToTopButton /> {/* <-- Always visible when scrolled */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
