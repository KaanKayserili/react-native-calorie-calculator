import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'

export const Details = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header title={"Details"} handle={() => navigation.navigate("SearchCalorie")} name={"close"} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "green",
    },
})