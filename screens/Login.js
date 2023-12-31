import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { useLanguage } from '../utils/LanguageProvider';
import { useUser } from '../utils/UserProvider';

import darkColors from '../assets/colors/darkColors';
import lightColors from '../assets/colors/lightColors';
import english from '../assets/languages/english';
import turkish from '../assets/languages/turkish';

import { Linking } from 'react-native';
import Button from '../components/Button';
import { StatusBar } from 'expo-status-bar';

const { width, height } = Dimensions.get("screen");

const Login = ({ navigation }) => {
    const { user, setUser } = useUser();

    const [isVisiblePassword, setisVisiblePassword] = useState(false);

    const { language } = useLanguage();
    const lingo = language === "tr" ? turkish : english;

    const LoginSchema = Yup.object().shape({
        email: Yup.string().email('Geçerli bir e-posta adresi girin.').required('E-posta adresi zorunludur.'),
        password: Yup.string().min(6, 'Şifre en az 6 karakter olmalıdır.').required('Şifre zorunludur.'),
    });

    const openWebsite = async () => {
        const websiteURL = "https://www.github.com/KaanKayserili";
        Linking.canOpenURL(websiteURL).then((supported) => {
            if (supported) {
                return Linking.openURL(websiteURL);
            } else {
                console.log("error")
            }
        }).catch((error) => console.error("An error occurred: ", error))
    }


    return (
        <Formik

            initialValues={{ email: '', password: '' }}
            validationSchema={LoginSchema}
            onSubmit={(values) => {
                setUser(values);
                navigation.navigate('MainPage');
            }}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <View style={styles.container}>

                    <View>
                        <TouchableOpacity onPress={openWebsite} style={{ alignItems: "center", alignSelf: "center", marginBottom: height * 0.04 }}>
                            <Image source={require("../assets/darkModeLogo.png")} style={styles.logo} />
                        </TouchableOpacity>

                        <Text style={[styles.heading]}>{lingo.AppHeader}</Text>
                    </View>

                    <TextInput
                        style={styles.input}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        placeholder={lingo.PlaceHolderEMail}
                        placeholderTextColor={"#abbbbb"}
                    />
                    {touched.email && errors.email && <Text style={{ marginLeft: "15%", marginTop: - 20, marginBottom: 20, color: "#CCC" }}>{errors.email}</Text>}

                    <View style={[styles.passwordInputContainer, { width: width * 0.75, backgroundColor: "rgba(255,255,255,0.1)", }]}>
                        <TextInput
                            style={[styles.passwordInput, {
                                width: width * 0.75 * 0.775, color: "white",
                            }]}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            placeholder={lingo.PlaceHolderPassword}
                            secureTextEntry={!isVisiblePassword}
                            autoCapitalize={"none"}
                            placeholderTextColor={"#abbbbb"}
                        />
                        <TouchableOpacity style={{ borderRadius: width * 0.1, padding: 5, }} onPress={() => { setisVisiblePassword(prev => !prev) }}>
                            <Ionicons name={isVisiblePassword ? "eye-off-outline" : "eye-outline"} size={20} color={"#DDD"} />
                        </TouchableOpacity>
                    </View>
                    {touched.password && errors.password && <Text style={{ marginLeft: "15%", marginTop: - 20, marginBottom: 20, color: "#CCC", }}>{errors.password}</Text>}

                    <Button handleSubmit={() => { navigation.navigate('MainPage'); }} text={lingo.Login} width={"40%"} marginLeft={"30%"} />

                    <StatusBar translucent={true} style='auto' animated={true} />
                </View>
            )
            }
        </Formik >

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "green",
    },
    logo: {
        width: width * 0.4564,
        height: width * 0.2044,
        resizeMode: 'contain',
        alignSelf: "center",
    },
    heading: {
        fontSize: 26,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
        marginTop: -20,
        color: "white",
    },
    input: {
        width: "75%",
        marginLeft: "12.5%",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 15,
        marginBottom: 20,
        fontSize: 20,
        backgroundColor: "rgba(255,255,255,0.1)",
        color: "white",
    },
    passwordInputContainer: {
        flexDirection: "row",
        marginLeft: "12.5%",
        borderRadius: 15,
        marginBottom: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    passwordInput: {
        fontSize: 20,
        color: "white",
    },
})

export default Login;
