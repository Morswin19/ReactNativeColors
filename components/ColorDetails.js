import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Color from "color";

export default function ColorDetails({ route }) {
  const { container } = styles;
  const { color: name } = route.params;
  const color = Color(name);
  const textColor = { fontSize: 20, color: color.negate().toString() };
  return (
    <View style={[container, { backgroundColor: name }]}>
      <Text style={textColor}>{name}</Text>
      <Text style={textColor}>HEX: {color.hex().toString()}</Text>
      <Text style={textColor}>RGB: {color.rgb().toString()}</Text>
      <Text style={textColor}>HSL: {color.hsl().toString()}</Text>
      <Text style={textColor}>CMYK: {color.cmyk().toString()}</Text>
      <Text style={textColor}>Luminosity: {color.luminosity()}</Text>
      <Text style={textColor}>
        {`Negate ${color
          .negate()
          .rgb()
          .toString()}`}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});
