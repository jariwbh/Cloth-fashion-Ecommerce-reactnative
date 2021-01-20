import React, { Component } from 'react';
import moment from 'moment';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, RefreshControl } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { ScrollView } from 'react-native-gesture-handler';
import { getLocaladdtocardlist, removeLocalAddtocardlist, removeLocalAllAddtocardlist } from '../../Helpers/LocalAddTOcart';
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
            console.log('data', data)
            //this.setState({ cartlist: data })
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
                    {item.sale.discount && <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), color: '#FF95AD' }}>({item.sale.discount} ₹ OFF)</Text>}
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

    render() {
        const { cartlist, loader } = this.state;

        return (
            <View style={styles.container}>
                {(cartlist == null) || (cartlist && cartlist.length == 0) ?
                    (loader == false ?
                        <Text style={{ fontSize: hp('2.5%'), textAlign: 'center', color: '#747474', marginTop: hp('30%') }}>There are no items in your cart</Text>
                        : <Loading />
                    )
                    :
                    <ScrollView>
                        <FlatList
                            data={cartlist}
                            renderItem={this.renderAddtoCardList}
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
