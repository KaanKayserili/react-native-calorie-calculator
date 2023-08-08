import { ScrollView, StyleSheet, Text, View, Dimensions, TouchableWithoutFeedback, Modal } from 'react-native'
import React, { useState } from 'react'

import Header from "../components/Header"
import SearchCalorie from "../components/SearchCalorie"
import UserTotalCalorie from "../components/UserTotalCalorie"
import UserAte from "../components/UserAte"
import Button from '../components/Button';

const { width, height } = Dimensions.get("screen")

const MainPage = ({ navigation }) => {
    const [openSearch, setOpenSearch] = useState(false);

    return (
        <View style={styles.container}>
            <Modal visible={openSearch} transparent animationType={"slide"}>
                <TouchableWithoutFeedback onPress={() => setOpenSearch(false)}>
                    <View style={{ flex: 1, position: "absolute", width: width, height: height }} />
                </TouchableWithoutFeedback>
                <SearchCalorie />
            </Modal>

            <Header title={"Main"} />

            <ScrollView>
                <UserTotalCalorie />
                <Button width={width * 0.5} marginLeft={width * 0.25} handleSubmit={() => setOpenSearch(true)} text={"Add"} />
                <UserAte />
            </ScrollView>
        </View>
    )
}

export default MainPage

const styles = StyleSheet.create({
    container: {
        padding: 10,
        paddingTop: 40,
    }
})