import { LinearGradient } from "expo-linear-gradient";
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

      {/* Paper clipping area - this creates the "coming through slot" effect */}
      <View style={styles.paperClipArea}>
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
          <LinearGradient
            colors={["#ffffff", "#f5f3ff", "#e0f2fe", "#f1f5f9"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.gradient}
          >
            {/* Header */}
            <View style={styles.headerContainer}>
              <Text style={styles.headerTitle}>SPECIAL</Text>
              <Text style={styles.headerTitle}>THANKS</Text>
            </View>

            {/* Dashed Divider */}
            <Text
              style={styles.dashedLine}
              numberOfLines={1}
              ellipsizeMode="clip"
            >
              - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
              - -
            </Text>

            {/* Content Section 1 */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Thanks to Design Spells & Eren </Text>
              <Text style={styles.text}>
                Grateful to the folks who publish the tiny fixes and deep dives
                that make building real products possible. This app is my
                attempt to return the favor: take challenges seriously, ship
                things that matter, and never stop raising the bar.
              </Text>
            </View>

            {/* Content Section 2 */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Shrey258 ↗</Text>
              <Text style={styles.text}>
                Looking for new roles.
              </Text>
            </View>

            {/* Extra dashed line at bottom like in image */}
            <Text
              style={styles.dashedLine}
              numberOfLines={1}
              ellipsizeMode="clip"
            >
              - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
              - -
            </Text>
          </LinearGradient>
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    position: "relative",
  },
  slotContainer: {
    width: "100%",
    alignItems: "center",
    zIndex: 10,
    marginBottom: -10,
  },
  slot: {
    width: "92%",
    height: 18,
    backgroundColor: "#1a1a1a",
    borderRadius: 9,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 8,
  },
  paperClipArea: {
    width: "100%",
    alignItems: "center",
    overflow: "hidden",
  },
  paper: {
    width: "88%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 12,
    overflow: "hidden",
  },
  gradient: {
    width: "100%",
    padding: 24,
    paddingTop: 32,
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
