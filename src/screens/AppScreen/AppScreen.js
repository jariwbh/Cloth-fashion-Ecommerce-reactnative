import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function AppScreen() {
    return (
        <View style={styles.container}>
            <Text>App Screen</Text>
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