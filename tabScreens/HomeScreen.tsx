import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { DetailsScreen } from "./DetailsScreen";
import RootStackNav from "../navigators/tabnavigator";
import { useState } from "react";
import { beers } from "../mockdata/data";

type Item = {
  id: string;
  title: string;
  ibu: number;
  abv: number;
  description: string;
};

export function HomeScreen() {
  const [items, setItems] = useState<Item[]>([]);

  return (
    <View style={styles.container}>
      <Text>Hemma</Text>
      <FlatList
        data={beers}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
      <Button onPress={() => RootStackNav} title="To details" />
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
});
