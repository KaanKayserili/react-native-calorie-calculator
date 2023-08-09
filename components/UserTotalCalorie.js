import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const UserTotalCalorie = () => {
    return (
        <View style={styles.container}>
            <Text style={[styles.text, { color: "#DD0000" }]}>2950</Text>
            <Text style={[styles.text, { color: "white" }]}>/2000 kcal</Text>
        </View>
    )
}

export default UserTotalCalorie

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingVertical: 20,
        alignItems: "center",
        backgroundColor: "rgba(255,255,255,0.1)",
        borderRadius: 15,
        width: "95%",
        marginLeft: "2.5%"
    },
    text: { fontSize: 22, fontWeight: "500", },
})