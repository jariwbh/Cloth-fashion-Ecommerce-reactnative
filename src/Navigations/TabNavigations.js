import * as React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from '../screens/MainScreen/MainScreen'
import ProductListScreen from '../screens/ProductListScreen/ProductListScreen'
import LikeScreen from '../screens/LikeScreen/LikeScreen';
import AboutScreen from '../screens/AboutScreen/AboutScreen';
import MyProfileScreen from '../screens/MyProfileScreen/MyProfileScreen';
import NewLifeStyleScreen from '../screens/NewLifeStyleScreen/NewLifeStyleScreen'
import AddToCartScreen from '../screens/AddToCartScreen/AddToCartScreen'
import AppScreen from '../screens/AppScreen/AppScreen';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MenuBarIcon from '../components/Menu/MenuBarIcon';
import MenuIcon from '../components/Menu/MenuIcon';
import MenuBack from '../components/Menu/MenuBack';

const MainStack = createStackNavigator();
function MainStackScreen() {
    return (
        <MainStack.Navigator initialRouteName="MainScreen" headerMode='screen' >
            <MainStack.Screen name="MainScreen" options={{
                title: 'NewLifestyle', headerStyle: {
                    backgroundColor: '#FFFFFF',
                    elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 0,
                }, headerLeft: () =>
                    <MenuIcon />, headerRight: () =>
                        <MenuBarIcon />
            }} component={MainScreen} />
            <MainStack.Screen name="ProductListScreen" options={{
                title: 'New Arrivals', headerStyle: {
                    backgroundColor: '#FFFFFF',
                    elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 0,
                }, headerLeft: () =>
                    <MenuIcon />, headerRight: () =>
                        <MenuBarIcon />
            }} component={ProductListScreen} />
            <MainStack.Screen name="NewLifeStyleScreen" options={{
                tabBarVisible: false,
                title: 'NewLifeStyle', headerStyle: {
                    backgroundColor: '#FFFFFF',
                    elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 0,
                }, headerLeft: () =>
                    <MenuBack />, headerRight: () =>
                        <MenuBarIcon />
            }} component={NewLifeStyleScreen} />
            <MainStack.Screen name="AddToCartScreen" options={{
                title: '', headerStyle: {
                    backgroundColor: '#FFFFFF',
                    elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 0,
                }, headerLeft: () =>
                    <MenuBack />, headerRight: () =>
                        <MenuBarIcon />
            }} component={AddToCartScreen} />
            <MainStack.Screen name="AppScreen" component={AppStackScreen} />
            <MainStack.Screen name="Likes" component={LikeStackScreen} />
        </MainStack.Navigator>
    );
}

const AppStack = createStackNavigator();
function AppStackScreen() {
    return (
        <AppStack.Navigator initialRouteName="AppScreen" headerMode='screen' >
            <AppStack.Screen name="AppScreen" options={{
                title: 'NewLifestyle', headerStyle: {
                    backgroundColor: '#FFFFFF',
                    elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 0,
                }, headerLeft: () =>
                    <MenuIcon />, headerRight: () =>
                        <MenuBarIcon />
            }} component={AppScreen} />
        </AppStack.Navigator>
    );
}

const LikeStack = createStackNavigator();
function LikeStackScreen() {
    return (
        <LikeStack.Navigator initialRouteName="Likes" headerMode='screen' >
            <LikeStack.Screen name="Likes" options={{
                title: 'Whish List', headerStyle: {
                    backgroundColor: '#FFFFFF',
                    elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 0,
                }, headerLeft: () =>
                    <MenuIcon />, headerRight: () =>
                        <MenuBarIcon />
            }} component={LikeScreen} />
        </LikeStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

export default function TabNavigations() {
    return (
        <>
            <Tab.Navigator initialRouteName="Main"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        if (route.name === 'Main') {
                            return (
                                <Feather
                                    name={focused ? 'home' : 'home'}
                                    size={23}
                                    color={color}
                                />
                            );
                        } else if (route.name === 'Likes') {
                            return (
                                <Feather
                                    name={focused ? 'heart' : 'heart'}
                                    size={23}
                                    color={color}
                                />
                            );
                        } else if (route.name === 'Profile') {
                            return (
                                <SimpleLineIcons
                                    name={focused ? 'user' : 'user'}
                                    size={23}
                                    color={color}
                                />
                            );
                        } else if (route.name === 'AboutScreen') {
                            return (
                                <AntDesign
                                    name={focused ? 'questioncircleo' : 'questioncircleo'}
                                    size={23}
                                    color={color}
                                />
                            );
                        } else if (route.name === 'App') {
                            return (
                                <AntDesign
                                    name={focused ? 'appstore-o' : 'appstore-o'}
                                    size={23}
                                    color={color}
                                />
                            );
                        }
                    }
                })
                }

                tabBarOptions={{
                    style: {
                        backgroundColor: '#FFFFFF',
                        borderTopRightRadius: 21,
                        borderTopLeftRadius: 21,
                        position: 'absolute',
                    },
                    activeTintColor: '#FF95AD',
                    inactiveTintColor: '#808B96',
                    keyboardHidesTabBar: true,
                    showLabel: false
                }}
            >
                <Tab.Screen name="App" component={AppStackScreen} />
                <Tab.Screen name="AboutScreen" component={AboutScreen} />
                <Tab.Screen name="Main" component={MainStackScreen} />
                <Tab.Screen name="Likes" options={{ unmountOnBlur: true }} component={LikeStackScreen} />
                <Tab.Screen name="Profile" component={MyProfileScreen} />
            </Tab.Navigator>
        </>
    );
}
