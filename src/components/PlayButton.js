import React, { useContext } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Context as PlayerContext } from '../context/PlayerContext';
import { Entypo } from '@expo/vector-icons';
import * as Surah from '../data/Surah.json';
import * as PageDetails from '../data/PageDetails.json';

const PlayButton = ({onPress, ayah, surah}) => {
    const { updateCurrentPlaying } = useContext(PlayerContext);
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

    return (
        <TouchableOpacity onPress={() =>{ onPress;updateCurrentPlaying(surah,ayah,updatePageFromSurahAyah(surah,ayah))}} style={{ paddingRight: 10 }}>
            <Entypo name="controller-play" size={32} color="#23395D" />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
 
});

export default PlayButton;