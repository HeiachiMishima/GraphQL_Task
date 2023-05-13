import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Custom_Header() {
    return (
        <View style={styles.Main_Container}>
            <Text style={styles.Header_Text}>Checkins</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Main_Container: {
        backgroundColor: 'white',
        padding:'5%',
        alignItems: 'center',
        justifyContent: 'center'

    },
    Header_Text: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'#000'
    }

})