import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  console.log("props", props.navigation);
  return (
    <View>
      <Text style={styles.textStyle}>HomeScreen</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => props.navigation.navigate("Components")}
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
