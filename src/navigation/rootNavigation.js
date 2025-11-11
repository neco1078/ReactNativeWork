import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import UserStack from "./UserStack";
const RootNavigation = () => {
  const isAuth = false; //buraya auth durumunu kontrol eden bir mantık gelecek
  return (
    <NavigationContainer>
      {!isAuth ? <AuthStack /> : <UserStack />}
    </NavigationContainer>
  );
};

export default RootNavigation;
