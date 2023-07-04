import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from "@expo/vector-icons";

export default function RoundedButton({ icon, onPress }) {
    return (
        <View style={styles.favorisBtn}>
            <TouchableOpacity onPress={onPress}>
                <FontAwesome5 size={20} color="#000" name={icon} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    favorisBtn: {
        width: 36,
        height: 36,
        borderRadius: 80,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff"
    },
});