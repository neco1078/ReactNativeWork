import { StyleSheet, Text, View, TextInput, Pressable,Image } from "react-native";
import { useState } from "react";
export default function App() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [result, setResult] = useState("");
  console.log(name);
  console.log(lastName);
  return (
    <View style={styles.container}>
      <Text>Welcome {result}</Text>
      <Text>Name</Text>
      <TextInput
        placeholder="Enter Your Name"
        style={styles.textInputStyle}
        onChangeText={(value) => setName(value)}
        value={name}
        // keyboardType="numeric"
      />
      <Text>Last Name</Text>
      <TextInput
        placeholder="Enter Your Last Name"
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
        <Text style={styles.buttonText}>Save</Text>
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
});
