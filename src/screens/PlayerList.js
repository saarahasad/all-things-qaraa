import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, Text, StatusBar, TouchableOpacity, TouchableHighlight, FlatList, TextInput, Picker } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { useNavigation } from '@react-navigation/native';
import { EvilIcons } from '@expo/vector-icons';
import { AsyncStorage } from 'react-native';
import { Context as PlayerContext } from '../context/PlayerContext';
import * as Surah from '../data/Surah.json';
import SurahComponent from '../components/SurahComponent';
import * as PageDetails from '../data/PageDetails.json';
import { useFocusEffect } from '@react-navigation/native';

const PlayerList = ({ route }) => {
    const { state, getValues, updatePage, updateAyah, updateSurah, updateSurahStart, updateSurahEnd, updateFromAyah, updateAyatEnd, updatePageStart, updatePageEnd, updateCurrentPlaying } = useContext(PlayerContext);
    const { type } = route.params;
    const navigation = useNavigation();
    const [selectedSurahStart, setSelectedSurahStart] = useState(state.surahstart);
    const [selectedSurahEnd, setSelectedSurahEnd] = useState(state.surahend);
    const [selectedSurah, setSelectedSurah] = useState(state.page);
    useFocusEffect(
        React.useCallback(() => {
            console.log('PLAYERLIST Screen')
            
        }, [])
    );


    const pages = [];
    for (var x = 1; x <= 604; x++) {
        pages.push({ id: x.toString(), name: x.toString() });
    }

    const pagesEnd = [];
    for (var x = state.pagestart; x <= 604; x++) {
        pagesEnd.push({ id: x.toString(), name: x.toString() });
    }

    /* Surah Start Range Logic*/
    var surahTitleStart = [];
    var ayahCountStart = 0;
    var ayahCountListStart = [];

    for (var x = 0; x < Surah.ListofSurahs.length; x++) {
        if (selectedSurahStart == Surah.ListofSurahs[x].title) {
            ayahCountStart = Surah.ListofSurahs[x].count;
        }
        surahTitleStart.push({ id: (x + 1).toString(), name: Surah.ListofSurahs[x].title });
    }
    for (var x = 1; x <= ayahCountStart; x++) {
        ayahCountListStart.push({ id: x.toString(), name: x.toString() });
    }
    /* Surah End Range Logic*/
    var surahTitleEnd = [];
    var ayahCountEnd = 0;
    var ayahCountListEnd = [];
    var next_surah = selectedSurahEnd;
    var next_surah_index = 0;
    var next_ayah = '1';

    if (selectedSurahStart == 'An-Nas' && state.fromayat == '6') {
        next_surah = selectedSurahStart;
        next_ayah = state.fromayat;
        next_surah_index = 114

    } else {
        for (var x = 0; x < Surah.ListofSurahs.length; x++) {
            if (selectedSurahStart == Surah.ListofSurahs[x].title) {
                if (selectedSurahStart == selectedSurahEnd && state.fromayat == Surah.ListofSurahs[x].count) {
                    next_surah_index = x + 1;
                    next_surah = Surah.ListofSurahs[x + 1].title;
                    next_ayah = '1';
                    break
                }
                else if (selectedSurahStart == selectedSurahEnd) {
                    next_surah_index = x;
                    next_ayah = parseInt(state.fromayat) + 1;
                    next_ayah = next_ayah.toString()
                    break
                }
                else {
                    next_surah_index = x;
                    next_ayah = '1';
                    break
                }
            }
        }
    }


    for (var x = next_surah_index; x < Surah.ListofSurahs.length; x++) {
        if (next_surah == Surah.ListofSurahs[x].title) {
            ayahCountEnd = Surah.ListofSurahs[x].count;
        }
        surahTitleEnd.push({ id: (x + 1).toString(), name: Surah.ListofSurahs[x].title });
    }

    for (var x = parseInt(next_ayah); x <= ayahCountEnd; x++) {
        ayahCountListEnd.push({ id: x.toString(), name: x.toString() });
    }


    /* Surah No Range Logic*/
    var surahTitle = [];
    var ayahCountList = [];
    var ayahCount = 0;
    for (var x = 0; x < Surah.ListofSurahs.length; x++) {
        if (state.surah === Surah.ListofSurahs[x].title) {
            ayahCount = Surah.ListofSurahs[x].count;
        }
        surahTitle.push({ id: (x + 1).toString(), name: Surah.ListofSurahs[x].title });
    }
    for (var x = 1; x <= ayahCount; x++) {
        ayahCountList.push({ id: x.toString(), name: x.toString() });
    }
    const updateSurahAyahFromPage = (page) => {
        var surah = '';
        var surah_index = '';
        var ayah = '';
        for (var x = 0; x < PageDetails.data.length; x++) {
            surah_index = PageDetails.data[x].number;
            for (var y = 0; y < PageDetails.data[x].ayahs.length; y++) {
                if (PageDetails.data[x].ayahs[y].page == page) {
                    ayah = PageDetails.data[x].ayahs[y].numberInSurah;
                    for (var x = 0; x < Surah.ListofSurahs.length; x++) {
                        if (parseInt(surah_index) == parseInt(Surah.ListofSurahs[x].index)) {
                            surah = Surah.ListofSurahs[x].title;
                            break
                        }
                    }
                    return { "surah": surah, "ayah": ayah };
                }
            }
        }
        return { "surah": surah_index, "ayah": ayah };
    }
    const updatePageFromSurahAyah = (surah, ayah) => {
        var page = '';
        var surah_index = '';
        for (var x = 0; x < Surah.ListofSurahs.length; x++) {
            if (surah == Surah.ListofSurahs[x].title) {
                surah_index = Surah.ListofSurahs[x].index;
                break
            }
        }
        for (var x = 0; x < PageDetails.data.length; x++) {
            if (parseInt(surah_index) == parseInt(PageDetails.data[x].number)) {
                for (var y = 0; y < PageDetails.data[x].ayahs.length; y++) {
                    if (PageDetails.data[x].ayahs[y].numberInSurah == ayah) {
                        page = PageDetails.data[x].ayahs[y].page;
                        return page;
                    }
                }
            }
        }
        return page;
    }


    const _storeData = async (surah, ayah, page, reciter) => {
        try {
            await AsyncStorage.setItem(
                'qari',
                JSON.stringify(reciter)
            );
            await AsyncStorage.setItem(
                'surah',
                JSON.stringify(surah)
            );
            await AsyncStorage.setItem(
                'ayah',
                JSON.stringify(ayah)
            );
            await AsyncStorage.setItem(
                'page',
                JSON.stringify(page)
            );


        } catch (error) {
            // Error saving data
            console.log(error)
        }
    };

    useEffect(() => {
        setSelectedSurahStart(state.surahstart)
        setSelectedSurahEnd(state.surahend)
        //    setSelectedSurahIndex(state.fromindex)
        getValues();
        navigation.addListener('didFocus', () => {
            getValues();
        })
    }, []);



    const Item = ({ item, onPress, style }) => (
        <TouchableOpacity onPress={onPress} style={{ alignItems: 'center', padding: 20, borderBottomColor: 'white', borderBottomWidth: 2 }}>
            <Text >{item.id}</Text>
        </TouchableOpacity>
    );

    const callbackSurahStart = (index, surah) => {
        updateSurahStart(surah);
        setSelectedSurahStart(surah);
        updateFromAyah('1');
        const page = updatePageFromSurahAyah(surah, '1');
        updatePageStart(page);
        updateCurrentPlaying(surah, '1', page);
        _storeData(surah, '1', page, state.reciter);
    };

    const callbackSurahEnd = (index, sƒßurah) => {
        updateSurahEnd(surah);
        setSelectedSurahEnd(surah);
        updateAyatEnd('1');
        const page = updatePageFromSurahAyah(surah, '1');
        updatePageEnd(page);
    };

    const callbackSurah = (index, surah) => {
        updateSurah(surah);
        setSelectedSurah(surah);
        updateAyah('1');
        const page = updatePageFromSurahAyah(surah, '1');
        updatePage(page);
        updateCurrentPlaying(surah, '1', page);
        _storeData(surah, '1', page, state.reciter);
    };

    const callbackAyah = (index, ayah) => {
        updateAyah(ayah);
        const page = updatePageFromSurahAyah(state.surah, ayah);
        updatePage(page);
        updateCurrentPlaying(state.surah, ayah, page);
        _storeData(state.surah, ayah, page, state.reciter);
    };
    const callbackAyahStart = (index, ayah) => {
        updateFromAyah(ayah);
        const page = updatePageFromSurahAyah(selectedSurahStart, ayah);
        updatePageStart(page);
        updateCurrentPlaying(selectedSurahStart, ayah, page);
        _storeData(selectedSurahStart, ayah, page, state.reciter);
    };

    const callbackAyahEnd = (index, ayah) => {
        updateAyatEnd(ayah)
        const page = updatePageFromSurahAyah(selectedSurahEnd, ayah);
        updatePageEnd(page);
    };

    const callbackPage = (index, page) => {
        updatePage(page);
        const obj = updateSurahAyahFromPage(page)
        updateSurah(obj.surah);
        setSelectedSurah(obj.surah);
        updateAyah(obj.ayah);
        updateCurrentPlaying(obj.surah, obj.ayah, page);
        _storeData(obj.surah, obj.ayah, page, state.reciter);
    };

    const callbackPageStart = (index, page) => {
        updatePageStart(page);
        const obj = updateSurahAyahFromPage(page)
        updateSurahStart(obj.surah);
        setSelectedSurahStart(obj.surah);
        updateFromAyah(obj.ayah);
        updateCurrentPlaying(obj.surah, obj.ayah, page);
        _storeData(obj.surah, obj.ayah, page, state.reciter);
    };

    const callbackPageEnd = (index, page) => {
        updatePageEnd(page);
        const obj = updateSurahAyahFromPage(page)
        updateSurahEnd(obj.surah);
        setSelectedSurahEnd(obj.surah);
        updateAyatEnd(obj.ayah);
    };

    return (
        <SafeAreaView style={{ backgroundColor: 'white', justifyContent: 'center', flexDirection: 'column', flex: 1, justifyContent: 'center' }}>
            <View style={{ padding: 25, backgroundColor: 'white', alignItems: 'center', borderBottomColor: '#eeeeee', borderBottomWidth: 1 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 15, fontFamily: 'opensans-regular', }}>{type == 'page' ? "Select a Page" : "Select a Surah and Ayah"}
                </Text>
            </View>
            <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 25, paddingVertical: 1, backgroundColor: '#f5f5f5' }}>
                <TouchableOpacity style={{ flex: 1, alignItems: 'flex-start' }} onPress={() => navigation.goBack()}>
                    <EvilIcons name="close" size={40} color="black" />
                </TouchableOpacity>
                <View style={{ flex: 6, justifyContent: 'center', alignItems: 'center', }}>
                    <Text style={{ textAlign: 'right', fontSize: 15, fontFamily: 'opensans-regular', }}>
                        Now Listening:
                    <Text style={{ fontFamily: 'opensans-bold', fontWeight: 'bold', fontSize: 15 }}>
                            {
                                type != 'page' ?
                                    (
                                        type == 'from_surah' ?
                                            " " + state.surahstart + " " + state.fromayat
                                            :

                                            type == 'surah_end' ?
                                                " " + state.surahend + " " + state.ayatend
                                                :
                                                type == 'page_start' ?
                                                    " " + state.pagestart
                                                    :
                                                    type == 'page_end' ?
                                                        " " + state.pageend
                                                        :
                                                        " " + state.surah + " " + state.ayah
                                    )
                                    :
                                    " " + state.page
                            }
                        </Text>
                    </Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                </View>
            </View>
            {
                type != 'page' ?
                    (
                        type == 'from_surah' ?
                            <View style={styles.outerContainer}>
                                <View style={styles.innerLeftContainer}>
                                    <SurahComponent parentCallback={callbackSurahStart} list={surahTitleStart} type={'Surah'} />
                                </View>
                                <View style={styles.innerRightContainer}>
                                    <SurahComponent parentCallback={callbackAyahStart} key={selectedSurahStart} list={ayahCountListStart} type={'Ayah'} selectedSurah={selectedSurahStart} />
                                </View>
                            </View>

                            :
                            type == 'surah_end' ?
                                <View style={styles.outerContainer}>
                                    <View style={styles.innerLeftContainer}>
                                        <SurahComponent parentCallback={callbackSurahEnd} list={surahTitleEnd} type={'Surah'} />
                                    </View>
                                    <View style={styles.innerRightContainer}>
                                        <SurahComponent parentCallback={callbackAyahEnd} key={selectedSurahEnd} list={ayahCountListEnd} type={'Ayah'} selectedSurah={selectedSurahEnd} />
                                    </View>
                                </View>
                                :
                                type == 'page_start' ?
                                    <View style={styles.outerContainer}>
                                        <View style={styles.innerLeftContainer}>
                                            <SurahComponent parentCallback={callbackPageStart} list={pages} type={'Page'} />
                                        </View>
                                    </View>
                                    :
                                    type == 'page_end' ?
                                        <View style={styles.outerContainer}>
                                            <View style={styles.innerLeftContainer}>
                                                <SurahComponent parentCallback={callbackPageEnd} list={pagesEnd} type={'Page'} />
                                            </View>
                                        </View>
                                        :
                                        <View style={styles.outerContainer}>
                                            <View style={styles.innerLeftContainer}>
                                                <SurahComponent parentCallback={callbackSurah} list={surahTitle} type={'Surah'} />
                                            </View>
                                            <View style={styles.innerRightContainer}>
                                                <SurahComponent parentCallback={callbackAyah} key={selectedSurah} list={ayahCountList} type={'Ayah'} selectedSurah={selectedSurah} />
                                            </View>
                                        </View>
                    )
                    :
                    <View style={styles.outerContainer}>
                        <View style={styles.innerLeftContainer}>
                            <SurahComponent parentCallback={callbackPage} list={pages} type={'Page'} />
                        </View>
                    </View>
            }
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    outerContainer: {
        flex: 10,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    innerLeftContainer: {
        flexDirection: 'column',
        flex: 6.5,
        justifyContent: 'center',
        backgroundColor: 'white',
        marginRight: 10
    },
    innerRightContainer:
    {
        flexDirection: 'column',
        flex: 3.5,
        justifyContent: 'center',
        backgroundColor: 'white'
    }


});

export default PlayerList; 