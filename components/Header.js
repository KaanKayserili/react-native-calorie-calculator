import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const { width, height } = Dimensions.get("screen")

const Header = ({ title, handle, name }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handle}>
                <Ionicons name={name} size={width * 0.075} color={"white"} />
            </TouchableOpacity>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        width: width,
        alignItems: "center",
        flexDirection: "row",
        height: height * 0.1,
        paddingTop: 10,
        paddingHorizontal: 10,
        
        backgroundColor: "rgba(255,255,255,0.1)",

        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    text: {
        fontSize: width * 0.075,
        fontWeight: "bold",
        marginLeft: 15,
        color: "white",
    }
})