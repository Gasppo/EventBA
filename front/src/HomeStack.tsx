import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useContext } from "react";
import { Text, TouchableOpacity } from "react-native";
import { AuthContext } from "./AuthProvider";
import { Feed } from "./Screens/Feed";
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
    </Stack.Navigator>
  );
};
