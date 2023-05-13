import { View, ActivityIndicator, } from 'react-native'
import React from 'react'


export const Loader = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size={'large'} color={'#543cdc'} />
    </View>
)