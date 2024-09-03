const url = "https://api.weatherapi.com/v1/current.json?key=b92ff77267354dc684993515230609 &q="


export const getCityData = async(city) => {
    const response = await fetch(`${url}${city}&aqi=yes`)
    return await response.json();
};

export const getLocation = async(lat,lon) => {
    const response = await fetch(`${url}${lat},${lon}&aqi=yes`)
    return await response.json();
};