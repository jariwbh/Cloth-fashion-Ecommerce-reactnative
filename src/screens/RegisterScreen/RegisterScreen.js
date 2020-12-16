
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, TextInput, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { FontAwesome, MaterialCommunityIcons } from 'react-native-vector-icons';

class RegisterScreen extends Component {
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
                        <Text style={{ fontSize: hp('4%'), color: '#000000', textAlign: 'center', }}>Register </Text>

                    </View>
                    <View style={styles.inputview}>
                        <FontAwesome name="user-circle-o" size={27} color="#FF95AD" style={{ paddingLeft: hp('2%') }} />
                        <TextInput

                            style={styles.TextInput}
                            placeholder="Full Name"
                            type='clear'
                            placeholderTextColor="#000000"
                            returnKeyType="next"
                        // onChangeText={(fullname) => this.setFullName(fullname)}
                        />
                    </View>
                    <View style={styles.inputview}>
                        <MaterialCommunityIcons name="email" size={27} color="#FF95AD" style={{ paddingLeft: hp('2%') }} />
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Email"
                            type='clear'
                            placeholderTextColor="#000000"
                            returnKeyType="next"
                        // onChangeText={(email) => this.setEmail(email)}
                        />

                    </View>
                    <View style={styles.inputview} >
                        <FontAwesome name="phone" size={27} color="#FF95AD" style={{ paddingLeft: hp('2%') }} />
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Mobile Number"
                            type='clear'
                            placeholderTextColor="#000000"
                            keyboardType="numeric"
                        // onChangeText={(mobilenumber) => this.setMobileNumber(mobilenumber)}
                        />
                    </View>
                    <View>
                        <TouchableOpacity style={styles.loginBtn} onPress={() => { }} >
                            <Text style={styles.loginText}>Register Now</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: hp('1%'), justifyContent: 'center', flexDirection: 'row' }} >
                        <Text style={styles.innerText}> Already got an account? </Text>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('LoginScreen') }} >
                            <Text style={styles.baseText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </ImageBackground>
        );
    }
}

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
    },
    Image: {
        marginTop: hp('49%'),
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
    },
    innerText: {
        color: '#737373',
        fontSize: hp('2%'),
    },

})

