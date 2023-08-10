import { StatusBar } from 'expo-status-bar'

import React, { useState } from 'react'
import { Dimensions, FlatList, Modal, StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import Button from '../components/Button'
import Header from '../components/Header'
import { NewTextInput } from '../components/TextInput'
import { Loading } from '../components/loading'

import { fetchFoodData } from '../service/api'

import english from '../assets/languages/english'
import turkish from '../assets/languages/turkish'

import { useLanguage } from '../utils/LanguageProvider'
import { useFoods } from '../utils/ItemsProvider'

const { width } = Dimensions.get("screen")

const SearchCalorie = ({ navigation, route }) => {
    const { title } = route.params;

    const { breakfasts, setBreakfasts, lunchs, setLunchs, dinners, setDinners, snacks, setSnacks, activities, setActivities } = useFoods();

    const { language } = useLanguage();
    const lingo = language === "tr" ? turkish : english;

    const [isLoading, setIsLoading] = useState(false);
    const [food, setFood] = useState("");
    const [searchedFoods, setSearchedFoods] = useState({});

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

            <Header title={("Add " + title)} handle={handle} name={"close"} />

            <View style={{ marginVertical: 10, }} />

            <View style={{ flexDirection: "row", marginBottom: 20, }}>
                <NewTextInput value={food} onChangeText={(food) => setFood(food)} placeholder={"Yemeğin Adını Giriniz"} width={width * 0.55} marginLeft={width * 0.05} />
                <Button text={"OK"} handleSubmit={add} width={width * 0.3} marginLeft={width * 0.05} />
            </View>

            <View style={styles.scroll}>
                <FlatList
                    data={searchedFoods?.foods}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <Text style={{ textAlign: "center", color: "white", fontSize: 18, fontWeight: "700", }}>Öğe Bulunamadı</Text>
                    )}
                    renderItem={({ item }) => item?.brandName !== "" && item?.foodNutrients[2]?.value ? (
                        <TouchableOpacity style={{ backgroundColor: "rgba(255,255,255,0.1)", marginBottom: 10, borderRadius: 15, padding: 15, justifyContent: "center" }}
                            onPress={() => { navigation.navigate("Details") }}>
                            <Text style={{ width: width * 0.3, fontSize: 18, color: "white", fontWeight: "700", }}>{item?.brandName}</Text>
                            <View style={{ flexDirection: "row", marginBottom: 20, justifyContent: "space-around", alignItems: "center" }}>
                                <Text style={{ width: width * 0.3, fontSize: 14, color: "white", fontWeight: "600", }}>{item?.description} - 100 g</Text>
                                <View style={{ width: width * 0.3, flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" }}>
                                    <Text style={{ fontSize: 14, textAlign: "center", color: "white", fontWeight: "600", width: width * 0.2 }}>{item?.foodNutrients[2]?.value + " kcal"}</Text>
                                    <TouchableOpacity style={{ borderWidth: 2, borderColor: "white", borderRadius: 25, width: width * 0.08, height: width * 0.08, alignItems: "center", justifyContent: "center" }}
                                        onPress={() => {
                                            let updatedFoods;

                                            switch (title) {
                                                case "Breakfast":
                                                    updatedFoods = { ...breakfasts };
                                                    if (updatedFoods[item?.fdcId]) {
                                                        delete updatedFoods[item?.fdcId];
                                                    } else {
                                                        updatedFoods[item?.fdcId] = item;
                                                    }
                                                    setBreakfasts(updatedFoods);
                                                    break;
                                                case "Lunch":
                                                    updatedFoods = { ...lunchs };
                                                    if (updatedFoods[item?.fdcId]) {
                                                        delete updatedFoods[item?.fdcId];
                                                    } else {
                                                        updatedFoods[item?.fdcId] = item;
                                                    }
                                                    setLunchs(updatedFoods);
                                                    break;
                                                case "Dinner":
                                                    updatedFoods = { ...dinners };
                                                    if (updatedFoods[item?.fdcId]) {
                                                        delete updatedFoods[item?.fdcId];
                                                    } else {
                                                        updatedFoods[item?.fdcId] = item;
                                                    }
                                                    setDinners(updatedFoods);
                                                    break;
                                                case "Snack":
                                                    updatedFoods = { ...snacks };
                                                    if (updatedFoods[item?.fdcId]) {
                                                        delete updatedFoods[item?.fdcId];
                                                    } else {
                                                        updatedFoods[item?.fdcId] = item;
                                                    }
                                                    setSnacks(updatedFoods);
                                                    break;
                                                default:
                                                    updatedFoods = { ...activities };
                                                    if (updatedFoods[item?.fdcId]) {
                                                        delete updatedFoods[item?.fdcId];
                                                    } else {
                                                        updatedFoods[item?.fdcId] = item;
                                                    }
                                                    setActivities(updatedFoods);
                                            }
                                            console.log(updatedFoods);
                                        }}
                                    >
                                        <View style={[styles.circle,
                                        title === "Breakfast" && breakfasts.hasOwnProperty(item?.fdcId) ? { backgroundColor: "white", borderRadius: width * 0.08, } :
                                            title === "Lunch" && lunchs.hasOwnProperty(item?.fdcId) ? { backgroundColor: "white", borderRadius: width * 0.08, } :
                                                title === "Dinner" && dinners.hasOwnProperty(item?.fdcId) ? { backgroundColor: "white", borderRadius: width * 0.08, } :
                                                    title === "Snack" && snacks.hasOwnProperty(item?.fdcId) ? { backgroundColor: "white", borderRadius: width * 0.08, } :
                                                        title === "Activity" && activities.hasOwnProperty(item?.fdcId) ? { backgroundColor: "white", borderRadius: width * 0.08, } : {}
                                        ]}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ) : null}
                />

            </View>

            <StatusBar translucent={true} style='light' animated={true} />
        </View >
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
    },
    circle: {
        width: width * 0.05,
        height: width * 0.05,
        borderRadius: width * 0.025,
    },
})