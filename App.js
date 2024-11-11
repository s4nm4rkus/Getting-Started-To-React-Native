import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log("Button Pressed")}
        onLongPress={() => console.log("Button Long Pressed")}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>Press me</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default App;
