import { StyleSheet, Text, View } from "react-native";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { CustomButton } from "../components";
import React, { useState } from "react";
const HomePage = () => {
  const [data, setData] = useState([]);
  console.log("getdata:", data);
  const addData = async () => {
    try {
      const docRef = await addDoc(collection(db, "reactNativeLesson"), {
        title: "Zero to Hero",
        content: "React native tutorial for beginners",
        lesson: 95,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "reactNativeLesson"));
    querySnapshot.forEach((doc) => {
      // console.log(`${doc.id} => ${doc.data()}`);
      setData((prevData) => [...prevData, doc.data()]);
    });
  };
  return (
    <View style={styles.container}>
      <Text>HomePage</Text>
      <Text>{data[0].title}</Text>
      <Text>{data[1].title}</Text>

      <CustomButton
        buttonText="Save"
        setWidth={"40%"}
        buttonColor={"blue"}
        pressedButtonColor={"gray"}
        handleOnPress={addData}
      />
      <CustomButton
        buttonText="getir"
        setWidth={"40%"}
        buttonColor={"blue"}
        pressedButtonColor={"gray"}
        handleOnPress={getData}
      />
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "tomato",
  },
});
