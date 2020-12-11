import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';



class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', marginTop: hp('2%') }}>
                    <TouchableOpacity style={styles.menu} onPress={() => { }}>
                        <MaterialIcons name="sort" size={24} color="#000000" style={{ position: 'absolute', }} />
                    </TouchableOpacity>
                    <Text style={{ marginTop: hp('5.5 %'), fontSize: hp('2.5%'), paddingLeft: hp('1.5%') }}> NewLifeStyle </Text>
                    <TouchableOpacity onPress={() => { }}>
                        <SimpleLineIcons name="bag" size={27} color="#000000" style={{ marginTop: hp('5.5 %'), paddingLeft: hp('10%') }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }}>
                        <SimpleLineIcons name="bell" size={27} color="#000000" style={{ marginTop: hp('5.5 %'), paddingLeft: hp('1.5%') }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }}>
                        <SimpleLineIcons name="settings" size={27} color="#000000" style={{ marginTop: hp('5.5 %'), paddingLeft: hp('1.5%') }} />
                    </TouchableOpacity>
                </View>
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
                    <TouchableOpacity onPress={() => { }}>
                        <View style={styles.iconView}>
                            <SimpleLineIcons name="equalizer" size={30} color="#fff" />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: hp('1%'), paddingBottom: hp('3%') }}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('ProductListScreen') }}>
                            <View>

                                <Image source={require('../../../assets/images/Kids.png')} style={{ height: 100, width: 100 }} />
                                <Text style={{ marginLeft: wp('8%') }}>Kids</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { }}>
                            <View>
                                <Image source={require('../../../assets/images/Men.png')} style={{ height: 100, width: 100 }} />
                                <Text style={{ marginLeft: wp('8%') }}>Men</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { }}>
                            <View>
                                <Image source={require('../../../assets/images/Women.png')} style={{ height: 100, width: 100 }} />
                                <Text style={{ marginLeft: wp('8%') }}>Women</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { }}>
                            <View>
                                <Image source={require('../../../assets/images/Women.png')} style={{ height: 100, width: 100 }} />
                                <Text style={{ marginLeft: wp('8%') }}>Offers</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { }}>
                            <View>
                                <Image source={require('../../../assets/images/Women.png')} style={{ height: 100, width: 100 }} />
                                <Text style={{ marginLeft: wp('8%') }}>New</Text>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                <ScrollView>
                    <View style={{ marginTop: hp('-10%'), alignItems: 'center', marginLeft: wp('23%') }}>
                        <Image source={require('../../../assets/images/Banner.png')} />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: hp('-12%'), alignItems: 'center' }} >
                        <View>
                            <Text style={{ fontSize: hp('2.5%'), padding: wp('2%') }}> New Arrivals</Text>
                        </View>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            <TouchableOpacity onPress={() => { }}>
                                <View style={styles.newview}>
                                    <Text style={{ fontSize: hp('2.5%'), }}>Dress </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { }}>
                                <View style={styles.newtext}>
                                    <Text style={{ fontSize: hp('2.5%'), }}>Dress </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { }}>
                                <View style={styles.newtext}>
                                    <Text style={{ fontSize: hp('2.5%'), }}>Dress </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { }}>
                                <View style={styles.newtext}>
                                    <Text style={{ fontSize: hp('2.5%'), }}>Dress </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { }}>
                                <View style={styles.newtext}>
                                    <Text style={{ fontSize: hp('2.5%'), }}>Dress </Text>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: hp('3%') }}>
                        <TouchableOpacity onPress={() => { }}>
                            <View>
                                <Image source={require('../../../assets/images/MaskGroup6.png')} />
                                <FontAwesome name="heart" size={24} color="#737373" style={{ position: 'absolute', marginLeft: wp('2%'), marginTop: wp('1%') }} />
                                <Text style={{ fontSize: hp('2.5%') }}>TISTABENE</Text>
                                <Text style={{ fontSize: hp('1.5%'), color: "#737373" }}>Comfort slim Block Print Shirt</Text>
                                <Text>$125</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { }}>
                            <View>
                                <Image source={require('../../../assets/images/MaskGroup7.png')} />
                                <FontAwesome name="heart" size={24} color="#737373" style={{ position: 'absolute', marginLeft: wp('2%'), marginTop: wp('1%') }} />
                                <Text style={{ fontSize: hp('2.5%') }}>VAN HEUSEN</Text>
                                <Text style={{ fontSize: hp('1.5%'), color: "#737373" }}>Sheath Dress with Belt</Text>
                                <Text>$140</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: hp('3%'), marginBottom: hp('10%') }}>
                        <TouchableOpacity onPress={() => { }}>
                            <View>
                                <Image source={require('../../../assets/images/Stylishrecommendation.png')} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>

        );
    }
}

export default MainScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    menu: {
        width: wp('12.5%'),
        height: hp('6.5%'),
        borderRadius: hp('15%'),
        paddingLeft: hp('4%'),
        marginLeft: hp('2%'),
        marginTop: hp('4 %'),
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    serchbar: {
        flexDirection: 'row',
        borderRadius: hp('2%'),
        backgroundColor: "#fff",
        width: wp('75%'),
        height: hp('7%'),
        marginLeft: hp('3%'),
        marginTop: hp('3%'),
        alignItems: 'center'
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
        width: wp('22%'),
        height: hp('7%'),
        marginLeft: hp('2%'),
        alignItems: "center",
        justifyContent: 'center',
    },
    newtext: {
        backgroundColor: "#ffff",
        borderRadius: wp('2%'),
        width: wp('22%'),
        height: hp('7%'),
        marginLeft: hp('2%'),
        alignItems: "center",
        justifyContent: 'center',
    },
})