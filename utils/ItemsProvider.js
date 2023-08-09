import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ItemsContext = createContext({});

export const ItemsProvider = ({ children }) => {
    const [foods, setFoods] = useState({});

    useEffect(() => {
        const getFoods = async () => {
            try {
                const value = await AsyncStorage.getItem('foods');
                if (value !== null) {
                    // If data exists in AsyncStorage, parse it to convert back to an array
                    setFoods(JSON.parse(value));
                } else {
                    // If no data exists in AsyncStorage, initialize items as an empty array
                    setFoods([]);
                }
            } catch (error) {
                console.log('Hata:', error);
            }
        };

        getFoods();
    }, []);

    return (
        <ItemsContext.Provider value={{ foods, setFoods }}>
            {children}
        </ItemsContext.Provider>
    );
};

export const useFoods = () => {
    const context = useContext(ItemsContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a ItemsProvider');
    }
    return context;
};