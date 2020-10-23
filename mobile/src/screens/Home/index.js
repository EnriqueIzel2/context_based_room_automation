import React from "react";
import { Text, View, FlatList } from "react-native";

import { Background } from "../../components/Background";
import ClassCard from "../../components/ClassCard";
import {
  Container,
  PickerContainer,
  ListContainer,
  TitleContainer,
  ListTitle,
  List,
} from "./styles";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
    status: "confirmada",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
    status: "cancelada",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
    status: "confirmada",
  },
  {
    id: "58694a0f-3dass1-471f-bd96-145571e29d72",
    title: "Third Item",
    status: "cancelada",
  },
  {
    id: "58694a0f-3da1-ffff471f-bd96-145571e29d72",
    title: "Third Item",
    status: "cancelada",
  },
];

const Home = () => {
  return (
    <Background>
      <Container>
        <PickerContainer>
          <Text>Picker</Text>
        </PickerContainer>

        <ListContainer>
          <TitleContainer>
            <ListTitle>Aulas do dia</ListTitle>
          </TitleContainer>

          <List
            data={DATA}
            renderItem={({ item }) => <ClassCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
          />
        </ListContainer>
      </Container>
    </Background>
  );
};

export default Home;
