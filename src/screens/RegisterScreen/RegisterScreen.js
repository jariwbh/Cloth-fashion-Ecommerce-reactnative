import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, TextInput, ToastAndroid } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
import { FontAwesome, MaterialCommunityIcons } from 'react-native-vector-icons';
import { RegisterService } from '../../Services/RegisterService/RegisterService';
import Loader from '../../components/Loader/MyLoader';

class RegisterScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: null,
            fullnameError: null,
            username: null,
            usernameError: null,
            mobilenumber: null,
            mobilenumberError: null,
            loading: false,
        }
        this.setFullName = this.setFullName.bind(this);
        this.setUserName = this.setUserName.bind(this);
        this.setMobileNumber = this.setMobileNumber.bind(this);
        this.onPressSubmit = this.onPressSubmit.bind(this);
    }

    setFullName(fullname) {
        if (!fullname || fullname.length <= 0) {
            return this.setState({ fullnameError: 'User Name cannot be empty' });
        }
        return this.setState({ fullname: fullname, fullnameError: null })
    }

    setUserName(email) {
        const re = /\S+@\S+\.\S+/;
        if (!email || email.length <= 0) {
            return this.setState({ usernameError: 'Email Id can not be empty' });
        }
        if (!re.test(email)) {

            return this.setState({ usernameError: 'Ooops! We need a valid email address' });
        }
        return this.setState({ username: email, usernameError: null })
    }

    setMobileNumber(mobilenumber) {
        const reg = /^[0]?[789]\d{9}$/;
        if (!mobilenumber || mobilenumber.length <= 0) {
            return this.setState({ mobilenumberError: 'Mobile Number cannot be empty' });
        }
        if (!reg.test(mobilenumber)) {
            return this.setState({ mobilenumberError: 'Ooops! We need a valid Mobile Number' });
        }
        return this.setState({ mobilenumber: mobilenumber, mobilenumberError: null })
    }

    resetScreen() {
        this.setState({
            fullname: null,
            fullnameError: null,
            username: null,
            usernameError: null,
            mobilenumber: null,
            mobilenumberError: null,
            loading: false,
        })
    }

    onPressSubmit = async () => {
        const { fullname, username, mobilenumber } = this.state;
        if (!fullname || !username || !mobilenumber) {
            this.setFullName(fullname)
            this.setUserName(username)
            this.setMobileNumber(mobilenumber)
            return;
        }

        const body = {
            property: {
                fullname: fullname,
                email: username,
                mobile_number: mobilenumber,
            }
        }

        this.setState({ loading: true })
        await RegisterService(body).then(response => {
            if (response != null) {
                ToastAndroid.show("SignUp Success!", ToastAndroid.LONG);
                this.props.navigation.navigate('LoginScreen')
                this.resetScreen()
            }
        })
    }

    render() {
        return (
            <ImageBackground source={require('../../../assets/images/2.png')} style={styles.backgroundImage}>
                <ScrollView
                    Vertical={true}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.registerTitle} >
                        <Text style={{ fontSize: hp('4%'), color: '#000000' }}>Register </Text>
                    </View>
                    <View style={styles.inputview}>
                        <FontAwesome name="user-circle-o" size={27} color="#FF95AD" style={{ paddingLeft: hp('2%') }} />
                        <TextInput
                            style={styles.TextInput}
                            defaultValue={this.state.fullname}
                            placeholder="Full Name"
                            type='clear'
                            placeholderTextColor="#AAAAAA"
                            returnKeyType="next"
                            onChangeText={(fullname) => this.setFullName(fullname)}
                        />
                    </View>
                    <Text style={{ marginTop: hp('-4%'), marginLeft: wp('7%'), color: '#ff0000', marginBottom: hp('2%') }}>{this.state.fullnameError && this.state.fullnameError}</Text>
                    <View style={styles.inputview}>
                        <MaterialCommunityIcons name="email" size={27} color="#FF95AD" style={{ paddingLeft: hp('2%') }} />
                        <TextInput
                            style={styles.TextInput}
                            defaultValue={this.state.username}
                            placeholder="Email Id"
                            type='clear'
                            placeholderTextColor="#AAAAAA"
                            returnKeyType="next"
                            autoCapitalize="none"
                            autoCompleteType="email"
                            textContentType="emailAddress"
                            keyboardType="email-address"
                            onChangeText={(username) => this.setUserName(username)}
                        />
                    </View>
                    <Text style={{ marginTop: hp('-4%'), marginLeft: wp('7%'), color: '#ff0000', marginBottom: hp('2%') }}>{this.state.usernameError && this.state.usernameError}</Text>
                    <View style={styles.inputview} >
                        <FontAwesome name="phone" size={27} color="#FF95AD" style={{ paddingLeft: hp('2%') }} />
                        <TextInput
                            style={styles.TextInput}
                            defaultValue={this.state.mobilenumber}
                            placeholder="Mobile Number"
                            type='clear'
                            placeholderTextColor="#AAAAAA"
                            returnKeyType="done"
                            onSubmitEditing={() => this.onPressSubmit()}
                            onChangeText={(mobilenumber) => this.setMobileNumber(mobilenumber)}
                        />
                    </View>
                    <Text style={{ marginTop: hp('-4%'), marginLeft: wp('7%'), color: '#ff0000', marginBottom: hp('1%') }}>{this.state.mobilenumberError && this.state.mobilenumberError}</Text>
                    <View>
                        <TouchableOpacity style={styles.loginBtn} onPress={() => this.onPressSubmit()} >
                            {this.state.loading === true ? <Loader /> : <Text style={styles.loginText} >Register Now</Text>}
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
    registerTitle: {
        marginTop: hp('40%'),
        marginRight: hp('3%'),
        marginBottom: hp('2%'),
        alignItems: 'flex-end'
    },
    inputview: {
        flexDirection: 'row',
        borderRadius: hp('1%'),
        backgroundColor: "#fff",
        width: wp('85%'),
        height: hp('8.3%'),
        marginLeft: hp('4%'),
        marginBottom: hp('4%'),
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
        color: '#595959',
        fontSize: hp('2%'),
    },

})

