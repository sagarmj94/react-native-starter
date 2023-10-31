import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const CounterScreen = () => {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Text>Current Count :{count}</Text>
      <Button title={"Increment +"} onPress={() => setCount(count + 1)} />
      <Button title={"Decrement -"} onPress={() => setCount(count - 1)} />
    </View>
  );
};

const styles = StyleSheet.create({});
export default CounterScreen;
