import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import theme from "../../global/styles/theme";

import { View } from "react-native";
import WeatherInformation from "../../components/weatherInformation";
import { getWeatherByLocation } from "../../services/weather";
import { WeatherResponse } from "../../services/weather/model";
import { Container, Loading } from "./styles";

export function Dashboard() {
  const [location, setLocation] = useState<
    Location.LocationObject | undefined
  >();
  const [data, setData] = useState<WeatherResponse>();
  const [error, setSetError] = useState("");

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setSetError("Localização não autorizada!");
        return;
      }
      setSetError("");
      const location = await Location.getCurrentPositionAsync();
      setLocation(location);
    })();
  }, []);

  const get = async (lat: number, lon: number) => {
    try {
      const response = await getWeatherByLocation({ lat, lon });
      setData(response.data);
    } catch (e) {
      setSetError("Erro ao retornar temperatura!");
    }
  };

  useEffect(() => {
    if (location) {
      const { latitude, longitude } = location.coords;
      get(latitude, longitude);
    }
  }, [location]);

  return (
    <Container colors={[theme.colors.background_1, theme.colors.background_2]}>
      {error !== "" ? (
        <Loading>{error}</Loading>
      ) : data ? (
        <>
          <View style={{ marginBottom: 50 }}></View>
          <WeatherInformation data={data} />
        </>
      ) : (
        <Loading>Carregando...</Loading>
      )}
    </Container>
  );
}
