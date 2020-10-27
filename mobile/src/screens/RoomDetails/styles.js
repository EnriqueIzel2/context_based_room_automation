import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
`;

export const MainInformation = styled.View`
  align-items: center;
  margin-top: 30px;
  margin-bottom: 15%;
`;

export const Title = styled.Text`
  font-size: 30px;
  margin-bottom: 20px;
  color: #ffffff;
  font-weight: bold;
`;

export const InformationContainer = styled.View`
  height: 20%;
  width: 90%;
  align-items: center;
  margin-bottom: 30px;
  justify-content: space-between;
`;

export const InformationText = styled.Text`
  font-size: 20px;
  padding: 15px;
  color: #ffffff;
`;

export const ButtonCancel = styled.TouchableOpacity`
  background-color: brown;
  margin-top: 30%;
  width: 60%;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const TextButton = styled.Text`
  font-size: 25px;
  color: #ffffff;
  font-weight: bold;
`;
