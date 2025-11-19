import { StyleSheet, Text, View, Image } from "react-native";
import { useEffect, useState } from "react";

import { Loading, CustomTextInput, CustomButton } from "../components/";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoading } from "../redux/userSlice";
import { login, authLogin } from "../redux/userSlice";
const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const [isLoading, setIsLoading] = useState(false);

  // userSlice içerisindeki verilerin okunması
  // const email = useSelector((state) => state.user.email);
  // const user = useSelector((state) => state.user);
  const { isLoading, error } = useSelector((state) => state.user);
  //userSlice içerisindeki reducer yapıların verilerin güncellenmesi
  const dispatch = useDispatch();

  //kullanıcı daha önce giriş yaptıysa kontrol oto. giriş

  useEffect(() => {
    dispatch(authLogin());
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome1</Text>
      <Image
        style={styles.image}
        source={require("../../assets/images/login-icon.png")}
      />
      <CustomTextInput
        title="Email"
        isSecureText={false}
        handleOnChangeText={(text) => setEmail(text.toLowerCase())}
        handleValue={email}
        handlePlaceholder="Enter Your Email"
      />
      <CustomTextInput
        title="Password"
        isSecureText={true}
        handleOnChangeText={(text) => setPassword(text)}
        handleValue={password}
        handlePlaceholder="Enter Your Password"
      />
      <Text style={{ color: "white" }}>{error}</Text>
      <CustomButton
        buttonText="Login"
        setWidth="80%"
        handleOnPress={() => dispatch(login({ email, password }))}
        buttonColor="blue"
        pressedButtonColor="gray"
      />

      <CustomButton
        buttonText="Sign Up"
        setWidth="30%"
        handleOnPress={() => navigation.navigate("Signup")}
        buttonColor="gray"
        pressedButtonColor="lightgray"
      />

      {isLoading ? (
        <Loading changeIsLoading={() => dispatch(setIsLoading(false))} />
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
