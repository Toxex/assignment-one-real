import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../tabScreens/HomeScreen";

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNav() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="Home" component={HomeScreen} />
    </RootStack.Navigator>
  );
}
