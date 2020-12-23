import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function SearchIcon(props) {
    return (
        <View style={{ flexDirection: "row", marginRight: 10, backgroundColor: '#FFFFFF' }}>
            <TouchableOpacity onPress={props.onPress}>
                <AntDesign name="search1" size={27} color="#707070" style={{ padding: 5 }} />
            </TouchableOpacity>
        </View>
    )
}
