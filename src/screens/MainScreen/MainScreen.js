import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { CouponsService } from '../../Services/CouponsService/CouponsService';
import HTML from 'react-native-render-html';

class MainScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            coupon: null
        };
    }

    componentDidMount() {
        this.getCoupons()
    }

    getCoupons() {
        CouponsService().then(response => {
            this.setState({ coupon: response[0].property.description })
        })
    }

    render() {
        const { coupon } = this.state;
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
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate('ProductListScreen') }} style={{ alignItems: 'center' }}>

                                    <Image source={require('../../../assets/images/Kids.png')} style={{ height: 100, width: 100 }} />
                                    <Text style={{ marginTop: hp('-1%') }}>Kids</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => { }} style={{ alignItems: 'center' }}>
                                    <Image source={require('../../../assets/images/Men.png')} style={{ height: 100, width: 100 }} />
                                    <Text style={{ marginTop: hp('-1%') }}>Men</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => { }} style={{ alignItems: 'center' }}>
                                    <Image source={require('../../../assets/images/Women.png')} style={{ height: 100, width: 100 }} />
                                    <Text style={{ marginTop: hp('-1%') }}>Women</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => { }} style={{ alignItems: 'center' }}>
                                    <Image source={require('../../../assets/images/Women.png')} style={{ height: 100, width: 100 }} />
                                    <Text style={{ marginTop: hp('-1%') }}>Offers</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity onPress={() => { }} style={{ alignItems: 'center' }}>
                                    <Image source={require('../../../assets/images/Women.png')} style={{ height: 100, width: 100 }} />
                                    <Text style={{ marginTop: hp('-1%') }}>New</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                    <View>
                        {coupon ?
                            <View style={{ marginTop: hp('-2%') }}>
                                <HTML html={`<html> ${coupon} </html>`} />
                            </View>
                            : <Image source={{ uri: "https://res.cloudinary.com/dnogrvbs2/image/upload/v1608008335/Stylish_recommendation_h41aw7.png" }}
                                style={{ margin: hp('1.5%'), height: hp('15%'), width: wp('95%'), borderRadius: 10 }} />
                        }
                    </View>
                    <View>
                        {coupon ?
                            <Text style={{ fontSize: hp('3%'), marginTop: hp('-5%'), paddingLeft: hp('2%') }}> New Arrivals</Text>
                            : <Text style={{ fontSize: hp('3%'), marginTop: hp('1%') }}> New Arrivals</Text>
                        }
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: hp('-4.5%'), alignItems: 'center', paddingLeft: hp('25%') }} >
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            <TouchableOpacity onPress={() => { }}>
                                <View style={styles.newview}>
                                    <Text style={{ fontSize: hp('2.3%'), }}>Dress</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { }}>
                                <View style={styles.newtext}>
                                    <Text style={{ fontSize: hp('2.3%'), }}>T-Shirt</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { }}>
                                <View style={styles.newtext}>
                                    <Text style={{ fontSize: hp('2.3%'), }}>Pants</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { }}>
                                <View style={styles.newtext}>
                                    <Text style={{ fontSize: hp('2.3%'), }}>Western</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { }}>
                                <View style={styles.newtext}>
                                    <Text style={{ fontSize: hp('2.3%'), }}>Party</Text>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: hp('3%'), justifyContent: 'space-evenly', marginBottom: hp('10%') }}>
                        <View style={{ flexDirection: 'column', flex: 1, marginLeft: wp('3%') }}>
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
                        <View style={{ flex: 1, }} >
                            <TouchableOpacity onPress={() => { }}>
                                <Image source={require('../../../assets/images/MaskGroup7.png')} />
                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={{ fontSize: hp('2.5%') }}>VAN HEUSEN</Text>
                                    <FontAwesome name="heart" size={24} color="#737373" style={{ marginLeft: wp('2%'), }} />
                                </View>
                                <Text style={{ fontSize: hp('2%'), color: "#737373" }}>Sheath Dress with Belt</Text>
                                <Text>$140</Text>

                            </TouchableOpacity>
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
        marginTop: hp('2%'),
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