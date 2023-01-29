import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { mainStyle, colors } from "../MainStyle";
import { holidays } from "../Util";

function DayPressable({ selected, date, changeDate }) {
  // const holiday = holidays[`${date.getDate()}, ${date.getMonth()}`];
  // console.log(holiday);
  // console.log(holidays["15,0"]);

  const day: number = date.getMonth();
  const month: number = date.getDay();
  console.log(holidays[day+","+month]);
  const style = selected
    ? {
        ...styles.dayPressable,
        backgroundColor: colors.highlight,
      }
    : {
        ...styles.dayPressable,
        backgroundColor: colors.backgroundLighter,
      };

  return (
    <TouchableOpacity style={style} onPress={() => changeDate(date)}>
      <Text style={mainStyle.textHighlighted}>{date.getDate()}</Text>
    </TouchableOpacity>
  );
}

export function MonthView({ datesInMonth, currentDate, changeDate }) {
  return (
    <View style={{ ...mainStyle.innerContainer, ...styles.viewContainer }}>
      {datesInMonth.map((date: Date, key: number) => {
        return currentDate.getDate() == date.getDate() ? (
          <DayPressable
            selected={true}
            date={date}
            changeDate={changeDate}
            key={key}
          />
        ) : (
          <DayPressable
            selected={false}
            date={date}
            changeDate={changeDate}
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
    shadowColor: "#ff0000",
  },
  viewContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
  },
});
