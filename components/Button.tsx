import react from "react";
import { TouchableOpacity, Text } from "react-native";
import { mainStyle } from "../MainStyle";

export default function Button({ onPress, title }) {
  return (
    <TouchableOpacity style={mainStyle.button} onPress={() => onPress()}>
      <Text style={mainStyle.buttonText}>{title}!</Text>
    </TouchableOpacity>
  );
}
