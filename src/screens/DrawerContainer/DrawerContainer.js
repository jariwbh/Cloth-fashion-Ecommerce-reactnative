import React, { useState } from 'react'
import { SafeAreaView, View, StyleSheet, Image, Text, ToastAndroid } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import AsyncStorage from '@react-native-community/async-storage';
import AntDesign from 'react-native-vector-icons/AntDesign';

const DrawerContainer = (props) => {
    const [userData, setuser] = useState(null);
    async function getUserDetails() {
        const getUser = await AsyncStorage.getItem('@authuser')
        if (getUser == null) {
            setTimeout(() => {
                this.props.navigation.replace('LoginScreen')
            }, 5000);
        } else {
            setuser(JSON.parse(getUser));
        }
    };

    if (userData == null) {
        getUserDetails()
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: hp('2%') }}>
                <Image style={styles.avatar} source={{ uri: userData !== null ? (userData.profilepic == null ? 'https://res.cloudinary.com/dnogrvbs2/image/upload/v1610428971/userimage_qif8wv.jpg' : userData.profilepic) : 'https://res.cloudinary.com/dnogrvbs2/image/upload/v1610428971/userimage_qif8wv.jpg' }} />
                <Text style={{ fontSize: hp('2%') }}>Welcome , {userData && userData.property.fullname}</Text>
            </View>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
                <DrawerItem icon={({ color, size }) => (
                    <AntDesign
                        name="logout"
                        color='#ccc'
                        size={size}
                    />
                )}
                    label="Log Out"
                    onPress={() => {
                        AsyncStorage.removeItem('@authuser');
                        ToastAndroid.show("Log Out Success!", ToastAndroid.SHORT);
                        props.navigation.navigate('LoginScreen');
                    }} />
            </DrawerContentScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    avatar: {
        width: hp('10%'),
        height: hp('10%'),
        borderRadius: hp('2%'),
        alignSelf: 'center',
        marginTop: hp('3%'),
        marginBottom: hp('2%')
    },
});

export default DrawerContainer;