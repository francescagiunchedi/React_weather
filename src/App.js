import "./App.css";
import Search from "./Search";
import WeeklyForecast from "./WeeklyForecast";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="body-container">
      <div className="weather-box">
        <Search />

        <WeeklyForecast />
      </div>
      <p className="footer">
        Code by{" "}
        <a href="https://gentle-ganache-e53c21.netlify.app/" target="_blank">
          {" "}
          Francesca Giunchedi
        </a>{" "}
        free on
        <a
          href="https://github.com/francescagiunchedi/React_weather"
          target="_blank"
        >
          {" "}
          Github
        </a>
      </p>
    </div>
  );
}

export default App;
