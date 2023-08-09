import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import darkColors from '../assets/colors/darkColors';
import lightColors from '../assets/colors/lightColors';
import english from '../assets/languages/english';
import turkish from '../assets/languages/turkish';

import { useLanguage } from '../utils/LanguageProvider';
import { useTheme } from '../utils/ThemeProvider';

const Button = (props) => {

    const { language } = useLanguage();
    const lingo = language === "tr" ? turkish : english;

    const { isDarkMode } = useTheme();
    const theme = isDarkMode === "true" ? darkColors : lightColors;

    return (
        <TouchableOpacity style={[styles.button, { width: props.width, marginLeft: props.marginLeft, }]} onPress={props.handleSubmit}>
            <Text style={[styles.buttonText, { fontSize: 20 }]}>{props.text}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 15,
        backgroundColor: "rgba(255,255,255,0.1)",
        justifyContent: "center",
    },
    buttonText: {
        fontWeight: "500",
        textAlign: "center",
        color: "white",
    },
})