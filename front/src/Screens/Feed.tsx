import faker from "faker";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { FeedItem } from "../Components/FeedItem";
import { TouchableImage } from "../Components/TouchableImage";
import { HomeStackNavProps } from "../HomeParamList";

export function Feed({ navigation }: HomeStackNavProps<"Feed">) {
  const ogdata = Array.from(Array(10), () => faker.commerce.product());
  const [eventData, changeEventData] = useState(ogdata);

  const reset = () => {
    changeEventData(ogdata);
  };
  const filter = (data, filterName) => {
    changeEventData(data.filter((x) => x.startsWith(filterName)));
  };
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableImage
            text="Museo"
            src="Museo"
            onPressImg={() => {
              filter(eventData, "C");
            }}
          />
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
          <TouchableOpacity
            onPress={() => {
              reset();
              console.log(ogdata);
            }}
          >
            <Text
              style={{
                marginBottom: 5,
                marginLeft: 5,
                color: "#4D418D",
                fontWeight: "600",
                fontSize: 20,
              }}
            >
              Que hay de nuevo
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          renderItem={({ item }) => {
            return <FeedItem item={item} navigation={navigation} />;
          }}
          keyExtractor={(product, idx) => product + idx}
          data={eventData}
        />
      </View>
    </View>
  );
}
