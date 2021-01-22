import React, { Component } from 'react';
import moment from 'moment';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, RefreshControl, SectionList, ScrollView } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import AsyncStorage from '@react-native-community/async-storage';
import { BillingFilterService } from '../../Services/BillingService/BillingService';
import Loading from '../../components/Loader/Loader'

class YourOrderScreen extends Component {
    constructor(props) {
        super(props);
        this.userid = null;
        this.state = {
            _id: null,
            cartlist: [],
            userData: null,
            refreshing: false,
            loader: true,
        };
    }

    BillingFilterService(id) {
        BillingFilterService(id).then(data => {
            this.setState({ cartlist: data })
            this.wait(1000).then(() => this.setState({ loader: false }));
        })
    }

    wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }

    onRefresh = () => {
        const { _id } = this.state;
        this.setState({ refreshing: true })
        this.BillingFilterService(_id)
        this.wait(3000).then(() => this.setState({ refreshing: false }));
    }

    getdata = async () => {
        var getUser = await AsyncStorage.getItem('@authuser')
        if (getUser == null) {
            setTimeout(() => {
                this.props.navigation.replace('LoginScreen')
            }, 5000);
        } else {
            this.userid = JSON.parse(getUser)
            this.BillingFilterService(this.userid._id)
            this.setState({ _id: this.userid._id })
        }
    }

    async componentDidMount() {
        await this.getdata();
    }

    render() {
        const { cartlist, loader, refreshing } = this.state;
        return (
            <View style={styles.container}>
                {(cartlist == null) || (cartlist && cartlist.length == 0) ?
                    (loader == false ?
                        <Text style={{ fontSize: hp('2.5%'), textAlign: 'center', color: '#747474', marginTop: hp('30%') }}>There are no items in your cart</Text>
                        : <Loading />
                    )
                    :
                    <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={this.onRefresh} />} showsVerticalScrollIndicator={false}>
                        <FlatList
                            data={cartlist}
                            renderItem={({ item }) => (
                                <View style={{ flexDirection: 'row' }}>
                                    <View>
                                        {item.items.map((v, i) => (
                                            <View>
                                                <Text>{v.item.itemname}</Text>
                                                <Image source={{ uri: v.item.imagegallery[0].attachment }}
                                                    resizeMode="stretch" style={{
                                                        alignSelf: 'auto', width: wp('15%'), height: hp('10%'), borderRadius: hp('1.5%'), flex: 1, margin: hp('2%')
                                                    }} />

                                            </View>
                                        ))}
                                    </View>
                                    <View style={{ flex: 1, marginTop: hp('3%') }}>
                                        <Text>Order ID #{item.prefix + item.billnumber}</Text>
                                        <Text>Order Date - {item.billdate}</Text>
                                        <Text style={{ fontSize: hp('2.5%'), }}>₹ {item.totalamount}</Text>
                                    </View>
                                </View>
                            )}
                            keyExtractor={item => `${item._id}`}
                        />
                    </ScrollView>
                }
            </View>
        );
    }
}

export default YourOrderScreen;

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
