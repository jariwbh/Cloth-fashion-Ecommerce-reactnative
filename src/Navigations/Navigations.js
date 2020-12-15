import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen/LoginScreen'
import RegisterScreen from '../screens/RegistarScreen/RegisterScreen'
import HomeScreen from '../screens/HomeScreen/HomeScreen'
import FilterScreen from '../screens/FilterScreen/FilterScreen'
import NewLifeStyleScreen from '../screens/NewLifeStyleScreen/NewLifeStyleScreen'
import AddToCartScreen from '../screens/AddToCartScreen/AddToCartScreen'
import TabNavigations from './TabNavigations';
import UpdateProfile from '../screens/MyProfileScreen/UpdateProfile';

const Stack = createStackNavigator();

export default NavigationsApp = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode='none'>
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="TabNavigations" component={TabNavigations} />
                <Stack.Screen name="FilterScreen" component={FilterScreen} />
                <Stack.Screen name="NewLifeStyleScreen" component={NewLifeStyleScreen} />
                <Stack.Screen name="AddToCartScreen" component={AddToCartScreen} />
                <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
            </Stack.Navigator>

        </NavigationContainer>
    );
};