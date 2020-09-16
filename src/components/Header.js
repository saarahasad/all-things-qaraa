import React, { useContext } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import CircularButton from './CircularButton';
import { Context as TranslationContext } from '../context/TranslationContext';

const SCREEN_WIDTH = Dimensions.get('window').width;

const Header = () => {
    const { state } = useContext(TranslationContext);
    console.log('HEADER')
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: 'white', marginBottom: -10 }}>
            <View style={styles.header}>
            </View>
            <Text style={styles.headerText}>Surah {state.nav_surah_title}</Text>
            <CircularButton />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#1C2E4A',
        height: SCREEN_WIDTH + 100,
        width: SCREEN_WIDTH + 120,
        borderRadius: SCREEN_WIDTH + 30 / 2,
        marginTop: -SCREEN_WIDTH - 15,
        shadowOffset: { width: 2, height: 2, },
        shadowColor: 'black',
        shadowOpacity: 0.25,
    },
    headerText: {
        bottom: 0,
        color: 'white',
        marginTop: -60,
        fontSize: 15
    }
});

export default Header;