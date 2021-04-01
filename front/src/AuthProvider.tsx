import React, { useState } from "react";
import { AsyncStorage } from "react-native";

type User = null | { username: string };

export const AuthContext = React.createContext<{
  user: User;
  login: () => void;
  loginTemp: () => void;
  logout: () => void;
  register: () => void;
}>({
  user: null,
  login: () => {},
  loginTemp: () => {},
  logout: () => {},
  register: () => {},
});

interface AuthProviderProps {}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        login: () => {
          const fakeUser = { username: "Gaspar" };
          setUser(fakeUser);
          AsyncStorage.setItem("user", JSON.stringify(fakeUser));
        },
        loginTemp: () => {
          const fakeUser = { username: "TempUser" };
          setUser(fakeUser);
          AsyncStorage.setItem("user", JSON.stringify(fakeUser));
        },
        logout: () => {
          setUser(null);
          AsyncStorage.removeItem("user");
        },
        register: () => {
          const fakeUser = { username: "RegisterUser" };
          setUser(fakeUser);
          AsyncStorage.setItem("user", JSON.stringify(fakeUser));
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
