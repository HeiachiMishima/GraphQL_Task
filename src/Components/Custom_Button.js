import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Custom_Button = ({Title}) => {
    return (
        <View style={styles.Main_View}>
            <Text style={styles.Text_View}>{Title}</Text>
        </View>
    )
}

export default Custom_Button

const styles = StyleSheet.create({
    Main_View: { backgroundColor: '#543cdc', padding: '5%', width: '100%', alignItems: 'center', borderRadius: 10 },
    Text_View: { color: 'white' }

})