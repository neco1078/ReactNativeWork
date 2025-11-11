
import { NavigationContainer } from "@react-navigation/native";
import { AuthStack } from "./authStack";
import { UserStack } from "./userStack";
const rootNavigation = () => {
  const isAuth = false; //buraya auth durumunu kontrol eden bir mantık gelecek
  return (
    <NavigationContainer>
      {!isAuth ? <AuthStack /> : <UserStack />}
    </NavigationContainer>
  );
};

export default rootNavigation;


