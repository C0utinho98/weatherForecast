import { Entypo, Feather, FontAwesome5 } from "@expo/vector-icons";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import React from "react";
import brokenClouds from "../../assets/brokenClouds.png";
import clearSky from "../../assets/clearSky.png";
import clearSkyNight from "../../assets/clearSkyNight.png";
import fewClouds from "../../assets/fewClouds.png";
import fewCloudsNight from "../../assets/fewCloudsNight.png";

import rain from "../../assets/rain.png";
import scatteredClouds from "../../assets/scatteredClouds.png";
import showerRain from "../../assets/showerRain.png";
import snow from "../../assets/snow.png";
import thunderstorm from "../../assets/thunderstorm.png";

import mist from "../../assets/rain.png";

import { WeatherResponse } from "../../services/weather/model";

import {
  Block,
  CelciusText,
  Container,
  Content,
  Day,
  Description,
  DescriptionAndMinMax,
  Img,
  Info,
  MinMax,
  Temp,
  TempContent,
  TextInfo,
  TextMinMax,
  Title,
} from "./styles";
import { ScrollView, View } from "react-native";

interface Props {
  data: WeatherResponse;
}

const handleIcon = {
  "01d": clearSky,
  "01n": clearSkyNight,
  "02d": fewClouds,
  "02n": fewCloudsNight,
  "03d": scatteredClouds,
  "03n": scatteredClouds,
  "04d": brokenClouds,
  "04n": brokenClouds,
  "05d": showerRain,
  "05n": showerRain,
  "09d": showerRain,
  "09n": showerRain,
  "10d": rain,
  "10n": rain,
  "11d": thunderstorm,
  "11n": thunderstorm,
  "13d": snow,
  "13n": snow,
  "50d": mist,
  "50n": mist,
};

export default function WeatherInformation({ data }: Props) {
  const { name, sys, main, weather, wind } = data;

  return (
    <ScrollView>
      <Container>
      <Img source={handleIcon[weather[0].icon]} />
      <Block>
        <Title>
          {name}, {sys.country}
        </Title>
        <Content>
          <TempContent>
            <Temp>{Math.trunc(main.temp)}</Temp>
            <CelciusText>°c</CelciusText>
          </TempContent>
          <DescriptionAndMinMax>
            <Description>
              <TextMinMax>{weather[0].description}</TextMinMax>
            </Description>
            <MinMax>
              <TextMinMax>
                min {Math.trunc(main.temp_min)}° max {Math.trunc(main.temp_max)}
                °
              </TextMinMax>
            </MinMax>
          </DescriptionAndMinMax>
        </Content>
        <Day>{format(new Date(), "EEEE, HH:mm", { locale: ptBR })}</Day>
      </Block>
      <Info>
        <FontAwesome5 name="temperature-high" size={24} color="white" />
        <TextInfo>Sensação</TextInfo>
        <TextInfo>{Math.trunc(main.feels_like)}°c</TextInfo>
      </Info>
      <Info>
        <Feather name="wind" size={24} color="white" />
        <TextInfo>Vento</TextInfo>
        <TextInfo>{wind.speed}km/h</TextInfo>
      </Info>
      <Info>
        <Entypo name="water" size={24} color="white" />
        <TextInfo>Umidade</TextInfo>
        <TextInfo>{main.humidity}%</TextInfo>
      </Info>
      </Container>
    </ScrollView>
  );
}
