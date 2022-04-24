import "./App.css";
import NavBar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero";
import Ofertas from "./Components/Ofertas/Ofertas";
import Myplant from "./Components/MyPlant/Myplant";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Myplant/>
      <Ofertas/>
    </div>
  );
}

export default App;
