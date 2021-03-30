import { createStackNavigator } from "@react-navigation/stack";
import React, { useContext } from "react";
import { Button, Text } from "react-native";
import { AuthParamList, AuthNavProps } from "./AuthParamList";
import { AuthContext } from "./AuthProvider";
import { Centrar } from "./Centrar";

interface AuthStackProps {}

const Stack = createStackNavigator<AuthParamList>();

function Login({ navigation, route }: AuthNavProps<"Login">) {
  const { login } = useContext(AuthContext);
  return (
    <Centrar>
      <Text> Login Text </Text>
      <Button
        title="Iniciar Sesion"
        onPress={() => {
          login();
        }}
      />
      <Button
        title="Registarse"
        onPress={() => {
          navigation.navigate("Register");
        }}
      />
    </Centrar>
  );
}

function Register({ navigation, route }: AuthNavProps<"Register">) {
  return (
    <Centrar>
      <Text> Register Text </Text>
      <Button
        title="Logearse"
        onPress={() => {
          navigation.navigate("Login");
        }}
      />
    </Centrar>
  );
}

export const AuthStack: React.FC<AuthStackProps> = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        options={{ headerTitle: "Inicio de sesion" }}
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
