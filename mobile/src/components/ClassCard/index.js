import React from "react";
import { useNavigation } from "@react-navigation/native";

import { TouchableContainer, TextBase, TextBold } from "./styles";

const ClassCard = ({ data }) => {
  const navigation = useNavigation();

  function handleNavigate() {
    navigation.navigate("RoomDetails", { data });
  }

  return (
    <TouchableContainer status={data.status} onPress={handleNavigate}>
      <TextBase>Nome da disciplina: {data.title}</TextBase>
      <TextBase>Sala de aula: {data.sala}</TextBase>
      <TextBold>Horário da aula: {data.horario}</TextBold>
      <TextBold>Status da aula: {data.status}</TextBold>
    </TouchableContainer>
  );
};

export default ClassCard;
