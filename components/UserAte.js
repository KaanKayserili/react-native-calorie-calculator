import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useFoods } from '../utils/ItemsProvider';

const UserAte = ({ navigation }) => {
    const { breakfasts, lunchs, dinners, snacks, activities } = useFoods();
    return (
        <View style={styles.container}>
            <View style={styles.meal}>
                <TouchableOpacity style={styles.mealTitle} onPress={() => { navigation.navigate("SearchCalorie", { title: "Breakfast" }) }}>
                    <Text style={styles.mealText}>Kahvaltı</Text>
                    <Text style={styles.mealTextCalorie}>833 kcal</Text>
                </TouchableOpacity>
                {breakfasts.map((item, index) => {
                    <Text>item.</Text>
                })}
            </View>

            <View style={styles.meal}>
                <TouchableOpacity style={styles.mealTitle} onPress={() => { navigation.navigate("SearchCalorie", { title: "Lunch" }) }}>
                    <Text style={styles.mealText}>Öğle Yemeği</Text>
                    <Text style={styles.mealTextCalorie}>561 kcal</Text>
                </TouchableOpacity>
                {lunchs.map((item, index) => {

                })}
            </View>

            <View style={styles.meal}>
                <TouchableOpacity style={styles.mealTitle} onPress={() => { navigation.navigate("SearchCalorie", { title: "Dinner" }) }}>
                    <Text style={styles.mealText}>Akşam Yemeği</Text>
                    <Text style={styles.mealTextCalorie}>1201 kcal</Text>
                </TouchableOpacity>
                {dinners.map((item, index) => {

                })}
            </View>

            <View style={styles.meal}>
                <TouchableOpacity style={styles.mealTitle} onPress={() => { navigation.navigate("SearchCalorie", { title: "Snack" }) }}>
                    <Text style={styles.mealText}>Aperatifler/Diğerleri</Text>
                    <Text style={styles.mealTextCalorie}>72 kcal</Text>
                </TouchableOpacity>
                {snacks.map((item, index) => {

                })}
            </View>

            <View style={styles.meal}>
                <TouchableOpacity style={styles.mealTitle} onPress={() => { navigation.navigate("SearchCalorie", { title: "Activity" }) }}>
                    <Text style={styles.mealText}>Spor Aktiviteleri</Text>
                    <Text style={styles.mealTextCalorie}>271 kcal</Text>
                </TouchableOpacity>
                {activities.map((item, index) => {

                })}
            </View>
        </View>
    )
}

export default UserAte

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        padding: 10,
        alignItems: "center",
        backgroundColor: "rgba(255,255,255,0.1)",
        width: "95%",
        marginLeft: "2.5%",
        borderRadius: 15,
    },
    meal: {
        backgroundColor: "rgba(255,255,255,0.05)",
        borderRadius: 15,
        padding: 10,
        marginVertical: 5,
        width: "95%",
        marginLeft: "2.5%",
    },
    mealTitle: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 15,
    },
    mealText: {
        fontWeight: "600",
        fontSize: 20,
        color: "white"
    },
    mealTextCalorie: {
        fontWeight: "600",
        fontSize: 16,
        color: "white"
    },
})