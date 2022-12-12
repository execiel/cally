import { StyleSheet, StatusBar, Text, View } from "react-native";
import { getDatesInMonth, getMonthName } from "./Util";
import { MonthView } from "./components/MonthView";
import { Header } from "./components/Header";
import { colors } from "./MainStyle";
import { useState } from "react";

export default function App() {
  // Current month and date
  const [currentDate, setCurrentDate] = useState(new Date());
  let touchX = 0;

  return (
    <View
      style={styles.container}
      onTouchStart={(e) => (this.touchX = e.nativeEvent.pageX)}
      onTouchEnd={(e) => {
        // Swipe left
        if (this.touchX - e.nativeEvent.pageX > 20) console.log("Swiped left");
        if (e.nativeEvent.pageX - this.touchX > 20) console.log("Swiped right");
      }}
    >
      <Header date={currentDate} />
      <View style={{ flex: 6, alignItems: "center", justifyContent: "center" }}>
        <MonthView
          datesInMonth={getDatesInMonth(currentDate)}
          currentDate={currentDate}
          changeDate={setCurrentDate}
        />
      </View>
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
