import { StyleSheet, Text, View } from "react-native";

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Hemma</Text>
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
