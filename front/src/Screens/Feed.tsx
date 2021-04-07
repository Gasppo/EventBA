import faker from "faker";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import getEventsAPI from "../api/geteventsAPI";
import { FeedItem } from "../Components/FeedItem";
import { TouchableImage } from "../Components/TouchableImage";
import { HomeStackNavProps } from "../HomeParamList";
import { Evento } from "../types";

export function Feed({ navigation }: HomeStackNavProps<"Feed">) {
  const ogdata = Array.from(Array(10), () => faker.commerce.product());
  const [eventData, changeEventData] = useState(ogdata);
  const [eventos, cambiarEventos] = useState("");

  useEffect(() => {
    getEventsAPI()
      .then((eventos: any) => {
        if (eventos) {
          console.log(`Eventos cargados exitosamente`);
          cambiarEventos(eventos);
        } else {
          console.log(`Eventos no cargados`);
          cambiarEventos("");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const reset = () => {
    getEventsAPI()
      .then((eventos: any) => {
        if (eventos) {
          console.log(`Eventos cargados exitosamente`);
          cambiarEventos(eventos);
        } else {
          console.log(`Eventos no cargados`);
          cambiarEventos("");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const filter = (data, filterName) => {
    cambiarEventos(
      JSON.stringify(
        JSON.parse(data).filter((x: Evento) => x.nombre.endsWith(filterName))
      )
    );
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
              filter(eventos, "4");
            }}
          />
          <TouchableImage text="Teatro" onPressImg={() => {}} src="Teatro" />
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
        {eventos != "" && (
          <FlatList
            renderItem={({ item }: { item: Evento }) => {
              return <FeedItem item={item} navigation={navigation} />;
            }}
            keyExtractor={(item: Evento) => item.eventid.toString()}
            data={JSON.parse(eventos)}
          />
        )}
      </View>
    </View>
  );
}
