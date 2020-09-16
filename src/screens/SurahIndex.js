import React, { useContext } from "react";
import { EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Context as TranslationContext } from '../context/TranslationContext';
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import SurahIndexList from "../components/SurahIndexList";

const SurahIndex = () => {
    const navigation = useNavigation();
    const { updateNavigateSurah } = useContext(TranslationContext);

    const callbackSurahUpdate = (index, translation) => {
        updateNavigateSurah(index, translation);
    }
    
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white', paddingBottom: 50 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 50, marginHorizontal: 30, marginBottom: 30, alignItems: 'center' }}>
                <TouchableOpacity style={{ alignItems: 'flex-start' }} onPress={() => navigation.goBack()}>
                    <EvilIcons name="close" size={50} color="black" />
                </TouchableOpacity>
                <View style={{ flex: 6, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 25, fontFamily: 'opensans-bold', }}>Contents</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}></View>
            </View>

            <SurahIndexList parentCallback={callbackSurahUpdate} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
 
});

export default SurahIndex;