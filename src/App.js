import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GoWith from "./pages/GoWith";
import GuidesVideos from "./pages/GuidesVideos";
import ServiceHelp from "./pages/GoWith";
import ShowAllTypes from "./pages/GoWith";
import FindADealer from "./pages/FindADealer";
import Nav from "./components/staticComponent/Nav";
import Footer from "./components/staticComponent/Footer";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gowith" element={<GoWith />} />
        <Route path="/guides&videos" element={<GuidesVideos />} />
        <Route path="/service&help" element={<ServiceHelp />} />
        <Route path="/showalltypes" element={<ShowAllTypes />} />
        <Route path="/findadealer" element={<FindADealer />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
