import React from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

const SplashScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#1C2E4A"/>
            <Text style={styles.heading}>ALL THINGS QA’RAA</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#23395D',
        alignItems: 'center',
        justifyContent: 'center',
       
    },
    heading:{
        color:'white',
        fontSize:20,
        fontFamily:'opensans-regular'
    }
});

export default SplashScreen;