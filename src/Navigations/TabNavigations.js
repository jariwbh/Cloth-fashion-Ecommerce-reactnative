import * as React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContainer from '../screens/DrawerContainer/DrawerContainer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from '../screens/MainScreen/MainScreen'
import ProductListScreen from '../screens/ProductListScreen/ProductListScreen'
import LikeScreen from '../screens/LikeScreen/LikeScreen';
import AboutScreen from '../screens/AboutScreen/AboutScreen';
import MyProfileScreen from '../screens/MyProfileScreen/MyProfileScreen';
import NewLifeStyleScreen from '../screens/NewLifeStyleScreen/NewLifeStyleScreen'
import AddToCartScreen from '../screens/AddToCartScreen/AddToCartScreen'
import AppScreen from '../screens/AppScreen/AppScreen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MenuBarIcon from '../components/Menu/MenuBarIcon';
import MenuIcon from '../components/Menu/MenuIcon';
import MenuBack from '../components/Menu/MenuBack';
import { MaterialCommunityIcons } from 'react-native-vector-icons'
import SearchBarScreen from '../screens/SearchBarScreen/SearchBarScreen'
import SearchIcon from '../components/Menu/SearchIcon';
import { View, TouchableOpacity } from 'react-native';
import Feather from "react-native-vector-icons/Feather";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import YourOrderScreen from '../screens/YourOrderScreen/YourOrderScreen';


const NavigationDrawerStructure = (props) => {
    const toggleDrawer = () => {
        props.navigationProps.toggleDrawer();
    };
    return (
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => toggleDrawer()}>
                <Feather name="menu" size={35} color="#262626" style={{ marginLeft: hp('2%') }} />
            </TouchableOpacity>
        </View>
    );
}

const Drawer = createDrawerNavigator();
function NavigationsDrawer(props) {
    return (
        <Drawer.Navigator initialRouteName="HomeScreen" headerMode="screen"
            drawerContentOptions={{ activeTintColor: '#000000', itemStyle: { marginVertical: 5 } }}
            drawerContent={(props) => <DrawerContainer {...props} />}>

            <Drawer.Screen name="HomeScreen" options={{
                drawerLabel: 'Home', drawerIcon: ({ focused, size }) => (
                    <Ionicons
                        name="md-home"
                        size={size}
                        color={focused ? '#F6C455' : '#ccc'}
                    />
                )
            }} component={MainStackScreen} />

            <Drawer.Screen name="YourOrderScreen" options={{
                drawerLabel: 'Your Order', drawerIcon: ({ focused, size }) => (
                    <AntDesign
                        name="profile"
                        size={size}
                        color={focused ? '#F6C455' : '#ccc'}
                    />
                )
            }} component={YourOrderScreen} />

            <Drawer.Screen name="MyProfileScreen" options={{
                drawerLabel: 'My Profile', drawerIcon: ({ focused, size }) => (
                    <FontAwesome5
                        name="user"
                        size={size}
                        color={focused ? '#F6C455' : '#ccc'}
                    />
                )
            }} component={MyProfileScreen} />
        </Drawer.Navigator>
    )
}

const MainStack = createStackNavigator();
function MainStackScreen({ navigation }) {
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
                        <View style={{ flexDirection: 'row' }}>
                            <SearchIcon onPress={() => navigation.navigate("SearchBarScreen")} />
                            <MenuBarIcon onPress={() => navigation.navigate("AddToCartScreen")} />
                        </View>
            }} component={MainScreen} />
            <MainStack.Screen name="ProductListScreen" options={{
                title: 'New Arrivals', headerStyle: {
                    backgroundColor: '#FFFFFF',
                    elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 0,
                }, headerLeft: () =>
                    <MenuIcon />, headerRight: () =>
                        <MenuBarIcon onPress={() => navigation.navigate("AddToCartScreen")} />
            }} component={ProductListScreen} />
            <MainStack.Screen name="NewLifeStyleScreen" options={{
                tabBarVisible: false,
                title: 'NewLifeStyle', headerStyle: {
                    backgroundColor: '#FFFFFF',
                    elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 0,
                }, headerLeft: () =>
                    <MenuBack onPress={() => navigation.navigate("ProductListScreen")} />, headerRight: () =>
                        <MenuBarIcon onPress={() => navigation.navigate("AddToCartScreen")} />
            }} component={NewLifeStyleScreen} />
            <MainStack.Screen name="AddToCartScreen" options={{
                title: 'My Cart', headerStyle: {
                    backgroundColor: '#FFFFFF',
                    elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 0,
                }, headerLeft: () =>
                    <MenuBack onPress={() => navigation.navigate("ProductListScreen")} />
            }} component={AddToCartScreen} />
            <MainStack.Screen name="SearchBarScreen" options={{
                title: 'Search Product', headerStyle: {
                    backgroundColor: '#FFFFFF',
                    elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 0,
                }, headerLeft: () =>
                    <MenuBack onPress={() => navigation.navigate("MainScreen")} />, headerRight: () =>
                        <MenuBarIcon onPress={() => navigation.navigate("AddToCartScreen")} />
            }} component={SearchBarScreen} />
            <MainStack.Screen name="AppScreen" component={AppStackScreen} />
            <MainStack.Screen name="Likes" component={LikeStackScreen} />
        </MainStack.Navigator>
    );
}

const AppStack = createStackNavigator();
function AppStackScreen({ navigation }) {
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
                        <View style={{ flexDirection: 'row' }}>
                            <SearchIcon onPress={() => navigation.navigate("SearchBarScreen")} />
                            <MenuBarIcon onPress={() => navigation.navigate("AddToCartScreen")} />
                        </View>
            }} component={AppScreen} />
        </AppStack.Navigator>
    );
}

const LikeStack = createStackNavigator();
function LikeStackScreen({ navigation }) {
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
                        <MenuBarIcon onPress={() => navigation.navigate("AddToCartScreen")} />
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
                                <MaterialCommunityIcons
                                    name={focused ? 'home' : 'home-outline'}
                                    size={30}
                                    color={color}

                                />
                            );
                        } else if (route.name === 'Likes') {
                            return (
                                <FontAwesome
                                    name={focused ? 'heart' : 'heart-o'}
                                    size={23}
                                    color={color}
                                />
                            );
                        } else if (route.name === 'Profile') {
                            return (
                                <FontAwesome
                                    name={focused ? 'user' : 'user-o'}
                                    size={25}
                                    color={color}
                                />
                            );
                        } else if (route.name === 'AboutScreen') {
                            return (
                                <AntDesign
                                    name={focused ? 'questioncircle' : 'questioncircleo'}
                                    size={23}
                                    color={color}
                                />
                            );
                        } else if (route.name === 'App') {
                            return (
                                <AntDesign
                                    name={focused ? 'appstore1' : 'appstore-o'}
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
                <Tab.Screen name="Main" component={NavigationsDrawer} />
                <Tab.Screen name="Likes" options={{ unmountOnBlur: true }} component={LikeStackScreen} />
                <Tab.Screen name="Profile" component={MyProfileScreen} />
            </Tab.Navigator>
        </>
    );
}



