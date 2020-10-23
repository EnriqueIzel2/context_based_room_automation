import React, { useState } from "react";

import { Background } from "../../components/Background";
import DatePicker from "../../components/DatePicker";

import ClassCard from "../../components/ClassCard";
import {
  Container,
  DateContainer,
  DateText,
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
  const [newDate, setNewDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  function handleShowPicker() {
    setShowPicker(true);
  }

  function onChangeDate(date) {
    console.log(date);
    setShowPicker(Platform.OS === "ios");
    setNewDate(date);
  }

  return (
    <Background>
      <Container>
        <DateContainer onPress={handleShowPicker}>
          <DateText>Data de Hoje </DateText>
          {showPicker && (
            <DatePicker date={newDate} onChangeDate={onChangeDate} />
          )}
        </DateContainer>

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
