import React from "react";
import { Button, Text } from "react-native";
import { AuthNavProps } from "../AuthParamList";
import { Centrar } from "../Components/Centrar";

export function Register({ navigation, route }: AuthNavProps<"Register">) {
  return (
    <Centrar>
      <Text> Register Text </Text>
      <Button
        title="Logearse"
        onPress={() => {
          navigation.navigate("Login");
        }}
      />
    </Centrar>
  );
}
