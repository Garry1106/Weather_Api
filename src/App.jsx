import React, { useEffect } from "react";
import "./App.css";
import Input from "./Components/Input";
import Button from "./Components/Button";
import Card from "./Components/Card";
import { useWeather } from "./context/Weather";
function App() {
  const weather = useWeather();
  console.log(weather);
  useEffect(() => {
    weather.fetchCurr();
  }, []);
  return (
    <div className="app">
      <h1>Forecast</h1>
      <Input />
      <Button value="Search" onClick={weather.fetchData} />
      <Card />
      <Button value="Refresh" />
    </div>
  );
}

export default App;
