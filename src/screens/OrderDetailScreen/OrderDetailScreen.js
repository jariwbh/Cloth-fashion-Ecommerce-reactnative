import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, RefreshControl, SectionList, ScrollView } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import moment from 'moment';
import AsyncStorage from '@react-native-community/async-storage';
import Loader from '../../components/Loader/Loader'

export default class YourOrderDetails extends Component {
    constructor(props) {
        super(props);
        this.orderDetail = this.props.route.params.item
        this.state = {
            orderDetail: this.orderDetail,
            loader: true,
            userName: null,
            deliveryAddress: null
        };
    }
    wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }
    async orderMapping() {
        if (this.orderDetail && this.orderDetail.items && this.orderDetail.items.length > 0) {
            this.orderDetail.items.forEach(elementItems => {
                var propertyObj = this.orderDetail.property.item.find(p => p.itemid == elementItems.item._id)
                if (propertyObj) {
                    elementItems.ColorCode = propertyObj.ColorCode;
                    elementItems.SizeCode = propertyObj.SizeCode;
                }
            });
        }
        return;
    }
    getdata = async () => {
        var getUser = await AsyncStorage.getItem('@authuser')
        var user = JSON.parse(getUser)
        this.setState({ fullname: user.property.fullname, deliveryAddress: user.property.address })
        if (getUser == null || getUser && getUser.length == 0) {
            setTimeout(() => {
                this.props.navigation.replace('LoginScreen')
            }, 5000);
        }
    }
    async componentDidMount() {
        await this.orderMapping()
        await this.getdata()

        this.wait(1000).then(() => this.setState({ loader: false }));
    }
    render() {
        const { orderDetail, fullname, deliveryAddress, loader } = this.state;
        console.log('deliveryAddress', deliveryAddress)
        return (
            <>
                {loader == true ? <Loader /> :
                    <>
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            style={{ marginBottom: hp('7%') }}>
                            <View style={styles.orderDetailView}>
                                <View style={{ marginLeft: hp('4%'), marginTop: hp('1%'), }}>
                                    <Text style={{ fontSize: hp('2.5%'), textTransform: 'capitalize', fontWeight: 'bold' }}>Order Details</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: hp('2%'), }}>
                                    <View style={{ flex: 1, height: 1, backgroundColor: '#e6e6e6' }} />
                                </View>
                                <View style={{ marginTop: hp('1%'), }}>
                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                        <Text style={{ fontSize: hp('2%'), textTransform: 'capitalize', marginLeft: hp('5%') }}>Name:</Text>
                                        <Text style={{ fontSize: hp('2%'), textTransform: 'capitalize', marginRight: hp('5%') }}>{fullname}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: hp('2%'), }}>
                                        <View style={{ flex: 1, height: 1, backgroundColor: '#e6e6e6' }} />
                                    </View>
                                    <View style={{ marginTop: hp('1%'), justifyContent: 'space-between', flexDirection: 'row' }}>
                                        <Text style={{ fontSize: hp('2%'), marginLeft: hp('5%') }}>OrderNumber : </Text>
                                        <Text style={{ fontSize: hp('2%'), marginRight: hp('5%') }}>{orderDetail.prefix + orderDetail.billnumber}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: hp('2%'), }}>
                                        <View style={{ flex: 1, height: 1, backgroundColor: '#e6e6e6' }} />
                                    </View>
                                    <View style={{ marginTop: hp('1%'), justifyContent: 'space-between', flexDirection: 'row' }}>
                                        <Text style={{ fontSize: hp('2%'), marginLeft: hp('5%') }}>Order Date :   </Text>
                                        <Text style={{ fontSize: hp('2%'), marginRight: hp('5%') }}>{moment(orderDetail.billdate).format('LL')}  </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: hp('2%'), }}>
                                        <View style={{ flex: 1, height: 1, backgroundColor: '#e6e6e6' }} />
                                    </View>
                                    <View style={{ marginTop: hp('1%'), justifyContent: 'space-between', flexDirection: 'row' }}>
                                        <Text style={{ fontSize: hp('2%'), marginLeft: hp('5%') }}>Order Amount :</Text>
                                        <Text style={{ fontSize: hp('2%'), marginRight: hp('5%') }}>₹ {orderDetail.totalamount}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: hp('2%'), }}>
                                        <View style={{ flex: 1, height: 1, backgroundColor: '#e6e6e6' }} />
                                    </View>
                                    <View style={{ marginTop: hp('1%'), justifyContent: 'space-between', flexDirection: 'row' }}>
                                        <Text style={{ fontSize: hp('2%'), marginLeft: hp('5%') }}>Payment Mode : </Text>
                                        <Text style={{ fontSize: hp('2%'), marginRight: hp('5%') }}>{orderDetail.status == "active" ? "Unpaid" : "Paid"}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.orderitemview}>
                                <View style={{ marginLeft: hp('4%'), marginTop: hp('1%'), }}>
                                    <Text style={{ fontSize: hp('2.5%'), textTransform: 'capitalize', fontWeight: 'bold' }}>Order Items ({orderDetail.items.length})</Text>
                                </View>
                                <View style={{ marginTop: hp('3%') }}>
                                    {orderDetail.items.map((v, i) => (
                                        <>
                                            <View style={{ marginTop: hp('1%'), flexDirection: 'row', marginLeft: hp('5%'), flex: 1 }}>
                                                <Image source={{ uri: v.item.imagegallery[0].attachment }}
                                                    resizeMode="stretch" style={{
                                                        alignSelf: 'auto', width: wp('10%'), height: hp('10%'),
                                                    }} />
                                                <View style={{ flexDirection: 'column', marginLeft: hp('3%') }}>
                                                    <Text style={{ fontSize: hp('2.5%') }}>{v.item.itemname}</Text>
                                                    <Text style={{ fontSize: hp('2.5%') }}>quantity : {v.quantity}</Text>
                                                    <Text style={{ fontSize: hp('2%'), textTransform: 'capitalize' }}>color : {v.ColorCode}</Text>
                                                    <Text style={{ fontSize: hp('2%'), textTransform: 'capitalize' }}>size : {v.SizeCode}</Text>
                                                </View>
                                            </View>
                                            <View style={{ alignItems: 'center', marginTop: hp('2%'), flexDirection: 'row' }}>
                                                <View style={{ flex: 1, height: 1, backgroundColor: '#e6e6e6' }} />
                                            </View>
                                        </>
                                    ))}
                                </View>
                            </View>
                            <View style={styles.AddressView}>
                                <View style={{ marginLeft: hp('4%'), marginTop: hp('1%'), }}>
                                    <Text style={{ fontSize: hp('2.5%'), textTransform: 'capitalize', fontWeight: 'bold' }}>Delivery Address</Text>
                                </View>
                                <View style={{ marginLeft: hp('4%'), marginRight: hp('3%'), marginTop: hp('1%'), }}>
                                    <Text style={{ fontSize: hp('2%'), textTransform: 'capitalize' }}>{deliveryAddress == null || deliveryAddress == undefined ? 'No details Avaliable' : deliveryAddress}</Text>
                                </View>
                            </View>
                        </ScrollView>
                    </>
                }
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    orderDetailView: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "#fff",
        height: hp('35%'),
        marginTop: hp('2%'),
        marginBottom: hp('1%'),
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
    },
    orderitemview: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "#fff",
        marginTop: hp('1%'),
        marginBottom: hp('1%'),
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
    },
    AddressView: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "#fff",
        height: hp('20%'),
        marginTop: hp('1%'),
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
        marginBottom: hp('2%')
    },

})