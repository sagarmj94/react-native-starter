import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ImageDetail from "../Components/ImageDetail";

const ImageScreen = () => {
  return (
    <ScrollView>
      <ImageDetail
        title="Sagar"
        imageSource={require("../assets/images.jpeg")}
      />
      <ImageDetail
        title="Sneha"
        imageSource={require("../assets/images.jpeg")}
      />
      <ImageDetail
        title="Shubham"
        imageSource={require("../assets/road-1072823_640.jpg")}
      />
      <ImageDetail
        title="Sunny"
        imageSource={require("../assets/wallpapersden.com_k-a-different-world_1920x1080.jpg")}
      />
      <ImageDetail
        title="Goroba"
        imageSource={require("../assets/images.jpeg")}
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({});

export default ImageScreen;
