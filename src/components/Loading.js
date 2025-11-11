import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Pressable,
} from "react-native";
import React from "react";

const Loading = ({ changeIsLoading }) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => changeIsLoading()}
        style={[{}, styles.closeButtonContainer]}
      >
        <Text style={styles.closeButton}>X</Text>
      </Pressable>

      <ActivityIndicator size="large" color="#0000ff" />
      <Text style={styles.loginText}>Loading...</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "tomato",
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    color: "white",
  },
  closeButtonContainer: {
    backgroundColor: "black",
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 50,
    right: 30,
  },
  closeButton: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});
