import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from "react-native";
import appStyles from "../../stylesheet/appStyle";
import textInputStyle from "../../stylesheet/textInputStyle";
import shadowBoxStyle from "../../stylesheet/shadowBoxStyle";
import boxStyles from "../../stylesheet/boxStyle";

export default function UserInput({
  form,
  errors,
  handleSubmit,
  handleInputChange,
  handleOpenModalWithDelay,
}) {
  return (
    <View>
      <View style={textInputStyle.inputWrapper}>
        <Text style={[textInputStyle.inputWrapper, boxStyles.boxText]}>
          Hi! my name is {form.name}
        </Text>
        <TextInput
          style={[textInputStyle.input, shadowBoxStyle.textInputShadow]}
          value={form.name}
          onChangeText={(value) => handleInputChange("name", value)}
          placeholder="Enter your name"
          autoCapitalize="words"
        />
        {errors.name ? (
          <Text style={appStyles.errorText}>{errors.name}</Text>
        ) : null}
        <TextInput
          style={[textInputStyle.input, shadowBoxStyle.textInputShadow]}
          value={form.phone}
          onChangeText={(value) => handleInputChange("phone", value)}
          placeholder="Phone (+63-XXX-XXX-XXXX)"
          keyboardType="numeric"
        />
        {errors.phone ? (
          <Text style={appStyles.errorText}>{errors.phone}</Text>
        ) : null}
        <TextInput
          style={[textInputStyle.input, shadowBoxStyle.textInputShadow]}
          value={form.email}
          onChangeText={(value) => handleInputChange("email", value)}
          placeholder="Enter your email (email@example.com)"
          autoCapitalize="none"
          autoCorrect={false}
        />
        {errors.email ? (
          <Text style={appStyles.errorText}>{errors.email}</Text>
        ) : null}
        <TextInput
          style={[textInputStyle.input, shadowBoxStyle.textInputShadow]}
          value={form.password}
          onChangeText={(value) => handleInputChange("password", value)}
          placeholder="Enter your password"
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
        />
        {errors.password ? (
          <Text style={appStyles.errorText}>{errors.password}</Text>
        ) : null}
      </View>

      <View style={shadowBoxStyle.buttonShadow}>
        <TouchableOpacity
          style={appStyles.button}
          onPress={() =>
            Alert.alert("Warning!", "Do you want to open this Modal?", [
              {
                text: "Proceed",
                onPress: handleSubmit,
              },
              {
                text: "Cancel",
              },
            ])
          }
          activeOpacity={0.7}
        >
          <Text style={appStyles.buttonText}>Open Modal</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
