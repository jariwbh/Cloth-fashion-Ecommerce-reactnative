import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export default function MenuBarIcon(props) {
    const cartnumber = 0
    return (
        <View style={{ flexDirection: "row", marginRight: 20, backgroundColor: '#FFFFFF' }}>
            <TouchableOpacity onPress={props.onPress}>
                {cartnumber > 0 &&
                    <View style={{
                        position: 'absolute', height: 30, width: 30, borderRadius: 15, backgroundColor: 'pink', left: 20, bottom: 15, alignItems: 'center', justifyContent: 'center', zIndex: 2000,

                    }}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>{cartnumber}</Text>
                    </View>
                }
                <SimpleLineIcons name="bag" size={27} color="#707070" style={{ padding: 5 }} />
            </TouchableOpacity>
        </View>
    )
}

// getLocaladdtocardlist() {
//     let localAddtocardlists = await getLocaladdtocardlist();
//     this.setState({ cartlist: localAddtocardlists });
// };
