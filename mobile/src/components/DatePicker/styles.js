import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${Platform.OS === "ios" ? "#00000066" : "transparent"};
  position: absolute;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
`;
