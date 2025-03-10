import {StyleSheet, Text, View} from 'react-native';

import {useState} from 'react';
import {useThemeColor} from "@/hooks/useThemeColor";


const PlaceholderImage = require('@/assets/images/favicon.png');

export default function Index() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Index screen</Text>
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
