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
import { soundPlay } from "../components/soundPlay";

export type Item = {
  id: string;
  number: number;
  name: string;
  description: string;
  styles: {
    letter: string;
    aroma: string;
    appearance: string;
    flavor: string;
    texture: string;
    examples: string;
    ogMin: string; // DESSA VERKAR VARA OBJEKT INUTI ITEM (huvudklasser), OCH FINNAS I ARAY SOM HETER STYLES
    ogMax: string;
    fgMin: string;
    fgMax: string;
    ebcMax: string;
    ebcMin: string;
    ibuMax: string;
    ibuMin: string;
    abvMin: string;
    abvMax: string;
    summary: string;
  }[];
};

export function HomeScreen() {
  const [items, setItems] = useState<Item[]>([]);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    fetch("https://styles.shbf.se/json/2020/styles")
      .then((response) => response.json())
      .then((data) => {
        // console.log(JSON.stringify(data, null, 4));

        setItems(data);
        // data.forEach((item: Item) => {
        //   console.log(`Styles for ${item.name}:`, item.styles);
        // });
      });
  }, []);

  const handleOnPress = (beer: Item, style: Item) => {
    navigation.navigate("Details", { beer });
    soundPlay(); //for testing purposes
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.categories}>
              {item.number}. {item.name}
            </Text>
            {item.styles.map((style: any, id: number) => (
              <TouchableOpacity
                key={id}
                onPress={() => handleOnPress(item, style)}
              >
                <Text style={styles.underCategories}>
                  {style.letter}. {style.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
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
  categories: {
    fontSize: 20,
    marginTop: 15,
  },
  underCategories: {
    fontSize: 15,
  },
});
