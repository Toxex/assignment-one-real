import { Image } from "expo-image";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useSoundPlay } from "./SoundPlay";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export function ImageThing() {
  const { playSound } = useSoundPlay();
  const handleSoundPress = () => {
    playSound(); // Trigger sound playback when image is pressed
  };

  return (
    <TouchableOpacity onPress={handleSoundPress} style={styles.touch}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../assets/naken.png")}
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={1000}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    width: "100%",
    backgroundColor: "#0553",
  },
  touch: {
    flex: 1,
  },
});
