import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { saveLocalWishList, removeLocalWishList } from '../../Helpers/LocalWishList';
import { saveLocalAddtocardlist } from '../../Helpers/LocalAddTOcart';
import { membershipoffersService } from '../../Services/membershipoffersService/membershipoffersService';

class NewLifeStyleScreen extends Component {
    constructor(props) {
        super(props);
        this.itemID = this.props.route.params.item._id
        this.state = {
            itemObj: null,
            item_logo: null,
            itemname: null,
            price: null,
            discount: null,
            description: null,
            sizeList: null,
            colorList: null,
            selectedColor: null,
            selectedSize: null,
        };
    }

    getinventeryDetails() {
        let id = this.itemID
        membershipoffersService(id).then(response => {
            this.setState({
                itemObj: response[0],
                item_logo: response[0].itemid.item_logo,
                itemname: response[0].itemid.itemname,
                price: response[0].itemid.sale.rate,
                description: response[0].itemid.sale.description,
                discount: response[0].itemid.sale.discount,
                sizeList: response[0].itemid.property.size,
                colorList: response[0].itemid.property.color
            })
        })
    }

    componentDidMount() {
        this.getinventeryDetails()
    }

    onPressWishlisthandler(item) {
        if (item.selected) {
            removeLocalWishList(item)
        } else {
            item.selected = true
            saveLocalWishList(item)
        }
        this.props.navigation.navigate('ProductListScreen')
    }

    onPressToSelectsize(selectedSize, index) {
        const { sizeList } = this.state;
        const sizecode = sizeList.map((item) => {
            item.selected = false;
            return item;
        });
        sizecode[index].selected = true;
        this.setState({ sizeList: sizecode })
        this.setState({ selectedSize: selectedSize.sizecode })
    }

    renderSize = ({ item, index }) => (
        <TouchableOpacity style={item.selected ? styles.selectedsizebox : styles.sizebox} onPress={() => this.onPressToSelectsize(item, index)}>
            <Text> {item.sizecode} </Text>
        </TouchableOpacity>
    )

    onPressToSelectcolor(selectedcolor, index) {
        const { colorList } = this.state;
        const colorcode = colorList.map((item) => {
            item.selected = false;
            return item;
        });
        colorcode[index].selected = true;
        this.setState({ colorList: colorcode })
        this.setState({ selectedColor: selectedcolor.colorcode })
    }

    renderColor = ({ item, index }) => (
        <TouchableOpacity onPress={() => this.onPressToSelectcolor(item, index)} >
            { item.selected ?
                <MaterialCommunityIcons size={30} name="checkbox-marked" color={item.colorcode} style={{ paddingLeft: hp('2%') }} />
                : <MaterialCommunityIcons size={30} name="checkbox-blank" color={item.colorcode} style={{ paddingLeft: hp('2%') }} />
            }
        </TouchableOpacity>
    )

    addToCarthandlar() {
        const { selectedColor, selectedSize, itemObj } = this.state;
        if (!selectedColor) {
            alert('please select your color')
            return;
        }

        if (!selectedSize) {
            alert('please select your size')
            return;
        }

        itemObj.itemqty = 1
        itemObj.selectedColorCode = selectedColor
        itemObj.selectedSizeSize = selectedSize
        let item = itemObj
        saveLocalAddtocardlist(item)
        this.props.navigation.navigate('ProductListScreen')
    }

    render() {
        const { item_logo, itemname, price, discount, description, sizeList, colorList, itemObj } = this.state;
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: hp('1%'), flex: 1 }}>
                        <TouchableOpacity>
                            <Image source={{ uri: item_logo }} resizeMode="stretch" style={{ height: hp('40%'), width: wp('50%'), borderRadius: hp('1.5%'), alignSelf: 'auto', flex: 1 }} />

                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'column', marginTop: hp('1%'), marginLeft: hp('5%'), justifyContent: 'flex-start', alignItems: 'flex-start', }}>
                        <Text style={{ fontSize: hp('2.5%'), color: '#AAAAAA' }}>Brand Name</Text>
                        <Text style={{ fontSize: hp('2.5%'), textTransform: 'capitalize' }}>{itemname}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: hp('2.5%'), }}>₹ {price}</Text>
                            {discount && <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('2%'), color: '#FF95AD' }}>({discount} ₹ OFF)</Text>}
                        </View>
                    </View>
                    <View style={styles.colorview}>
                        <View>
                            <Text style={{ padding: hp('2%'), fontSize: hp('2.5%') }}>Colors</Text>
                        </View>
                        <View style={styles.checkboxview}>
                            <FlatList
                                numColumns={10}
                                data={colorList}
                                renderItem={this.renderColor}
                                keyExtractor={(item) => `${item.id}`}
                            />
                        </View>
                        <View style={styles.size}>
                            <Text style={{ fontSize: hp('2.5%') }}>Size </Text>
                            <Text style={{ fontSize: hp('2%'), marginRight: hp('2%'), color: '#FF9DB9' }}>Size Chart </Text>
                        </View>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            <View style={{ flexDirection: 'row' }}>
                                <FlatList
                                    numColumns={10}
                                    data={sizeList}
                                    renderItem={this.renderSize}
                                    keyExtractor={item => `${item.id}`}
                                />
                            </View>
                        </ScrollView>
                    </View>
                    <View style={{ marginTop: hp('1%'), marginLeft: hp('5%'), }}>
                        <Text style={{ fontSize: hp('2%'), marginBottom: hp('2%') }}>PRODUCT DETAILS</Text>
                        <Text style={{ fontSize: hp('1.8%'), paddingBottom: hp('1%'), textTransform: 'capitalize' }}>{description}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: hp('7%') }}>
                        <TouchableOpacity style={styles.cart} onPress={() => this.addToCarthandlar()}>
                            <SimpleLineIcons name="bag" size={24} color="#fff" style={{ marginLeft: hp('2%'), }} />
                            <Text style={{ fontSize: hp('2.3%'), color: '#fff', padding: wp('2 %'), }}>ADD TO CART </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.wishlist} onPress={() => this.onPressWishlisthandler(itemObj)}>
                            <FontAwesome name="heart-o" size={24} color="#B9B913" />
                            <Text style={{ fontSize: hp('2.3%'), color: '#B9B913', padding: wp('2 %') }}>WISHLIST </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default NewLifeStyleScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    colorview: {
        flexDirection: 'column',
        borderRadius: hp('1%'),
        backgroundColor: '#F6F5FF',
        width: wp('85%'),
        height: hp('23%'),
        marginLeft: hp('4%'),
        marginTop: hp('2%'),
        marginBottom: hp('1%'),
    },
    checkboxview: {
        flexDirection: 'row',
        marginLeft: hp('0%'),
        marginTop: hp('-1%'),
    },
    size: {
        flexDirection: 'row',
        marginLeft: hp('2%'),
        marginTop: hp('1 %'),
        justifyContent: 'space-between'
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
    selectedsizebox: {
        width: wp('10%'),
        height: hp('5%'),
        borderRadius: hp('1%'),
        borderColor: '#FF9DB9',
        borderWidth: hp('0.1 %'),
        marginLeft: hp('2%'),
        marginTop: hp('1 %'),
        backgroundColor: '#FF9DB9',
        alignItems: 'center',
        justifyContent: 'center'
    },
    qnt: {
        width: wp('10%'),
        height: hp('5%'),
        borderRadius: hp('1%'),
        borderColor: '#000000',
        borderWidth: hp('0.1 %'),
        marginLeft: hp('1%'),
        marginTop: hp('1%'),
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    chakdelivery: {
        marginLeft: hp('5%'),
        marginTop: hp('5 %'),
    },
    pincode: {
        flex: 0.1,
        borderRadius: hp('1%'),
        backgroundColor: "#fff",
        marginLeft: hp('5%'),
        marginTop: hp('1%'),
        marginRight: hp('5%'),
        justifyContent: 'space-around',
        marginBottom: hp('2%'),
        height: hp('7%'),
        borderColor: '#000000',
        borderWidth: hp('0.1 %'),
    },
    TextInput: {
        fontSize: hp('2.5%'),
        flex: 1,
        marginLeft: hp('1%'),
    },
    cart: {
        flexDirection: 'row',
        width: wp('40%'),
        borderRadius: hp('1%'),
        backgroundColor: "#FF95AD",
        marginTop: hp('3%'),
        marginBottom: hp('2%'),
        height: hp('6.5%'),
        alignItems: 'center',
        justifyContent: 'center',
    },
    wishlist: {
        flexDirection: 'row',
        width: wp('40%'),
        borderRadius: hp('1%'),
        backgroundColor: "#FFF08B",
        marginTop: hp('3%'),
        marginBottom: hp('2%'),
        height: hp('6.5%'),
        alignItems: 'center',
        justifyContent: 'center'
    },
})