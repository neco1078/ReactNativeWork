import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import { useState } from "react";

import Loading from "../components/Loading";
const LoginPage = ({ navigation }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/images/login-icon.png")}
      />
      <Text style={styles.welcome}>Welcome {result}</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputBoxText}>Email</Text>
        <TextInput
          inputMode="email"
          placeholder="Enter Your Email"
          style={styles.textInputStyle}
          onChangeText={(value) => setName(value)}
          value={name}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputBoxText}>Password</Text>
        <TextInput
          secureTextEntry={true}
          placeholder="Enter Your Password"
          style={styles.textInputStyle}
          onChangeText={setLastName}
          value={lastName}
        />
      </View>
      <Pressable
        style={({ pressed }) => [
          { backgroundColor: pressed ? "gray" : "blue" },
          styles.button,
        ]}
        onPress={() => setIsLoading(true)}
      >
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          { backgroundColor: pressed ? "gray" : "lightgray", marginTop: 50 },
          styles.signupButton,
        ]}
        onPress={() => navigation.navigate("Signup")}
      >
        <Text style={styles.buttonText}>Signup</Text>
      </Pressable>
      {isLoading ? (
        <Loading changeIsLoading={() => setIsLoading(false)} />
      ) : null}
    </View>
  );
};
export default LoginPage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    width: "80%",
    borderWidth: 2,
  },
  textInputStyle: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    width: "100%",
    borderRadius: 10,
    marginVertical: 10,
    paddingLeft: 10,
    textAlign: "center",
    color: "blue",
  },
  button: {
    borderWidth: 1,
    width: "80%",
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
  image: {
    width: 100,
    height: 100,
  },
  welcome: {
    fontWeight: "bold",
    fontSize: 26,
  },
  signupButton: {
    borderWidth: 1,
    width: "30%",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  inputBoxText: { fontWeight: "bold", alignSelf: "flex-start" },
});
