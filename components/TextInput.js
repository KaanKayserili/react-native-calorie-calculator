import React from 'react'
import { TextInput } from 'react-native'

export const NewTextInput = ({ value, onChangeText, placeholder, width, marginLeft }) => {
    return (
        <TextInput
            style={{
                width: width,
                marginLeft: marginLeft,
                padding: 10,
                borderRadius: 15,
                fontSize: 20,
                backgroundColor: "rgba(255,255,255,0.1)",
                color: "white",
            }}
            onChangeText={onChangeText}
            value={value}
            placeholder={placeholder}
            placeholderTextColor={"#abbbbb"}
        />
    )
}