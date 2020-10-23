import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

import { Container } from "./styles";

const DatePicker = ({ date, onChangeDate }) => {
  return (
    <Container>
      <DateTimePicker
        value={date}
        mode="date"
        display="default"
        onChange={onChangeDate}
      />
    </Container>
  );
};

export default DatePicker;
