import { Audio } from "expo-av";
import { useEffect, useState } from "react";
import { Button, View } from "react-native";

export function soundPlay() {
  const [sound, setSound] = useState<Audio.Sound | null>(null);

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("./assets/Hello.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View>
      <Button title="Play Sound" onPress={playSound} />
    </View>
  );
}
