import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { InventoryItemService } from '../../Services/InventoryItemService/InventoryItemService'

class ProductListScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: []
        };
    }

    getInventoryItemService() {
        InventoryItemService().then(response => { this.setState({ productList: response }) })
    }

    componentDidMount() {
        this.getInventoryItemService();
    }

    renderInventoryItem = ({ item }) => (
        <View style={{ flexDirection: 'column', flex: 0.5, marginLeft: wp('5%') }}>
            <TouchableOpacity onPress={() => { }} >
                <Image source={{ uri: item.item_logo }}
                    style={{ margin: hp('1.5%'), height: hp('25%'), width: wp('35%'), borderRadius: 10 }} />
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', }}>
                <Text style={{ fontSize: hp('2.5%') }}>{item.itemname}</Text>
                <TouchableOpacity>
                    <FontAwesome name="heart" size={24} color="#737373" style={{ marginLeft: wp('6%'), }} />
                </TouchableOpacity>
            </View>
            <Text style={{ fontSize: hp('2%'), color: "#737373", }}>{item.sale.description}</Text>
            <Text>$ {item.sale.rate}</Text>
        </View>
    )

    render() {
        const { productList } = this.state;
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingBottom: hp('2%'), marginTop: hp('1%') }} >
                    <View >
                        <Text style={{ fontSize: 20, marginLeft: hp('2%'), padding: wp('3%') }}> New Arrivals</Text>
                    </View>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <TouchableOpacity onPress={() => { }}>
                            <View style={styles.newview}>
                                <Text style={{ fontSize: hp('2.3%'), }}>Dress</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { }}>
                            <View style={styles.newtext}>
                                <Text style={{ fontSize: hp('2.3%'), }}>T-Shirt</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { }}>
                            <View style={styles.newtext}>
                                <Text style={{ fontSize: hp('2.3%'), }}>Pants</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { }}>
                            <View style={styles.newtext}>
                                <Text style={{ fontSize: hp('2.3%'), }}>Western</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { }}>
                            <View style={styles.newtext}>
                                <Text style={{ fontSize: hp('2.3%'), }}>Party</Text>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                <ScrollView>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: hp('5%'), flex: 0.5, marginBottom: hp('10%') }}>
                        <FlatList
                            numColumns={2}
                            data={productList}
                            renderItem={this.renderInventoryItem}
                            keyExtractor={item => `${item._id}`}
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default ProductListScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
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
})