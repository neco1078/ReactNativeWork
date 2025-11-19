import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, {
  BounceIn,
  FlipInEasyX,
  PinwheelIn,
} from "react-native-reanimated";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { CustomButton } from "../components";
import { useEffect, useState } from "react";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";
const HomePage = () => {
  const [data, setData] = useState([]);
  const [updateTheData, setUpdateTheData] = useState("");
  const dispatch = useDispatch();

  console.log("getdata:", data);
  const addData = async () => {
    try {
      const docRef = await addDoc(collection(db, "reactNativeLesson"), {
        title: "Zero to Hero",
        content: "React native tutorial for beginners",
        lesson: 95,
      });
      getData();
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  const saveData = async () => {
    try {
      const docRef = await addDoc(collection(db, "todolist"), {
        title: "Zero to Hero",
        content: "React native tutorial for beginners",
        lesson: 95,
      });
      getData();
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "reactNativeLesson"));
    // querySnapshot.forEach((doc) => {
    //   const data = doc.data();

    //   console.log(data);
    //   setData((prevData) => [...prevData, doc.data()]);
    // });
    const newData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setData(newData);
  };

  const deleteData = async (id) => {
    await deleteDoc(doc(db, "reactNativeLesson", id));
    getData();
  };

  const updateData = async (id) => {
    try {
      const lessonData = doc(db, "reactNativeLesson", id);
      updateDoc(lessonData, { content: updateTheData });
      getData();
    } catch (error) {
      console.log("updatedata line 57", error);
    }
  };

  const handleLogOut = async () => {
    dispatch(logout());
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await getData();
  //   };

  //   fetchData();
  // }, []);
  const renderItem = ({ item, index }) => {
    return (
      <Animated.View
        style={styles.flatListContainer}
        entering={FlipInEasyX.duration(500).delay((index + 1) * 100)}
      >
        <Pressable
          style={styles.iconContainer}
          onPress={() => deleteData(item.id)}
        >
          <FontAwesome name="check-circle" size={24} color="black" />
          <FontAwesome name="check-circle-o" size={24} color="black" />
        </Pressable>
        {/* <Text>{item.id}</Text> */}
        <View style={styles.itemContainer}>
          <Text style={styles.itemTitle}>Title: {item.title}</Text>
          <Text>Content: {item.content}</Text>
        </View>
      </Animated.View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Todo List</Text>

      {/* {data.length > 0 ? (
        data.map((item, index) => (
          <Pressable
            key={index}
            onPress={() => {
              updateData(item.id);
            }}
          >
            <Text>Title: {item.title}</Text>
            <Text>Content: {item.content}</Text>
            <Text>Lesson: {item.lesson}</Text>
          </Pressable>
        ))
      ) : (
        <Text>No data yet</Text>
      )} */}
      <Animated.FlatList
        entering={PinwheelIn}
        data={data}
        style={styles.flatList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <CustomButton
        buttonText="getdata"
        setWidth={"40%"}
        buttonColor={"blue"}
        pressedButtonColor={"gray"}
        handleOnPress={getData}
      />
      <TextInput
        value={updateTheData}
        onChangeText={setUpdateTheData}
        placeholder="enter your data"
        style={{
          borderWidth: 1,
          width: "50%",
          paddingVertical: 10,
          textAlign: "center",
          marginBottom: 30,
        }}
      />
      {/* <CustomButton
        buttonText="Savedata"
        setWidth={"40%"}
        buttonColor={"blue"}
        pressedButtonColor={"gray"}
        handleOnPress={addData}
      />
      <CustomButton
        buttonText="deletedata"
        setWidth={"40%"}
        buttonColor={"blue"}
        pressedButtonColor={"gray"}
        handleOnPress={deleteData}
      />
      <CustomButton
        buttonText="updatedata"
        setWidth={"40%"}
        buttonColor={"blue"}
        pressedButtonColor={"gray"}
        handleOnPress={updateData}
      />
      <CustomButton
        buttonText="Log Out"
        setWidth={"40%"}
        buttonColor={"red"}
        pressedButtonColor={"gray"}
        handleOnPress={handleLogOut}
      /> */}
    </SafeAreaView>
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
  flatListContainer: {
    borderBottomWidth: 0.3,
    marginVertical: 10,

    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  flatList: {
    width: "90%",
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "blue",
  },
  itemContainer: {
    flex: 5,
    marginLeft: 10,
    padding: 5,
  },
  itemTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  iconContainer: {
    flex: 1,
    alignItems: "center",
  },
});
