import { createContext, useContext ,useState } from "react";
import {getCityData,getLocation} from "../api/index"
const WeatherContext = createContext(null);

export const useWeather = () => {
    return useContext(WeatherContext)
};
export const WeatherProvider = (props) => {
    const [data,setData] = useState(null);
    const [searchCity,setSearchCity] = useState(null);
    const fetchData = async() => {
        const response = await getCityData(searchCity);
        setData(response);
    }
    const fetchCurr = () => {
            navigator.geolocation.getCurrentPosition((position)=>{
            getLocation(position.coords.latitude,position.coords.longitude).then((data)=>setData(data));
        })
    }
    return (
        <WeatherContext.Provider 
        value={{
            searchCity,
            data,
            setSearchCity,
            fetchData,
            fetchCurr
        }}>
            {props.children}
        </WeatherContext.Provider>
    )
};