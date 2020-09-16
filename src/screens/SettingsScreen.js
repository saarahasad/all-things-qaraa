import React from 'react';
import { View, StyleSheet, Text,Button } from 'react-native';
import {AuthContext} from '../context/AuthContext';

const SettingsScreen = () => {
    const { signOut } = React.useContext(AuthContext);
    return (
        <View style={styles.container}>
            <Text>SettingsScreen</Text>
            <Button title="Sign Out" onPress={() => signOut()}/>
            
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

export default SettingsScreen;