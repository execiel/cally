import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import Button from "../components/Button";
import { mainStyle, colors } from "../MainStyle";

export default function RegisterScreen({ currentScreen, setCurrentScreen }) {
  console.log("Hello world?");
  return (
    <View style={mainStyle.screenContainer}>
      <SafeAreaView
        style={{
          flex: 1,
          margin: 50,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={{ ...mainStyle.headerBig, fontSize: 35 }}>Cally</Text>
          <Text style={mainStyle.underHeader}>Calendar Scheduler</Text>
        </View>

        <View style={{ flex: 3, alignItems: "center" }}>
          <TextInput
            placeholder="Email"
            placeholderTextColor={colors.textDimmed}
            style={mainStyle.input}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor={colors.textDimmed}
            style={mainStyle.input}
          />
          <TextInput
            placeholder="Verify Password"
            placeholderTextColor={colors.textDimmed}
            style={mainStyle.input}
          />
          <Button
            title="Register New User"
            onPress={() => console.log("hej")}
          />
        </View>
      </SafeAreaView>
      <StatusBar backgroundColor={colors.backgroundLighter} />
    </View>
  );
}
