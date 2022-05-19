import "./App.css";
import Search from "./Search";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <div className="BodyContainer">
        <Search />

        <p>week icons</p>
      </div>
      <p>
        Code by{" "}
        <a href="https://github.com/francescagiunchedi/React_weather">
          {" "}
          Francesca GiunchediGithub
        </a>
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
