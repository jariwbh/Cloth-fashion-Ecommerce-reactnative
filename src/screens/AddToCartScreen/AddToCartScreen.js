import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import CheckBox from '@react-native-community/checkbox';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { ScrollView } from 'react-native-gesture-handler';
class AddToCartScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', marginTop: hp('2%') }}>
                    <TouchableOpacity style={styles.back} onPress={() => { }}>
                        <MaterialIcons name="arrow-back" size={24} color="#000000" style={{ position: 'absolute', }} />
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
                <ScrollView>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: hp('5%') }} >

                        <TouchableOpacity onPress={() => { }}>
                            <View style={styles.cartview}>
                                <Text style={{ fontSize: hp('2.5%'), color: '#fff' }}>My Cart </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { }}>
                            <View style={styles.carttext}>
                                <Text style={{ fontSize: hp('2%'), }}>Address </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { }}>
                            <View style={styles.carttext}>
                                <Text style={{ fontSize: hp('2%'), }}>Payment </Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'column', marginTop: hp('3%'), }}>
                        <View style={styles.imageview}>
                            <View>
                                <Image source={require('../../../assets/images/MaskGroup93.png')} style={{ margin: hp('1 %'), width: wp('35%'), borderRadius: hp('1.5%') }} />
                                <TouchableOpacity style={{ position: 'absolute', paddingHorizontal: hp('2%'), marginTop: hp('2%') }}>
                                    <AntDesign name="delete" size={24} color="#fff" />
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontSize: hp('2.5%'), }}>Men's Solid Regular </Text>
                                <Text style={{ fontSize: hp('2.5%'), color: '#AAAAAA' }}>Seller Name</Text>
                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={{ fontSize: hp('2.5%'), }}>$125</Text>
                                    {/* <Text style={{ fontSize: hp('2.5%'), }}>$140</Text>
                                <Text style={{ fontSize: hp('2.5%'), }}>(10% off)</Text> */}
                                </View>
                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('1%') }}>Colors</Text>
                                    <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('1.5%') }}>Size</Text>
                                    <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%') }}>Qty</Text>

                                </View>
                                <View style={{ flexDirection: 'row', marginLeft: hp('1%'), marginTop: hp('1%') }}>
                                    <TouchableOpacity style={styles.color}>
                                        {/* <CheckBox
                                        disabled={false}
                                        value={this.state.toggleCheckBox}
                                        onValueChange={() => this.setState({ toggleCheckBox: true })}
                                        tintColors={{ true: '#D6D6D6', false: '#D6D6D6' }}

                                    /> */}
                                    </TouchableOpacity>

                                    <View style={styles.sizebox}  >
                                        <Text> 40 </Text>
                                    </View>
                                    <TouchableOpacity style={styles.qnt} onPress={() => { }}>
                                        <Text> + </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ marginTop: hp('2%'), marginLeft: hp('1%'), }} onPress={() => { }}>
                                        <Text style={{ fontSize: hp('2%') }}> 1 </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.qnt} onPress={() => { }}>
                                        <Text> - </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: hp('3%'), marginLeft: hp('3%'), }} >
                        <Text style={{ fontSize: hp('2.5%'), }}>Coupon</Text>
                    </View>
                    {/* <View style={{ flex: 0.3, }}> */}
                    <View style={styles.coupon} >
                        <TouchableOpacity >
                            <AntDesign name="tago" size={27} color='#AAAAAA' style={{ alignItems: 'center', justifyContent: 'center', margin: hp('1%') }} />
                        </TouchableOpacity>
                        <Text style={{ position: 'absolute', fontSize: hp('2%'), marginLeft: hp('7%') }}>3 Coupon applied</Text>
                        <Text style={{ position: 'absolute', fontSize: hp('2%'), marginLeft: hp('7%'), marginTop: hp('3%'), color: '#FF95AD' }}>You Saved $30</Text>
                        <TouchableOpacity style={{ position: 'absolute', marginLeft: wp('72%'), marginTop: hp('1%') }}>
                            <AntDesign name="closecircle" size={27} color='#ff0000' />
                        </TouchableOpacity>
                    </View>
                    {/* </View> */}
                    <View style={{ flexDirection: 'column', marginTop: hp('2%'), marginLeft: hp('3%'), }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }} >
                            <TouchableOpacity>
                                <Text style={{ fontSize: hp('2.5%') }}>Available Offers</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={{ fontSize: hp('2.5%'), color: '#FF95AD' }}>View All Offers</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: hp('1%') }} >
                            <MaterialCommunityIcons name="brightness-percent" size={27} color='#AAAAAA' style={{ marginLeft: hp('1%'), marginTop: hp('2%') }} />
                            <Text style={{ fontSize: hp('2%'), color: '#AAAAAA', marginTop: hp('2.5%'), marginLeft: hp('1%'), }}>10% off instant Discount with All Credit Cards</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'column', marginTop: hp('1%'), marginLeft: hp('3%') }}>
                        <Text style={{ fontSize: hp('2.5%') }}>Bill Details</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: hp('2.5%') }}>Item Total</Text>
                            <Text style={{ fontSize: hp('2.5%'), marginRight: hp('1.5%') }}>$125</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: hp('2.5%') }}>Texes and Charges</Text>
                            <Text style={{ fontSize: hp('2.5%'), marginRight: hp('1.5%') }}>$0</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: hp('2.5%') }}>Delivery Fees</Text>
                            <Text style={{ fontSize: hp('2.5%'), marginRight: hp('1.5%') }}>$0</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: hp('2.5%') }}>Coupon</Text>
                                <Text style={{ color: '#AAAAAA', fontSize: hp('2.5%') }}>(New coupon) </Text>
                                <TouchableOpacity  >
                                    <Text style={{ fontSize: hp('2.5%'), color: '#FF95AD' }}>Change</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={{ fontSize: hp('2.5%'), marginRight: hp('1.5%') }}>-$30.00</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: hp('3%'), marginLeft: hp('3%') }}>
                        <Text style={{ fontSize: hp('2.5%') }}>To Pay</Text>
                        <Text style={{ fontSize: hp('2.5%'), color: '#FF95AD', marginRight: hp('1.5%') }}>$95.00</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: hp('3%'), marginLeft: hp('3%'), marginBottom: hp('5%') }}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ fontSize: hp('2.5%') }}>Total Pay</Text>
                            <Text style={{ fontSize: hp('2.5%'), color: '#FF95AD', }}>$95.00</Text>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.order}>
                                <Text style={{ fontSize: hp('2%'), color: '#FFF' }}>PLACE ORDER</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>

        );
    }
}

export default AddToCartScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    back: {
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
    cartview: {
        backgroundColor: "#FF95AD",
        borderRadius: wp('2%'),
        width: wp('22%'),
        height: hp('6%'),
        marginLeft: hp('2%'),
        alignItems: "center",
        justifyContent: 'center',
    },
    carttext: {
        backgroundColor: "#ffff",
        borderRadius: wp('2%'),
        width: wp('22%'),
        height: hp('6%'),
        marginLeft: hp('2%'),
        alignItems: "center",
        justifyContent: 'center',
    },
    imageview: {
        flexDirection: 'row',
        backgroundColor: "#fff",
        borderRadius: wp('2%'),
        width: wp('98%'),
        height: hp('27%'),
        marginLeft: hp('0.5%'),
    },
    sizebox: {
        width: wp('10%'),
        height: hp('5%'),
        borderRadius: hp('1%'),
        borderColor: '#000000',
        borderWidth: hp('0.1 %'),
        marginLeft: hp('2%'),
        marginTop: hp('1 %'),
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    qnt: {
        width: wp('10%'),
        height: hp('5%'),
        borderRadius: hp('1%'),
        borderColor: '#000000',
        backgroundColor: '#fff',
        borderWidth: hp('0.1 %'),
        marginLeft: hp('1%'),
        marginTop: hp('1 %'),
        alignItems: 'center',
        justifyContent: 'center'
    },
    color: {
        width: wp('10%'),
        height: hp('5%'),
        borderRadius: hp('1%'),
        borderColor: '#000000',
        backgroundColor: '#AAAAAA',
        borderWidth: hp('0.1 %'),
        marginLeft: hp('1%'),
        marginTop: hp('1 %'),
        alignItems: 'center',
        justifyContent: 'center'
    },
    coupon: {
        flex: 0.1,
        // width: wp('80%'),
        height: hp('7%'),
        borderRadius: hp('1%'),
        borderColor: '#000000',
        borderWidth: hp('0.1 %'),
        marginLeft: hp('5%'),
        marginRight: hp('5%'),
        marginTop: hp('1 %'),
        backgroundColor: '#fff',

    },
    order: {
        width: wp('30%'),
        height: hp('5%'),
        borderRadius: hp('1%'),
        borderColor: '#000000',
        backgroundColor: '#FF95AD',
        marginRight: hp('2%'),
        marginTop: hp('1 %'),
        alignItems: 'center',
        justifyContent: 'center'
    },
})