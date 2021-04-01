import React from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Centrar } from "./Centrar";
interface FeedItemProps {
  item: any;
}

export const FeedItem: React.FC<FeedItemProps> = ({ item }) => {
  return (
    <TouchableOpacity
      onPress={() => {}}
      style={{
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "center",

        borderWidth: 0,
      }}
    >
      <View style={{ flexDirection: "row", marginVertical: 10 }}>
        <Image
          source={{ uri: "https://picsum.photos/640/480" }}
          style={{ width: 100, height: 100, marginLeft: 5, borderRadius: 5 }}
        />
        <View style={{ flexDirection: "column" }}>
          <Text style={{ marginLeft: 10, color: "#696969" }}>Fecha</Text>
          <Text
            style={{
              marginTop: 10,
              marginBottom: 5,
              marginLeft: 10,
              fontWeight: "bold",
              fontSize: 18,
              color: "#484848",
            }}
          >
            Evento
          </Text>
          <Text
            style={{
              marginLeft: 10,
              marginBottom: 10,
              fontSize: 14,
              color: "#696969",
            }}
          >
            Organización
          </Text>
          <Text style={{ marginLeft: 10, fontSize: 11, color: "#696969" }}>
            Ubicación
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
        >
          <TouchableOpacity style={{ marginRight: 20, marginBottom: 10 }}>
            <AntDesign name={"hearto"} size={20} color={"#4D418D"} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};
