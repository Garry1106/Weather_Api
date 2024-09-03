import React from "react";
import { useWeather } from "../context/Weather";
const Card = () => {
    const weather = useWeather();
    return (
        <div className="card">
            <img src={weather.data ?.current ?.condition?.icon}/>
                <h2>{weather.data ?.current ?.temp_c} C
            </h2>
            <p>{weather.data?.location?.name} {weather.data?.location?.region}</p>
        </div>
    )
};
export default Card;