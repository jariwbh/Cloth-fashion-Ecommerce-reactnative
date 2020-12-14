import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function MyProfileScreen() {
    return (
        <View style={styles.container}>
            <Text>My Profile</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    }
})