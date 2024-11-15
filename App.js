import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Button,
  ActivityIndicator,
  Alert,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import appStyles from "./stylesheet/appStyle";
import textInputStyle from "./stylesheet/textInputStyle";
import shadowBoxStyle from "./stylesheet/shadowBoxStyle";
import Box from "./components/common/Box";
import UserInput from "./components/inputs/userInputs";
import Greet from "./components/modals/Greet";

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [postList, setPostList] = useState([]);
  const [errors, setErrors] = useState({});
  const [isActivityIndicatorlVisible, setIsActivityIndicatorlVisible] =
    useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const validateForm = () => {
    let errors = {};

    if (!form.name) errors.name = "Name is required!";
    if (!form.phone) errors.phone = "Phone No. is required!";
    if (!form.email) errors.email = "Email Adress is required!";
    if (!form.password) errors.password = "Password is required!";

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (field, value) => {
    setForm((prevForm) => ({
      ...prevForm,
      [field]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: "",
    }));
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log(
        "Submitted",
        form.name,
        form.phone,
        form.email,
        form.password
      );

      setForm({
        name: "",
        phone: "",
        email: "",
        password: "",
      });
      setErrors({});
    }
  };

  const handleOpenModalWithDelay = () => {
    setIsActivityIndicatorlVisible(true);
    setTimeout(() => {
      setIsActivityIndicatorlVisible(false);
      setIsModalVisible(true);
    }, 500);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );
        const data = await response.json();
        setPostList(data); // Correctly update the postList state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <SafeAreaView style={appStyles.safeContainer}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={20}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView keyboardShouldPersistTaps="handled">
          <View style={appStyles.container}>
            <Box />
            <View style={[appStyles.loadingIndicator]}>
              <ActivityIndicator
                style={appStyles.loadingIndicator}
                size="large"
                color="black"
                animating={isActivityIndicatorlVisible}
              />
            </View>

            <UserInput
              form={form}
              errors={errors}
              handleSubmit={handleSubmit}
              handleInputChange={handleInputChange}
              handleOpenModalWithDelay={handleOpenModalWithDelay}
            />

            <Modal
              visible={isModalVisible}
              animationType="slide"
              presentationStyle="pageSheet"
              onRequestClose={() => setIsModalVisible(false)}
            >
              <View style={appStyles.modalView}>
                <Text style={appStyles.modalContent}>Modal Content</Text>
                <Greet name={"Bruce Wayne"} postList={postList} />
                <View style={appStyles.closeModal}>
                  <Button
                    title="Close"
                    color="white"
                    onPress={() => setIsModalVisible(false)}
                  />
                </View>
              </View>
            </Modal>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
