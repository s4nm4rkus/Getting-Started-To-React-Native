import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

const appStyles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "plum",
  },
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
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
    backgroundColor: "lightblue",
    padding: 20,
    flex: 1,
  },

  modalContent: {
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
    position: "absolute",
    right: "50%",
    left: "50%",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 10,
    fontWeight: "500",
    textAlign: "left",
    paddingHorizontal: 10,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default appStyles;
