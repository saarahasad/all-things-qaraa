import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const WordtoWordScreen = () => {
    return (
        <View  style={styles.container}>
            <Text>WordtoWordScreen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default WordtoWordScreen;