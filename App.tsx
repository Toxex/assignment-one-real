import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import RootStackNav from "./navigators/tabnavigator";
import { useKeepAwake } from "expo-keep-awake";
import { SoundPlay } from "./components/SoundPlay";

export default function App() {
  useKeepAwake();
  // SoundPlay();
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <RootStackNav />
    </NavigationContainer>
  );
}
