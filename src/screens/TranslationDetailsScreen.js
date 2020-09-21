import React, { useState, useContext } from "react";
import { Entypo, MaterialIcons, Feather, EvilIcons } from '@expo/vector-icons';
import { FlatList, View, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, Image, Dimensions, SectionList } from "react-native";
import Modal from 'react-native-modal';
import * as Sahih from '../data/en.sahih.json';
import * as QuranUthmani from '../data/quran-uthmani.json';
import { Context as TranslationContext } from '../context/TranslationContext';
import PlayButton from '../components/PlayButton';
const { height, width } = Dimensions.get('window');


const translationLanguages = [
    {
        title: "Albanian",
        titleOriginal: "Shqip",
        data: ["Saheeh International", "Abdullah Yusuf Ali", "Hilali & Khan"]
    },
    {
        title: "Arabic",
        titleOriginal: "العربية",
        data: ["French Fries", "Onion Rings", "Fried Shrimps"]
    },
    {
        title: "Bengali",
        titleOriginal: "বাংলা",
        data: ["Water", "Coke", "Beer"]
    },
    {
        title: "English",
        titleOriginal: "Shqip",
        data: ["Cheese Cake", "Ice Cream"]
    }, {
        title: "German",
        titleOriginal: "Deutsch",
        data: ["Cheese Cake", "Ice Cream"]
    },
    {
        title: "English",
        titleOriginal: "English",
        data: ["Cheese Cake", "Ice Cream"]
    },
    {
        title: "Hindi",
        titleOriginal: "हिन्दी",
        data: ["Cheese Cake", "Ice Cream"]
    },
    {
        title: "Indonesian",
        titleOriginal: "Bahasa Indonesia",
        data: ["Cheese Cake", "Ice Cream"]
    },
    {
        title: "Japanese",
        titleOriginal: "Shqip",
        data: ["Cheese Cake", "Ice Cream"]
    },
    {
        title: "Korean",
        titleOriginal: "Shqip",
        data: ["Cheese Cake", "Ice Cream"]
    },
    {
        title: "Malay",
        titleOriginal: "Shqip",
        data: ["Cheese Cake", "Ice Cream"]
    },
    {
        title: "Russian",
        titleOriginal: "Shqip",
        data: ["Cheese Cake", "Ice Cream"]
    },
    {
        title: "Spanish",
        titleOriginal: "Shqip",
        data: ["Cheese Cake", "Ice Cream"]
    },
    {
        title: "Thai",
        image: require("../../assets/asia_icon.png"),
        data: ["Cheese Cake", "Ice Cream"]
    },
    {
        title: "Turkish",
        image: require("../../assets/asia_icon.png"),
        data: ["Cheese Cake", "Ice Cream"]
    }, {
        title: "Urdu",
        image: require("../../assets/asia_icon.png"),
        data: ["Cheese Cake", "Ice Cream"]
    }
];


const TranslationDetailsScreen = () => {
    const [selectedId, setSelectedId] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const { state, updateTranslation } = useContext(TranslationContext);

    var surahData = [];
    var indexSelected = parseInt(state.nav_surah_index);
    console.log(Sahih.SahihText[indexSelected - 1].aya.length)
    for (var x = 0; x < Sahih.SahihText[indexSelected - 1].aya.length; x++) {
        surahData.push({ id: Sahih.SahihText[indexSelected - 1].aya[x].index, translation: Sahih.SahihText[indexSelected - 1].aya[x].text, ayah: QuranUthmani.QuranUthmaniText[indexSelected - 1].aya[x].text })
    }
    console.log("TranslationDetailsScreen")

    const Item = ({ item, onPress, style }) => (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[styles.item, style]}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={styles.controller}>
                        <PlayButton onPress={onPress} ayah={item.id} surah={state.nav_surah_title} />
                        <TouchableOpacity onPress={onPress} >
                            <MaterialIcons name="favorite-border" size={24} color="#23395D" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.circle}>
                        <Text >{item.id}</Text>
                    </View>
                </View>
                <Text style={styles.arabicText}>{item.ayah}  </Text>
                <Text style={styles.translationText}>{item.translation}</Text>
            </View>
        </TouchableWithoutFeedback>
    );

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#f9f9f9" : 'white';
        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                style={{ backgroundColor }}
            />
        );
    };

    const ItemSectionList = ({ title }) => (
        <TouchableOpacity style={styles.itemSectionList} onPress={() => { updateTranslation(title) }}>
            <Text>{title}</Text>
        </TouchableOpacity>
    );

    const SectionListItemSeparator = () => {
        return (
            <View style={{ height: 0.5, width: '100%', backgroundColor: '#C8C8C8' }} />
        );
    };

    const renderListHeader = () => {
        return (
            <>
                <View style={{ margin: 15, alignItems: 'center',}}>
                    {
                        parseInt(state.nav_surah_index) == 1 ?
                            null :
                            <Text style={{ textAlign: 'center', fontSize: 25, fontFamily: 'scheherazade', alignItems: 'center' }}>بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</Text>
                    }
                    {
                        parseInt(state.nav_surah_index) == 1 ?
                            null :
                            <Text style={{ textAlign: 'center', fontSize: 15, fontFamily: 'opensans-regular', paddingHorizontal: 25 }}>In the name of Allah, the Entirely Merciful, the Especially Merciful.</Text>
                    }
                </View>
            </>
        );
    };

    return (
        <View style={styles.container}>
            <Modal
                animationIn='fadeIn'
                animationOut='fadeOut'
                animationInTiming={50}
                animationOutTiming={10}
                isVisible={modalVisible}
                backdropColor="black"
                onRequestClose={() => {

                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.modalInner}>
                            <SectionList
                                sections={translationLanguages}
                                showsVerticalScrollIndicator={false}
                                stickySectionHeadersEnabled={false}
                                keyExtractor={(item, index) => item + index}
                                renderItem={({ item }) => <ItemSectionList title={item} />}
                                renderSectionHeader={({ section }) => (
                                    <View style={styles.sectionHeaderStyle}>
                                        <Text style={styles.headerSectionListOriginalTitle} >{section.titleOriginal}</Text>
                                        <Text style={styles.headerSectionListTitle} > ({section.title}) </Text>
                                    </View>
                                )}
                                ItemSeparatorComponent={SectionListItemSeparator}
                                ListHeaderComponent={() => (
                                    <View style={styles.upperHeaderStype}>
                                        <TouchableOpacity style={{ flex: 1, alignItems: 'flex-start' }} onPress={() => { setModalVisible(!modalVisible); }}>
                                            <EvilIcons name="close" size={40} color="black" />
                                        </TouchableOpacity>
                                        <View style={{ flex: 6, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ textAlign: 'right', fontWeight: 'bold', fontSize: 15 }}>Select translation</Text>

                                        </View>
                                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}></View>
                                    </View>
                                )}
                            />
                        </View>
                    </View>
                </View>
            </Modal>

            <TouchableOpacity style={{ marginHorizontal: 25, marginTop: 25, marginBottom: 15, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }} onPress={() => { setModalVisible(true); }}>
                <View style={{ flex: 1, zIndex: 100 }}>
                    <View style={styles.translationButton}>
                        <Feather name="book-open" size={20} color="white" />
                    </View>
                </View>
                <View style={{ flex: 5, alignItems: 'center', backgroundColor: '#ECECEC', padding: 15, borderRadius: 20, marginLeft: -50 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 15, textAlign: 'center' }}>Translation: {state.translation}</Text>
                </View>
            </TouchableOpacity>
            <FlatList
                data={surahData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
                ListHeaderComponent={renderListHeader}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: 'white', paddingBottom: 50
    },
    controller: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ECECEC',
        borderRadius: 1000,
        paddingHorizontal: 15
    },
    item: {
        padding: 20,
        borderBottomColor: '#DADADA',
        borderBottomWidth: 1
    },
    arabicText: {
        paddingTop: 15,
        textAlign: 'right',
        fontSize: 20,
        fontFamily: 'me_quran',
    },
    translationText: {
        paddingTop: 15,
        fontSize: 16,
        fontFamily: 'opensans-regular'
    },
    circle: {
        height: 40,
        width: 40,
        borderRadius: 1000,
        backgroundColor: '#ECECEC',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    modalInner: {
        width: 6 / 8 * width,
        height: 3 / 4 * height
    },
    translationButton: {
        height: 45,
        width: 45,
        borderRadius: 1000,
        backgroundColor: '#1C2E4A',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    itemSectionList: {
        padding: 15,
    },
    upperHeaderStype: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 25
    },
    headerSectionListTitle: {
        fontSize: 15,
        fontFamily: 'roboto-regular',
        color: '#424242'
    },
    headerSectionListOriginalTitle: {
        fontSize: 15,
        fontFamily: 'roboto-bold'

    },
    sectionHeaderStyle: {
        flexDirection: 'row',
        backgroundColor: "#ECECEC",
        padding: 10,
        alignItems: 'center'
    },
});

export default TranslationDetailsScreen;