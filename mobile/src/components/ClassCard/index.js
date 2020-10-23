import React from "react";
import { useNavigation } from "@react-navigation/native";

import { TouchableContainer, TextBase, TextBold } from "./styles";

const ClassCard = ({ data }) => {
  const navigation = useNavigation();

  function handleNavigate() {
    navigation.navigate("RoomDetails");
  }

  return (
    <TouchableContainer status={data.status} onPress={handleNavigate}>
      <TextBase>Nome da disciplina: {data.title}</TextBase>
      <TextBase>Sala de aula</TextBase>
      <TextBold>Horário da aula</TextBold>
      <TextBold>Status da aula: {data.status}</TextBold>
    </TouchableContainer>
  );
};

export default ClassCard;
