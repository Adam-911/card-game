import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Header from "../components/Header";
import Decision from "../screens/Decision";
import EndGame from "../screens/EndGame";
import Main from "../screens/Main";
import Result from "../screens/Result";

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
    return(
        <Stack.Navigator
          screenOptions={{
            // headerShown: false,
            header: () => (<Header/>)
          }}
        >
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