import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.about}>
                <Text style={{ fontSize: hp('2.5%'), fontWeight: "bold" }}> ONLINE SHOPPING MADE EASY AT </Text>
                <Text style={{ fontSize: hp('2.5%'), fontWeight: "bold" }}>Cloth-Fashion</Text>
            </View>
            <View style={styles.abouttext}>
                <Text style={{ fontSize: hp('2%'), fontWeight: "bold", color: '#808B96', marginLeft: hp('5%'), marginRight: hp('5%') }}>
                    If you would like to experience the best of
                    online shopping for men, women and kids in India,
                    you are at the right place.
                    Cloth-Fashion is the ultimate destination for fashion and
                    lifestyle, being host to a wide array of merchandise
                    including clothing.
                </Text>
                <Text style={{ fontSize: hp('2%'), fontWeight: "bold", color: '#808B96', marginLeft: hp('5%'), marginRight: hp('5%'), marginTop: hp('1%') }}>
                    It is time to redefine your style statement with
                    our treasure-trove of trendy items.
                    Our online store brings you the latest in designer
                    products straight out of fashion houses.
                    You can shop online at Cloth-Fashion from the comfort
                    of your home and get your favourites delivered
                    right to your doorstep.
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    about: {

        marginTop: hp('10%'),
        justifyContent: 'center',
        alignItems: 'center'
    },
    abouttext: {
        marginTop: hp('5%'),
        justifyContent: 'center',
        alignItems: 'center'
    },
})