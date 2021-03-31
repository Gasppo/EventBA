import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Text, View } from "react-native";
import { AuthParamList } from "./AuthParamList";
import { Login } from "./Screens/Login";
import { Register } from "./Screens/Register";

interface AuthStackProps {}

const Stack = createStackNavigator<AuthParamList>();

export const AuthStack: React.FC<AuthStackProps> = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        options={{
          headerStyle: {
            backgroundColor: "#4E4290",
          },
          headerTitle: () => null,
          headerLeft: () => {
            return (
              <View style={{ marginLeft: 10 }}>
                <Text
                  style={{ fontWeight: "800", color: "white", fontSize: 18 }}
                >
                  Log In
                </Text>
              </View>
            );
          },
        }}
        component={Login}
      />
      <Stack.Screen
        name="Register"
        options={{ headerTitle: "Registrarse" }}
        component={Register}
      />
    </Stack.Navigator>
  );
};
