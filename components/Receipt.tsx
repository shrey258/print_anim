import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Animated from "react-native-reanimated";

interface ReceiptProps {
  sheetIndex: number;
}

export const Receipt = ({ sheetIndex }: ReceiptProps) => {
  return (
    <View style={styles.container}>
      {/* Printer Slot */}
      <View style={styles.slotContainer}>
        <View style={styles.slot} />
      </View>

      {/* Receipt Paper */}
      <Animated.View
        style={[
          styles.paper,
          {
            transform: [
              {
                translateY: sheetIndex > 0 ? "0%" : "-75%",
              },
            ],
            transitionProperty: "transform",
            transitionDuration: "600ms",
            transitionTimingFunction: "linear",
          },
        ]}
      >
        {/* Header */}
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>SPECIAL</Text>
          <Text style={styles.headerTitle}>THANKS</Text>
        </View>

        {/* Dashed Divider */}
        <Text style={styles.dashedLine} numberOfLines={1} ellipsizeMode="clip">
          - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        </Text>

        {/* Content Section 1 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Frankfruter ↗</Text>
          <Text style={styles.text}>
            Frankfurter is an open-source API for currency and historical
            foreign exchange rates published by the European Central Bank.
          </Text>
        </View>

        {/* Content Section 2 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Thanks to IOS community</Text>
          <Text style={styles.text}>
            Azam Mukhtar, Paul hudson from hackingwithswift, Thundsdev, Kavsoft,
            Sean Allen, Daniel saidi, Karin from SwiftyPlace, Stewart Lynch,
            Xcoding with alfian, rorodriguez116 for camera module tutorial.
          </Text>
        </View>

        {/* Extra dashed line at bottom like in image */}
        <Text style={styles.dashedLine} numberOfLines={1} ellipsizeMode="clip">
          - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        </Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    overflow: "hidden",
  },
  slotContainer: {
    width: "100%",
    alignItems: "center",
    zIndex: 1,
    marginBottom: -12,
  },
  slot: {
    width: "95%",
    height: 16,
    backgroundColor: "#1a1a1a",
    borderRadius: 8,
  },
  paper: {
    backgroundColor: "white",
    width: "90%",
    padding: 24,
    paddingTop: 32,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: Platform.OS === "ios" ? "Courier New" : "monospace",
    fontWeight: "bold",
    color: "#1a1a1a",
    textAlign: "center",
    letterSpacing: 2,
  },
  dashedLine: {
    fontFamily: Platform.OS === "ios" ? "Courier New" : "monospace",
    color: "#1a1a1a",
    textAlign: "center",
    marginBottom: 20,
    opacity: 0.8,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: Platform.OS === "ios" ? "Courier New" : "monospace",
    fontWeight: "600",
    color: "#1a1a1a",
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    fontFamily: Platform.OS === "ios" ? "Courier New" : "monospace",
    color: "#333",
    lineHeight: 20,
  },
  jaggedEdge: {
    width: "90%",
    height: 12,
    backgroundColor: "transparent",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
