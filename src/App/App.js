
import './App.css';

function App() {
  return (
      <div className="weather-app">
        <div className="location">
          <h1>City Name</h1>
          <p>Country</p>
        </div>
  
        <div className="current-weather">
          <div className="temperature">
            <h2>25°C</h2>
          </div>
          <div className="conditions">
            <p>Clear sky</p>
          </div>
        </div>
  
        <div className="forecast">
          <div className="day">
            <p>Monday</p>
            <h3>28°C</h3>
            <p>Partly Cloudy</p>
          </div>
          <div className="day">
            <p>Tuesday</p>
            <h3>26°C</h3>
            <p>Sunny</p>
          </div>
          {/* Add more forecast days as needed */}
        </div>
      </div>
    );
}

export default App;
