import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { RootStackParamList } from "../navigators/tabnavigator";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Audio } from "expo-av";

export type Item = {
  id: string;
  letter: any;
  name: string;
  description: string;
  aroma: string;
  appearance: string;
  flavor: string;
  texture: string;
  examples: string;
  ogMin: any;
  ogMax: any;
  fgMin: any;
  fgMax: any;
  ebcMax: any;
  ebcMin: any;
  ibuMax: any;
  ibuMin: any;
  abvMin: any;
  abvMax: any;
  summary: any;
  category: any;
  styles: [];
};

export function HomeScreen() {
  const [items, setItems] = useState<Item[]>([]);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    fetch("https://styles.shbf.se/json/2013/styles")
      .then((response) => response.json())
      .then((data) => {
        // console.log("Fetched Data:", data);

        setItems(data);
        console.log(items);
      });
  }, []);

  const handleOnPress = (beer: Item) => {
    navigation.navigate("Details", { beer });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleOnPress(item)}>
            <Text style={styles.beer}>
              category:{item.name}
              {/* {item.styles}] */}
            </Text>
            <Text></Text>
            {/* <Text>Description: {item.description}</Text> */}
          </TouchableOpacity>
        )}
      />
      {/* <Text>fuck you!</Text> */}
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
