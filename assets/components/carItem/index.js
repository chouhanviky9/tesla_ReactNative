import React from "react";
import { View, Text ,ImageBackground} from "react-native";
import styles from './styles';

const CartItem = (props) => {
    return (
        <View styles={styles.carContainer}>
            <ImageBackground source={require("../../ModelX.jpeg")} style={styles.image} />
            <View style={styles.titles}>
                <Text style={styles.title}>Model S</Text>
                <Text style={styles.subtitle}>Starting at rs 3000</Text>
            </View>
        </View>
    );
};

export default CartItem;
