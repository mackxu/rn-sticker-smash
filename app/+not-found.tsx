import { Link, Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! 😢" }} />
      <View style={styles.container}>
        <Link dismissTo href="/(tabs)/abort" style={styles.link}>
          Go to home screen!
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e",
  },
  link: {
    color: "#fff",
    fontSize: 16,
    textDecorationLine: "underline",
  },
});
