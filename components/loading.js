import React from 'react'
import { ActivityIndicator, View } from 'react-native'

export const Loading = () => {
    return (
        <View style={{
            flex: 1, alignItems: "center", justifyContent: "center",
        }}>
            <View style={{ backgroundColor: "rgba(255,255,255,1)", padding: 15, borderRadius: 15, }}>
                <ActivityIndicator size="large" color={"green"} />
            </View>
        </View>
    )
}
