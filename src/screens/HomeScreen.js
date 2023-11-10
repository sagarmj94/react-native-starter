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
      <Button
        title="Go to Listdemo"
        onPress={() => props.navigation.navigate("List")}
      />
      <Button
        title="Go to Image"
        onPress={() => props.navigation.navigate("Image")}
      />
      <Button
        title="Go to Counter"
        onPress={() => props.navigation.navigate("Counter")}
      />
      <Button
        title="Go to Color"
        onPress={() => props.navigation.navigate("Color")}
      />
      <Button
        title="Go to Square"
        onPress={() => props.navigation.navigate("Square")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default HomeScreen;
