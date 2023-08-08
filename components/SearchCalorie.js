import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Button from './Button'
import { Dimensions } from 'react-native'
import { fetchFoodData } from '../service/api'

const { width } = Dimensions.get("screen")

const SearchCalorie = () => {
    const [food, setFood] = useState("");

    const searchFood = () => {
        if (food !== "") {
            fetchFoodData(food);
        }
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Search and Add</Text>

            <ScrollView>
                <TextInput style={styles.input} value={food} onChangeText={(food) => setFood(food)} />
                <Button text={"Add"} handleSubmit={searchFood} width={width * 0.5} marginLeft={width * 0.25} />
                {

                }
            </ScrollView>
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
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        paddingTop: 20,
    },

    input: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 2,
        borderColor: "gray",
        borderRadius: 40,
        backgroundColor: "white",
        color: "green",
        width: width * 0.7,
        marginLeft: width * 0.15,
        marginVertical: 20,
    }
})