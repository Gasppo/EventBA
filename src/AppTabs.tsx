import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppParamList } from "./AppParamList";
import { Centrar } from "./Centrar";
import { Button, Text } from "react-native";
import { AuthContext } from "./AuthProvider";
import {
  AntDesign,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { HomeStack } from "./HomeStack";
interface AppTabsProps {}

const Tabs = createBottomTabNavigator<AppParamList>();

function Search() {
  return (
    <Centrar>
      <Text> Search</Text>
    </Centrar>
  );
}

function Entradas() {
  return (
    <Centrar>
      <Text> Entradas</Text>
    </Centrar>
  );
}

function Perfil() {
  return (
    <Centrar>
      <Text> Perfil</Text>
    </Centrar>
  );
}

export const AppTabs: React.FC<AppTabsProps> = ({}) => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Inicio") {
            iconName = "home";
          } else if (route.name === "Buscar") {
            iconName = "search1";
          } else if (route.name === "Entradas") {
            return (
              <MaterialCommunityIcons
                name={"ticket"}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Perfil") {
            return (
              <FontAwesome5 name={"user-circle"} size={size} color={color} />
            );
          }

          // You can return any component that you like here!
          return <AntDesign name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#4E4290",
        inactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen name="Inicio" component={HomeStack}></Tabs.Screen>
      <Tabs.Screen name="Buscar" component={Search}></Tabs.Screen>
      <Tabs.Screen name="Entradas" component={Entradas}></Tabs.Screen>
      <Tabs.Screen name="Perfil" component={Perfil}></Tabs.Screen>
    </Tabs.Navigator>
  );
};
