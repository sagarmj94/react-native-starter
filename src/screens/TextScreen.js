import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const TextScreen = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View>
      <Text>Enter Name</Text>
      <TextInput
        style={styles.inputStyle}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Enter text here"
        value={name}
        onChangeText={(name) => setName(name)}
      />
      <Text>May Name is : {name}</Text>
      <TextInput
        style={styles.inputPasswordS}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Enter text here"
        value={password}
        onChangeText={(password) => setPassword(password)}
      />
      {password.length < 4 ? <Text>password must be 4 charectar</Text> : null}
    </View>
  );
};

export default TextScreen;

const styles = StyleSheet.create({
  inputStyle: { borderColor: "red", borderWidth: 2, margin: 2 },
  inputPasswordS: { borderColor: "grey", borderWidth: 2 },
});
