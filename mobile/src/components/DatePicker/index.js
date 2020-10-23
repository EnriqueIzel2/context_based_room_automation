import React, { useState } from "react";
import { Text, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

// import { Container } from './styles';

const DatePicker = ({ date, onChangeDate }) => {
  const [dateNow, setDateNow] = useState(new Date(date));

  return (
    <View>
      <DateTimePicker
        value={dateNow}
        mode="date"
        display="default"
        onChange={(event, selectedDate) => {
          const currentDate = selectedDate || dateNow;
          setDateNow(currentDate);
          onChangeDate(currentDate);
        }}
      />
    </View>
  );
};

export default DatePicker;
