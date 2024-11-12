import { View, Text, StyleSheet } from "react-native";
import greetStyles from "../stylesheet/greetStyle";

export default function Greet({ name }) {
  return (
    <View style={greetStyles.greetView}>
      <Text style={greetStyles.greetText}>Hello, {name}!</Text>
    </View>
  );
}
