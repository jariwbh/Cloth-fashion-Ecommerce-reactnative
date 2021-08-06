import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, TextInput, ToastAndroid } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import { LoginService } from '../../Services/LoginService/LoginService';
import Loader from '../../components/Loader/MyLoader';
import appConfig from '../../Helpers/appConfig'

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            usererror: null,
            password: null,
            passworderror: null,
            loading: false,
        };
        this.secondTextInputRef = React.createRef();
        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.onPressSubmit = this.onPressSubmit.bind(this);
    }

    setEmail(email) {
        if (!email || email.length <= 0) {
            return this.setState({ usererror: 'User Name cannot be empty' });
        }
        return this.setState({ username: email, usererror: null })
    }

    setPassword(password) {
        if (!password || password.length <= 0) {
            return this.setState({ passworderror: 'Password cannot be empty' });
        }
        return this.setState({ password: password, passworderror: null })
    }

    resetScreen() {
        this.setState({
            username: null,
            usererror: null,
            password: null,
            passworderror: null,
            loading: false,
        })
    }

    authenticateUser = (user) => (
        AsyncStorage.setItem('@authuser', JSON.stringify(user))
    )

    onPressSubmit = async () => {
        const { username, password } = this.state;
        if (!username || !password) {
            this.setEmail(username)
            this.setPassword(password)
            return;
        }

        const body = {
            username: username,
            password: password
        }

        this.setState({ loading: true })

        try {
            await LoginService(body)
                .then(response => {
                    if (response.error) {
                        this.setState({ loading: false })
                        ToastAndroid.show("Username and Password Invalid!", ToastAndroid.LONG);
                        this.resetScreen()
                        return
                    }

                    if (response != null || response != 'undefind') {
                        this.authenticateUser(response.user)
                        appConfig.headers["authkey"] = response.user.addedby;
                        ToastAndroid.show("SignIn Success!", ToastAndroid.SHORT);
                        this.props.navigation.navigate('HomeScreen')
                        this.resetScreen()
                        return
                    }
                })
        }
        catch (error) {
            this.setState({ loading: false })
            ToastAndroid.show("Username and Password Invalid!", ToastAndroid.LONG)
        }
    }

    render() {
        return (
            <ImageBackground source={require('../../../assets/images/2.png')} style={styles.backgroundImage}>
                <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={'always'}>
                    <View style={styles.loginTitle} >
                        <Text style={{ fontSize: hp('4%'), color: '#000000', }}>Login </Text>
                    </View>
                    <View style={styles.inputview}>
                        <FontAwesome name="user-circle-o" size={30} color="#FF95AD" style={{ paddingLeft: hp('2%') }} />
                        <TextInput
                            style={styles.TextInput}
                            defaultValue={this.state.username}
                            placeholder="User Name"
                            type='clear'
                            returnKeyType="next"
                            blurOnSubmit={false}
                            onSubmitEditing={() => { this.secondTextInputRef.current.focus() }}
                            placeholderTextColor="#AAAAAA"
                            returnKeyType="next"
                            onChangeText={(email) => this.setEmail(email)}
                        />
                    </View>
                    <Text style={{ marginTop: hp('-3%'), marginLeft: wp('10%'), color: '#ff0000', marginBottom: hp('1%') }}>{this.state.usererror && this.state.usererror}</Text>
                    <View style={styles.inputview}>
                        <FontAwesome name="unlock-alt" size={30} color="#FF95AD" style={{ paddingLeft: hp('2.7%') }} />
                        <TextInput
                            style={styles.TextInput}
                            defaultValue={this.state.password}
                            placeholder="********"
                            type='clear'
                            placeholderTextColor="#AAAAAA"
                            secureTextEntry={true}
                            returnKeyType="done"
                            ref={this.secondTextInputRef}
                            onSubmitEditing={() => this.onPressSubmit()}
                            onChangeText={(password) => this.setPassword(password)}
                        />
                    </View>
                    <Text style={{ marginTop: hp('-3%'), marginLeft: wp('10%'), color: '#ff0000' }}>{this.state.passworderror && this.state.passworderror}</Text>
                    <View>
                        <TouchableOpacity style={styles.loginBtn} onPress={() => this.onPressSubmit()}>
                            {this.state.loading === true ? <Loader /> : <Text style={styles.loginText}>Login Now</Text>}
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: hp('2%'), justifyContent: 'center', flexDirection: 'row' }} >

                        <Text style={styles.innerText}> i agree to app </Text>
                        <TouchableOpacity >
                            <Text style={styles.innerText}>Privacy , </Text>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Text style={styles.innerText}>User Agreement ,</Text>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Text style={styles.innerText}> T&Cs</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: hp('1%'), justifyContent: 'center', flexDirection: 'row' }} >
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('RegisterScreen') }} >
                            <Text style={styles.baseText}>Register</Text>
                        </TouchableOpacity>
                        <Text style={styles.innerText}> if you're New! </Text>
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
        resizeMode: 'cover',
        height: hp('100%'),
        width: wp('100%')
    },
    loginTitle: {
        marginTop: hp('50%'),
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
        marginBottom: hp('3%'),
        alignItems: 'center',
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
        color: '#595959',
        fontSize: hp('2%'),
        textTransform: 'capitalize'
    },

})
