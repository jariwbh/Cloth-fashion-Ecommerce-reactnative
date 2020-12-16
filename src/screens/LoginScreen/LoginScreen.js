import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, TextInput, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    render() {
        return (
            <ImageBackground source={require('../../../assets/images/2.png')} style={styles.backgroundImage}>
                <ScrollView
                    Vertical={true}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.Image} >
                        <Text style={{ fontSize: hp('4%'), color: '#000000', textAlign: 'center', }}>Login </Text>

                    </View>
                    <View style={styles.inputview}>
                        <FontAwesome name="user-circle-o" size={30} color="#FF95AD" style={{ paddingLeft: hp('2%') }} />
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Email"
                            type='clear'
                            placeholderTextColor="#000000"
                            returnKeyType="next"
                        // onChangeText={(email) => this.setEmail(email)}
                        />

                    </View>
                    <View style={styles.inputview}>
                        <FontAwesome name="unlock-alt" size={30} color="#FF95AD" style={{ paddingLeft: hp('2.7%') }} />
                        <TextInput
                            style={styles.TextInput}
                            placeholder="******"
                            placeholderTextColor="#000000"
                            secure={true}
                        // onChangeText={(password) => this.setPassword(password)}
                        />
                    </View>
                    <View>
                        <TouchableOpacity style={styles.loginBtn} onPress={() => { this.props.navigation.navigate('HomeScreen') }} >
                            <Text style={styles.loginText}>Login Now</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: hp('2%'), justifyContent: 'center', flexDirection: 'row' }} >

                        <Text style={styles.innerText}> i agree to app </Text>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Privacy') }} >
                            <Text style={styles.baseText}>Privacy , </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('User Agreement') }} >
                            <Text style={styles.baseText}>User Agreement ,</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('T&Cs') }} >
                            <Text style={styles.baseText}> T&Cs</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: hp('1%'), justifyContent: 'center', flexDirection: 'row' }} >
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('RegisterScreen') }} >
                            <Text style={styles.baseText}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </ImageBackground>
        );
    }
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
    },
    Image: {
        marginTop: hp('55%'),
        marginLeft: hp('3%'),
        marginBottom: hp('2%')

    },
    inputview: {
        flexDirection: 'row',
        borderRadius: hp('1%'),
        backgroundColor: "#fff",
        width: wp('85%'),
        height: hp('8.3%'),
        marginLeft: hp('4%'),
        marginBottom: hp('2%'),
        alignItems: 'center'

    },
    TextInput: {
        fontSize: hp('2.5%'),
        flex: 1,
        padding: wp('4%'),

    },
    loginBtn: {
        width: wp('80%'),
        backgroundColor: "#FF95AD",
        borderRadius: wp('1%'),
        height: hp('7%'),
        alignItems: "center",
        justifyContent: "center",
        marginTop: hp('1%'),
        marginLeft: wp('10.5%')

    },
    loginText: {
        color: "white",
        fontWeight: 'bold',
        fontSize: hp('3%'),
    },
    baseText: {
        fontWeight: 'normal',
        color: '#183BAE',
        fontSize: hp('2%'),
        textTransform: 'capitalize'
    },
    innerText: {
        color: '#737373',
        fontSize: hp('2%'),
        textTransform: 'capitalize'
    },

})
