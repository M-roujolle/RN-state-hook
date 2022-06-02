import React, { useState } from "react"
import { View, Text } from "react-native"
import UserInput from "./components/UserInput"

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text>Inscription</Text>

      <UserInput name="NAME" value={name} setValue={setName} />
      <UserInput name="EMAIL" value={email} setValue={setEmail} />
      <UserInput name="PASSWORD" value={password} setValue={setPassword} />

      <Text>{JSON.stringify({ name, email, password }, null, 4)}</Text>
    </View>
  );
};

export default Signup