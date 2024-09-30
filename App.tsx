import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { HomeScreen } from "./tabScreens/HomeScreen";
import RootStackNav from "./navigators/tabnavigator";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <RootStackNav />
    </NavigationContainer>
  );
}
