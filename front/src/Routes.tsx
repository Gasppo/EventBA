import { NavigationContainer } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppTabs } from "./AppTabs";
import { AuthContext } from "./AuthProvider";
import { AuthStack } from "./AuthStack";
import { Centrar } from "./Components/Centrar";

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = ({}) => {
  const { user, login } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //cheacker loggeo
    AsyncStorage.getItem("username")
      .then((userString) => {
        if (userString) {
          //hacer cosas
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (loading) {
    return (
      <Centrar>
        <ActivityIndicator size="large" />
      </Centrar>
    );
  }

  return (
    <NavigationContainer>
      {user ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};
