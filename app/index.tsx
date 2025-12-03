import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useCallback, useMemo, useRef, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Receipt } from "../components/Receipt";

export default function Index() {
  const [sheetIndex, setSheetIndex] = useState(-1);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ["90%"], []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
    setSheetIndex(index);
  }, []);

  const handleSnapPress = useCallback(() => {
    bottomSheetRef.current?.snapToIndex(1);
  }, []);

  return (
    <View style={styles.container}>
      <Pressable onPress={handleSnapPress} style={styles.button}>
        <Text style={styles.buttonText}>Print animation</Text>
      </Pressable>

      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enablePanDownToClose={true}
        backgroundStyle={{ backgroundColor: "#f2f2f2" }}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Receipt sheetIndex={sheetIndex} />
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
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
  contentContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: 20,
  },
});
