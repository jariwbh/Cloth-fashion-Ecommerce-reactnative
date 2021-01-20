import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { InventoryItemService } from '../../Services/InventoryItemService/InventoryItemService'
import { saveLocalWishList, getLocalWishList, removeLocalWishList } from '../../Helpers/LocalWishList';
import Loader from '../../components/Loader/Loader';
import HTML from 'react-native-render-html';

class SearchBarScreen extends Component {
    constructor(props) {
        super(props);
        this.categoryId = this.props.route.params && this.props.route.params.item,
            this.state = {
                productList: []
            };
        this.searchproductList = [];
        this.willFocus = this.props.navigation.addListener('focus', e => {
            this.reloaddata();
        });
    }

    async getInventoryItemService() {
        await InventoryItemService().then(response => {
            this.setState({ productList: response });
            this.searchproductList = response;
        })
    }

    async reloaddata() {
        await this.getInventoryItemService();
        await this.onLoadHandler();
    }

    async componentDidMount() {
        await this.getInventoryItemService();
        await this.onLoadHandler();
    }

    saveLocalWishList(currentWishList) {
        saveLocalWishList(currentWishList)
    }

    removeLocalWishList(currentWishList) {
        removeLocalWishList(currentWishList)
    }

    async onLoadHandler() {
        let localWishLists = await getLocalWishList();
        let renderData = [...this.state.productList];
        for (let data of renderData) {
            for (let localdata of localWishLists) {
                if (data._id == localdata._id && localdata.selected == true) {
                    data.selected = true
                    break;
                }
            }
        }
        this.setState({ productList: renderData });
    }

    onPressHandler(item) {
        let renderData = [...this.state.productList];
        for (let data of renderData) {
            if (data._id == item._id) {
                data.selected = (data.selected == null) ? (true) : !data.selected;
                data.selected === true ? this.saveLocalWishList(item) : this.removeLocalWishList(item)
                break;
            }
        }
        this.setState({ productList: renderData });
    }

    renderInventoryItem = ({ item }) => (
        <View style={{ flexDirection: 'column', flex: 0.5, marginLeft: hp('1%'), marginRight: hp('1%'), }}>
            <TouchableOpacity onPress={() => { this.props.navigation.push('NewLifeStyleScreen', { item }) }} >
                <Image source={{ uri: item.imagegallery[0].attachment }} resizeMode="stretch"
                    style={{ alignSelf: 'auto', flex: 1, margin: hp('1.5%'), height: hp('30%'), width: wp('40%'), borderRadius: hp('2%'), borderColor: '#FFFFFF', }} />
            </TouchableOpacity>
            <View style={styles.heart}>
                <TouchableOpacity onPress={() => { this.onPressHandler(item) }} style={{ alignItems: 'center', }}>
                    {item.selected == true ? <FontAwesome name="heart" size={24} color="red" /> : <FontAwesome name="heart-o" size={24} color="red" />}
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: hp('1%'), justifyContent: 'space-between', marginRight: hp('1%'), }}>
                <Text style={{ fontSize: hp('2.5%'), textTransform: 'capitalize' }}>{item.itemname}</Text>
            </View>
            <View>
                <View style={{ fontSize: hp('2%'), marginLeft: hp('1%'), color: "#737373", textTransform: 'capitalize' }}>
                    <HTML html={`<html> ${item.sale.description.length < 15 ? `${item.sale.description}` : `${item.sale.description.substring(0, 15)}...`} </html>`} />
                </View>
            </View>
            <View style={{ flexDirection: 'row', }}>
                <Text style={{ marginLeft: hp('2%'), fontSize: hp('2%') }}>₹ {item.sale.rate}</Text>
                {item.sale.discount && <Text style={{ fontSize: hp('2%'), marginLeft: hp('2%'), color: '#FF95AD' }}>({item.sale.discount} ₹ OFF)</Text>}
            </View>
        </View>
    )

    async searchFilterFunction(text) {
        const newData = this.searchproductList.filter(item => {
            const itemData = `${item.itemname.toUpperCase()}`
            const textData = text.toUpperCase();
            console.log('itemData', itemData)
            return itemData.indexOf(textData) > -1;
        });
        this.setState({ productList: newData });

    };

    render() {
        const { productList } = this.state;
        const EmptyListMessage = () => {
            return (
                <Text style={{ fontSize: hp('2.5%'), textAlign: 'center', color: 'red', marginTop: hp('30%') }}>No Items Found</Text>
            );
        };

        return (
            <View style={styles.container} >
                {productList == null || productList.length == 0 ? <Loader /> :
                    <>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.serchbar}>
                                <TextInput
                                    style={styles.TextInput}
                                    placeholder="Search Brand Or Products.."
                                    type='clear'
                                    placeholderTextColor="#737373"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    returnKeyType='done'
                                    onChangeText={(value) => this.searchFilterFunction(value)}
                                />
                                <FontAwesome name="search" size={24} color="#737373" style={{ padding: hp('2%') }} />
                            </View>
                        </View>
                        <ScrollView
                            Vertical={true}
                            showsVerticalScrollIndicator={false}
                        >
                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: hp('3%'), flex: 0.5, marginBottom: hp('10%') }}>
                                <FlatList
                                    numColumns={2}
                                    data={productList}
                                    renderItem={this.renderInventoryItem}
                                    keyExtractor={item => `${item._id}`}
                                    ListEmptyComponent={EmptyListMessage}
                                />
                            </View>
                        </ScrollView>
                    </>
                }
            </View>
        );
    }
}

export default SearchBarScreen;

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
    },
    viewrendertext: {
        fontSize: hp('2.3%'),
        color: '#AAAAAA',
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
    }
})