import React from "react";
import { StyleSheet, View } from "react-native";
import { CircleButton } from "./CircleButton";
import { IconButton } from "./IconButton";

export function AppOptions({
  onReset,
  onSave,
  onAddSticker,
}: {
  onReset: () => void;
  onSave: () => void;
  onAddSticker: () => void;
}) {
  return (
    <View style={styles.container}>
      <View style={styles.optionsRow}>
        <IconButton name="refresh" label="重选" onPress={onReset} />
        <CircleButton onPress={onAddSticker} />
        <IconButton name="save-alt" label="保存" onPress={onSave} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 60,
  },
  optionsRow: {
    flexDirection: "row",
    alignItems: "center",
  },
});
