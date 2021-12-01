import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import CartItem from "./assets/components/carItem";

export default function App() {
    return (
        <View style={styles.container}>
            <CartItem />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        // alignItems: "center",
        justifyContent: "center"
    }
});
