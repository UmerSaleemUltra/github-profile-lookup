import { useEffect } from "react";

const RedirectToPakistanDomain = () => {
  useEffect(() => {
    // First, try Geolocation API (more accurate)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          checkLocationByCoords(latitude, longitude);
        },
        () => {
          // If user blocks location, use IP-based backup
          fetch("http://ip-api.com/json/")
            .then((response) => response.json())
            .then((data) => {
              if (data.countryCode === "PK") {
                window.location.href = "https://umer.pk";
              }
            })
            .catch((error) => console.error("Error fetching IP:", error));
        }
      );
    } else {
      console.warn("Geolocation not supported");
    }
  }, []);

  const checkLocationByCoords = (lat, lon) => {
    // Pakistan's lat/lon range
    const isInPakistan =
      lat >= 23.6345 && lat <= 37.0841 && lon >= 60.8729 && lon <= 77.8375;
    
    if (isInPakistan) {
      window.location.href = "https://umer.pk";
    }
  };

  return null;
};

export default RedirectToPakistanDomain;
