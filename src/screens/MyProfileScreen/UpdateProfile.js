import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { ScrollView } from 'react-native-gesture-handler';

class UpdateProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
                <View style={styles.body}>
                    <View style={styles.bodyContent}>
                        <Text style={styles.name}>John Doe</Text>
                    </View>
                    <ScrollView
                        Vertical={true}
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={{
                            flex: 1, flexDirection: 'column', alignItems: 'center'
                        }}>
                            <View style={styles.inputView}>
                                <FontAwesome name="user" size={27} color="#FF95AD" style={{ paddingLeft: hp('2%') }} />
                                <TextInput
                                    label="Name"
                                    // defaultValue={fullname}
                                    style={styles.TextInput}
                                    placeholder="User Name"
                                    type='clear'
                                    placeholderTextColor="#000000"
                                    returnKeyType="next"

                                // onChangeText={(fullname) => this.setFullName(fullname)}
                                />
                            </View>
                            <Text style={{ marginTop: hp('-3%'), marginLeft: wp('-20%'), color: '#ff0000' }}>{this.state.fullnameError && this.state.fullnameError}</Text>
                            <View style={styles.inputView}>
                                <MaterialCommunityIcons name="email" size={27} color="#FF95AD" style={{ paddingLeft: hp('2%') }} />
                                <TextInput
                                    // defaultValue={username}
                                    style={styles.TextInput}
                                    placeholder="Email Id"
                                    type='clear'
                                    placeholderTextColor="#000000"
                                    autoCapitalize="none"
                                    autoCompleteType="email"
                                    textContentType="emailAddress"
                                    keyboardType="email-address"
                                    returnKeyType="next"

                                // onChangeText={(username) => this.setUserName(username)}
                                />
                            </View>
                            <Text style={{ marginTop: hp('-3%'), marginLeft: wp('-15%'), color: '#ff0000' }}>{this.state.usernameError && this.state.usernameError}</Text>
                            <View style={styles.inputView} >
                                <FontAwesome name="phone" size={27} color="#FF95AD" style={{ paddingLeft: hp('2%') }} />
                                <TextInput
                                    // defaultValue={mobilenumber}
                                    style={styles.TextInput}
                                    placeholder="Mobile Number"
                                    type='clear'
                                    placeholderTextColor="#000000"
                                    keyboardType="numeric"

                                // onChangeText={(mobilenumber) => this.setMobileNumber(mobilenumber)}
                                />
                            </View>
                            <Text style={{ marginTop: hp('-3%'), marginLeft: wp('-14%'), color: '#ff0000', }}>{this.state.mobilenumberError && this.state.mobilenumberError}</Text>
                            <TouchableOpacity style={styles.update_Btn} onPress={() => { }}>
                                <Text style={styles.update_text} >Update Profile</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

export default UpdateProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'

    },
    avatar: {
        width: hp('15%'),
        height: hp('15%'),
        borderRadius: wp('20%'),
        alignSelf: 'center',
        marginTop: hp('5%'),
        marginBottom: hp('3%')
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: hp('8%')
    },
    name: {
        fontSize: hp('4%'),
        color: "#000000",
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },
    inputView: {
        flexDirection: 'row',
        backgroundColor: "#fff",
        borderRadius: wp('1%'),
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
        borderColor: '#fff',
        width: wp('85%'),
        height: hp('8.3%'),
        margin: hp('3%'),
        alignItems: "center",
    },
    TextInput: {
        fontSize: hp('2%'),
        flex: 1,
        padding: hp('1%'),
    },
    update_Btn: {
        width: wp('80%'),
        backgroundColor: "#FF95AD",
        borderRadius: wp('1%'),
        height: hp('8%'),
        alignItems: "center",
        justifyContent: "center",
        marginTop: hp('5%'),
        marginBottom: hp('35%')
    },
    update_text: {
        color: "white",
        fontWeight: 'bold',
        fontSize: hp('3%'),
    },
})

