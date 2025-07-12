import { AppOptions } from "@/components/AppOptions";
import { Button } from "@/components/Button";
import { EmojiList } from "@/components/EmojiList";
import { EmojiPicker } from "@/components/EmojiPicker";
import { EmojiSticker } from "@/components/EmojiSticker";
import ImageViewer from "@/components/ImageViewer";
import { launchImageLibraryAsync } from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import { useRef, useState } from "react";
import { ImageSourcePropType, StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { captureRef } from "react-native-view-shot";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  const [uploadImage, setUploadImage] = useState("");
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [isModalShow, setIsModalShow] = useState(false);
  const [pickedEmoji, setPickedEmoji] = useState<ImageSourcePropType | undefined>();

  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();
  if (permissionResponse === null) {
    requestPermission();
  }

  const pickImage = async () => {
    const result = await launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 2],
      quality: 1,
    });
    if (result.canceled) return;
    // console.log(result.assets[0]);
    setUploadImage(result.assets[0].uri);
  };

  const onReset = () => {
    setUploadImage("");
    setShowAppOptions(false);
    setPickedEmoji(undefined);
  };

  const imageRef = useRef<View>(null);
  const onSaveImageAsync = async () => {
    try {
      if (!imageRef.current) return;
      const localURI = await captureRef(imageRef, {
        height: 440,
      });
      await MediaLibrary.saveToLibraryAsync(localURI);
      if (localURI) {
        alert("保存成功");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onAddSticker = () => {
    setIsModalShow(true);
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imageContainer}>
        <View ref={imageRef} collapsable={false}>
          <ImageViewer imgSource={PlaceholderImage} uploadImage={uploadImage} />
          {pickedEmoji && <EmojiSticker emoji={pickedEmoji} size={40} />}
        </View>
      </View>
      {showAppOptions ? (
        <AppOptions onReset={onReset} onSave={onSaveImageAsync} onAddSticker={onAddSticker} />
      ) : (
        <View style={styles.footer}>
          <Button label="上传图片" theme="primary" onPress={pickImage}></Button>
          <Button label="使用本图" onPress={() => setShowAppOptions(true)}></Button>
        </View>
      )}
      <EmojiPicker isVisible={isModalShow} onClose={() => setIsModalShow(false)}>
        <EmojiList onSelect={setPickedEmoji} />
      </EmojiPicker>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#25292e",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 28,
  },
  footer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
