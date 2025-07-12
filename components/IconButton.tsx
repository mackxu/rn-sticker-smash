import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable, StyleSheet, Text } from "react-native";
export function IconButton({
  onPress,
  label,
  name,
}: {
  onPress?: () => void;
  label: string;
  name: keyof typeof MaterialIcons.glyphMap;
}) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <MaterialIcons name={name} size={24} color="#fff" />
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    marginTop: 12,
    color: "#fff",
  },
});
