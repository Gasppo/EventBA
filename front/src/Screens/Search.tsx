import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import getEventsAPI from "../api/geteventsAPI";
import { FeedItem } from "../Components/FeedItem";
import { TouchableImage } from "../Components/TouchableImage";
import { SearchStackNavProps } from "../paramLists/SearchParamList";
import { Evento } from "../types";

export function Search({ navigation }: SearchStackNavProps<"Search">) {
  const [eventos, cambiarEventos] = useState("");
  const [search, onChangeSearch] = useState("");
  const [tempEvents, changeTempEvents] = useState("");

  useEffect(() => {
    getEventsAPI()
      .then((eventos: any) => {
        if (eventos) {
          console.log(`Eventos cargados exitosamente`);
          cambiarEventos(eventos);
          changeTempEvents(eventos);
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
          changeTempEvents(eventos);
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
    changeTempEvents(
      JSON.stringify(
        JSON.parse(data).filter((x: Evento) =>
          JSON.stringify(x).toLowerCase().includes(filterName.toLowerCase())
        )
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
          <TextInput
            style={{
              marginVertical: 20,
              marginHorizontal: 10,
              borderWidth: 1,
              paddingVertical: 15,
              paddingLeft: 10,
              borderRadius: 30,
              width: 350,
              backgroundColor: "#f5f5f5",
            }}
            onChangeText={(text) => {
              onChangeSearch(text);
              filter(eventos, text);
            }}
            value={search}
            placeholder="Buscar..."
          />
        </View>
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
      </View>
      <View style={{ flex: 2 }}>
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
        {tempEvents != "" && (
          <FlatList
            renderItem={({ item }: { item: Evento }) => {
              return <FeedItem item={item} navigation={navigation} />;
            }}
            keyExtractor={(item: Evento) => item.eventid.toString()}
            data={JSON.parse(tempEvents)}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputRegister: {
    marginVertical: 20,
    marginHorizontal: 10,
    borderWidth: 1,
    paddingVertical: 15,
    paddingLeft: 10,
    borderRadius: 30,
    width: 300,
    backgroundColor: "#f5f5f5",
  },
});
