import React from "react";
import { Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Centrar } from "../Components/Centrar";
import faker from "faker";

export function Feed() {
  return (
    <Centrar>
      <FlatList
        style={{ width: "100%" }}
        renderItem={({ item }) => {
          return <Button title={item} onPress={() => {}} />;
        }}
        keyExtractor={(product, idx) => product + idx}
        data={Array.from(Array(50), () => faker.commerce.product())}
      />
    </Centrar>
  );
}
