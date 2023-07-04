import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export default function MenuSectionItem({ title }) {
    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.menuBtn}>
            <Text>{ title }</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    menuBtn: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 15,
        backgroundColor: "#E9E9E9",
    },
});