import { StyleSheet } from "react-native";

// TODO: add light theme
const darkColors = {
  background: "#3B4252",
  backgroundLighter: "#4C566A",
  backgroundDarker: "#2E3440",
  highlight: "#B48EAD",
  highlightAlt: "#81a1c1",
  textHighlight: "#FAFAFA",
  text: "#DAE5FF",
  textDimmed: "#B8C1D7",
};

// TODO: Make colors change after users theme
const colors = darkColors;

const mainStyle = StyleSheet.create({
  innerContainer: {
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  text: {
    fontSize: 15,
    color: colors.text,
  },
  textHighlighted: {
    fontSize: 15,
    color: colors.textHighlight,
  },
  textDimmed: {
    fontSize: 15,
    color: colors.textDimmed,
  },
  headerSmall: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.text,
  },
  headerMedium: {
    fontSize: 25,
    fontWeight: "bold",
    color: colors.text,
  },
  headerBig: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.text,
  },
});

export { mainStyle, colors };
