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
  underHeader: {
    fontSize: 18,
    fontStyle: "italic",
    color: colors.highlightAlt,
  },
  input: {
    height: 45,
    width: 250,
    margin: 12,
    backgroundColor: colors.backgroundLighter,
    borderRadius: 10,
    fontSize: 15,
    color: colors.text,
    padding: 15,
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    margin: 10,
    padding: 15,
    width: 250,
    backgroundColor: colors.highlight,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "bold",
    textColor: colors.backgroundDarker,
  },
  screenContainer: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
});

export { mainStyle, colors };
