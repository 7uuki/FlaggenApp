import { Text, View, StyleSheet } from 'react-native';
import {Link} from "expo-router";
import {useThemeColor} from "@/hooks/useThemeColor";


export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>About screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: useThemeColor('background'),
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: useThemeColor('font'),
    }
});
