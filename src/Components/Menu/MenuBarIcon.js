import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export default function MenuBarIcon() {
    return (
        <View style={{ flexDirection: "row", padding: 20 }}>
            <TouchableOpacity onPress={() => { }}>
                <SimpleLineIcons name="bag" size={27} color="#707070" style={{ padding: 5 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { }}>
                <SimpleLineIcons name="bell" size={27} color="#707070" style={{ padding: 5 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { }}>
                <SimpleLineIcons name="settings" size={27} color="#707070" style={{ padding: 5 }} />
            </TouchableOpacity>
        </View>
    )
}
