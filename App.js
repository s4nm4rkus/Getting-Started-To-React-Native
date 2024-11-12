import React, { useState } from "react";
import appStyles from "./stylesheet/appStyle";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Button,
  StatusBar,
  ActivityIndicator,
  Alert,
} from "react-native";

import Greet from "./components/Greet";

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isActivityIndicatorlVisible, setIsActivityIndicatorlVisible] =
    useState(false);

  const handleOpenModalWithDelay = () => {
    setIsActivityIndicatorlVisible(true);

    setTimeout(() => {
      setIsActivityIndicatorlVisible(false);
      setIsModalVisible(true);
    }, 500);
  };

  return (
    <View style={appStyles.container}>
      <StatusBar backgroundColor="lightgreen" />
      <ActivityIndicator
        style={appStyles.loadingIndicator}
        size={"large"}
        color={"black"}
        animating={isActivityIndicatorlVisible}
      />
      <TouchableOpacity
        style={appStyles.button}
        onPress={() =>
          Alert.alert("Warning!", "Do you want to open this Modal?", [
            {
              text: "Proceed",
              onPress: () => {
                handleOpenModalWithDelay();
              },
            },
            {
              text: "Cancel",
            },
          ])
        }
        // onPress={}
        onLongPress={() => console.log("Button Long Pressed")}
        activeOpacity={0.7}
      >
        <Text style={appStyles.buttonText}>Open Modal</Text>
      </TouchableOpacity>

      <Modal
        visible={isModalVisible}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={appStyles.modalView}>
          <Text style={appStyles.modalContent}>Modal Content</Text>
          <Greet name="Bruce Wayne" />
          <View style={appStyles.closeModal}>
            <Button
              title="Close"
              color="white"
              onPress={() => {
                setIsModalVisible(false);
                setIsActivityIndicatorlVisible(false);
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}
