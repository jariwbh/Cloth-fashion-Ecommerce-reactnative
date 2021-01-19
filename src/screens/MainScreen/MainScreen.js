import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, BackHandler } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { CouponsService } from '../../Services/CouponsService/CouponsService';
import HTML from 'react-native-render-html';
import { CategoryService } from '../../Services/CategoryService/CategoryService';
import { InventoryItemService } from '../../Services/InventoryItemService/InventoryItemService'
import MyLoader from '../../components/Loader/Loader';

class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coupon: null,
            categoryList: null,
            productList: null
        };

        this._unsubscribeSiFocus = this.props.navigation.addListener('focus', e => {
            BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
        });

        this._unsubscribeSiBlur = this.props.navigation.addListener('blur', e => {
            BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton,
            );
        });
    }

    componentDidMount() {
        this.getCategory();
        this.getCoupons();
        this.getInventoryItemService();
    }

    componentWillUnmount() {
        this._unsubscribeSiFocus();
        this._unsubscribeSiBlur();
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    handleBackButton = () => {
        BackHandler.exitApp()
        return true;
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
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('ProductListScreen', { item }) }} style={{ alignItems: 'center' }}>
                <Image source={{ uri: item.property.icon_logo }} style={{ height: hp('10%'), width: wp('20%') }} />
                <Text style={{ marginTop: hp('-1%') }}>{item.property.title}</Text>
            </TouchableOpacity>
        </View>
    )

    renderInventoryItem = ({ item }) => (
        <View style={{ flex: 1, marginLeft: wp('3%'), marginBottom: hp('1%') }}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('ProductListScreen') }} >
                <Image source={{ uri: item.item_logo }} resizeMode="stretch"
                    style={{ margin: hp('1.5%'), height: hp('25%'), alignSelf: 'auto', width: wp('40%'), borderRadius: hp('1.5%') }} />
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
                {(productList == null) || (productList && productList.length == 0) ?
                    <>
                        <MyLoader />
                    </>
                    :
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: hp('1%'), paddingBottom: hp('0.5%') }}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            >
                                <FlatList
                                    style={{ flexDirection: 'column' }}
                                    numColumns={10}
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
                                : <Image source={{ uri: "https://res.cloudinary.com/dnogrvbs2/image/upload/v1611059017/Stylish_recommendation_inuyrb.png" }}
                                    style={{ margin: hp('1.5%'), height: hp('15%'), width: wp('95%'), borderRadius: 10 }} />
                            }
                        </View>
                        <View>
                            {coupon ?
                                <Text style={{ fontSize: hp('3%'), marginTop: hp('-5%'), paddingLeft: hp('2%') }}> Tops New Fashion Cloths</Text>
                                : <Text style={{ fontSize: hp('3%'), marginTop: hp('1%') }}> Tops New Fashion Cloths</Text>
                            }
                        </View>
                        <View style={{ flexDirection: 'row', marginBottom: hp('10%'), flex: 0.5 }}>
                            <FlatList
                                numColumns={2}
                                data={productList}
                                renderItem={this.renderInventoryItem}
                                keyExtractor={item => `${item._id}`}
                            />
                        </View>
                    </ScrollView>
                }
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