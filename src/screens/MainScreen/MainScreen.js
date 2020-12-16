import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { CouponsService } from '../../services/CouponsService/CouponsService';
import HTML from 'react-native-render-html';
import { CategoryService } from '../../Services/CategoryService/CategoryService';
import { InventoryItemService } from '../../Services/InventoryItemService/InventoryItemService'

class MainScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            coupon: null,
            categoryList: null,
            productList: null
        };
    }

    componentDidMount() {
        this.getCategory();
        this.getCoupons();
        this.getInventoryItemService();
    }

    getCategory() {
        CategoryService().then(response => {
            this.setState({ categoryList: response })
        })
    }

    getInventoryItemService() {
        InventoryItemService().then(response => {
            const slice = response.slice(0, 6)
            this.setState({ productList: slice })
        })
    }

    getCoupons() {
        CouponsService().then(response => {
            this.setState({ coupon: response[0].property.description })
        })
    }

    renderCategory = ({ item }) => (
        <View>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('ProductListScreen') }} style={{ alignItems: 'center' }}>
                <Image source={{ uri: item.property.icon_logo }} style={{ height: 100, width: 100 }} />
                <Text style={{ marginTop: hp('-1%') }}>{item.property.title}</Text>
            </TouchableOpacity>
        </View>
    )

    renderInventoryItem = ({ item }) => (
        <View style={{ flex: 1, marginLeft: wp('3%'), marginBottom: hp('1%') }}>
            <TouchableOpacity onPress={() => { }} >
                <Image source={{ uri: item.item_logo }}
                    style={{ margin: hp('1.5%'), height: hp('25%'), width: wp('40%'), borderRadius: 10 }} />
            </TouchableOpacity>
            <View style={{ marginLeft: wp('2%') }}>
                <Text style={{ fontSize: hp('2.5%'), textTransform: 'capitalize' }}>{item.itemname}</Text>
            </View>
        </View>
    )

    render() {
        const { coupon, categoryList, productList } = this.state;
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
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: hp('1%'), paddingBottom: hp('0.5%') }}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            <FlatList
                                style={{ flexDirection: 'column' }}
                                numColumns={5}
                                data={categoryList}
                                renderItem={this.renderCategory}
                                keyExtractor={item => `${item._id}`}
                            />
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
                            <Text style={{ fontSize: hp('3%'), marginTop: hp('-5%'), paddingLeft: hp('2%') }}> Tops New Fashion Cloths</Text>
                            : <Text style={{ fontSize: hp('3%'), marginTop: hp('1%') }}> Tops New Fashion Cloths</Text>
                        }
                    </View>
                    {/* <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: hp('-4.5%'), alignItems: 'center', paddingLeft: hp('25%') }} >
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
                    </View> */}
                    <View style={{ flexDirection: 'row', marginBottom: hp('10%'), flex: 0.5 }}>
                        <FlatList
                            numColumns={2}
                            data={productList}
                            renderItem={this.renderInventoryItem}
                            keyExtractor={item => `${item._id}`}
                        />
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