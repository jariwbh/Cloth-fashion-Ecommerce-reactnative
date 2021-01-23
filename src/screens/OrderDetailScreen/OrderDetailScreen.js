import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, RefreshControl, SectionList, ScrollView } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import moment from 'moment';
import AsyncStorage from '@react-native-community/async-storage';
import Loader from '../../components/Loader/Loader'

export default class YourOrderDetails extends Component {
    constructor(props) {
        super(props);
        console.log('this.props.route.params.item', this.props.route.params.item)
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

    componentDidMount() {
        this.getdata()
        this.wait(1000).then(() => this.setState({ loader: false }));
    }

    render() {
        const { orderDetail, fullname, deliveryAddress, loader } = this.state;
        return (
            <>
                {loader == true ? <Loader /> :
                    <View>
                        <Text style={{ fontSize: hp('2%'), textTransform: 'capitalize' }}>Order Details</Text>
                        <View style={{ marginTop: hp('1%'), marginLeft: hp('5.3%') }}>
                            <Text style={{ fontSize: hp('2%'), textTransform: 'capitalize' }}>Name: {fullname}</Text>
                            <Text style={{ fontSize: hp('2%') }}>Order Number : {orderDetail.prefix + orderDetail.billnumber}</Text>
                            <Text style={{ fontSize: hp('2%') }}>Order Date : {moment(orderDetail.billdate).format('LL')}  </Text>
                            <Text style={{ fontSize: hp('2%') }}>Order Amount : ₹ {orderDetail.totalamount}</Text>
                            <Text style={{ fontSize: hp('2%') }}>Payment Mode : {orderDetail.status == "active" ? "Unpaid" : "Paid"}</Text>
                        </View>
                        <Text style={{ fontSize: hp('2%'), textTransform: 'capitalize' }}>Order Items ({orderDetail.items.length})</Text>
                        <View>
                            {orderDetail.items.map((v, i) => (
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: hp('2%') }}>
                                    <Image source={{ uri: v.item.imagegallery[0].attachment }}
                                        resizeMode="stretch" style={{
                                            alignSelf: 'auto', width: wp('10%'), height: hp('10%'),
                                        }} />
                                    <View style={{ flexDirection: 'column' }}>
                                        <Text style={{ fontSize: hp('2.5%') }}>{v.item.itemname}</Text>
                                        <Text style={{ fontSize: hp('2.5%') }}>quantity : {v.quantity}</Text>
                                        <Text style={{ fontSize: hp('2%'), textTransform: 'capitalize' }}>color : red</Text>
                                        <Text style={{ fontSize: hp('2%'), textTransform: 'capitalize' }}>size : xl</Text>
                                    </View>
                                </View>
                            ))}

                        </View>
                        <Text style={{ fontSize: hp('2%'), textTransform: 'capitalize' }}>Delivery Address</Text>
                        <Text style={{ fontSize: hp('2%'), textTransform: 'capitalize' }}>{deliveryAddress}</Text>
                    </View>
                }
            </>
        );
    }
}

