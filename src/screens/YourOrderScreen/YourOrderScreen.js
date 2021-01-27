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
                        <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={this.onRefresh} />} showsVerticalScrollIndicator={false}>
                            <Text style={{ fontSize: hp('2.5%'), textAlign: 'center', color: '#747474', marginTop: hp('30%') }}>There are no items in your cart</Text>
                        </ScrollView>
                        : <Loading />
                    )
                    :
                    <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={this.onRefresh} />} showsVerticalScrollIndicator={false}>
                        <FlatList
                            data={cartlist}
                            renderItem={({ item }) => (
                                <TouchableOpacity style={styles.cardView}>
                                    <View style={{ marginTop: hp('1%'), marginLeft: hp('5.3%') }}>
                                        <Text style={{ fontSize: hp('2%') }}>Order Number : {item.prefix + item.billnumber}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: hp('1%') }}>
                                        <Text style={{ fontSize: hp('2%') }}>Order Date : {moment(item.billdate).format('LL')}  </Text>
                                        <Text style={{ fontSize: hp('2.5%') }}>₹ {item.totalamount}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                        <TouchableOpacity style={styles.viewDeatilBtn} onPress={() => { this.props.navigation.navigate('OrderDetailScreen', { item }) }}>
                                            <Text style={styles.viewDeatilText}>View Details</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.needHelpBtn} onPress={() => { this.props.navigation.navigate('AboutScreen') }}>
                                            <Text style={styles.needHelpText}>Need help</Text>
                                        </TouchableOpacity>
                                    </View>
                                </TouchableOpacity>
                            )}
                            keyExtractor={item => `${item._id}`}
                        />
                        <View style={{ marginBottom: hp('10%') }}></View>
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
    cardView: {
        flexDirection: 'column',
        borderRadius: hp('2%'),
        backgroundColor: "#fff",
        width: wp('90%'),
        height: hp('20%'),
        marginLeft: hp('3%'),
        marginTop: hp('2%'),
        marginBottom: hp('1%'),
        borderColor: '#000000',
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
    },
    viewDeatilBtn: {
        width: wp('30%'),
        backgroundColor: "#FF95AD",
        borderRadius: wp('1%'),
        height: hp('5%'),
        alignItems: "center",
        justifyContent: "center",
        marginTop: hp('1%'),
    },
    needHelpBtn: {
        width: wp('30%'),
        backgroundColor: "#FFFFFF",
        borderRadius: wp('1%'),
        height: hp('5%'),
        alignItems: "center",
        justifyContent: "center",
        marginTop: hp('1%'),
        borderColor: '#000000',
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 2,
    },
    viewDeatilText: {
        color: "white",
        fontWeight: 'bold',
        fontSize: hp('2%'),
    },
    needHelpText: {
        color: "#FF95AD",
        fontWeight: 'bold',
        fontSize: hp('2%'),
    },
})
