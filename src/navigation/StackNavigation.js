import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Decision from "../screens/Decision";
import Main from "../screens/Main";
import Result from "../screens/Result";

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
    return(
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
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
        </Stack.Navigator>
    );
}