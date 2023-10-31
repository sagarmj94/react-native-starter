import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>HomeScreen</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => {
          console.log("button Pressed");
        }}
      />
      <TouchableOpacity
        onPress={() => {
          console.log("List pressed");
        }}
      >
        <Text>Go To list Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default HomeScreen;
