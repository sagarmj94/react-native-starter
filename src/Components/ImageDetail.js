import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const ImageDetail = (props) => {
  console.log("props image", props);
  return (
    <View>
      <Image source={props.imageSource} />
      <Text>{props.title}</Text>
      <Text>Image Score - {props.imageSource}</Text>
    </View>
  );
};
const styles = StyleSheet.create({});

export default ImageDetail;
