import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ToastAndroid, Alert } from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';
import Loader from '../../components/Loader/Loader';

export default class MyProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companyData: null,
            companyProfile: '',
        }
    }

    componentDidMount() {
        this.getdata()
    }

    getdata = async () => {
        var getUser = await AsyncStorage.getItem('@authuser')
        this.setState({ companyData: JSON.parse(getUser) })
        if (getUser == null || getUser && getUser.length == 0) {
            setTimeout(() => {
                this.props.navigation.replace('LoginScreen')
            }, 5000);
        }
    }

    onPressUpdateProfile() {
        const { companyData } = this.state;
        if (companyData != null) {
            this.props.navigation.navigate('UpdateProfile', { companyData })
        }
    }

    onPressLogout() {
        AsyncStorage.removeItem('@authuser');
        AsyncStorage.removeItem('@unsavedWishLists');
        AsyncStorage.removeItem('@addtocardlist');
        ToastAndroid.show("Log Out Success!", ToastAndroid.SHORT);
        this.props.navigation.replace('LoginScreen')
    }

    render() {
        const { companyData, companyProfile } = this.state;
        return (
            <View style={styles.container}>
                {(companyData == null) ?
                    <Loader />
                    :
                    <>
                        <View >
                            <TouchableOpacity style={styles.backIcon} onPress={() => this.props.navigation.navigate('MainScreen')} >
                                <MaterialIcons name="arrow-back" size={24} color="#FF95AD" />
                            </TouchableOpacity>
                        </View>
                        <Image style={styles.avatar} source={{ uri: companyData !== null ? (companyData.profilepic == null ? 'https://res.cloudinary.com/dnogrvbs2/image/upload/v1610428971/userimage_qif8wv.jpg' : companyData.profilepic) : 'https://res.cloudinary.com/dnogrvbs2/image/upload/v1610428971/userimage_qif8wv.jpg' }} />
                        <View style={styles.body}>
                            <View style={styles.bodyContent}>
                                <Text style={styles.name}>{companyData && companyData.fullname}</Text>
                            </View>
                            <View style={{
                                flex: 1, flexDirection: 'column', alignItems: 'center'
                            }}>
                                <TouchableOpacity style={styles.buttonContainer} onPress={() => this.onPressUpdateProfile()}>
                                    <Entypo name="edit" size={27} color="#FF95AD" style={{ padding: hp('1.5%'), paddingLeft: hp('1%'), }} />
                                    <Text style={styles.textContainer}> Update Profile</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttonContainer} onPress={() => { this.onPressLogout() }}>
                                    <Entypo name="log-out" size={27} color="#FF95AD" style={{ padding: hp('1.5%'), paddingLeft: hp('1%') }} />
                                    <Text style={styles.textContainer}> Log out</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'

    },
    avatar: {
        width: hp('20%'),
        height: hp('20%'),
        borderRadius: wp('20%'),
        alignSelf: 'center',
        marginTop: wp('10%')
    },
    body: {
        marginTop: hp('3%'),
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: hp('7%')
    },
    name: {
        fontSize: hp('4%'),
        color: "#737373",
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },
    buttonContainer: {
        marginTop: hp('2%'),
        height: hp('9%'),
        flexDirection: 'row',
        marginBottom: hp('2%'),
        width: wp("85%"),
        alignItems: 'center',
        borderRadius: wp('1%'),
        backgroundColor: "#FFF",
        borderColor: '#fff',
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
    },
    textContainer: {
        padding: hp('1%'),
        fontSize: hp('3%'),
        color: '#000000'
    },
    backIcon: {
        width: wp("7%"),
        height: wp("7%"),
        borderRadius: hp('6%'),
        marginTop: hp('5%'),
        marginLeft: hp('3%'),
        alignItems: 'center',
        justifyContent: 'center'
    }
})


