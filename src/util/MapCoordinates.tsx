export const getCoordinatesForLocation = async (cityName: string) => {
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${import.meta
      .env.VITE_OPENWEATHER_API_KEY!}`
  );
  const data = await response.json();
  const { lat, lon } = data[0];
  return { lat, lon };
};

export const getCoordinatesForRegion = (region: string) => {
  switch (region) {
    case 'United States':
      return { lat: 37.0902, lon: -95.7129 };
    case 'South America':
      return { lat: -14.235, lon: -51.9253 };
    case 'Europe':
      return { lat: 54.526, lon: 15.2551 };
    case 'Asia':
      return { lat: 34.0479, lon: 100.6197 };
    case 'Australia':
      return { lat: -25.2744, lon: 133.7751 };
    default:
      return { lat: 0, lon: 0 };
  }
};
