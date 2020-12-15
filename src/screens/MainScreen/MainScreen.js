import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class MainScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.serchbar}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Search Brand Or Products.."
                            type='clear'
                            placeholderTextColor="#737373"
                            autoCapitalize="none"
                        />
                        <FontAwesome name="search" size={24} color="#737373" style={{ padding: hp('2%') }} />
                    </View>
                </View>
                <ScrollView>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: hp('1%'), paddingBottom: hp('0.5%') }}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            <View>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate('ProductListScreen') }}>

                                    <Image source={require('../../../assets/images/Kids.png')} style={{ height: 100, width: 100 }} />
                                    <Text style={{ marginLeft: wp('8%') }}>Kids</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => { }}>
                                    <Image source={require('../../../assets/images/Men.png')} style={{ height: 100, width: 100 }} />
                                    <Text style={{ marginLeft: wp('8%') }}>Men</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => { }}>
                                    <Image source={require('../../../assets/images/Women.png')} style={{ height: 100, width: 100 }} />
                                    <Text style={{ marginLeft: wp('7%') }}>Women</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => { }}>
                                    <Image source={require('../../../assets/images/Women.png')} style={{ height: 100, width: 100 }} />
                                    <Text style={{ marginLeft: wp('7%') }}>Offers</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => { }}>
                                    <Image source={require('../../../assets/images/Women.png')} style={{ height: 100, width: 100 }} />
                                    <Text style={{ marginLeft: wp('7%') }}>New</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>

                    <View style={{ marginTop: hp('-10%'), alignItems: 'center', marginLeft: wp('23%') }}>
                        <Image source={require('../../../assets/images/Banner.png')} />
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: hp('-12%'), alignItems: 'center', }} >
                        <View>
                            <Text style={{ fontSize: hp('2.5%'), padding: wp('2%') }}> New Arrivals</Text>
                        </View>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            <TouchableOpacity onPress={() => { }}>
                                <View style={styles.newview}>
                                    <Text style={{ fontSize: hp('2.3%'), }}>Dress </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { }}>
                                <View style={styles.newtext}>
                                    <Text style={{ fontSize: hp('2.3%'), }}>Dress </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { }}>
                                <View style={styles.newtext}>
                                    <Text style={{ fontSize: hp('2.3%'), }}>Dress </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { }}>
                                <View style={styles.newtext}>
                                    <Text style={{ fontSize: hp('2.3%'), }}>Dress </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { }}>
                                <View style={styles.newtext}>
                                    <Text style={{ fontSize: hp('2.3%'), }}>Dress </Text>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: hp('10%'), marginTop: hp('3%'), flex: 0.5 }}>
                        <View style={{ flexDirection: 'column', flex: 0.5, marginLeft: wp('4%') }}>
                            <TouchableOpacity onPress={() => { }} >

                                <Image source={require('../../../assets/images/MaskGroup6.png')} />
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={{ fontSize: hp('2.5%') }}>TISTABENE</Text>
                                <TouchableOpacity>
                                    <FontAwesome name="heart" size={24} color="#737373" style={{ marginLeft: wp('6%'), }} />
                                </TouchableOpacity>
                            </View>
                            <Text style={{ fontSize: hp('2%'), color: "#737373", }}>Comfort slim Block Print Shirt</Text>

                            <Text>$125</Text>


                        </View>
                        <View style={{ flexDirection: 'column', flex: 0.5, marginLeft: wp('3%') }}>
                            <TouchableOpacity onPress={() => { }} >

                                <Image source={require('../../../assets/images/MaskGroup7.png')} />
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={{ fontSize: hp('2.5%') }}>TISTABENE</Text>
                                <TouchableOpacity>
                                    <FontAwesome name="heart" size={24} color="#737373" style={{ marginLeft: wp('6%'), }} />
                                </TouchableOpacity>
                            </View>
                            <Text style={{ fontSize: hp('2%'), color: "#737373", }}>Comfort slim Block Print Shirt</Text>

                            <Text>$125</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>

        );
    }
}

export default MainScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    menu: {
        width: wp('12.5%'),
        height: hp('6.5%'),
        borderRadius: hp('15%'),
        paddingLeft: hp('4%'),
        marginLeft: hp('2%'),
        marginTop: hp('3 %'),
        backgroundColor: '#AAAAAA',
        alignItems: 'center',
        justifyContent: 'center'
    },
    serchbar: {
        flexDirection: 'row',
        borderRadius: hp('2%'),
        backgroundColor: "#fff",
        width: wp('90%'),
        height: hp('7%'),
        marginLeft: hp('3%'),
        marginTop: hp('1%'),
        alignItems: 'center',
        borderColor: '#000000',
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
    },
    TextInput: {
        fontSize: hp('2.5%'),
        flex: 1,
        padding: wp('2%'),
    },
    iconView: {
        backgroundColor: "#FF95AD",
        borderRadius: wp('2%'),
        width: wp('13%'),
        height: hp('7%'),
        marginLeft: hp('2%'),
        marginTop: hp('3%'),
        alignItems: "center",
        justifyContent: 'center',

    },
    newview: {
        backgroundColor: "#FF95AD",
        borderRadius: wp('2%'),
        width: wp('20%'),
        height: hp('4%'),
        marginLeft: hp('2%'),
        alignItems: "center",
        justifyContent: 'center',
    },
    newtext: {
        backgroundColor: "#ffff",
        borderRadius: wp('2%'),
        width: wp('20%'),
        height: hp('4%'),
        marginLeft: hp('2%'),
        alignItems: "center",
        justifyContent: 'center',
    },
})