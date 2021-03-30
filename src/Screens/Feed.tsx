import React from "react";
import {
  Button,
  Image,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Centrar } from "../Components/Centrar";
import faker from "faker";

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
          <TouchableOpacity style={{ marginHorizontal: 5 }}>
            <View style={styles.logoContainer}>
              <Image
                source={require("../img/museum.png")}
                style={styles.tinyLogo}
              />
            </View>
            <Text>Museos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginHorizontal: 5 }}>
            <View style={styles.logoContainer}>
              <Image
                source={require("../img/Theater.png")}
                style={styles.tinyLogo}
              />
            </View>
            <Text>Teatro</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginHorizontal: 5 }}>
            <View style={styles.logoContainer}>
              <Image
                source={require("../img/clapperboard.png")}
                style={styles.tinyLogo}
              />
            </View>
            <Text>Cine</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginHorizontal: 5 }}>
            <View style={styles.logoContainer}>
              <Image
                source={require("../img/music-note.png")}
                style={styles.tinyLogo}
              />
            </View>
            <Text>Música</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity style={{ marginHorizontal: 5 }}>
            <View style={styles.logoContainer}>
              <Image
                source={require("../img/camera.png")}
                style={styles.tinyLogo}
              />
            </View>
            <Text>Foto</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginHorizontal: 5 }}>
            <View style={styles.logoContainer}>
              <Image
                source={require("../img/pillar.png")}
                style={styles.tinyLogo}
              />
            </View>
            <Text>Cultura</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginHorizontal: 5 }}>
            <View style={styles.logoContainer}>
              <Image
                source={require("../img/bicycle.png")}
                style={styles.tinyLogo}
              />
            </View>
            <Text>Exterior</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginHorizontal: 5 }}>
            <View style={styles.logoContainer}>
              <Image
                source={require("../img/dancer.png")}
                style={styles.tinyLogo}
              />
            </View>
            <Text>Danza</Text>
          </TouchableOpacity>
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
                <Text style={{ marginVertical: 20, marginLeft: 10 }}>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(product, idx) => product + idx}
          data={Array.from(Array(50), () => faker.commerce.product())}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tinyLogo: {
    width: 65,
    height: 65,
  },
  logoContainer: {
    borderWidth: 0.5,
    borderRadius: 5,
    padding: 10,
  },
});
