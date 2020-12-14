import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, Image, FlatList, ScrollView } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { CategoryService } from '../../Services/CategoryService/CategoryService';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryList: null
        };
    }

    getCategory() {
        CategoryService().then(response => {
            this.setState({ categoryList: response })
        })
    }

    componentDidMount() {
        this.getCategory();
    }

    renderCategory = ({ item }) => (
        <TouchableOpacity onPress={() => { }}>
            <View>
                <Image source={require('../../../assets/images/Women.png')} />
                <Text style={{ marginLeft: 45, marginTop: "-15%" }}>{item.property.title}</Text>
            </View>
        </TouchableOpacity>
    )

    render() {
        const { categoryList } = this.state;
        return (
            <ImageBackground source={require('../../../assets/images/3.png')} style={styles.backgroundImage}>
                <View style={styles.container}>
                    <View style={styles.inputView}>
                        <View style={{ flexDirection: 'row', marginTop: "40%", marginLeft: "-20%" }}>
                            <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                                <Text style={styles.TextInput}>Biggest Online Store </Text>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: "5%" }}>
                                <Text style={styles.inerInput}>Million of Collections </Text>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: "-10%", flex: 1 }}>
                            <FlatList
                                data={categoryList}
                                numColumns={3}
                                renderItem={this.renderCategory}
                                keyExtractor={item => `${item._id}`}
                            />
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                            <TouchableOpacity style={styles.go} onPress={() => { this.props.navigation.navigate('TabNavigations') }}>
                                <Text style={styles.textgo} >Go</Text>
                                <FontAwesome name="chevron-right" size={24} color="#FFF" style={{ margin: wp('1%') }} />
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
        resizeMode: 'cover'
    },
    inputView: {
        backgroundColor: "#fff",
        borderRadius: wp('70%'),
        backgroundColor: '#fff',
        width: wp('90%'),
        marginLeft: hp('3%'),
        marginTop: hp('50%'),
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
        backgroundColor: '#FF95AD',
        borderRadius: wp('5%'),
        width: wp("30%"),
        height: hp("6%"),
        alignItems: "center",
        justifyContent: 'center',
        marginTop: hp('33%'),
        marginLeft: wp('-60%'),
    },
    textgo: {
        fontWeight: 'bold',
        fontSize: hp('2.5%'),
        color: "#fff",
    },
})