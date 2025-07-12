import { useState } from "react";
import { FlatList, Image, ImageSourcePropType, Pressable, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function EmojiList({ onSelect }: { onSelect: (emoji: ImageSourcePropType) => void }) {
  const [emoji] = useState<ImageSourcePropType[]>([
    require("../assets/images/emoji1.png"),
    require("../assets/images/emoji2.png"),
    require("../assets/images/emoji3.png"),
    require("../assets/images/emoji4.png"),
    require("../assets/images/emoji5.png"),
    require("../assets/images/emoji6.png"),
  ]);

  const insets = useSafeAreaInsets();
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[styles.container, { paddingBottom: insets.bottom }]}
      data={emoji}
      renderItem={({ item, index }) => (
        <Pressable onPress={() => onSelect(item)} style={styles.imgContainer}>
          <Image source={item} style={styles.img} key={index} />
        </Pressable>
      )}
    ></FlatList>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  imgContainer: {
    marginRight: 20,
    justifyContent: "center",
  },
  img: {
    width: 60,
    height: 60,
  },
});
