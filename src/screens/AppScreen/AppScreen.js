import React, { Component } from 'react'
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, Image, FlatList, ScrollView } from 'react-native';
import { CategoryService } from '../../Services/CategoryService/CategoryService';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

export class AppScreen extends Component {
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
        <TouchableOpacity onPress={() => this.props.navigation.navigate('ProductListScreen', { item })} >
            <View style={{ marginTop: hp('-2%'), alignItems: 'center' }}>
                <Image source={{ uri: item.property.icon_logo }} style={{ height: 100, width: 100 }} />
                <Text style={{ marginTop: "-15%", alignItems: 'center' }}>{item.property.title}</Text>
            </View>
        </TouchableOpacity>
    )

    render() {
        const { categoryList } = this.state;
        return (
            <View style={styles.container}>
                <FlatList
                    data={categoryList}
                    numColumns={3}
                    renderItem={this.renderCategory}
                    keyExtractor={item => `${item._id}`}
                />
            </View>
        )
    }
}

export default AppScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    }
})