import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Topbar from "./Components/Topbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import ScrollToTopButton from "./Components/ScrollToTopButton"; // <-- New

import "swiper/css";
import "swiper/css/navigation";
import BrandingStrip from "./Components/BrandingStrip";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors">
        <Topbar />
        <BrandingStrip />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about/Genesis"
            element={<h1 className="p-4">Genesis Page</h1>}
          />
        </Routes>
        <ScrollToTopButton /> {/* <-- Always visible when scrolled */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
