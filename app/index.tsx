import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [pressCount, setPressCount] = useState(0);

  return (
    <View style={styles.container}>
      <Pressable 
        onPress={() => setPressCount(pressCount + 1)} 
        style={styles.button}
      >
        <Text style={styles.buttonText}>Print animation</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "100%",
    maxWidth: 140,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9999,
    backgroundColor: "#FFF",
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "500",
    color: "black",
  },
});