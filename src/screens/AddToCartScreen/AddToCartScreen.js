import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
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
                <ScrollView>

                    <View style={styles.imageview}>
                        <View>
                            <Image source={require('../../../assets/images/MaskGroup93.png')} style={{ margin: hp('1 %'), width: wp('35%'), height: hp('25%'), borderRadius: hp('1.5%') }} />
                            <TouchableOpacity style={{ position: 'absolute', paddingHorizontal: hp('2%'), marginTop: hp('2%') }}>
                                <AntDesign name="delete" size={24} color="#fff" />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: hp('2.5%'), }}>Men's Solid Regular </Text>
                            <Text style={{ fontSize: hp('2.5%'), color: '#AAAAAA' }}>Seller Name</Text>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={{ fontSize: hp('2.5%'), }}>$125</Text>
                                <Text style={{ fontSize: hp('2.5%'), }}>(10% off)</Text>
                            </View>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('1%') }}>Colors</Text>
                                <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('1.5%') }}>Size</Text>
                                <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%') }}>Qty</Text>

                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: hp('1%'), marginTop: hp('1%') }}>
                                <TouchableOpacity style={styles.color}>
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


                    <View style={{ marginLeft: hp('3%') }}>
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