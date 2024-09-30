import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { RootStackParamList } from "../navigators/tabnavigator";
import { useState } from "react";
import { beers } from "../mockdata/data";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type Item = {
  id: string;
  title: string;
  ibu: number;
  abv: number;
  description: string;
};

export function HomeScreen() {
  const [items, setItems] = useState<Item[]>([]);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleOnPress = (beer: Item) => {
    navigation.navigate("Details", { beer });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={beers}
        keyExtractor={(beer) => beer.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleOnPress(item)}>
            <Text style={styles.beer}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  beer: {
    fontSize: 20,
    marginTop: 15,
  },
});
