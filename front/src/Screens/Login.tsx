import React, { useContext } from "react";
import { Text, TouchableOpacity } from "react-native";
import { AuthNavProps } from "../AuthParamList";
import { AuthContext } from "../AuthProvider";
import { Centrar } from "../Components/Centrar";

export function Login({ navigation, route }: AuthNavProps<"Login">) {
  const { login } = useContext(AuthContext);
  return (
    <Centrar>
      <Text
        style={{
          color: "#4E4290",
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
          color: "#4E4290",
          fontSize: 20,
          marginBottom: 180,
        }}
      >
        {" "}
        ¡Bienvenido!
      </Text>
      <TouchableOpacity
        onPress={() => {
          login();
        }}
        style={{
          borderRadius: 20,
          backgroundColor: "#4E4290",
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
      <Text style={{ color: "#4E4290", marginBottom: 10 }}>
        {" "}
        ¿No tenes una cuenta?
      </Text>
      <TouchableOpacity
        onPress={() => {
          login();
        }}
        style={{
          borderRadius: 20,
          borderWidth: 2,
          borderColor: "#4E4290",
          marginBottom: 40,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            marginVertical: 10,
            marginHorizontal: 100,
            color: "#4E4290",
          }}
        >
          Registrate
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          login();
        }}
      >
        <Text style={{ color: "#4E4290", fontWeight: "600" }}>
          Saltear este paso
        </Text>
      </TouchableOpacity>
    </Centrar>
  );
}
