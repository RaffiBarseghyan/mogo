import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Header from "./Pages/Header/header";
import AboutUs from "./Pages/AboutUs/aboutUs";
import WorkWith from "./Pages/WorkWith/workWith";
import AllDevice from "./Pages/AllDevice/allDevice";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutUs />
      <WorkWith />
      <AllDevice />
      
    </div>
  );
}

export default App;
