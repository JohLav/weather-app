export default function fetchAPI(city, setWeatherData) {
  const apiUrl = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;
  const generatedApiUrl = `${apiUrl}/weather?q=${city}&appid=${apiKey}&units=metric`;
  console.log("generatedApiUrl: ", generatedApiUrl);

  fetch(generatedApiUrl)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    })
    .then((data) => {
      setWeatherData(data);
      console.log(data);
    })
    .catch((error) => console.error(error));
}
