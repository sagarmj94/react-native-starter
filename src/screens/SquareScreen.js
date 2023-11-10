import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ColorCount from "../Components/ColorCount";

const COLOR_INCREAMENT = 15;
const COLOR_DECREAMENT = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  console.log(red);
  return (
    <View>
      <ColorCount
        color={"Red"}
        onIncrease={() => setRed(Math.min(255, red + COLOR_INCREAMENT))}
        onDecrease={() => setRed(Math.max(0, red - COLOR_DECREAMENT))}
      />
      <ColorCount
        color={"Blue"}
        onIncrease={() => setBlue(Math.min(255, blue + COLOR_INCREAMENT))}
        onDecrease={() => setBlue(Math.max(0, blue - COLOR_DECREAMENT))}
      />
      <ColorCount
        color={"Green"}
        onIncrease={() => setGreen(Math.min(255, green + COLOR_INCREAMENT))}
        onDecrease={() => setGreen(Math.max(0, green - COLOR_DECREAMENT))}
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      ></View>
    </View>
  );
};
const styles = StyleSheet.create({});

export default SquareScreen;
