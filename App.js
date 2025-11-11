import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import { useState } from "react";
export default function App() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [result, setResult] = useState("");
  console.log(name);
  console.log(lastName);
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("./assets/images/login-icon.png")}
      />
      <Text style={styles.welcome}>Welcome {result}</Text>
      <Text>Email</Text>
      <TextInput
        inputMode="email"
        placeholder="Enter Your Email"
        style={styles.textInputStyle}
        onChangeText={(value) => setName(value)}
        value={name}
        keyboardType="default"
      />
      <Text>Password</Text>
      <TextInput
        secureTextEntry={true}
        placeholder="Enter Your Password"
        style={styles.textInputStyle}
        onChangeText={setLastName}
        value={lastName}
      />
      <Pressable
        style={({ pressed }) => [
          { backgroundColor: pressed ? "gray" : "blue" },
          styles.button,
        ]}
        onPress={() => setResult(name + " " + lastName)}
      >
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textInputStyle: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    width: "80%",
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
});
