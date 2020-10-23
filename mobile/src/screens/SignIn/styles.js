import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 200px;
  height: 150px;
  margin-bottom: 15px;
`;

export const InputContainer = styled.View`
  flex-direction: row;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "rgba(255, 255, 255, 0.20)",
})`
  background-color: rgba(0, 0, 0, 0.2);
  width: 90%;
  font-size: 17px;
  color: #ffffff;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 7px;
`;

export const SubmitButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #9cec5b;
  width: 90%;
  height: 45px;
  border-radius: 7px;
  margin-top: 10px;
`;

export const SubmitText = styled.Text`
  font-size: 20px;
  color: #131313;
`;
