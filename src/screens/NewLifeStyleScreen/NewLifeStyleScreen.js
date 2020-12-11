import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import CheckBox from '@react-native-community/checkbox';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


class NewLifeStyleScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // isSelected: false
            toggleCheckBox: false,
            bgcolor: "red"

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
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: hp('4 %') }}>
                        <TouchableOpacity>
                            <Image source={require('../../../assets/images/Screenshot1.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'column' }}>
                            <Image source={require('../../../assets/images/Screenshot2.png')} />
                            <Image source={require('../../../assets/images/Screenshot3.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: hp('5%'), justifyContent: 'flex-start', alignItems: 'flex-start', }}>
                        <Text style={{ fontSize: hp('2.5%'), }}>Brand Name</Text>
                        <Text style={{ fontSize: hp('2.5%'), }}>Men's Solid Regular Casual Shirt</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Text style={{ fontSize: hp('2.5%'), }}>$125</Text>
                            {/* <Text style={{ fontSize: hp('2.5%'), }}>$140</Text>
                        <Text style={{ fontSize: hp('2.5%'), }}>(10% OFF)</Text> */}
                        </View>
                    </View>

                    <View style={styles.colorview}>
                        <View>
                            <Text style={{ padding: hp('2%'), fontSize: hp('2.5%') }}>Colors</Text>
                        </View>
                        <View style={styles.checkboxview}>
                            <CheckBox
                                disabled={false}
                                value={this.state.toggleCheckBox}
                                onValueChange={() => this.setState({ toggleCheckBox: true })}
                                tintColors={{ true: '#E8C376', false: '#E8C376' }}

                            />
                            <CheckBox
                                disabled={false}
                                value={this.state.toggleCheckBox}
                                onValueChange={() => this.setState({ toggleCheckBox: true })}
                                tintColors={{ true: '#FF9DB9', false: '#FF9DB9' }}

                            />
                            <CheckBox

                                disabled={false}
                                value={this.state.toggleCheckBox}
                                onValueChange={() => this.setState({ toggleCheckBox: true })}
                                tintColors={{ true: '#5347C6', false: '#5347C6' }}

                            />
                            <CheckBox
                                disabled={false}
                                value={this.state.toggleCheckBox}
                                onValueChange={() => this.setState({ toggleCheckBox: true })}
                                tintColors={{ true: '#D6D6D6', false: '#D6D6D6' }}

                            />

                            <CheckBox
                                disabled={false}
                                value={this.state.toggleCheckBox}
                                onValueChange={() => this.setState({ toggleCheckBox: true })}
                                tintColors={{ true: '#4DE5BB', false: '#4DE5BB' }}

                            />

                        </View>
                        <View style={styles.size}>
                            <Text style={{ fontSize: hp('2%') }}>Size - 40 </Text>
                            <Text style={{ fontSize: hp('2%'), marginRight: hp('2%'), color: '#FF9DB9' }}>Size Chart </Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity style={styles.sizebox} onPress={() => { }} >
                                <Text> 39 </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.sizebox} onPress={() => { }}>
                                <Text> 40 </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.sizebox} onPress={() => { }}>
                                <Text> 41 </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.sizebox} onPress={() => { }}>
                                <Text> 42 </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.sizebox} onPress={() => { }}>
                                <Text> 43 </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.sizebox} onPress={() => { }}>
                                <Text> 44 </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.size}>
                            <Text style={{ fontSize: hp('2%'), color: '#AAAAAA' }}>Garment Mesurement : Chest 44 in</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: hp('1%'), marginLeft: hp('5 %'), }}>
                        <View style={{ marginTop: hp('2%') }}>
                            <Text style={{ fontSize: hp('2%') }}>Qty :</Text>
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
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: hp('3%'), marginLeft: hp('3%'), flex: 1 }} >
                        <View >
                            <Text style={{ fontSize: hp('2%'), padding: wp('5%') }}>PRODUCT DETAILS</Text>
                        </View>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            <TouchableOpacity onPress={() => { }}>
                                <View style={styles.newview}>
                                    <Text style={{ fontSize: hp('2%'), color: '#AAAAAA', marginLeft: hp('2%') }}>REVIEWS </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { }}>
                                <View style={styles.newtext}>
                                    <Text style={{ fontSize: hp('2%'), color: '#AAAAAA', marginLeft: hp('2%') }}>SELLER </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { }}>
                                <View style={styles.newtext}>
                                    <Text style={{ fontSize: hp('2%'), color: '#AAAAAA', marginLeft: hp('2%') }}>OFFERS </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { }}>
                                <View style={styles.newtext}>
                                    <Text style={{ fontSize: hp('2%'), color: '#AAAAAA', marginLeft: hp('2%') }}>OFFERS </Text>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                    <View style={{ marginTop: hp('3%'), marginLeft: hp('5 %'), }}>
                        <Text style={{ fontSize: hp('2.3%'), paddingBottom: hp('1 %') }}>Slim Fit and 100% Cotton </Text>

                        <Text style={{ fontSize: hp('2.3%'), paddingBottom: hp('1 %') }} >Lorem Ipsum is simply dummy text of th </Text>
                        <Text style={{ fontSize: hp('2.5%'), color: '#AAAAAA', paddingBottom: hp('1 %') }}>printing and typesetting industry </Text>

                    </View>
                    <View style={styles.chakdelivery}>
                        <Text style={{ fontSize: hp('3%'), }}>Check Delivery</Text>
                    </View>
                    <View style={styles.pincode}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="Enter PIN Code "
                            type='clear'
                            placeholderTextColor="#737373"
                            autoCapitalize="none"
                        />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <MaterialCommunityIcons name="bike" size={30} color="#cc3300" />
                        <Text style={{ fontSize: hp('2.3%'), marginLeft: wp('2%'), }}>Delivery Within 1 day</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', }}>
                        <TouchableOpacity style={styles.cart} onPress={() => { this.props.navigation.navigate('AddToCartScreen') }}>
                            <SimpleLineIcons name="bag" size={24} color="#fff" style={{
                                marginLeft: hp('2%'),
                            }} />
                            <Text style={{ fontSize: hp('2.3%'), color: '#fff', padding: wp('2 %'), }}>ADD TO CART </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.wishlist}>
                            <FontAwesome name="heart-o" size={24} color="#B9B913" />
                            <Text style={{ fontSize: hp('2.3%'), color: '#B9B913', padding: wp('2 %') }}>WISHLIST </Text>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default NewLifeStyleScreen;


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
    colorview: {
        flexDirection: 'column',
        borderRadius: hp('1%'),
        backgroundColor: '#fff',
        marginTop: hp('3 %'),
        width: wp('85%'),
        height: hp('27%'),
        marginLeft: hp('3%'),
    },
    checkboxview: {
        flexDirection: 'row',
        marginLeft: hp('2%'),
        marginTop: hp('-1 %'),
    },
    size: {
        flexDirection: 'row',
        marginLeft: hp('2%'),
        marginTop: hp('1 %'),
        justifyContent: 'space-between'
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
        borderWidth: hp('0.1 %'),
        marginLeft: hp('1%'),
        marginTop: hp('1 %'),
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    chakdelivery: {
        // flexDirection: 'row',
        marginLeft: hp('5%'),
        marginTop: hp('5 %'),

    },
    pincode: {
        flex: 0.1,
        borderRadius: hp('1%'),
        backgroundColor: "#fff",
        marginLeft: hp('5%'),
        marginTop: hp('1%'),
        marginRight: hp('5%'),
        justifyContent: 'space-around',
        marginBottom: hp('2%'),
        height: hp('7%'),
        borderColor: '#000000',
        borderWidth: hp('0.1 %'),
    },
    TextInput: {
        fontSize: hp('2.5%'),
        flex: 1,
        marginLeft: hp('1%'),
    },
    cart: {
        flexDirection: 'row',
        width: wp('40%'),
        borderRadius: hp('1%'),
        backgroundColor: "#FF95AD",
        marginTop: hp('3%'),
        marginBottom: hp('2%'),
        height: hp('6.5%'),
        alignItems: 'center',
        justifyContent: 'center',

    },
    wishlist: {
        flexDirection: 'row',
        width: wp('40%'),
        borderRadius: hp('1%'),
        backgroundColor: "#FFF08B",
        marginTop: hp('3%'),
        marginBottom: hp('2%'),
        height: hp('6.5%'),
        alignItems: 'center',
        justifyContent: 'center'

    },
})