import { StyleSheet, TextInput } from 'react-native'
import React from 'react'

const Custom_TextInput = ({ props, inputRef, placeholder, onChangeText }) => {
    return (
        <TextInput
            ref={inputRef}
            style={styles.textinput}
            inputMode='text'
            placeholder={placeholder}
            placeholderTextColor="#A7A7A7"
            onChangeText={onChangeText}
            autoCorrect={false}
            {...props}
        />
    )
}

export default Custom_TextInput

const styles = StyleSheet.create({
    textinput: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: '5%',
        marginBottom: '5%',
        color:'#000'
    },
})