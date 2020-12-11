import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createSwitchNavigator } from "@react-navigation/compat";
import LoginScreen from '../screens/LoginScreen/LoginScreen'
import RegisterScreen from '../screens/RegistarScreen/RegisterScreen'
import HomeScreen from '../screens/HomeScreen/HomeScreen'
import MainScreen from '../screens/MainScreen/MainScreen'
import ProductListScreen from '../screens/ProductListScreen/ProductListScreen'
import FilterScreen from '../screens/FilterScreen/FilterScreen'
import NewLifeStyleScreen from '../screens/NewLifeStyleScreen/NewLifeStyleScreen'
import AddToCartScreen from '../screens/AddToCartScreen/AddToCartScreen'





const Stack = createStackNavigator();

export default NavigationsApp = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode='none'>
                {/* <Stack.Screen name="Tabnavigation"  initialRouteName="Tabnavigation" component={TabNavigation} /> */}
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="MainScreen" component={MainScreen} />
                <Stack.Screen name="ProductListScreen" component={ProductListScreen} />
                <Stack.Screen name="FilterScreen" component={FilterScreen} />
                <Stack.Screen name="NewLifeStyleScreen" component={NewLifeStyleScreen} />
                <Stack.Screen name="AddToCartScreen" component={AddToCartScreen} />
            </Stack.Navigator>

        </NavigationContainer>
    );
};