import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'

const Header = ({ title }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Ionicons name='close' size={20} />
            </TouchableOpacity>
            <Text>{title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
        flexDirection: "row",
    },
})