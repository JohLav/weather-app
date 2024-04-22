export default function fetchAPI(city, setWeatherData) {
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  console.log("apiUrl: ", apiUrl);

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      setWeatherData(data);
      console.log(data);
    })
    .catch((error) => console.error(error));
}
