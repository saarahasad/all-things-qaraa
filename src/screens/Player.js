import { Entypo, Feather, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Slider, CheckBox } from 'react-native-elements';
import SmallDownButton from '../components/SmallDownButton';
import { Context as PlayerContext } from '../context/PlayerContext';
const { width } = Dimensions.get("window");
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Player = ({ storedReciter, storedSurah, storedAyah, storedPage }) => {
    const navigation = useNavigation();
    const sta = {
        value: 0.2,
    };

    const { state, updateReciter, updateCurrentPlaying, updateSurah, updateAyah, updatePage, updateFromAyah, updateSurahStart, updatePageStart } = useContext(PlayerContext);
    const [isSelectedCheckbox, setSelectedCheckbox] = useState(false);

    console.log("Reciter ", state.reciter);
    console.log("Page ", state.current_playing_page);
    console.log("Surah: ", state.current_playing_surah);
    console.log("Ayah: ", state.current_playing_ayah);
    console.log("_______________________");
    useEffect(() => {
        updateReciter(storedReciter);
        updateCurrentPlaying(storedSurah, storedAyah, storedPage);
        updateSurah(storedSurah);
        updateAyah(storedAyah);
        updatePage(storedPage);
        updateSurahStart(storedSurah);
        updateFromAyah(storedAyah);
        updatePageStart(storedPage);
        
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.handlerContainer}>
                <View
                    style={[
                        styles.handlerBar,
                    ]}
                />
            </View>
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end', borderBottomColor: '#C4C4C4', borderBottomWidth: 0 }}>
                    <TouchableWithoutFeedback onPress={() => navigation.push('ReciterList')}>
                        <View style={styles.optionInnerContainer}>
                            <Text style={styles.optionTextStyle}>

                                {state.reciter}

                            </Text><SmallDownButton />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                {isSelectedCheckbox ?
                    <View style={{ flex: 2 }}>
                        <View style={styles.optionOuterContainer}>
                            <TouchableWithoutFeedback onPress={() => navigation.navigate('PlayerList', { type: 'page_start' })}>

                                <View style={[styles.optionInnerContainer, { marginRight: 10 }]}>
                                    <Text style={[styles.optionTextStyle, { textAlign: 'center' }]}>Page {state.pagestart}</Text>
                                    <SmallDownButton />
                                </View>
                            </TouchableWithoutFeedback>
                            <View style={styles.spacer}>
                                <MaterialCommunityIcons name="unfold-more-vertical" size={24} color="white" />
                            </View>
                            <TouchableWithoutFeedback onPress={() => navigation.navigate('PlayerList', { type: 'page_end' })}>
                                <View style={[styles.optionInnerContainer, { marginLeft: 10 }]}>
                                    <Text style={[styles.optionTextStyle, { textAlign: 'center' }]}>Page {state.pageend}</Text>
                                    <SmallDownButton />
                                </View>
                            </TouchableWithoutFeedback>

                        </View>
                        <View style={styles.optionOuterContainer}>
                            <TouchableWithoutFeedback onPress={() => navigation.navigate('PlayerList', { type: 'from_surah' })}>
                                <View style={[styles.multiOptionOuterContainer, { marginRight: 10 }]} >
                                    <View style={styles.multiOptionInnerContainer}>
                                        <Text style={styles.optionTextStyle}>{state.surahstart}</Text>

                                    </View>
                                    <View style={styles.multiOptionInnerContainer}>
                                        <Text style={styles.optionTextStyle}>Ayah {state.fromayat}</Text><SmallDownButton />

                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                            <View style={styles.spacer}>
                                <MaterialCommunityIcons name="unfold-more-vertical" size={24} color="black" />
                            </View>

                            <TouchableWithoutFeedback onPress={() => navigation.navigate('PlayerList', { type: 'surah_end' })}>
                                <View style={[styles.multiOptionOuterContainer, { marginLeft: 10 }]} >
                                    <View style={[styles.multiOptionInnerContainer]}>
                                        <Text style={styles.optionTextStyle}>{state.surahend}</Text>

                                    </View>
                                    <View style={[styles.multiOptionInnerContainer]}>
                                        <Text style={styles.optionTextStyle}>Ayah {state.ayatend}</Text><SmallDownButton />
                                    </View>

                                </View>
                            </TouchableWithoutFeedback>
                        </View>

                    </View>
                    :
                    <View style={{ flex: 2 }}>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableWithoutFeedback onPress={() => navigation.navigate('PlayerList', { type: 'page' })}>
                                <View style={styles.optionInnerContainer}>
                                    <Text style={[styles.optionTextStyle, { textAlign: 'center' }]}>Page {state.page}</Text>
                                    <SmallDownButton />
                                </View>
                            </TouchableWithoutFeedback>

                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white' }}>

                            <TouchableWithoutFeedback onPress={() => navigation.navigate('PlayerList', { type: 'surah'})}>
                                <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#f5f5f5', borderRadius: 15, paddingVertical: 5 }} >
                                    <View style={[styles.multiOptionInnerContainer]}>
                                        <Text style={styles.optionTextStyle}>{state.surah}</Text>

                                    </View>
                                    <View style={[styles.multiOptionInnerContainer]}>
                                        <Text style={styles.optionTextStyle}>Ayah {state.ayah}</Text><SmallDownButton />
                                    </View>

                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                }
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <CheckBox
                        checked={isSelectedCheckbox}
                        onPress={() => setSelectedCheckbox(!isSelectedCheckbox)}
                        style={styles.checkbox}
                        title='Play in Range'
                        checkedColor='#23395D'
                        containerStyle={{ backgroundColor: 'white', borderColor: 'transparent', marginLeft: -5 }}
                        textStyle={{ fontWeight: 'normal', fontSize: 13 }}
                    />
                </View>

                <View style={{ flex: 3, justifyContent: 'center' }}>

                    <View style={{ flex: 0.2 }}></View>
                    <View style={{ flex: 2 }}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', }}>
                            <Text style={{ fontFamily: 'roboto-regular', fontWeight: 'bold', fontSize: 20, color: 'black', }}>Ayah {state.current_playing_ayah} | Surah {state.current_playing_surah}</Text>
                            <MaterialIcons name="favorite-border" size={28} color="#375B95" />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontFamily: 'roboto-regular', fontSize: 15, color: '#424242' }}>Qari {state.reciter}</Text>
                            <Text style={{ fontFamily: 'roboto-regular', fontSize: 12, color: '#424242', marginVertical: 8 }}>Page {state.current_playing_page}</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', marginTop: 20 }}>
                            <Slider
                                value={sta.value}
                                thumbTintColor='#F8F8F8'
                                thumbStyle={{
                                    elevation: 4, borderColor: 'grey', shadowColor: '#000',
                                    shadowOffset: { width: 1, height: 1 },
                                    shadowOpacity: 0.3,
                                }}
                                trackStyle={{ height: 2 }}
                                onValueChange={(value) => this.setState({ value })}
                            />

                        </View>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', paddingTop: 15, alignItems: 'center' }}>

                        <TouchableWithoutFeedback onPress={() => navigation.navigate('DelayList')}>
                            <View style={[styles.optionInnerButtonContainer, { justifyContent: 'center', paddingLeft: 10 }]}>
                                <Text style={styles.optionSmallTextStyle}>{state.ayatto}  </Text>
                                <Feather name="repeat" size={17} color="#616161" />
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => navigation.navigate('DelayList')}>
                            <View style={[styles.optionInnerButtonContainer, { justifyContent: 'center', paddingLeft: 10 }]}>
                                <Entypo name="controller-fast-backward" size={40} color="black" />
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => navigation.navigate('DelayList')}>
                            <View style={[styles.optionInnerButtonContainer, { justifyContent: 'center', paddingLeft: 10 }]}>
                                <Entypo name="controller-play" size={45} color="black" />
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => navigation.navigate('DelayList')}>
                            <View style={[styles.optionInnerButtonContainer, { justifyContent: 'center', paddingLeft: 10 }]}>
                                <Entypo name="controller-fast-forward" size={40} color="black" />
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => navigation.navigate('RepeatList')}>
                            <View style={[styles.optionInnerButtonContainer, { justifyContent: 'center' }]}>
                                <Entypo name="back-in-time" size={20} color="#616161" />
                                <Text style={styles.optionSmallTextStyle}>  {state.ayatto}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    </View>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: width - 50,
        backgroundColor: 'white',
        paddingTop: 30,
    },
    // Handler
    handlerContainer: {
        flex: 1,
        position: 'absolute',
        alignSelf: 'center',
        top: 15,
        backgroundColor: '#D1D1D6',
        borderRadius: 3,
        height: 5,
        width: 40,
    },
    optionTextStyle: {
        fontSize: 16,
    },
    optionSmallTextStyle: {
        fontSize: 14,
        color: '#616161'
    },
    spacer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    }
    ,
    optionOuterContainer: {
        flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'
    }
    ,
    optionInnerContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#f5f5f5',
        borderRadius: 15,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    optionInnerButtonContainer: {
        flex: 1, flexDirection: 'row', alignItems: 'center',
    },
    multiOptionOuterContainer:
    {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        borderRadius: 15,
        paddingVertical: 5
    }
    , multiOptionInnerContainer: {
        flex: 1, flexDirection: 'row', alignItems: 'center',
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: "center",
    },

});


export default Player;