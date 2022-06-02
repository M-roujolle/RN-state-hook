import React from "react"
import { View, TextInput, Text, StyleSheet } from "react-native"

const UserInput = ({ name, value, setValue }) => {
  return (
    <View style={{ marginHorizontal: 24 }}>
      <Text>{name}</Text>
      <TextInput
        style={{
          borderBottomWidth: 0.5,
          height: 48,
          borderBottomColor: "#8e93a1",
          marginBottom: 30,
        }}
        value={value}
        onChangeText={(text) => setValue(text)}
      />
    </View>
  );
};

export default UserInput