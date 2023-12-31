import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./screens/Login"
import MainPage from "./screens/MainPage"
import SearchCalorie from "./screens/SearchCalorie"
import { Details } from "./screens/Details"

import { LanguageProvider } from "./utils/LanguageProvider";
import { ThemeProvider } from "./utils/ThemeProvider";
import { UserProvider } from "./utils/UserProvider";
import { ItemsProvider } from "./utils/ItemsProvider";

const Navigation = () => {
    const Stack = createStackNavigator();

    const screenOptions = {
        headerShown: false
    }

    const [currentRoute, setCurrentRoute] = React.useState("Login");

    const handleNavigationStateChange = (state) => {
        if (state && state.routes && state.routes.length > 0) {
            setCurrentRoute(state.routes[state.index].name);
        }
    };

    return (
        <NavigationContainer onStateChange={handleNavigationStateChange}>
            <UserProvider>
                <LanguageProvider>
                    <ThemeProvider>
                        <ItemsProvider>
                            <Stack.Navigator initialRouteName="Login" screenOptions={screenOptions} >
                                <Stack.Screen name="Login" component={Login} />
                                <Stack.Screen name="MainPage" component={MainPage} />
                                <Stack.Screen name="SearchCalorie" component={SearchCalorie} />
                                <Stack.Screen name="Details" component={Details} />
                            </Stack.Navigator>
                        </ItemsProvider>
                    </ThemeProvider>
                </LanguageProvider>
            </UserProvider>
        </NavigationContainer >
    )
}

export default Navigation