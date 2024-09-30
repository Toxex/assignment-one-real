import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import RootStackNav from "./navigators/tabnavigator";
import { useKeepAwake } from "expo-keep-awake";

export default function App() {
  useKeepAwake();
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <RootStackNav />
    </NavigationContainer>
  );
}
