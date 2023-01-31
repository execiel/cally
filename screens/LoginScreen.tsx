import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { mainStyle, colors } from "../MainStyle";
import Button from "../components/Button";

export default function LoginScreen({ currentScreen, setCurrentScreen }) {
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
          <Button
            title="Log In"
            onPress={() => setCurrentScreen("main")}
          />
          <Text style={{ ...mainStyle.textDimmed, marginTop: 35 }}>
            Or if you don't have an account...
          </Text>
          <Button title="Register" onPress={() => setCurrentScreen("register")}/>
        </View>
      </SafeAreaView>
      <StatusBar backgroundColor={colors.backgroundLighter} />
    </View>
  );
}
