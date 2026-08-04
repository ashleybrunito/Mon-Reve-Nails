import { useEffect } from "react";
import "@/App.css";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { LanguageProvider } from "@/context/LanguageContext";
import useLenis from "@/hooks/useLenis";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Gallery from "@/pages/Gallery";
import Contact from "@/pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  useLenis();
  return (
    <div className="App">
      <LanguageProvider>
        <HashRouter>
          <ScrollToTop />
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </HashRouter>
      </LanguageProvider>
    </div>
  );
}

export default App;
