import React, { useEffect, useState } from "react";
import theme from "../../global/styles/theme";

import { Input } from "../../components/input";
import WeatherInformation from "../../components/weatherInformation";
import { useDebounce } from "../../hooks/useDebounce";
import { getWeatherByLocation } from "../../services/weather";
import {
  PropsgetWeatherByLocation,
  WeatherResponse,
} from "../../services/weather/model";
import { Container, Loading, WrapperInput } from "./styles";

export function Search() {
  const [data, setData] = useState<WeatherResponse>();
  const [error, setSetError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const get = async (dataLocation: PropsgetWeatherByLocation) => {
    try {
      const response = await getWeatherByLocation(dataLocation);
      setData(response.data);
      setSetError("");
    } catch (e) {
      setSetError("Erro ao retornar temperatura!");
    }
  };

  const debouncedSearchValue = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchValue) {
      get({ city: debouncedSearchValue });
    }
  }, [debouncedSearchValue]);

  return (
    <Container colors={[theme.colors.background_1, theme.colors.background_2]}>
      <WrapperInput>
        <Input
          placeholder="Digite o nome da cidade"
          onChangeText={setSearchTerm}
          value={searchTerm}
        />
      </WrapperInput>
      {error !== "" ? (
        <Loading>{error}</Loading>
      ) : (
        data && <WeatherInformation data={data} />
      )}
    </Container>
  );
}
