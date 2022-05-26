import "./App.css";
import CTA from "./Components/CTA";
import Home from "./Pages/Home";
import Image from "./Pages/Image";
import Headersocials from "./Components/Headersocials";
import Nav from "./Components/Nav";
import Homes from "./Components/Homes";
import About from "./Components/About";
import Service from "./Components/Service";
import Contact from "./Components/Contact";
import Report from "./Components/Report";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Home />
      <CTA />
      <Image />
      <Headersocials />
      <Nav />
      <Homes />
      <About />
      <Service />
      <Report />
      <Contact />
      <ContactUs />
      <Footer />

    </div>
  );
}

export default App;
