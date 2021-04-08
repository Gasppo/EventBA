import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  createStackNavigator,
  HeaderBackButton,
} from "@react-navigation/stack";
import React, { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AuthContext } from "../AuthProvider";
import { Evento } from "../Screens/Evento";
import { Feed } from "../Screens/Feed";
interface HomeStackProps {}

const Stack = createStackNavigator();

export const HomeStack: React.FC<HomeStackProps> = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        options={{
          headerTitle: () => null,
          headerStyle: {
            backgroundColor: "#4D418D",
          },
          headerRight: () => {
            const { logout } = useContext(AuthContext);
            return (
              <TouchableOpacity
                onPress={() => {
                  logout();
                }}
              >
                <MaterialCommunityIcons
                  name={"logout"}
                  size={30}
                  color={"white"}
                />
              </TouchableOpacity>
            );
          },
          headerLeft: () => {
            return (
              <Text
                style={{
                  fontWeight: "bold",
                  marginLeft: 10,
                  fontSize: 18,
                  color: "white",
                }}
              >
                EventBA
              </Text>
            );
          },
        }}
        component={Feed}
      />
      <Stack.Screen
        options={({ navigation, route }) => ({
          headerStyle: {
            backgroundColor: "#4D418D",
          },
          headerTitle: () => null,
          headerLeft: () => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: 4,
                }}
              >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <MaterialCommunityIcons
                    name={"arrow-left"}
                    size={30}
                    color={"white"}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    fontWeight: "bold",
                    marginLeft: 10,
                    fontSize: 18,
                    color: "white",
                  }}
                >
                  {route.params.eventID}
                </Text>
              </View>
            );
          },
        })}
        name="Evento"
        component={Evento}
      />
    </Stack.Navigator>
  );
};