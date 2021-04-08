import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type AppParamList = {
  Inicio: undefined;
  Buscar: undefined;
  Entradas: undefined;
  Perfil: undefined;
};

export type AppTabProps<T extends keyof AppParamList> = {
  navigation: StackNavigationProp<AppParamList, T>;
  route: RouteProp<AppParamList, T>;
};
