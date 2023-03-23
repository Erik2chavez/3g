import Login from "./vistas/Login";
import Tiendas from "./vistas/Tiendas";
import Servicios from "./vistas/Servicios";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack=createNativeStackNavigator();
export default function App() {
  return (    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Tiendas"
          component={Tiendas}
        />
        <Stack.Screen
          name="Servicios"
          component={Servicios}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}