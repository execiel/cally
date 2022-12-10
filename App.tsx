import { StyleSheet, Text, View } from "react-native";
import { getDay, getDaysInMonth, getMonthName } from "./Util";
import { MonthView } from "./components/MonthView";
import { colors } from "./MainStyle";

export default function App() {
  // Current month and date
  const currentDate: Date = new Date();

  return (
    <View style={styles.container}>
      <MonthView
        daysInMonth={getDaysInMonth(currentDate)}
        currentDay={getDay(currentDate)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
});
