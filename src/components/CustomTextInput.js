import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const CustomTextInput = ({title,isSecureText,handleOnChangeText,handleValue,handlePlaceholder}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputBoxText}>{title}</Text>
      <TextInput
       //inputMode="email"
        secureTextEntry={isSecureText}
        placeholder={handlePlaceholder}
        style={styles.textInputStyle}
        onChangeText={handleOnChangeText}
         value={handleValue}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  inputContainer: {
    width: "80%",
  },
  inputBoxText: { fontWeight: "bold", alignSelf: "flex-start", color: "white" },
  textInputStyle: {
    height: 50,
    borderColor: "gray",
    borderBottomWidth: 0.5,
    borderColor: "white",
    width: "100%",
    borderRadius: 10,
    marginVertical: 10,
    paddingLeft: 10,
    textAlign: "center",
    color: "white",
  },
});
