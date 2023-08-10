import { ScrollView, StyleSheet, Text, View, Dimensions, TouchableWithoutFeedback, Modal } from 'react-native'
import React, { useState } from 'react'

import Header from "../components/Header"
import UserTotalCalorie from "../components/UserTotalCalorie"
import UserAte from "../components/UserAte"
import Button from '../components/Button';
import { StatusBar } from 'expo-status-bar'

const { width, height } = Dimensions.get("screen")

const MainPage = ({ navigation }) => {
    const [openSearch, setOpenSearch] = useState(false);

    const handle = () => {
        navigation.navigate("Login");
    }

    return (
        <View style={styles.container}>
            <Header title={"Main"} handle={handle} name={"log-out-outline"} />
            <View style={{ marginVertical: 10, }} />
            <UserTotalCalorie />

            <ScrollView style={styles.scroll}>
                <View style={{ marginVertical: 10, }} />
                <UserAte navigation={navigation} />
            </ScrollView>
            <StatusBar translucent={true} style='light' animated={true} />
        </View>
    )
}

export default MainPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "green",
    },
    scroll: {
        paddingHorizontal: 10,
        marginTop: 20,
    },
})