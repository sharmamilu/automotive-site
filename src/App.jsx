import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Products from "./pages/Product"; // Create this page
import Contact from "./pages/Contact"; // Create this page
// import Account from "./pages/Account";   // Create this page
import Upload from "./pages/Upload";
import Documents from "./pages/Documents";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/documents" element={<Documents />} />
            {/* <Route path="/account" element={<Account />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
