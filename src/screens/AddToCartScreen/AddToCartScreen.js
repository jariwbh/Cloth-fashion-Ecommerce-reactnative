import React, { Component } from 'react';
import moment from 'moment';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, RefreshControl } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { ScrollView } from 'react-native-gesture-handler';
import { getLocaladdtocardlist, removeLocalAddtocardlist, removeLocalAllAddtocardlist } from '../../Helpers/LocalAddTOcart';
import AsyncStorage from '@react-native-community/async-storage';
import { BillingService } from '../../Services/BillingService/BillingService';
import Loader from '../../components/Loader/Loader'
import MyLoader from '../../components/Loader/MyLoader';
import { ToastAndroid } from 'react-native';

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
            loader: true,
            loading: false,
        };
    }

    wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }

    async getLocaladdtocardlist() {
        let localAddtocardlists = await getLocaladdtocardlist();
        this.setState({ cartlist: localAddtocardlists })
        this.wait(1000).then(() => this.setState({ loader: false }));
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

        totalAmount = renderData.map(item => (item.sale.rate ? item.sale.rate : 0) * (item.itemqty)).reduce((prev, next) => prev + next);
        totalDiscount = renderData.map(item => (item.sale && item.sale.discount ? item.sale.discount : 0) * (item.itemqty)).reduce((prev, next) => prev + next);
        totalQty = totalQty + renderData.map(item => (item.itemqty)).reduce((prev, next) => prev + next);

        for (let elemt of renderData) {
            for (let tax of elemt.sale.taxes) {
                totalTax += (((elemt.sale.rate * (elemt.itemqty)) * tax.amount) / 100);
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
            if (data._id == item._id) {
                data.itemqty = data.itemqty + 1
                for (let tax of data.sale.taxes) {
                    totalTax += (((item.sale.rate * (item.itemqty)) * tax.amount) / 100);
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
            if (data._id == item._id) {
                data.itemqty = data.itemqty - 1
                for (let tax of data.sale.taxes) {
                    totalTax -= (((item.sale.rate * (item.itemqty)) * tax.amount) / 100);
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
                    <Image source={{ uri: item.imagegallery[0].attachment }}
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
                <Text style={{ fontSize: hp('2.5%'), }}>{item.itemname}</Text>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={{ fontSize: hp('2.5%'), }}>₹ {item.sale.rate}</Text>
                    {item.sale && item.sale.discount ?
                        <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), color: '#FF95AD' }}>({item.sale.discount} ₹ OFF)</Text>
                        : <></>
                    }
                </View>
                <View style={{ flexDirection: 'row', }}>
                    {item.selectedColorCode != null ?
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                            <Text style={{ fontSize: hp('2.5%'), marginTop: hp('1%') }}>Colors</Text>
                            <View style={{
                                width: wp('3%'), height: hp('2%'), borderColor: '#000000',
                                borderWidth: hp('0.1 %'), marginLeft: hp('1%'), marginTop: hp('2%'),
                                alignItems: 'center', justifyContent: 'center', backgroundColor: item.selectedColorCode
                            }}>
                            </View>
                        </View>
                        : <View></View>
                    }
                    {item.selectedSizeSize != null ?
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('1.5%'), marginTop: hp('1%') }}>Size :</Text>
                            <View style={styles.sizebox}  >
                                <Text style={{ fontSize: hp('2%') }} > {item.selectedSizeSize}</Text>
                            </View>
                        </View>
                        : <View></View>
                    }
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={{ fontSize: hp('2.5%'), marginTop: hp('1.5%') }}>Qty</Text>
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
        let itemobj = [];

        renderData.forEach(element => {
            let obj = {
                item: element._id,
                quantity: element.itemqty,
                //cost: element.sale.rate,
                //totalcost: element.sale.rate * element.itemqty,
                //discount: element.sale.discount * element.itemqty,
                sale: element.sale,
            }
            {/* obj['tax'] = [];
            if (element.sale.taxes && element.sale.taxes.length != 0) {
                let amount = (element.sale.rate * element.itemqty) - (element.sale.discount * element.itemqty);
                element.sale.taxes.forEach(el => {
                    let tobj = { taxname: el.taxname, taxper: el.amount, taxamount: (amount * el.amount) / 100 };
                    obj['tax'].push(tobj);
                });
            } */}

            itemdata.push(obj);
        });

        renderData.forEach(element => {
            let itm = {
                itemid: element._id,
                ColorCode: element.selectedColorCode,
                SizeCode: element.selectedSizeSize
            }
            itemobj.push(itm);
        });

        billdetails = {
            "customerid": this.state.userData._id,
            "onModel": "Member",
            "billdate": moment().format('L'),
            "items": itemdata,
            //    "amount": this.state.totalAmount,
            // "totalamount": this.state.finalAmount,
            "property": { item: itemobj },
            //   "taxamount": this.state.totalTax,
            "taxes": [],
            "paidamount": 0,
            "type": "POS"
        }
        //  console.log('billdetails', billdetails)
        this.setState({ loading: true })
        try {
            BillingService(billdetails).then(response => {
                // console.log('response', response);
                if (response != null && response != 'undefind' && response.error == null) {
                    removeLocalAllAddtocardlist()
                    alert('Thank you, Your Order has been Book successfully')
                    this.props.navigation.navigate('ProductListScreen')
                } else {
                    this.setState({ loading: false })
                    ToastAndroid.show("Order not Booked!", ToastAndroid.LONG)
                }
            })
        }
        catch (error) {
            this.setState({ loading: false })
            ToastAndroid.show("Order not Booked!", ToastAndroid.LONG)
        }
    }

    render() {
        const { cartlist, totalAmount, totalDiscount, finalAmount, totalTax, loader, loading } = this.state;

        return (
            <View style={styles.container}>
                {(cartlist == null) || (cartlist && cartlist.length == 0) ?
                    (loader == false ?
                        <Text style={{ fontSize: hp('2.5%'), textAlign: 'center', color: '#747474', marginTop: hp('30%') }}>There are no items in your cart</Text>
                        : <Loader />
                    )
                    :
                    <ScrollView>
                        <FlatList
                            data={cartlist}
                            renderItem={this.renderAddtoCardList}
                            keyExtractor={item => `${item._id}`}
                        />
                        <View style={{ marginLeft: hp('3%'), marginTop: hp('5%') }}>
                            <Text style={{ fontSize: hp('2.5%') }}>Bill Details</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: hp('1%') }}>
                                <Text style={{ fontSize: hp('2.5%') }}>Item Total</Text>
                                <Text style={{ fontSize: hp('2.5%'), marginRight: hp('1.5%') }}>₹ {Number(totalAmount).toFixed(2)}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontSize: hp('2.5%') }}>Tax and Charges</Text>
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
                                    {loading == true ? <MyLoader /> : <Text style={{ fontSize: hp('2%'), color: '#FFF' }}>BOOK ORDER</Text>}
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
        backgroundColor: '#FFFFFF',
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