import React, { Component } from 'react'
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, Image, FlatList, ScrollView } from 'react-native';
import { CategoryService } from '../../Services/CategoryService/CategoryService';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Loader from '../../components/Loader/Loader'

export class AppScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryList: []
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
        <TouchableOpacity onPress={() => this.props.navigation.navigate('ProductListScreen', { item })}>
            <View style={{ marginTop: hp('2%'), alignItems: 'center', justifyContent: 'center' }}>
                <Image source={{ uri: item.property.image && item.property.image[0].attachment }} resizeMode="stretch" style={{ height: hp('18%'), width: wp('33%') }} />
                <Text style={{ marginTop: "-2%", alignItems: 'center', fontSize: hp('2.5%') }}>{item.property.title}</Text>
            </View>
        </TouchableOpacity>
    )

    render() {
        const { categoryList } = this.state;
        return (
            <View style={styles.container}>
                {(categoryList == null) || (categoryList && categoryList.length == 0) ?
                    <Loader />
                    :
                    <View >
                        <FlatList
                            data={categoryList}
                            numColumns={3}
                            renderItem={this.renderCategory}
                            keyExtractor={item => `${item._id}`}
                        />
                    </View>
                }
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