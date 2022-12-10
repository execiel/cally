import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { mainStyle, colors } from "../MainStyle";

function DayPressable({ selected, day, changeDay }) {
  return selected ? (
    <TouchableOpacity
      style={{
        ...styles.dayPressable,
        backgroundColor: colors.highlight,
      }}
      onPress={() => changeDay(day)}
    >
      <Text style={mainStyle.textHighlighted}>{day.date}</Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      style={{
        ...styles.dayPressable,
        backgroundColor: colors.backgroundLighter,
      }}
      onPress={() => changeDay(day)}
    >
      <Text style={mainStyle.text}>{day.date}</Text>
    </TouchableOpacity>
  );
}

export function MonthView({ daysInMonth, currentDay }) {
  const [selectedDay, setSelectedDay] = useState(currentDay);
  const changeDay = (day) => setSelectedDay(day);

  return (
    <View style={{ ...mainStyle.innerContainer, ...styles.viewContainer }}>
      {daysInMonth.map((day, key) => {
        return selectedDay == day ? (
          <DayPressable
            selected={true}
            day={day}
            changeDay={changeDay}
            key={key}
          />
        ) : (
          <DayPressable
            selected={false}
            day={day}
            changeDay={changeDay}
            key={key}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  dayPressable: {
    padding: 10,
    borderRadius: 100,
    width: 40,
    height: 40,
    marginHorizontal: 5,
    marginVertical: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  viewContainer: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
  },
});
