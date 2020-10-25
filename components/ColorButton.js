import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

export default function ColorButton({ backgroundColor, onPress = f => f }) {
  const { button, row, buttonText, sample } = styles;
  return (
    <TouchableHighlight
      style={button}
      onPress={() => onPress(backgroundColor)}
      underlayColor="lawngreen"
    >
      <View style={row}>
        <View style={[sample, { backgroundColor }]}></View>
        <Text style={buttonText}>{backgroundColor}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ABC",
    marginTop: 30
  },
  button: {
    margin: 10,
    padding: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "yellow",
    alignSelf: "stretch",
    backgroundColor: "rgba(255, 255, 255, .8)"
  },
  buttonText: {
    fontSize: 25,
    textAlign: "center"
  },
  row: {
    flexDirection: "row",
    alignItems: "center"
  },
  sample: {
    height: 20,
    width: 20,
    margin: 5,
    backgroundColor: "white",
    borderRadius: 10
  }
});
