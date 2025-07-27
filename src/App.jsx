import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";

import Hero from "./components/Hero";
import About from "./pages/About";
import Room from "./pages/Room";
import Facilities from "./pages/Facilities";
import Booking from "./pages/Booking";
import FoodMenu from "./components/FoodMenu";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        {/* ✅ Home Page */}
        <Route
          path="/"
          element={
            <Layout>
              <Hero />
              <About />
              <Room />
              <Facilities />
              <FoodMenu />
            </Layout>
          }
        />

        {/* ✅ Internal Pages with Hero Section */}
        <Route
          path="/about"
          element={
            <Layout>
              <About showHero={true} />
            </Layout>
          }
        />
        <Route
          path="/room"
          element={
            <Layout>
              <Room showHero={true} />
            </Layout>
          }
        />
        <Route
          path="/facilities"
          element={
            <Layout>
              <Facilities showHero={true} />
            </Layout>
          }
        />
        <Route
          path="/booking"
          element={
            <Layout>
              <Booking showHero={true} />
            </Layout>
          }
        />
        <Route
          path="/gallery"
          element={
            <Layout>
              <Gallery showHero={true} />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact showHero={true} />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
