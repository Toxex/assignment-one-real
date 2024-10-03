import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import RootStackNav from "./navigators/tabnavigator";
import { useKeepAwake } from "expo-keep-awake";
import { soundPlay } from "./components/soundPlay";

export default function App() {
  useKeepAwake();
  soundPlay();
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <RootStackNav />
    </NavigationContainer>
  );
}
