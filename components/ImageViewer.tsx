import { Image } from "expo-image";
import { ImageSourcePropType, StyleSheet } from "react-native";

export default function ImageViewer({
  imgSource,
  uploadImage,
}: {
  imgSource: ImageSourcePropType;
  uploadImage?: string;
}) {
  const source = uploadImage ? { uri: uploadImage } : imgSource;
  return <Image source={source} style={styles.image} contentFit="fill"></Image>;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 480,
    borderRadius: 18,
  },
});
