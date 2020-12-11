import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, CheckBox, TextInput } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class FilterScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSelected: false
        };
    }
    render() {

        return (
            <View style={styles.container}>
                <View style={{ flex: 0.9, flexDirection: 'row', }}>
                    <View style={styles.inputView}>
                        <TouchableOpacity onPress={() => { }}>
                            <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('0%'), color: '#FF95AD' }}> Filter </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { }}>
                            <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('0%'), color: '#B9B913' }}> Brand </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { }}>
                            <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('0%'), color: '#000000' }}> Rating </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { }}>
                            <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('0%'), color: '#000000' }}> Size </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { }}>
                            <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('0%'), color: '#000000' }}> Colors </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { }}>
                            <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('0%'), color: '#000000' }}> Prize </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { }}>
                            <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('0%'), color: '#000000' }}> Categories </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { }}>
                            <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('0%'), color: '#000000' }}> offers </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { }}>
                            <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('0%'), color: '#000000' }}> Suitable For </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { }}>
                            <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('0%'), color: '#000000' }}> Age </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.sortby} onPress={() => { }}>

                            <Text style={{ fontSize: hp('2.5%'), marginLeft: hp('0%'), color: '#FFF', fontWeight: 'bold', }}>SORTBY</Text>

                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'column', flex: 0.5 }}>
                        <View style={styles.serchbar}>
                            <FontAwesome name="search" size={24} color="#737373" style={{ padding: hp('1%') }} />
                            <TextInput
                                style={styles.TextInput}
                                placeholder="Search "
                                type='clear'
                                placeholderTextColor="#737373"
                                autoCapitalize="none"
                            />
                        </View>

                        <View style={styles.checkboxview}>
                            <CheckBox
                                value={this.state.isSelected}
                                placeholderTextColor="pink"
                                onValueChange={() => { this.setState({ isSelected: true }) }}
                            />
                            <Text style={styles.checkbox}>Levi's</Text>
                        </View>
                        <View style={styles.checkboxview}>
                            <CheckBox
                                value={this.state.isSelected}
                                placeholderTextColor="pink"
                                onValueChange={() => { this.setState({ isSelected: true }) }}
                            />
                            <Text style={styles.checkbox}>Lee</Text>
                        </View>
                        <View style={styles.checkboxview}>
                            <CheckBox
                                value={this.state.isSelected}
                                placeholderTextColor="pink"
                                onValueChange={() => { this.setState({ isSelected: true }) }}
                            />
                            <Text style={styles.checkbox}>U.S.Polo Assn</Text>
                        </View>
                        <View style={styles.checkboxview}>
                            <CheckBox
                                value={this.state.isSelected}
                                placeholderTextColor="pink"
                                onValueChange={() => { this.setState({ isSelected: true }) }}
                            />
                            <Text style={styles.checkbox}>FabAlley</Text>
                        </View>
                        <View style={styles.checkboxview}>
                            <CheckBox
                                value={this.state.isSelected}
                                placeholderTextColor="pink"
                                onValueChange={() => { this.setState({ isSelected: true }) }}
                            />
                            <Text style={styles.checkbox}>Raymond</Text>
                        </View>
                        <View style={styles.checkboxview}>
                            <CheckBox
                                value={this.state.isSelected}
                                placeholderTextColor="pink"
                                onValueChange={() => { this.setState({ isSelected: true }) }}
                            />
                            <Text style={styles.checkbox}>Peter England</Text>
                        </View>
                        <View style={styles.checkboxview}>
                            <CheckBox
                                value={this.state.isSelected}
                                placeholderTextColor="pink"
                                onValueChange={() => { this.setState({ isSelected: true }) }}
                            />
                            <Text style={styles.checkbox}>Libas</Text>
                        </View>
                        <View style={styles.checkboxview}>
                            <CheckBox
                                value={this.state.isSelected}
                                placeholderTextColor="pink"
                                onValueChange={() => { this.setState({ isSelected: true }) }}
                            />
                            <Text style={styles.checkbox}>Wrangler</Text>
                        </View>
                        <View style={styles.checkboxview}>
                            <CheckBox
                                value={this.state.isSelected}
                                placeholderTextColor="pink"
                                onValueChange={() => { this.setState({ isSelected: true }) }}
                            />
                            <Text style={styles.checkbox}>ADIDAS</Text>
                        </View>
                        <View style={styles.checkboxview}>
                            <CheckBox
                                value={this.state.isSelected}
                                placeholderTextColor="pink"
                                onValueChange={() => { this.setState({ isSelected: true }) }}
                            />
                            <Text style={styles.checkbox}>John Plyers</Text>
                        </View>
                        <View style={styles.checkboxview}>
                            <CheckBox
                                value={this.state.isSelected}
                                placeholderTextColor="pink"
                                onValueChange={() => { this.setState({ isSelected: true }) }}
                            />
                            <Text style={styles.checkbox}>Puma</Text>
                        </View>
                    </View>

                </View>
            </View>
        );
    }
}

export default FilterScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    inputView: {
        flex: 0.5,
        flexDirection: 'column',
        backgroundColor: "#fff",
        borderRadius: wp('3%'),
        marginLeft: hp('3%'),
        marginTop: hp('15%'),
        alignItems: "center",
        justifyContent: 'space-around',
    },
    sortby: {
        flex: 0.1,
        backgroundColor: '#FF95AD',
        borderRadius: wp('1%'),
        width: wp("22%"),
        alignItems: "center",
        justifyContent: 'center',

    },
    serchbar: {
        // flex: 0.1,
        flexDirection: 'row',
        borderRadius: hp('1%'),
        backgroundColor: "#FFF",
        marginLeft: hp('3%'),
        marginTop: hp('15%'),
        marginRight: hp('1%'),
        justifyContent: 'space-around',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: hp('2%'),
    },
    TextInput: {
        fontSize: hp('2.5%'),
        flex: 1,
        marginLeft: hp('1%'),
    },
    checkboxview: {
        flexDirection: 'row',
        marginTop: hp('1%'),
        marginLeft: hp('3%'),
    },
    checkbox: {
        fontSize: hp('2.5%'),
        color: '#737373'
    },
})
