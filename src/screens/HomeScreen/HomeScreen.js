import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, Image } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <ImageBackground source={require('../../../assets/images/3.png')} style={styles.backgroundImage}>
                {/* <View style={styles.inputView}> */}
                <View style={styles.container}>
                    <View style={styles.inputView}>
                        <View style={{ marginTop: "25%", alignItems: 'center' }}>
                            <Text style={styles.TextInput}>Biggest Online Store </Text>
                        </View>
                        <View style={{ marginTop: "20%", alignItems: 'center' }}>
                            <Text style={styles.inerInput}>Million of Collections </Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', flex: 1, marginTop: '5%' }}>
                            <TouchableOpacity onPress={() => { }}>
                                <View>
                                    <Image source={require('../../../assets/images/Kids.png')} style={{ marginTop: wp('2%'), marginLeft: wp('-67%') }} />
                                    <Text style={{ marginTop: wp('-3%'), marginLeft: wp('-58%') }}>Kids</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { }}>
                                <View>
                                    <Image source={require('../../../assets/images/Men.png')} style={{ marginTop: wp('2%'), marginLeft: wp('-39%') }} />
                                    <Text style={{ marginTop: wp('-3%'), marginLeft: wp('-28%') }}>Men</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { }}>
                                <View>
                                    <Image source={require('../../../assets/images/Women.png')} style={{ marginTop: wp('2%'), marginLeft: wp('-10%') }} />
                                    <Text style={{ marginTop: wp('-3%'), marginLeft: wp('-2%') }}>Women</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.go} onPress={() => { this.props.navigation.navigate('MainScreen') }}>
                                <Text style={styles.textgo} >Go</Text>
                                <FontAwesome name="chevron-right" size={24} color="#FFF" style={{ margin: wp('1%') }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
    },
    inputView: {
        flexDirection: 'row',
        backgroundColor: "#fff",
        borderRadius: wp('70%'),
        backgroundColor: '#fff',
        width: wp('90%'),
        height: hp('45%'),
        marginLeft: hp('3%'),
        marginTop: hp('55%'),
        alignItems: "center",
        justifyContent: 'center',
        flex: 1


    },
    TextInput: {
        fontSize: hp('3%'),
        marginTop: hp('-25%'),
        marginLeft: wp('20%'),


    },
    inerInput: {
        fontSize: hp('2.5%'),
        marginTop: hp('-18%'),
        marginLeft: wp('-50%'),

    },
    go: {
        flexDirection: 'row',
        backgroundColor: '#FF95AD',
        borderRadius: wp('5%'),
        width: wp("30%"),
        height: hp("6%"),
        alignItems: "center",
        justifyContent: 'center',
        marginTop: hp('33%'),
        marginLeft: wp('-60%'),
    },
    textgo: {
        fontWeight: 'bold',
        fontSize: hp('2.5%'),
        color: "#fff",
    },
})