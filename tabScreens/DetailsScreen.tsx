import { StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../navigators/tabnavigator";
import { RouteProp } from "@react-navigation/native";

type DetailsScreenRouteProp = RouteProp<RootStackParamList, "Details">;

type DetailsScreenProps = {
  route: DetailsScreenRouteProp;
};

export function DetailsScreen({ route }: DetailsScreenProps) {
  const { beer } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.beer}>{beer.title}</Text>
      <Text style={styles.beer}>IBU: {beer.ibu}</Text>
      <Text style={styles.beer}>ABV: {beer.abv}%</Text>
      <Text style={styles.description}>{beer.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 32,
  },
  beer: {
    fontSize: 20,
    margin: 5,
  },
  description: {
    fontSize: 15,
    marginTop: 15,
  },
});

//display info on object, from an onpressed in homescreen. should contain back button if not here by default.
