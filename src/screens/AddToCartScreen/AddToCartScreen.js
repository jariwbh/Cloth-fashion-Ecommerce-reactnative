import React, { Component } from 'react';
import moment from 'moment';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, TouchableHighlight } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { ScrollView } from 'react-native-gesture-handler';
import { getLocaladdtocardlist, removeLocalAddtocardlist, removeLocalAllAddtocardlist } from '../../Helpers/LocalAddTOcart';
import AsyncStorage from '@react-native-community/async-storage';
import { BillingService } from '../../Services/BillingService/BillingService';

class AddToCartScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartlist: [],
            userData: null,
            totalAmount: 0,
            totalDiscount: 0,
            finalAmount: 0,
            totalTax: 0,
            taxAmount: 0,
            totalQty: 0,
        };
    }

    async getLocaladdtocardlist() {
        let localAddtocardlists = await getLocaladdtocardlist();
        this.setState({ cartlist: localAddtocardlists })
    }

    getdata = async () => {
        var getUser = await AsyncStorage.getItem('@authuser')
        this.setState({ userData: JSON.parse(getUser) })
    }

    async componentDidMount() {
        await this.getLocaladdtocardlist();
        await this.getdata();
        this.calculatorAmount();
    }

    async removeLocalAddtocardlist(item) {
        await removeLocalAddtocardlist(item)
        await this.getLocaladdtocardlist();
        this.calculatorAmount();
    }

    calculatorAmount() {
        let renderData = this.state.cartlist;
        let totalAmount = 0
        let totalDiscount = 0
        let finalAmount = 0
        let totalQty = 0
        let totalTax = 0

        totalAmount = renderData.map(item => (item.itemid.sale.rate ? item.itemid.sale.rate : 0) * (item.itemqty)).reduce((prev, next) => prev + next);
        totalDiscount = renderData.map(item => (item.itemid.sale.discount ? item.itemid.sale.discount : 0) * (item.itemqty)).reduce((prev, next) => prev + next);
        totalQty = totalQty + renderData.map(item => (item.itemqty)).reduce((prev, next) => prev + next);

        for (let elemt of renderData) {
            for (let tax of elemt.itemid.sale.taxes) {
                totalTax += (((elemt.itemid.sale.rate * (elemt.itemqty)) * tax.amount) / 100);
            }
        }

        finalAmount = ((totalAmount - totalDiscount) + totalTax);
        this.setState({ totalAmount: totalAmount, totalDiscount: totalDiscount, finalAmount: finalAmount, totalQty: totalQty, totalTax: totalTax })
        return;
    }

    onPressIncrementItem(item) {
        let totalTax = 0;
        let renderData = [...this.state.cartlist];
        for (let data of renderData) {
            if (data.itemid._id == item.itemid._id) {
                data.itemqty = data.itemqty + 1
                for (let tax of data.itemid.sale.taxes) {
                    totalTax += (((item.itemid.sale.rate * (item.itemqty)) * tax.amount) / 100);
                }
                this.setState({ totalTax: totalTax });
                break;
            }
        }
        this.calculatorAmount()
        this.setState({ cartlist: renderData });
    }

    onPressDecreaseItem(item) {
        let totalTax = 0;
        let renderData = [...this.state.cartlist];
        for (let data of renderData) {
            if (data.itemid._id == item.itemid._id) {
                data.itemqty = data.itemqty - 1
                for (let tax of data.itemid.sale.taxes) {
                    totalTax -= (((item.itemid.sale.rate * (item.itemqty)) * tax.amount) / 100);
                }
                this.setState({ totalTax: totalTax });
                break;
            }
        }
        this.calculatorAmount()
        this.setState({ cartlist: renderData });
    }

    renderAddtoCardList = ({ item }) => (
        <View style={styles.imageview}>
            <View style={{ flexDirection: 'column-reverse' }}>
                <View>
                    <Image source={{ uri: item.itemid.item_logo }}
                        resizeMode="stretch" style={{
                            alignSelf: 'auto', width: wp('35%'), height: hp('25%'), borderRadius: hp('1.5%'), flex: 1, margin: hp('2%')
                        }} />
                </View>
                <View style={styles.heart}>
                    <TouchableOpacity onPress={() => this.removeLocalAddtocardlist(item)}>
                        <AntDesign name="delete" size={24} color="red" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flex: 1, marginTop: hp('3%') }}>
                <Text style={{ fontSize: hp('2.5%'), }}>{item.itemid.itemname}</Text>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={{ fontSize: hp('2.5%'), }}>₹ {item.itemid.sale.rate}</Text>
                    {item.itemid.sale.discount && <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), color: '#FF95AD' }}>({item.itemid.sale.discount} ₹ OFF)</Text>}
                </View>
                <View style={{ flexDirection: 'row', marginLeft: hp('1%'), }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('1%'), marginTop: hp('1%') }}>Colors</Text>
                        <View style={{
                            width: wp('3%'), height: hp('2%'), borderColor: '#000000',
                            borderWidth: hp('0.1 %'), marginLeft: hp('1%'), marginTop: hp('2%'),
                            alignItems: 'center', justifyContent: 'center', backgroundColor: item.selectedColorCode
                        }}>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('1.5%'), marginTop: hp('1%') }}>Size :</Text>
                        <View style={styles.sizebox}  >
                            <Text style={{ fontSize: hp('2%') }} > {item.selectedSizeSize}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), marginTop: hp('1.5%') }}>Qty</Text>
                    <TouchableOpacity style={styles.qnt} onPress={() => this.onPressIncrementItem(item)}>
                        <Text> + </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginTop: hp('2%'), marginLeft: hp('1%'), }}>
                        <Text style={{ fontSize: hp('2%') }}> {item.itemqty} </Text>
                    </TouchableOpacity>
                    <TouchableOpacity disabled={item.itemqty > 1 ? false : true} style={styles.qnt} onPress={() => this.onPressDecreaseItem(item)}>
                        <Text> - </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )

    onPressSubmit() {
        let renderData = [...this.state.cartlist];
        for (let data of renderData) {
            if (!data.itemqty) {
                return alert('Quantity Invalid')
            }
            break;
        }

        let billdetails;
        let itemdata = [];

        renderData.forEach(element => {
            let obj = {
                item: element._id,
                quantity: element.itemqty,
                cost: element.itemid.sale.rate,
                totalcost: element.itemid.sale.rate * element.itemqty,
                discount: element.itemid.sale.discount * element.itemqty

            }
            obj['tax'] = [];
            if (element.itemid.sale.taxes && element.itemid.sale.taxes.length != 0) {
                let amount = (element.itemid.sale.rate * element.itemqty) - (element.itemid.sale.discount * element.itemqty);
                element.itemid.sale.taxes.forEach(el => {
                    let tobj = { taxname: el.taxname, taxper: el.amount, taxamount: (amount * el.amount) / 100 };
                    obj['tax'].push(tobj);
                });
            }
            itemdata.push(obj);
        });

        billdetails = {
            customerid: this.state.userData._id,
            onModel: "Member",
            items: itemdata,
            billingdate: moment().format('L')
        }

        BillingService(billdetails).then(response => {
            console.log('response', response);
            if (response.type === "Error") {
                return;
            }
            if (response != null || response != 'undefind') {
                removeLocalAllAddtocardlist()
                this.props.navigation.navigate('ProductListScreen')
            }
        })
    }

    render() {
        const { cartlist, totalAmount, totalDiscount, finalAmount, totalTax } = this.state;
        return (
            <View style={styles.container}>
                {!cartlist.length > 0 ?
                    <Text style={{ fontSize: hp('2.5%'), alignItems: 'center', justifyContent: 'center' }}>There are no items in your cart</Text>
                    :
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
                                <Text style={{ fontSize: hp('2.5%'), marginRight: hp('1.5%') }}>₹ {Number(totalAmount).toFixed(2)}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: hp('2.5%') }}>Texes and Charges</Text>
                                <Text style={{ fontSize: hp('2.5%'), marginRight: hp('1.5%') }}>₹ {Number(totalTax).toFixed(2)}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontSize: hp('2.5%') }}>Total Discount</Text>
                                </View>
                                <Text style={{ fontSize: hp('2.5%'), marginRight: hp('1.5%') }}>₹ -{Number(totalDiscount).toFixed(2)}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: hp('2.5%') }}>Total Amount</Text>
                                <Text style={{ fontSize: hp('2.5%'), marginRight: hp('1.5%') }}>₹ {Number(finalAmount).toFixed(2)}</Text>
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
                }
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
    heart: {
        flex: 1,
        width: wp('10%'),
        height: hp('5.5%'),
        borderRadius: hp('15%'),
        marginLeft: hp('16%'),
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#000000',
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 3,
        position: 'absolute',
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
        flex: 1,
        flexDirection: 'row',

    },
    sizebox: {
        flexDirection: 'row',
        borderColor: '#000000',
        marginLeft: hp('1%'),
        marginTop: hp('1.5%'),
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