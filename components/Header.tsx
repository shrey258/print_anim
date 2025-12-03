import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated from "react-native-reanimated";

interface HeaderProps {
  title?: string;
  count?: number;
}

const marquee = {
  from: {
    transform: [{ translateX: 0 }],
  },
  to: {
    transform: [{ translateX: -100 }],
  },
};

export const Header = ({ title = "SHREY", count = 24 }: HeaderProps) => {
  return (
    <View style={styles.container}>
      {/* Title Pill */}
      <Animated.View
        style={[
          styles.titlePill,
          {
            overflow: "hidden",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          },
        ]}
      >
        <Animated.Text
          style={[
            styles.titleText,
            {
              // animationName: marquee,
              // animationDuration: 3000,
              // animationIterationCount: "infinite",
              // animationTimingFunction: "linear",
            },
          ]}
        >
          {title}
        </Animated.Text>
      </Animated.View>

      {/* Count Pill */}
      <View style={styles.countPill}>
        <View style={styles.indicator} />
        <Text style={styles.countText}>{count}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    width: "100%",
  },
  titlePill: {
    flex: 1,
    backgroundColor: "#2d3748",
    borderRadius: 20,
    paddingVertical: 14,
    paddingHorizontal: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    color: "#e2e8f0",
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 4,
    textTransform: "uppercase",
    width: "100%",
  },
  countPill: {
    backgroundColor: "#2d3748",
    borderRadius: 20,
    paddingVertical: 14,
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    minWidth: 100,
    justifyContent: "center",
  },
  indicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#48bb78",
  },
  countText: {
    color: "#e2e8f0",
    fontSize: 24,
    fontWeight: "700",
    letterSpacing: 2,
  },
});
