import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { Entypo } from '@expo/vector-icons';


export default class MyProfileScreen extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}></View>
                <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
                <View style={styles.body}>
                    <View style={styles.bodyContent}>
                        <Text style={styles.name}>John Doe</Text>
                    </View>
                    <View style={{
                        flex: 1, flexDirection: 'column', alignItems: 'center'
                    }}>
                        <TouchableOpacity style={styles.buttonContainer} onPress={() => { this.props.navigation.navigate('UpdateProfile') }}>
                            <Entypo name="edit" size={27} color="#FF95AD" style={{ padding: hp('1.5%'), paddingLeft: hp('1%'), }} />
                            <Text style={styles.textContainer}> Update Profile</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainer} onPress={() => { }}>
                            <Entypo name="log-out" size={27} color="#FF95AD" style={{ padding: hp('1.5%'), paddingLeft: hp('1%') }} />
                            <Text style={styles.textContainer}> Log out</Text>
                        </TouchableOpacity>
                    </View>
                </View>
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
        marginTop: wp('20%')
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
})


