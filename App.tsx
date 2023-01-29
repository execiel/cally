import { StyleSheet, StatusBar, View } from "react-native";
import { Header } from "./components/Header";
import { colors } from "./MainStyle";
import { useState } from "react";
import SwipableView from "./components/SwipableView";
import { holidays } from "./Util";

export default function App() {
  // Current month and date
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <View style={styles.container}>
      <Header date={currentDate} />
      <SwipableView setCurrentDate={setCurrentDate} currentDate={currentDate} />
      <StatusBar backgroundColor={colors.backgroundLighter} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
});
