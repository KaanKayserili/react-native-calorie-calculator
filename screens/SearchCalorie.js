import { StatusBar } from 'expo-status-bar'

import React, { useState } from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'

import Button from '../components/Button'
import Header from '../components/Header'
import { NewTextInput } from '../components/TextInput'

import { fetchFoodData } from '../service/api'

import english from '../assets/languages/english'
import turkish from '../assets/languages/turkish'

import { FlatList, Modal } from 'react-native'
import { Loading } from '../components/loading'
import { useLanguage } from '../utils/LanguageProvider'
import { Text } from 'react-native'

const { width } = Dimensions.get("screen")

const SearchCalorie = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [food, setFood] = useState("");
    const [searchedFoods, setSearchedFoods] = useState({});

    const { language } = useLanguage();
    const lingo = language === "tr" ? turkish : english;

    const handle = () => {
        navigation.navigate("MainPage");
    }

    const add = async () => {
        if (food !== "") {
            setIsLoading(true)
            let temp = await fetchFoodData(food);
            setSearchedFoods(temp);
            setIsLoading(false)
        }
    }

    return (
        <View style={styles.container}>
            <Modal visible={isLoading} transparent>
                <Loading />
            </Modal>
            <Header title={"Search and Add"} handle={handle} name={"close"} />

            <View style={{ marginVertical: 10, }} />

            <View style={{ flexDirection: "row", marginBottom: 20, }}>
                <NewTextInput value={food} onChangeText={(food) => setFood(food)} placeholder={"Yemeğin Adını Giriniz"} width={width * 0.55} marginLeft={width * 0.05} />
                <Button text={"OK"} handleSubmit={add} width={width * 0.3} marginLeft={width * 0.05} />
            </View>

            <View style={styles.scroll}>
                <FlatList
                    data={searchedFoods?.foods}
                    keyExtractor={(index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <Text style={{ textAlign: "center" }}>Öğe Bulunamadı</Text>
                    )}
                    renderItem={({ item, index }) => (
                        <Text key={index} style={{ fontSize: 33, marginBottom: 20, }}>{item?.foodNutrients[2]?.value + " kcal"} {}</Text>
                    )}
                />
            </View>

            <StatusBar translucent={true} style='light' animated={true} />
        </View>
    )
}

export default SearchCalorie

const styles = StyleSheet.create({
    container: {
        backgroundColor: "green",
        flex: 1,
        width: width,
    },
    input: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 2,
        borderColor: "gray",
        borderRadius: 40,
        backgroundColor: "white",
        color: "green",
        width: width * 0.5,
        marginLeft: width * 0.05,
        marginVertical: 20,
    },
    scroll: {
        backgroundColor: "rgba(255,255,255,0.1)",
        borderRadius: 15,
        padding: 10,
        width: "90%",
        marginLeft: "5%",
    }
})