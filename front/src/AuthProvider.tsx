import React, { useState } from "react";
import AsyncStorage from "@react-native-community/async-storage";

import registerAPI from "./api/registerAPI";
import loginAPI from "./api/loginAPI";

type User = null | { username: string; email: string };

export const AuthContext = React.createContext<{
  user: User;
  login: (email, password) => any;
  loginTemp: () => void;
  logout: () => void;
  register: (username, email, password) => any;
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
        login: async (email, password) => {
          const userData = await loginAPI(email);
          const currUser = {
            username: userData.username,
            email: userData.email,
          };
          if (password === userData.password) {
            setUser(currUser);
            AsyncStorage.setItem("username", JSON.stringify(currUser));
          } else {
            alert("Clave Incorrecta");
            return false;
          }
        },
        loginTemp: () => {
          const fakeUser = { username: "TempUser", email: "temp@mail" };
          setUser(fakeUser);
          AsyncStorage.setItem("username", JSON.stringify(fakeUser));
        },
        logout: () => {
          setUser(null);
          AsyncStorage.removeItem("username");
        },
        register: (username, email, password) => {
          if (registerAPI(username, email, password)) {
            setUser(username);
            AsyncStorage.setItem("username", JSON.stringify(username));
          } else {
            return false;
          }
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
