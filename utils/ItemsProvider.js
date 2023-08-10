import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';

const ItemsContext = createContext([]);

export const ItemsProvider = ({ children }) => {
    const [breakfasts, setBreakfasts] = useState([]);
    const [lunchs, setLunchs] = useState([]);
    const [dinners, setDinners] = useState([]);
    const [snacks, setSnacks] = useState([]);
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        const getFoods = async () => {
            try {
                const value = await AsyncStorage.getItem('breakfasts');
                if (value !== null) {
                    setBreakfasts(JSON.parse(value));
                } else {
                    setBreakfasts([]);
                }
            } catch (error) {
                console.log('Hata:', error);
            }

            try {
                const value = await AsyncStorage.getItem('lunchs');
                if (value !== null) {
                    setLunchs(JSON.parse(value));
                } else {
                    setLunchs([]);
                }
            } catch (error) {
                console.log('Hata:', error);
            }

            try {
                const value = await AsyncStorage.getItem('dinners');
                if (value !== null) {
                    setDinners(JSON.parse(value));
                } else {
                    setDinners([]);
                }
            } catch (error) {
                console.log('Hata:', error);
            }

            try {
                const value = await AsyncStorage.getItem('snacks');
                if (value !== null) {
                    setSnacks(JSON.parse(value));
                } else {
                    setSnacks([]);
                }
            } catch (error) {
                console.log('Hata:', error);
            }

            try {
                const value = await AsyncStorage.getItem('activities');
                if (value !== null) {
                    setActivities(JSON.parse(value));
                } else {
                    setActivities([]);
                }
            } catch (error) {
                console.log('Hata:', error);
            }
        };

        getFoods();
    }, []);

    return (
        <ItemsContext.Provider value={{ breakfasts, setBreakfasts, lunchs, setLunchs, dinners, setDinners, snacks, setSnacks, activities, setActivities }}>
            {children}
        </ItemsContext.Provider>
    );
};

export const useFoods = () => {
    const context = useContext(ItemsContext);
    if (context === undefined) {
        throw new Error('useFoods must be used within a ItemsProvider');
    }
    return context;
};