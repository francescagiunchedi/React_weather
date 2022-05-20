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
        <a href="https://github.com/francescagiunchedi/React_weather">
          {" "}
          Francesca GiunchediGithub
        </a>{" "}
        free on
        <a href="https://github.com/francescagiunchedi/React_weather">
          {" "}
          Github
        </a>
      </p>
    </div>
  );
}

export default App;
