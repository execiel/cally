import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { mainStyle, colors } from "../MainStyle";
import { getMonthName, getWeekdayName, holidays } from "../Util";

export function Header({ date }) {
  const holiday: string = holidays[getMonthName(date)][date.getDate()];

  return (
    <View style={{ ...mainStyle.innerContainer, ...styles.mainContainer }}>
      <View style={styles.inner}>
        <Text style={mainStyle.headerMedium}>{getWeekdayName(date)}, </Text>
        <Text style={mainStyle.headerBig}>{date.getDate()}</Text>
      </View>
      <View style={styles.inner}>
        <Text style={mainStyle.headerSmall}>{getMonthName(date)} </Text>
        <Text style={mainStyle.headerSmall}>{date.getFullYear()}</Text>
      </View>
      {holiday && (
        <View>
          <Text style={mainStyle.underHeader}>{holiday}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    backgroundColor: colors.backgroundLighter,
    borderRadius: 0,
  },
  inner: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
