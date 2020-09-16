import React, { useState } from 'react';
import { View, StatusBar, StyleSheet, Text, Button, Dimensions } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { useIsFocused } from '@react-navigation/native';
import MistakesScreen from './MistakesScreen';
import FavouritesScreen from './FavouritesScreen';
import AudioScreen from './AudioScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BottomSheetContainer from '../components/BottomSheetContainer';

function FocusAwareStatusBar(props) {
    const isFocused = useIsFocused();
    return isFocused ? <StatusBar {...props} /> : null;
}

const ForyoutoptabStack = createMaterialTopTabNavigator();

const ForyoutoptabStackScreen = ({ navigation, route }) => {
    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView style={{ justifyContent: 'center', flex: 1, backgroundColor: 'white' }}>
                <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
                <View style={styles.container}>
                    <ForyoutoptabStack.Navigator
                        tabBarOptions={{
                            labelStyle: {
                                fontSize: 13,
                                fontFamily: 'opensans-regular',
                                textTransform: 'none',
                                maxHeight: 35,
                                marginTop: -12
                            },
                            style: {
                                marginLeft: 30,
                                marginRight: 30,
                                borderWidth: 1,
                                borderRadius: 5,
                                backgroundColor: 'white',
                                maxHeight: 35
                            },
                            activeTintColor: 'white',
                            inactiveTintColor: 'black',
                            inactiveBackgroundColor: 'white',
                            indicatorStyle: {
                                height: null,
                                top: 0,
                                backgroundColor: '#1C2E4A',
                                borderRadius: 3
                            },
                        }}>
                        <ForyoutoptabStack.Screen
                            name="Mistakes"
                            component={MistakesScreen}
                            options={{ tabBarLabel: 'Mistakes' }}
                        />
                        <ForyoutoptabStack.Screen
                            name="Favourites"
                            component={FavouritesScreen}
                            options={{ tabBarLabel: 'Favourites' }}
                        />
                        <ForyoutoptabStack.Screen
                            name="Audios"
                            component={AudioScreen}
                            options={{ tabBarLabel: 'Audios' }}
                        />
                    </ForyoutoptabStack.Navigator>
                </View>
            </SafeAreaView>
            <BottomSheetContainer route={route} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 5,
        backgroundColor: 'white',
        paddingTop: 20
    },
});

export default ForyoutoptabStackScreen;