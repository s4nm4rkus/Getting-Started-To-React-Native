import React from "react";
import { Button, View, Text, SafeAreaView } from "react-native";
import { navigate } from "../../service/navigation/navigationService";
import appStyles from "../../stylesheet/appStyle";

const SecondScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={appStyles.safeContainer}>
      <View>
        <Text>Second Screen</Text>
        <Button
          title="Home"
          onPress={() => navigation.navigate("Home", { itemId: 42 })}
        />
      </View>
    </SafeAreaView>
  );
};

export default SecondScreen;
