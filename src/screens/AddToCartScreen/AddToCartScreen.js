import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, TouchableHighlight } from 'react-native';
import {
    heightPercentageToDP as hp, widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { ScrollView } from 'react-native-gesture-handler';
import { getLocaladdtocardlist, removeLocalAddtocardlist } from '../../Helpers/LocalAddTOcart';

class AddToCartScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartlist: [],
        };
        this.totalAmount = 0;
        this.totalDiscount = 0;
        this.finalAmount = 0;
        this.totalTax = 0;
        this.taxAmount = 0;
        this.totalQty = 0;
    }

    async getLocaladdtocardlist() {
        let localAddtocardlists = await getLocaladdtocardlist();
        this.setState({ cartlist: localAddtocardlists })
    }

    async componentDidMount() {
        await this.getLocaladdtocardlist();
    }

    async removeLocalAddtocardlist(item) {
        await removeLocalAddtocardlist(item)
        await this.getLocaladdtocardlist()
    }

    calculatorAmount() {
        let renderData = this.state.cartlist;
        this.totalAmount = renderData.map(item => (item.sale.rate ? item.sale.rate : 0) * (item.itemqty ? item.itemqty : 0)).reduce((prev, next) => prev + next);
        this.totalDiscount = renderData.map(item => (item.sale.discount ? item.sale.discount : 0) * (item.itemqty ? item.itemqty : 0)).reduce((prev, next) => prev + next);
        this.totalTax = renderData.map(item => (item.sale.taxes ? item.sale.taxes[0].amount : 0) * (item.itemqty ? item.itemqty : 0)).reduce((prev, next) => prev + next);
        this.finalAmount = ((this.totalAmount - this.totalDiscount) + this.totalTax);
        this.totalQty = this.totalQty + data.itemqty;
    }

    onPressIncrementItem(item) {
        let renderData = [...this.state.cartlist];
        for (let data of renderData) {
            if (data._id == item._id) {
                if (!data.itemqty) {
                    data.itemqty = 0
                }
                data.itemqty = data.itemqty + 1
                break;
            }
        }
        this.calculatorAmount()
        this.setState({ cartlist: renderData });
    }

    onPressDecreaseItem(item) {
        let renderData = [...this.state.cartlist];
        for (let data of renderData) {
            if (data._id == item._id) {
                if (!data.itemqty) {
                    data.itemqty = 0
                }
                data.itemqty = data.itemqty - 1
                break;
            }
        }
        this.calculatorAmount()
        this.setState({ cartlist: renderData });
        console.log('renderData', renderData)
    }

    renderAddtoCardList = ({ item }) => (
        <View style={styles.imageview}>
            <View>
                <Image source={{ uri: item.item_logo }} style={{ margin: hp('1 %'), width: wp('35%'), height: hp('25%'), borderRadius: hp('1.5%') }} />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: hp('2.5%'), }}>{item.itemname}</Text>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={{ fontSize: hp('2.5%'), }}>₹ {item.sale.rate}</Text>
                    {item.sale.discount && <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), color: '#FF95AD' }}>({item.sale.discount} ₹ OFF)</Text>}
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('1%') }}>Colors</Text>
                    <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('1.5%') }}>Size</Text>
                    <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%') }}>Qty</Text>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: hp('1%'), marginTop: hp('1%') }}>
                    <View style={{
                        width: wp('10%'), height: hp('5%'), borderRadius: hp('1%'), borderColor: '#000000',
                        borderWidth: hp('0.1 %'), marginLeft: hp('1%'), marginTop: hp('1 %'),
                        alignItems: 'center', justifyContent: 'center', backgroundColor: item.selectedColorCode
                    }}>
                    </View>
                    <View style={styles.sizebox}  >
                        <Text> {item.selectedSizeSize}</Text>
                    </View>
                    <TouchableOpacity style={styles.qnt} onPress={() => this.onPressIncrementItem(item)}>
                        <Text> + </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginTop: hp('2%'), marginLeft: hp('1%'), }}>
                        <Text style={{ fontSize: hp('2%') }}> {item.itemqty ? item.itemqty : 0} </Text>
                    </TouchableOpacity>
                    <TouchableOpacity disabled={item.itemqty > 0 ? false : true} style={styles.qnt} onPress={() => this.onPressDecreaseItem(item)}>
                        <Text> - </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => this.removeLocalAddtocardlist(item)}
                        style={{ position: 'absolute', paddingHorizontal: hp('2%'), marginTop: hp('2%') }}>
                        <AntDesign name="delete" size={24} color="red" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )

    onPressSubmit() {
        console.log('this.state.cartlist', this.state.cartlist)
        let renderData = [...this.state.cartlist];
        for (let data of renderData) {
            if (!data.itemqty) {
                return alert('Quantity Invalid')
            }
            break;
        }

        let billdetails = {
            customerid: "5fe09682e2b9185c969db61d",
            status: "Unpaid",
            items: this.state.cartlist,
            onModel: "Member",
            totalamount: this.finalAmount,
            preparedby: '',
            taxamount: this.totalTax,
            discount: this.totalDiscount,
            billingdate: '',
        }

        this.props.navigation.navigate('ProductListScreen')
    }

    render() {
        const { cartlist } = this.state;
        return (
            <View style={styles.container}>
                <ScrollView>
                    <FlatList
                        data={cartlist}
                        renderItem={this.renderAddtoCardList}
                        keyExtractor={item => `${item._id}`}
                    />
                    <View style={{ marginLeft: hp('3%') }}>
                        <Text style={{ fontSize: hp('2.5%') }}>Bill Details</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: hp('1%') }}>
                            <Text style={{ fontSize: hp('2.5%') }}>Item Total</Text>
                            <Text style={{ fontSize: hp('2.5%'), marginRight: hp('1.5%') }}>₹ {this.totalAmount}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: hp('2.5%') }}>Texes and Charges</Text>
                            <Text style={{ fontSize: hp('2.5%'), marginRight: hp('1.5%') }}>₹ {this.totalTax}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: hp('2.5%') }}>Delivery Fees</Text>
                            <Text style={{ fontSize: hp('2.5%'), marginRight: hp('1.5%') }}>₹ 0</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: hp('2.5%') }}>Total Discount</Text>
                            </View>
                            <Text style={{ fontSize: hp('2.5%'), marginRight: hp('1.5%') }}>₹ -{this.totalDiscount}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: hp('2.5%') }}>Total Amount</Text>
                            <Text style={{ fontSize: hp('2.5%'), marginRight: hp('1.5%') }}>₹ {this.finalAmount}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: hp('1%'), marginBottom: hp('10%') }}>
                        <View>
                            <TouchableOpacity style={styles.order} onPress={() => this.onPressSubmit()}>
                                <Text style={{ fontSize: hp('2%'), color: '#FFF' }}>BOOK ORDER</Text>
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
        flex: 1,
        backgroundColor: '#FFFFFF'
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