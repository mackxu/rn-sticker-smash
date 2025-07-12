import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Pressable, StyleSheet, Text, View } from "react-native";

export function Button({ label, theme, onPress }: { label: string; theme?: "primary"; onPress?: () => void }) {
  if (theme) {
    return (
      <View style={[styles.buttonContainer, styles.buttonPrimaryContainer]}>
        <Pressable style={[styles.button, { backgroundColor: "#fff" }]} onPress={onPress}>
          <FontAwesome name="picture-o" size={18} color="#25292e" style={{ marginRight: 8 }} />
          <Text style={[styles.label, { color: "#25292e" }]}>{label}</Text>
        </Pressable>
      </View>
    );
  }
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.label}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 340,
    height: 68,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  buttonPrimaryContainer: {
    borderColor: "#ffd33d",
    borderWidth: 4,
    borderRadius: 18,
  },
  button: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 10,
  },
  label: {
    color: "#fff",
    fontSize: 14,
  },
});
