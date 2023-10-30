import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Repair from "./pages/Repair";
import Testimonials from "./pages/Testimonials";
import Products from "./pages/Products";
import GetData from "./pages/GetData";
import Calculator from "./pages/Calculator";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/repair" element={<Repair />} />
          <Route path="/products" element={<Products />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/getdata" element={<GetData />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
