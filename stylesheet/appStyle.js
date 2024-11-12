import { StyleSheet } from "react-native";

const appStyles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "plum",
  },
  container: {
    flex: 1,
    backgroundColor: "plum",
    padding: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "midnightblue",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  modalView: {
    justifyContent: "center",
    backgroundColor: "lightblue",
    padding: 60,
    flex: 1,
  },

  modalContent: {
    padding: 20,
    alignContent: "center",
    fontSize: 16,
    textAlign: "center",
    justifyContent: "center",
  },
  closeModal: {
    fontSize: 16,
    backgroundColor: "midnightblue",
    padding: 10,
    borderRadius: 5,
    width: 100,
    alignSelf: "center",
  },
  loadingIndicator: {
    margin: 10,
  },
});

export default appStyles;
