import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { getLocalWishList, removeLocalWishList } from '../../Helpers/LocalWishList'

class LikeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: null,
        };
    }

    async getLocalWishListService() {
        const productList = await getLocalWishList()
        this.setState({ productList: productList })
    }

    async removeLocalWishListService(item) {
        await removeLocalWishList(item)
        await this.getLocalWishListService();
    }

    async componentDidMount() {
        await this.getLocalWishListService();
    }

    renderInventoryItem = ({ item }) => (
        <View style={{ flexDirection: 'column', flex: 0.5, marginLeft: hp('1%'), marginRight: hp('1%'), }}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('NewLifeStyleScreen', { item }) }} >
                <Image source={{ uri: item.item_logo }}
                    style={{ margin: hp('1.5%'), height: hp('30%'), width: wp('40%'), borderRadius: 10, borderColor: '#FFFFFF', borderWidth: 2 }} />
            </TouchableOpacity>
            <View style={styles.heart}>
                <TouchableOpacity onPress={() => this.removeLocalWishListService(item)}>
                    <FontAwesome name="heart" size={24} color="red" />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: hp('1%'), justifyContent: 'space-between', marginRight: hp('1%'), }}>
                <Text style={{ fontSize: hp('2.5%'), textTransform: 'capitalize' }}>{item.itemname}</Text>
            </View>
            {item.sale.description &&
                <View>
                    <Text style={{ fontSize: hp('2%'), marginLeft: hp('1%'), color: "#737373", textTransform: 'capitalize' }}>{item.sale.description}</Text>
                </View>
            }
            <View style={{ flexDirection: 'row', }}>
                <Text style={{ marginLeft: hp('2%'), fontSize: hp('2%') }}>₹ {item.sale.rate}</Text>
                {item.sale.discount && <Text style={{ fontSize: hp('2%'), marginLeft: hp('2%'), color: '#FF95AD' }}>({item.sale.discount} ₹ OFF)</Text>}
            </View>
        </View>
    )

    render() {
        const { productList } = this.state;
        return (
            <View style={styles.container}>
                {!productList ?
                    <Text style={{ fontSize: hp('2.5%'), alignItems: 'center', justifyContent: 'center' }}>There are no items in your Whish List</Text>
                    :
                    <ScrollView
                        Vertical={true}
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: hp('5%'), flex: 0.5, marginBottom: hp('10%') }}>
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

export default LikeScreen;

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
        marginLeft: hp('19%'),
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
        marginTop: hp('28%'),


    },
    newview: {
        backgroundColor: "#FF95AD",
        borderRadius: wp('2%'),
        width: wp('20%'),
        height: hp('4%'),
        marginLeft: hp('3%'),
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
    menu: {
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
    newrendertext: {
        fontSize: hp('2.3%'),
        color: '#FFFFFF',
    }, viewrendertext: {
        fontSize: hp('2.3%'),
        color: '#AAAAAA',
    }
})