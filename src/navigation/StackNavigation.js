import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Header from "../components/Header";
import Decision from "../screens/Decision";
import EndGame from "../screens/EndGame";
import Main from "../screens/Main";
import MainMenu from "../screens/MainMenu";
import Result from "../screens/Result";

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
    return(
        <Stack.Navigator
          initialRouteName="mainMenu"
          screenOptions={{
            // headerShown: false,
            header: () => (<Header/>),
            animationTypeForReplace: "push"
          }}
        >
            <Stack.Screen
              name="mainMenu"
              options={{ headerShown: false }}
              component={MainMenu}
            />
            <Stack.Screen
              name="main"
              component={Main}
            />
            <Stack.Screen
              name="decision"
              component={Decision}
            />
            <Stack.Screen
              name="result"
              component={Result}
            />
            <Stack.Screen
              name="end"
              component={EndGame}
              options={{
                headerShown: false 
              }}
            />
        </Stack.Navigator>
    );
}