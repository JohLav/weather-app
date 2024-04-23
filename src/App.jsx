import "./styles/App.css";
import Weather from "./components/Weather.jsx";
import Navbar from "./components/Navbar.jsx";

export function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Weather Forecast App</h1>
        <Weather />
      </div>
    </>
  );
}
