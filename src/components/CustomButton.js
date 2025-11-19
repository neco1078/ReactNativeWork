import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import Animated, { FadeIn } from "react-native-reanimated";
const CustomButton = ({
  buttonText,
  flexValue,
  handleOnPress,
  buttonColor,
  pressedButtonColor,
}) => {
  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? pressedButtonColor : buttonColor,
          flex: flexValue,
        },
        styles.button,
      ]}
      onPress={() => handleOnPress()}
    >
      <Text style={styles.buttonText}>{buttonText}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,

    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
