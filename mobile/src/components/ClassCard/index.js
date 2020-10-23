import React from "react";

import { Container, TextBase, TextBold } from "./styles";

const ClassCard = ({ data }) => {
  return (
    <Container status={data.status}>
      <TextBase>Nome da disciplina: {data.title}</TextBase>
      <TextBase>Sala de aula</TextBase>
      <TextBold>Horário da aula</TextBold>
      <TextBold>Status da aula: {data.status}</TextBold>
    </Container>
  );
};

export default ClassCard;
