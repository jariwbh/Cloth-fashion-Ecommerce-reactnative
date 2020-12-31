import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

class LoginHomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <ImageBackground source={require('../../../assets/images/1.png')} style={styles.backgroundImage}>
                <View style={styles.Image} >
                    <Text style={{ fontSize: hp('2%'), color: '#fff' }}> Welcome to </Text>
                    <Text style={{ fontSize: hp('4%'), color: '#fff' }}>NewLifeStyle </Text>
                </View>
                <TouchableOpacity style={styles.login} onPress={() => { this.props.navigation.navigate('LoginScreen') }}>
                    <Text
                        style={styles.TextInput}
                    > Continue to Login</Text>
                    <MaterialCommunityIcons name="arrow-right-bold-circle" size={30} color="#FF95AD" style={styles.icon} />
                </TouchableOpacity>
            </ImageBackground>
        );
    }
}

export default LoginHomeScreen;



const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
    },
    Image: {
        marginTop: hp('77%'),
        marginLeft: hp('3%'),
        marginBottom: hp('2%')

    },
    login: {
        flexDirection: 'row',
        borderRadius: hp('1%'),
        backgroundColor: "#fff",
        width: wp('85%'),
        height: hp('8.3%'),
        marginLeft: hp('3%'),
        alignItems: 'center'
    },
    TextInput: {
        fontSize: hp('2.5%'),
        flex: 1,
        padding: wp('2%'),
        textTransform: 'uppercase',
        textAlign: 'center'
    },
    icon: {
        padding: wp('3%')


    },
})
