import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const renderSearchItem = () => {
    return (
        <View>
            <View>
                <Text>Karpuz</Text>
                <Text>100 g</Text>
            </View>
            <Text>123 kcal</Text>
            <TouchableOpacity>
                <View style={{ backgroundColor: "white", }} />
            </TouchableOpacity>
        </View>
    )
}

export default renderSearchItem

const styles = StyleSheet.create({})