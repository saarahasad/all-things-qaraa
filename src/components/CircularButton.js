import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { View, StyleSheet, TouchableHighlight, Dimensions } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const SCREEN_WIDTH = Dimensions.get('window').width;

const CircularButton = () => {
    const navigation = useNavigation();

    return (
        <View style={{ width: SCREEN_WIDTH * 3.5 / 4, flex: 1, flexDirection: 'row', marginTop: -30, justifyContent: 'space-between', marginBottom: 10, paddingBottom: 0 }}>
            <TouchableHighlight
                style={[styles.circle, {
                    backgroundColor: '#C70D3A',
                    alignItems: 'center',
                    justifyContent: 'center',
                }]}
                underlayColor="#9f0a2e"
                
                onPress={() => navigation.navigate('ReciterList')}
            >
               <MaterialIcons name="keyboard-voice" size={40} color="white" />
            </TouchableHighlight>
            <TouchableHighlight
                style={[styles.circle, {
                    backgroundColor: '#23395D',
                    alignItems: 'center',
                    justifyContent: 'center'
                }]}
                underlayColor="#1C2E4A"
                onPress={() => navigation.navigate('SurahIndex')}
                >
                     <EvilIcons name="navicon" size={45} color="white" />
                
            </TouchableHighlight>
        </View>

    );
};

const styles = StyleSheet.create({
    circle: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        shadowOffset: { width: 2, height: 2, },
        shadowColor: 'black',
        shadowOpacity: 0.3,
        elevation: 20
    },

});

export default CircularButton;