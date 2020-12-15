import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

class ProductListScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingBottom: hp('2%'), marginTop: hp('3%') }} >
                    <View >
                        <Text style={{ fontSize: 20, marginLeft: hp('2%'), padding: wp('3%') }}> New Arrivals</Text>
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
                <ScrollView>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: hp('5%'), flex: 0.5, }}>
                        <View style={{ flexDirection: 'column', flex: 0.5, marginLeft: wp('5%') }}>
                            <TouchableOpacity onPress={() => { }} >

                                <Image source={require('../../../assets/images/MaskGroup93.png')} />
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

                                <Image source={require('../../../assets/images/MaskGroup91.png')} />
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
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: hp('5%'), flex: 0.5, }}>
                        <View style={{ flexDirection: 'column', flex: 0.5, marginLeft: wp('5%') }}>
                            <TouchableOpacity onPress={() => { }} >

                                <Image source={require('../../../assets/images/MaskGroup9.png')} />
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

                                <Image source={require('../../../assets/images/MaskGroup92.png')} />
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
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: hp('5%'), flex: 0.5, paddingBottom: hp('20%') }}>
                        <View style={{ flexDirection: 'column', flex: 0.5, marginLeft: wp('5%') }}>
                            <TouchableOpacity onPress={() => { }} >

                                <Image source={require('../../../assets/images/MaskGroup91.png')} />
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

                                <Image source={require('../../../assets/images/MaskGroup93.png')} />
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

export default ProductListScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    newview: {
        backgroundColor: "#FF95AD",
        borderRadius: wp('2%'),
        width: wp('20%'),
        height: hp('4%'),
        marginLeft: hp('3%'),
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
})