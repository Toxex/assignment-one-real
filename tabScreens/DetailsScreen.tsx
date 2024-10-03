import { ScrollView, StyleSheet, Text, View } from "react-native";
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
        <View key={style.letter}>
          <Text style={styles.beer}>Letter: {style.letter}</Text>
          <Text style={styles.beer}>OG Min: {style.ogMin}</Text>
          <Text style={styles.beer}>OG Max: {style.ogMax}</Text>
          <Text style={styles.beer}>FG Min: {style.fgMin}</Text>
          <Text style={styles.beer}>FG Max: {style.fgMax}</Text>
          <Text style={styles.beer}>IBU Min: {style.ibuMin}</Text>
          <Text style={styles.beer}>IBU Max: {style.ibuMax}</Text>
          <Text style={styles.beer}>ABV Min: {style.abvMin}%</Text>
          <Text style={styles.beer}>ABV Max: {style.abvMax}%</Text>
          <Text style={styles.beer}>EBC Min: {style.ebcMin}</Text>
          <Text style={styles.beer}>EBC Max: {style.ebcMax}</Text>
          <Text style={styles.beer}>Aroma: {style.aroma}</Text>
          <Text style={styles.beer}>Appearance: {style.appearance}</Text>
          <Text style={styles.beer}>Flavor: {style.flavor}</Text>
          <Text style={styles.beer}>Texture: {style.texture}</Text>
          <Text style={styles.beer}>Examples: {style.examples}</Text>
          <Text style={styles.description}>Summary: {style.summary}</Text>
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
