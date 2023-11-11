import { StyleSheet, Text, View } from "react-native";
import React from "react";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Box Screen : 1</Text>
      <Text style={styles.textStyle1}>Box Screen : 2</Text>
      <Text style={styles.textStyle2}>Box Screen : 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    borderColor: "grey",
    height: 200,
    flexDirection: "column",
  },
  textStyle: {
    borderWidth: 2,
    borderColor: "red",
  },
  textStyle1: {
    borderWidth: 2,
    borderColor: "green",
    position: "absolute",
    // top: 0,
    // bottom: 0,
    // right: 0,
    // left: 0,
    ...StyleSheet.absoluteFillObject,
  },
  textStyle2: {
    borderWidth: 2,
  },
  textStyle2: {
    borderWidth: 2,
    borderColor: "red",
  },
});
export default BoxScreen;
