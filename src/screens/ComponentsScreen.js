import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";

const ComponentsScreen = () => {
  const name = "sagar";
  return (
    <View>
      <Text style={styles.textStyle}>Getting start with react native</Text>
      <Text style={styles.subHeaderStyle}>My name is {name}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    color: "red",
    fontSize: 45,
  },
  subHeaderStyle: {
    color: "green",
    fontSize: 20,
  },
});

export default ComponentsScreen;
