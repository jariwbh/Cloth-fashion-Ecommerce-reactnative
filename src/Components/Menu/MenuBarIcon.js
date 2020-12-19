import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export default function MenuBarIcon(props) {
    return (
        <View style={{ flexDirection: "row", marginRight: 20, backgroundColor: '#FFFFFF' }}>
            <TouchableOpacity onPress={props.onPress}>
                <SimpleLineIcons name="bag" size={27} color="#707070" style={{ padding: 5 }} />
            </TouchableOpacity>
        </View>
    )
}
