import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function MenuItem({ data, width, onPress }) {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={[styles.menuItem, { width: width }]}>
            <View style={{ gap: 7 }}>
                <Image style={styles.menuItemImage} source={{ uri: data.thumbnail}} />
                <Text style={styles.menuItemPrice}>{ data.price } CFA</Text>
                <Text style={styles.menuItemTitle}>{ data.description }</Text>
                <Text style={styles.menuItemQuantity}>{ data.quantity } pce</Text>
            </View>
            <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={styles.menuItemBtn}>
                <FontAwesome name="plus" color="black" size={16} />
                <Text>Ajouter</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    menuItem: {
        borderRadius: 15,
        padding: 5,
        backgroundColor: "#E9E9E9",
    },
    menuItemImage: {
        width: '100%',
        height: 150,
        borderRadius: 15,
    },
    menuItemPrice: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    menuItemQuantity: {
        fontSize: 11,
        color: '#888'
    },
    menuItemTitle: {
        fontSize: 11
    },
    menuItemBtn: {
        borderRadius: 15,
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 7,
        marginTop: 15,
        gap: 10
    }
});