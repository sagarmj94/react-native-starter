import { StyleSheet, View } from "react-native";
import React, { useReducer } from "react";
import ColorCount from "../Components/ColorCount";

const COLOR_INCREAMENT = 15;
const COLOR_DECREAMENT = 15;
const MAX_COLOR = 255;
const MIN_COLOR = 0;
const SquareScreen = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "change_red":
        return {
          ...state,
          red: validateColor(state.red + action.payload),
        };
      case "change_green":
        return {
          ...state,
          green: validateColor(state.green + action.payload),
        };
      case "change_blue":
        return {
          ...state,
          blue: validateColor(state.blue + action.payload),
        };
      default:
        return state;
    }
  };

  const validateColor = (color) => {
    if (color < MIN_COLOR) {
      return MAX_COLOR;
    }
    if (color > MAX_COLOR) {
      return MIN_COLOR;
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
          dispatch({ type: "change_red", payload: COLOR_INCREAMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_red", payload: -COLOR_DECREAMENT })
        }
      />
      <ColorCount
        color={"Blue"}
        onIncrease={() =>
          dispatch({ type: "change_green", payload: COLOR_INCREAMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_green", payload: -COLOR_DECREAMENT })
        }
      />
      <ColorCount
        color={"Green"}
        onIncrease={() =>
          dispatch({ type: "change_blue", payload: COLOR_INCREAMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_blue", payload: -COLOR_DECREAMENT })
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
