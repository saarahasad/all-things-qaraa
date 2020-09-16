import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, Text, StatusBar, TouchableOpacity, TouchableHighlight, FlatList, TouchableWithoutFeedback } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { useIsFocused } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { EvilIcons } from '@expo/vector-icons';
import { ListItem } from 'react-native-elements';
import { Context as PlayerContext } from '../context/PlayerContext';
import { reciterTitles as list } from '../data/data';
import { AsyncStorage } from 'react-native';

function FocusAwareStatusBar(props) {
    const isFocused = useIsFocused();
    return isFocused ? <StatusBar {...props} /> : null;
}

const ReciterList = () => {
    const navigation = useNavigation();
    const [selectedId, setSelectedId] = useState(null);
    const { state, getValues, updateReciter } = useContext(PlayerContext);
    console.log('RECITER')

   


    const _storeData = async (reciter) => {
        try {
            console.log('SHJAGSJKDGAW',reciter)
            await AsyncStorage.setItem(
                'qari',
                JSON.stringify(reciter)
            );

        } catch (error) {
            // Error saving data
            console.log(error)
        }
    };


    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#eeeeee" : "white";
        return (
            <TouchableHighlight
                key={item.id}
                onPress={() => { setSelectedId(item.id); updateReciter(item.name);_storeData(item.name);}}
            >
                <ListItem
                    title={item.name}
                    containerStyle={{ paddingLeft: 25, paddingRight: 25, borderBottomColor: 'white', backgroundColor }}
                    leftAvatar={{ source: { uri: item.avatar_url } }}
                    titleStyle={{ fontSize: 15 }}
                    subtitleStyle={{ fontSize: 13 }}
                    bottomDivider
                    chevron
                />
            </TouchableHighlight>);
    }

    return (
        <SafeAreaView style={{ backgroundColor: 'white', justifyContent: 'center', flexDirection: 'column', flex: 1, justifyContent: 'center' }}>
            <FocusAwareStatusBar barStyle='dark-content' backgroundColor='#0E1925' />
            <View style={{ padding: 25, backgroundColor: 'white', alignItems: 'center', borderBottomColor: '#eeeeee', borderBottomWidth: 1 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Now Listening: <Text style={{ fontWeight: 'normal', fontSize: 15 }}> {state.reciter}
                </Text> </Text>
            </View>
            <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', alignItems: 'center', padding: 25, paddingBottom: 0 }}>
                <TouchableOpacity style={{ flex: 1, alignItems: 'flex-start' }} onPress={() => navigation.goBack()}>
                    <EvilIcons name="close" size={40} color="black" />
                </TouchableOpacity>
                <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ textAlign: 'right', fontWeight: 'bold', fontSize: 15 }}>Select a reciter</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                </View>
            </View>
            <View style={{ flexDirection: 'column', flex: 10, justifyContent: 'center' }}>
                <FlatList
                    keyExtractor={(item) => item.id}
                    data={list}
                    renderItem={renderItem}
                    extraData={selectedId}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

});

export default ReciterList;