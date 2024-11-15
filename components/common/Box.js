import { View, Text } from "react-native";
import boxStyles from "../../stylesheet/boxStyle";
import shadowBoxStyle from "../../stylesheet/shadowBoxStyle";
export default function Box() {
  return (
    <View>
      <View style={[boxStyles.box1, shadowBoxStyle.boxShadow]}>
        <Text style={boxStyles.boxText}>Welcome!</Text>
      </View>
    </View>
  );
}
