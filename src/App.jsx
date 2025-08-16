import Home from "./pages/Home";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import "./App.css"; // assuming this is your global style file

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main className="main-content">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
