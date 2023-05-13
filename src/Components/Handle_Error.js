import { View, Text } from 'react-native'
import React from 'react'


export const HandleError = ({error}) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginHorizontal:'5%' }}>
        <Text style={{color:'red', fontSize:20}} >{error?.message}</Text>
    </View>
)