import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Header from "./Pages/Header/header";
import AboutUs from "./Pages/AboutUs/aboutUs";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutUs />
      <WorkWith />
    </div>
  );
}

export default App;
