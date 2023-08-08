import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const UserTotalCalorie = () => {
    return (
        <View style={{ flexDirection: "row", paddingHorizontal: 10, paddingVertical: 20, alignItems: "center" }}>
            <Text style={{ color: "red", fontSize: 22 }}>2950</Text>
            <Text style={{ color: "#414141", fontSize: 22 }}>/2000 kcal</Text>
        </View>
    )
}

export default UserTotalCalorie

const styles = StyleSheet.create({})