import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from '../screens/MainScreen/MainScreen'
import ProductListScreen from '../screens/ProductListScreen/ProductListScreen'
import LikeScreen from '../screens/LikeScreen/LikeScreen';
import AboutScreen from '../screens/AboutScreen/AboutScreen';
import MyProfileScreen from '../screens/MyProfileScreen/MyProfileScreen';
import AppScreen from '../screens/AppScreen/AppScreen';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const MainStack = createStackNavigator();
function MainStackScreen() {
    return (
        <MainStack.Navigator initialRouteName="MainScreen" headerMode='none'>
            <MainStack.Screen name="MainScreen" component={MainScreen} />
            <MainStack.Screen name="ProductListScreen" component={ProductListScreen} />
        </MainStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

export default function TabNavigations() {
    return (
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
            <Tab.Screen name="App" component={AppScreen} />
            <Tab.Screen name="AboutScreen" component={AboutScreen} />
            <Tab.Screen name="Main" component={MainStackScreen} />
            <Tab.Screen name="Likes" component={LikeScreen} />
            <Tab.Screen name="Profile" component={MyProfileScreen} />
        </Tab.Navigator>
    );
}
