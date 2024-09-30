import { StyleSheet, Text, View } from "react-native";

type;

export function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text>Details</Text>
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

//display info on object, from an onpressed in homescreen. should contain back button if not here by default.
