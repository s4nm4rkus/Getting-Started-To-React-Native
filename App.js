import React, { useState } from "react";
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
    <View style={styles.container}>
      <StatusBar backgroundColor="lightgreen" />
      <ActivityIndicator
        style={styles.loadingIndicator}
        size={"large"}
        color={"black"}
        animating={isActivityIndicatorlVisible}
      />
      <TouchableOpacity
        style={styles.button}
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
        <Text style={styles.buttonText}>Open Modal</Text>
      </TouchableOpacity>

      <Modal
        visible={isModalVisible}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalContent}>Modal Content</Text>
          <View style={styles.closeModal}>
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
  modalView: {
    justifyContent: "center",
    backgroundColor: "lightblue",
    padding: 60,
    flex: 1,
  },

  modalContent: {
    padding: 60,
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
    margin: 20,
  },
});
