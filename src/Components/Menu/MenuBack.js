import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const MenuBack = (props) => {
    return (
        <TouchableOpacity style={styles.back} onPress={props.onPress}>
            <MaterialIcons name="arrow-back" size={24} color="#000000" style={{ position: 'absolute', }} />
        </TouchableOpacity>
    )
}
export default MenuBack;

const styles = StyleSheet.create({
    back: {
        width: wp('10.5%'),
        height: hp('5.5%'),
        borderRadius: hp('15%'),
        paddingLeft: hp('3%'),
        marginLeft: hp('2%'),
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
        elevation: 5,
    }
})
