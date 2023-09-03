import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import {
  getCoordinatesForLocation,
  getCoordinatesForRegion,
} from 'src/util/MapCoordinates';
import PropertyType from 'src/interfaces/Property';

interface MapProps {
  searchLocation: string;
  region: string;
  searchResults?: PropertyType[];
}

export const Map = ({ searchLocation, region, searchResults }: MapProps) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY!,
  });

  const [center, setCenter] = useState({ lat: 0, lon: 0 });

  useEffect(() => {
    searchLocation
      ? getCoordinatesForLocation(searchLocation).then((coordinates) => {
          setCenter({ lat: coordinates.lat, lon: coordinates.lon });
        })
      : setCenter(getCoordinatesForRegion(region));
  }, [searchLocation, region]);

  console.log(searchLocation);
  console.log(region);
  console.log(center);
  console.log(searchResults);
  return !isLoaded ? (
    <div>Loading Map...</div>
  ) : (
    <GoogleMap
      zoom={searchLocation ? 10 : 5}
      center={{ lat: center.lat, lng: center.lon }}
      mapContainerClassName="absolute top-0 left-0 w-full h-full"
    >
      {searchResults?.map((result, index) => (
        <Marker key={index} position={{ lat: result.lat, lng: result.lon }} />
      ))}
    </GoogleMap>
  );
};

export default Map;
