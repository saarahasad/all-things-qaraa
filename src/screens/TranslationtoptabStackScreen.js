import React from 'react';
import { View, StatusBar, StyleSheet, Text, Button, Dimensions } from 'react-native';
import Header from '../components/Header';
import SafeAreaView from 'react-native-safe-area-view';
import { useIsFocused } from '@react-navigation/native';
import TranslationDetailsScreen from './TranslationDetailsScreen';
import WordtoWordScreen from './WordtoWordScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BottomSheetContainer from '../components/BottomSheetContainer';

function FocusAwareStatusBar(props) {
    const isFocused = useIsFocused();
    return isFocused ? <StatusBar {...props} /> : null;
}

const SCREEN_WIDTH = Dimensions.get('window').width;

const TranslationtoptabStack = createMaterialTopTabNavigator();

const TranslationtoptabStackScreen = ({ navigation, route }) => {
    console.log("TranslationtoptabStackScreen SCREEN");

    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView style={{ justifyContent: 'center', flex: 1 }}>
                <FocusAwareStatusBar barStyle="light-content" backgroundColor="#1C2E4A" />
                <View style={{height: 100 , backgroundColor:'white'}}>
                    <Header />
                </View>
                <View style={styles.container}>
                    <TranslationtoptabStack.Navigator
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
                        <TranslationtoptabStack.Screen
                            name="Translation"
                            component={TranslationDetailsScreen}
                            options={{ tabBarLabel: 'Translation' }} />
                        <TranslationtoptabStack.Screen
                            name="Word to Word"
                            component={WordtoWordScreen}
                            options={{ tabBarLabel: 'Word-to-Word' }} />
                    </TranslationtoptabStack.Navigator>
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
    },
});

export default TranslationtoptabStackScreen;