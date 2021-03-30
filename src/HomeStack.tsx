import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useContext } from "react";
import { Button, Text, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { AuthContext } from "./AuthProvider";
import { Centrar } from "./Centrar";
import faker from "faker";
interface HomeStackProps {}

const Stack = createStackNavigator();

function Feed() {
  return (
    <Centrar>
      <FlatList
        style={{ width: "100%" }}
        renderItem={({ item }) => {
          return <Button title={item} onPress={() => {}} />;
        }}
        keyExtractor={(product, idx) => product + idx}
        data={Array.from(Array(50), () => faker.commerce.product())}
      />
    </Centrar>
  );
}

export const HomeStack: React.FC<HomeStackProps> = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        options={{
          headerRight: () => {
            const { logout } = useContext(AuthContext);
            return (
              <TouchableOpacity
                onPress={() => {
                  logout();
                }}
              >
                <MaterialCommunityIcons name={"logout"} size={30} />
              </TouchableOpacity>
            );
          },
        }}
        component={Feed}
      />
    </Stack.Navigator>
  );
};
