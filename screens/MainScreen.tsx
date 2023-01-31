import { View, StyleSheet, StatusBar } from "react-native";
import React, { useState } from "react";
import { Header } from "../components/Header";
import SwipableView from "../components/SwipableView";
import { mainStyle, colors } from "../MainStyle";
import { MonthView } from "../components/MonthView";
import { getDatesInMonth } from "../Util";

export default function MainScreen({currentScreen, setCurrentScreen}) {
  const [currentDate, setCurrentDate] = useState(new Date());
  return (
    <View style={mainStyle.screenContainer}>
      <Header date={currentDate} />
      <SwipableView
        setCurrentDate={setCurrentDate}
        currentDate={currentDate}
        innerComponent={
          <MonthView
            datesInMonth={getDatesInMonth(currentDate)}
            currentDate={currentDate}
            changeDate={setCurrentDate}
          />
        }
      />
      <StatusBar backgroundColor={colors.backgroundLighter} />
    </View>
  );
}
