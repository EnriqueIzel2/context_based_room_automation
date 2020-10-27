import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const DateContainer = styled.TouchableOpacity`
  width: 70%;
  height: 100px;
  background-color: #9cec5b;
  margin-bottom: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const DateText = styled.Text`
  font-size: 30px;
`;

export const ListContainer = styled.View`
  align-items: center;
  width: 90%;
  height: 60%;
  padding: 5px 0;
  justify-content: space-between;
`;

export const TitleContainer = styled.View`
  background-color: #008cff;
  width: 130px;
  height: 50px;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  border-radius: 5px;
`;

export const ListTitle = styled.Text`
  font-size: 17px;
  color: #ffffff;
`;

export const List = styled.FlatList`
  padding-top: 2px;
  width: 85%;
`;
