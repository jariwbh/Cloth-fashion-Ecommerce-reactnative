import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { getLocaladdtocardlist } from '../../Helpers/LocalAddTOcart'

export default function MenuBarIcon(props) {
    const [cartnumber, setCount] = useState(0);
    async function getLocaladdtocard() {
        let localAddtocardlists = await getLocaladdtocardlist();
        setCount(localAddtocardlists.length);
    };

    useEffect(() => {
        (async () => {
            let localAddtocardlists = await getLocaladdtocardlist();
            setCount(localAddtocardlists.length);
        })();
    }, [cartnumber])

    getLocaladdtocard()
    console.log('cart', cartnumber)
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



