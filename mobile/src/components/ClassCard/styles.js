import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  padding: 10px;
  background-color: ${({ status }) =>
    status === "confirmada" ? "#9cec5b" : "#ee6055"};
  border-radius: 10px;
  border-width: 1px;
  margin-bottom: 5px;
`;

export const TextBase = styled.Text`
  color: #000;
`;

export const TextBold = styled.Text`
  color: #000;
  font-weight: bold;
`;
