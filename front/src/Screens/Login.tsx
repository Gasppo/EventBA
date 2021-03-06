import React, { useContext } from "react";
import { Text, TouchableOpacity } from "react-native";
import { AuthNavProps } from "../paramLists/AuthParamList";
import { AuthContext } from "../AuthProvider";
import { Centrar } from "../Components/Centrar";

export function Login({ navigation, route }: AuthNavProps<"Login">) {
  const { loginTemp } = useContext(AuthContext);
  return (
    <Centrar>
      <Text
        style={{
          color: "#4D418D",
          fontWeight: "bold",
          fontSize: 40,
          marginBottom: 50,
        }}
      >
        {" "}
        EventBA
      </Text>
      <Text
        style={{
          color: "#4D418D",
          fontSize: 20,
          marginBottom: 180,
        }}
      >
        {" "}
        ¡Bienvenido!
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("LoginForm");
        }}
        style={{
          borderRadius: 20,
          backgroundColor: "#4D418D",
          marginBottom: 60,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            marginVertical: 10,
            marginHorizontal: 100,
            color: "white",
          }}
        >
          Iniciar sesión
        </Text>
      </TouchableOpacity>
      <Text style={{ color: "#4D418D", marginBottom: 10 }}>
        ¿No tenes una cuenta?
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Register");
        }}
        style={{
          borderRadius: 20,
          borderWidth: 2,
          borderColor: "#4D418D",
          marginBottom: 40,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            marginVertical: 10,
            marginHorizontal: 100,
            color: "#4D418D",
          }}
        >
          Registrate
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          loginTemp();
        }}
      >
        <Text style={{ color: "#4D418D", fontWeight: "600" }}>
          Saltear este paso
        </Text>
      </TouchableOpacity>
    </Centrar>
  );
}
