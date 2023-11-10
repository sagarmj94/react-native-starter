import { StyleSheet, Text, View } from "react-native";
import React, { useReducer } from "react";
import ColorCount from "../Components/ColorCount";
import { Alert } from "react-native";

const COLOR_INCREAMENT = 15;
const COLOR_DECREAMENT = 15;
const MAX_COLOR = 255;
const MIN_COLOR = 0;
const SquareScreen = () => {
  const reducer = (state, action) => {
    switch (action.colorToChange) {
      case "red":
        return {
          ...state,
          red: validateColor(state.red + action.amount),
        };
      case "green":
        return {
          ...state,
          green: validateColor(state.green + action.amount),
        };
      case "blue":
        return {
          ...state,
          blue: validateColor(state.blue + action.amount),
        };
      default:
        return state;
    }
  };

  const validateColor = (color) => {
    if (color < MIN_COLOR || color > MAX_COLOR) {
      Alert.alert("Invalid Color", "this kind of color is not available");
      return null;
    }
    return color;
  };
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  console.log("state", state);
  const { red, green, blue } = state;
  return (
    <View>
      <ColorCount
        color={"Red"}
        onIncrease={() =>
          dispatch({ colorToChange: "red", amount: COLOR_INCREAMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "red", amount: -COLOR_DECREAMENT })
        }
      />
      <ColorCount
        color={"Blue"}
        onIncrease={() =>
          dispatch({ colorToChange: "green", amount: COLOR_INCREAMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "green", amount: -COLOR_DECREAMENT })
        }
      />
      <ColorCount
        color={"Green"}
        onIncrease={() =>
          dispatch({ colorToChange: "blue", amount: COLOR_INCREAMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "blue", amount: -COLOR_DECREAMENT })
        }
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
