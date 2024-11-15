import { StyleSheet } from "react-native";

const greetStyles = StyleSheet.create({
  greetView: {
    marginVertical: 10,
    maxHeight: 700,
    padding: 0,
  },
  greetText: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "600",
  },
  postItem: {
    padding: 10,
    borderRadius: 5,
    borderColor: "#000",
    textAlign: "left",
    backgroundColor: "#fff",
  },
  postTitle: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
  footerList: {
    marginVertical: 5,
    textAlign: "center",
  },
});

export default greetStyles;
