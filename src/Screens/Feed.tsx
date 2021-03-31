import faker from "faker";
import React from "react";
import { Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { FeedItem } from "../Components/FeedItem";
import { TouchableImage } from "../Components/TouchableImage";

export function Feed() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableImage text="Museo" src="Museo" />
          <TouchableImage text="Teatro" src="Teatro" />
          <TouchableImage text="Cine" src="Cine" />
          <TouchableImage text="Música" src="Musica" />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableImage text="Foto" src="Foto" />
          <TouchableImage text="Cultura" src="Cultura" />
          <TouchableImage text="Exterior" src="Exterior" />
          <TouchableImage text="Danza" src="Danza" />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ borderBottomWidth: 1 }}>
          <Text
            style={{
              marginBottom: 5,
              marginLeft: 5,
              color: "#4E4290",
              fontWeight: "600",
              fontSize: 20,
            }}
          >
            Que hay de nuevo
          </Text>
        </View>

        <FlatList
          renderItem={({ item }) => {
            return <FeedItem item={item} />;
          }}
          keyExtractor={(product, idx) => product + idx}
          data={Array.from(Array(50), () => faker.commerce.product())}
        />
      </View>
    </View>
  );
}
