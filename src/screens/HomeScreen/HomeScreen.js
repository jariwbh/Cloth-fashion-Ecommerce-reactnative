import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, Image, FlatList, ScrollView } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { CategoryService } from '../../services/CategoryService/CategoryService';


class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryList: null
        };
    }

    getCategory() {
        CategoryService().then(response => {
            const slice = response.slice(0, 3)
            this.setState({ categoryList: slice })
        })
    }

    componentDidMount() {
        this.getCategory();
    }

    renderCategory = ({ item }) => (
        <TouchableOpacity onPress={() => this.props.navigation.navigate('TabNavigations')} >
            <View style={{ marginTop: hp('-2%'), alignItems: 'center' }}>
                <Image source={{ uri: item.property.icon_logo }} style={{ height: 100, width: 100 }} />
                <Text style={{ marginTop: "-15%", alignItems: 'center' }}>{item.property.title}</Text>
            </View>
        </TouchableOpacity>
    )

    render() {
        const { categoryList } = this.state;
        return (
            <ImageBackground source={require('../../../assets/images/3.png')} style={styles.backgroundImage}>
                <View style={styles.container}>
                    <View style={styles.inputView}>
                        <View style={{ flexDirection: 'row', marginTop: "42%", marginLeft: "-20%" }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                                <Text style={styles.TextInput}>Biggest Online Store </Text>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: "2%" }}>
                                <Text style={styles.inerInput}>Million of Collections </Text>
                            </View>
                        </View>
                        <FlatList
                            data={categoryList}
                            numColumns={3}
                            renderItem={this.renderCategory}
                            keyExtractor={item => `${item._id}`}
                        />
                        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                            <TouchableOpacity style={styles.go} onPress={() => { this.props.navigation.navigate('TabNavigations') }}>
                                <Text style={styles.textgo} >GO</Text>
                                <FontAwesome name="chevron-right" size={15} color="#B9B913" style={{ margin: wp('1%') }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        position: 'relative'

    },
    inputView: {
        backgroundColor: "#fff",
        borderRadius: wp('70%'),
        width: wp('85%'),
        marginLeft: hp('4%'),
        marginTop: hp('55%'),
        alignItems: "center",
        justifyContent: 'center',
        flex: 1,

    },
    TextInput: {
        fontSize: hp('3%'),
        marginTop: hp('-25%'),
        marginLeft: wp('20%'),
    },
    inerInput: {
        fontSize: hp('2.5%'),
        marginTop: hp('-18%'),
        marginLeft: wp('-50%'),
    },
    go: {
        flexDirection: 'row',
        backgroundColor: '#FFF08B',
        borderRadius: wp('5%'),
        width: wp("30%"),
        height: hp("6%"),
        alignItems: "center",
        justifyContent: 'center',
        marginTop: hp('-3%'),
        marginLeft: wp('5%'),
    },
    textgo: {
        fontWeight: 'bold',
        fontSize: hp('2.5%'),
        color: "#B9B913",
    },
})