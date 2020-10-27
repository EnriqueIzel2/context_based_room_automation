import React from "react";

import { Background } from "../../components/Background";

import {
  Container,
  MainInformation,
  Title,
  InformationContainer,
  InformationText,
  ButtonCancel,
  TextButton,
} from "./styles";

const RoomDetails = ({ route }) => {
  const { data } = route.params;

  return (
    <Background>
      <Container>
        <MainInformation>
          <Title>Sala: {data.sala} </Title>
          <InformationText>Horário: {data.horario}</InformationText>
        </MainInformation>

        <InformationContainer>
          <InformationText>Ar-condicionado: Desligado</InformationText>
          <InformationText>Porta da sala: Trancada</InformationText>
        </InformationContainer>

        <ButtonCancel>
          <TextButton>Cancelar Aula</TextButton>
        </ButtonCancel>
      </Container>
    </Background>
  );
};

export default RoomDetails;
