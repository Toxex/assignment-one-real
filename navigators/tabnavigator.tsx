import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, Item } from "../tabScreens/HomeScreen";
import { DetailsScreen } from "../tabScreens/DetailsScreen";

export type RootStackParamList = {
  Ölstilar: undefined;
  Information: { beer: Item };
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNav() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="Ölstilar" component={HomeScreen} />
      <RootStack.Screen name="Information" component={DetailsScreen} />
    </RootStack.Navigator>
  );
}
