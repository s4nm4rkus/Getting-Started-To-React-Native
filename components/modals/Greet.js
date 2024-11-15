import { View, Text, StyleSheet } from "react-native";
import greetStyles from "../../stylesheet/greetStyle";
import shadowBoxStyle from "../../stylesheet/shadowBoxStyle";

export default function Greet({ name }) {
  return (
    <View style={[greetStyles.greetView, shadowBoxStyle.boxShadow]}>
      <Text style={greetStyles.greetText}>Hello, {name}!</Text>
    </View>
  );
}
