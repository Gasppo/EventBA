import React from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

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

        borderWidth: 0.25,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Image
          source={{ uri: "https://picsum.photos/640/480" }}
          style={{ width: 100, height: 100 }}
        />
        <Text style={{ marginVertical: 20, marginLeft: 10 }}>{item}</Text>
      </View>
    </TouchableOpacity>
  );
};
