import "./styles/App.css";
import { Weather } from "./components/Weather.jsx";

export function App() {
  return (
    <>
      <div className="container">
        <h1>Weather Forecast App</h1>
        <Weather />
      </div>
    </>
  );
}
