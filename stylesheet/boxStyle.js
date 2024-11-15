import { StyleSheet, Dimensions } from "react-native";

const boxStyles = StyleSheet.create({
  box1: {
    width: 300,
    height: 300,
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 10,
    backgroundColor: "lightblue",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  boxText: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default boxStyles;
