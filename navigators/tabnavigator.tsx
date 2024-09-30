import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../tabScreens/HomeScreen";
import { DetailsScreen } from "../tabScreens/DetailsScreen";

export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNav() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="Home" component={HomeScreen} />
      <RootStack.Screen name="Details" component={DetailsScreen} />
    </RootStack.Navigator>
  );
}
