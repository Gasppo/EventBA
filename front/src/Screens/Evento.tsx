import React from "react";
import { Text, View } from "react-native";
import { Centrar } from "../Components/Centrar";
import { HomeStackNavProps } from "../HomeParamList";

export function Evento({ navigation, route }: HomeStackNavProps<"Evento">) {
  return (
    <Centrar>
      <Text>{route.params.item.nombre}</Text>
    </Centrar>
  );
}
