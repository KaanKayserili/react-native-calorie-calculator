import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Button from './Button'
import { Dimensions } from 'react-native'

const {width}=Dimensions.get("screen")

const SearchCalorie = () => {
    return (
        <View>
            <Text>Search and Add</Text>

            <TextInput />
            <Button text={"Add"} handleSubmit={() => { }} width={width * 0.5} marginLeft={width * 0.25} />
        </View>
    )
}

export default SearchCalorie

const styles = StyleSheet.create({})