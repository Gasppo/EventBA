import React from "react";
import { View } from "react-native";

interface CentrarProps {}

export const Centrar: React.FC<CentrarProps> = ({ children }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      {children}
    </View>
  );
};
