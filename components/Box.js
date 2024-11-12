import { View, Text } from "react-native";
import boxStyles from "../stylesheet/boxStyle";

export default function Box() {
  return (
    <View>
      <View style={[boxStyles.box1, boxStyles.boxShadow]}>
        <Text style={boxStyles.boxText}>Box 1</Text>
      </View>
    </View>
  );
}
