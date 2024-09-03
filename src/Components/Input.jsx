import React from "react";
import { useWeather } from "../context/Weather";
const Input = () =>{
    const weather = useWeather();
    return (
        <div className="input">
        <input
            placeholder="Search Here"
            value={weather.searchCity} 
            onChange={(e)=>weather.setSearchCity(e.target.value)}
            className="input-field"/>
        </div>
    )
};
export default Input;