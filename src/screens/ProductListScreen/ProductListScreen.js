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
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingBottom: hp('3%'), marginTop: hp('3%') }} >
                    <View >
                        <Text style={{ fontSize: 20, marginLeft: hp('2%'), padding: wp('3%') }}> New Arrivals</Text>
                    </View>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <TouchableOpacity onPress={() => { }}>
                            <View style={styles.newview}>
                                <Text style={{ fontSize: hp('2%'), }}>Dress </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { }}>
                            <View style={styles.newtext}>
                                <Text style={{ fontSize: hp('2%'), }}>Dress </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { }}>
                            <View style={styles.newtext}>
                                <Text style={{ fontSize: hp('2%'), }}>Dress </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { }}>
                            <View style={styles.newtext}>
                                <Text style={{ fontSize: hp('2%'), }}>Dress </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { }}>
                            <View style={styles.newtext}>
                                <Text style={{ fontSize: hp('2%'), }}>Dress </Text>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                <ScrollView>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: hp('5%') }}>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('NewLifeStyleScreen') }}>
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
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: hp('3%'), }}>
                        <TouchableOpacity onPress={() => { }}>
                            <View>
                                <Image source={require('../../../assets/images/MaskGroup9.png')} />
                                <FontAwesome name="heart" size={24} color="#737373" style={{ position: 'absolute', marginLeft: wp('2%'), marginTop: wp('1%') }} />
                                <Text style={{ fontSize: hp('2.5%') }}>TISTABENE</Text>
                                <Text style={{ fontSize: hp('1.5%'), color: "#737373" }}>Comfort slim Block Print Shirt</Text>
                                <Text>$125</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { }}>
                            <View>
                                <Image source={require('../../../assets/images/MaskGroup92.png')} />
                                <FontAwesome name="heart" size={24} color="#737373" style={{ position: 'absolute', marginLeft: wp('2%'), marginTop: wp('1%') }} />
                                <Text style={{ fontSize: hp('2.5%') }}>VAN HEUSEN</Text>
                                <Text style={{ fontSize: hp('1.5%'), color: "#737373" }}>Sheath Dress with Belt</Text>
                                <Text>$140</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: hp('3%'), paddingBottom: hp('10%') }}>
                        <TouchableOpacity onPress={() => { }}>
                            <View>
                                <Image source={require('../../../assets/images/MaskGroup91.png')} />
                                <FontAwesome name="heart" size={24} color="#737373" style={{ position: 'absolute', marginLeft: wp('2%'), marginTop: wp('1%') }} />
                                <Text style={{ fontSize: hp('2.5%') }}>TISTABENE</Text>
                                <Text style={{ fontSize: hp('1.5%'), color: "#737373" }}>Comfort slim Block Print Shirt</Text>
                                <Text>$125</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { }}>
                            <View>
                                <Image source={require('../../../assets/images/MaskGroup93.png')} />
                                <FontAwesome name="heart" size={24} color="#737373" style={{ position: 'absolute', marginLeft: wp('2%'), marginTop: wp('1%') }} />
                                <Text style={{ fontSize: hp('2.5%') }}>VAN HEUSEN</Text>
                                <Text style={{ fontSize: hp('1.5%'), color: "#737373" }}>Sheath Dress with Belt</Text>
                                <Text>$140</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default ProductListScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    newview: {
        backgroundColor: "#FF95AD",
        borderRadius: wp('2%'),
        width: wp('22%'),
        height: hp('6%'),
        marginLeft: hp('3%'),
        alignItems: "center",
        justifyContent: 'center',
    },
    newtext: {
        backgroundColor: "#ffff",
        borderRadius: wp('2%'),
        width: wp('22%'),
        height: hp('6%'),
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