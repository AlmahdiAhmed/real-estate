import About from "./About";
import "./App.scss";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import News from "./News";
import Offers from "./Offers";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Offers />
      <News />
      <Footer />
    </div>
  );
}

export default App;
