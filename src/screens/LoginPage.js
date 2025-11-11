import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import { useState } from "react";

import { Loading, CustomTextInput } from "../components/";
const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome {result}</Text>
      <Image
        style={styles.image}
        source={require("../../assets/images/login-icon.png")}
      />
      <CustomTextInput
        title="Email"
        isSecureText={false}
        handleOnChangeText={setEmail}
        handleValue={email}
        handlePlaceholder="Enter Your Email"
      />
      <CustomTextInput
        title="Password"
        isSecureText={true}
        handleOnChangeText={setPassword}
        handleValue={password}
        handlePlaceholder="Enter Your Password"
      />

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
          { backgroundColor: pressed ? "lightgray" : "gray", marginTop: 50 },
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
    backgroundColor: "tomato",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    width: "80%",
  },

  button: {
    borderWidth: 1,
    width: "80%",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  welcome: {
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 30,
    color: "white",
  },
  signupButton: {
    borderWidth: 1,
    width: "30%",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
});
