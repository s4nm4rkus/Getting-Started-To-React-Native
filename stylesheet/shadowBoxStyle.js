import { StyleSheet } from "react-native";
import textInputStyle from "./textInputStyle";

const shadowBoxStyle = StyleSheet.create({
  boxShadow: {
    shadowColor: "#444444",
    shadowOffset: {
      width: 1,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  boxText: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
  },

  textInputShadow: {
    shadowColor: "#444444",
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },

  buttonShadow: {
    shadowColor: "#444444",
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
});

export default shadowBoxStyle;
