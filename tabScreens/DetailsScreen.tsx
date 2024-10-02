import { StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../navigators/tabnavigator";
import { RouteProp } from "@react-navigation/native";

type DetailsScreenRouteProp = RouteProp<RootStackParamList, "Details">;

type DetailsScreenProps = {
  route: DetailsScreenRouteProp;
};

export function DetailsScreen({ route }: DetailsScreenProps) {
  const { beer } = route.params;
  // console.log("Beer details:", beer);
  return (
    <View style={styles.container}>
      <Text style={styles.beer}>Name: {beer.name}</Text>
      <Text style={styles.description}>Description: {beer.description}</Text>

      {beer.styles.map((style) => (
        <View>
          <Text style={styles.beer}>Category: {beer.category}</Text>
          <Text style={styles.beer}>Letter: {beer.letter}</Text>
          <Text style={styles.beer}>OG Min: {beer.ogMin}</Text>
          <Text style={styles.beer}>OG Max: {beer.ogMax}</Text>
          <Text style={styles.beer}>FG Min: {beer.fgMin}</Text>
          <Text style={styles.beer}>FG Max: {beer.fgMax}</Text>
          <Text style={styles.beer}>IBU Min: {beer.ibuMin}</Text>
          <Text style={styles.beer}>IBU Max: {beer.ibuMax}</Text>
          <Text style={styles.beer}>ABV Min: {beer.abvMin}%</Text>
          <Text style={styles.beer}>ABV Max: {beer.abvMax}%</Text>
          <Text style={styles.beer}>EBC Min: {beer.ebcMin}</Text>
          <Text style={styles.beer}>EBC Max: {beer.ebcMax}</Text>
          <Text style={styles.beer}>Aroma: {beer.aroma}</Text>
          <Text style={styles.beer}>Appearance: {beer.appearance}</Text>
          <Text style={styles.beer}>Flavor: {beer.flavor}</Text>
          <Text style={styles.beer}>Texture: {beer.texture}</Text>
          <Text style={styles.beer}>Examples: {beer.examples}</Text>
          <Text style={styles.description}>Summary: {beer.summary}</Text>
        </View>
      ))}
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
