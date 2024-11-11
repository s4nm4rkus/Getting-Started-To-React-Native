import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Button,
} from "react-native";

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setIsModalVisible(true)}
        onLongPress={() => console.log("Button Long Pressed")}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>Open Modal</Text>
      </TouchableOpacity>

      <Modal visible={isModalVisible}>
        <View style={styles.modalView}>
          <Text style={styles.modalContent}>Modal Content</Text>
          <View style={styles.closeModal}>
            <Button
              title="Close"
              color="white"
              onPress={() => setIsModalVisible(false)}
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
});
