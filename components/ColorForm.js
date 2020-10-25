import React, { useState, useRef } from "react";
import { StyleSheet, Button, View, TextInput } from "react-native";
// import console = require("console");

export default function ColorForm({ onNewColor = f => f }) {
  const [inputValue, setInputValue] = useState("");
  const { container, txtInput } = styles;
  const input = useRef();
  return (
    <View style={container}>
      <TextInput
        ref={input}
        value={inputValue}
        // normalnie poniżej dzięki destrukturyzacji może być onChangeText={setInputValue}
        onChangeText={text => setInputValue(text)}
        style={txtInput}
        placeholder="enter a color"
        autoCapitalize="none"
      />
      <Button
        title="add"
        onPress={() => {
          input.current.blur();
          onNewColor(inputValue);
          setInputValue("");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // marginTop: 40,
    alignItems: "center"
  },
  txtInput: {
    flex: 1,
    borderWidth: 2,
    fontSize: 20,
    margin: 5,
    borderRadius: 5,
    padding: 5,
    backgroundColor: "white"
  }
});
