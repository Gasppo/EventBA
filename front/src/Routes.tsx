import { NavigationContainer } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import { ActivityIndicator, AsyncStorage } from "react-native";
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
    AsyncStorage.getItem("user")
      .then((userString) => {
        if (userString) {
          //hacer cosas
          login();
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