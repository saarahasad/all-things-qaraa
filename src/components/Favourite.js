

import React, { useState, useContext } from 'react'
import { Context as PlayerContext } from '../context/PlayerContext';
import { StyleSheet, View, Text } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Favourite = () => {
    const { state, updateFavourites } = useContext(PlayerContext);

    const checkIfFavourited = () => {
        console.log("FAVOURITES SCREEN", state.favourites);
        console.log(state.current_playing_surah, state.current_playing_ayah)
        for (var x = 0; x < state.favourites.length; x++) {
            console.log("LOOP", state.favourites[x].surah, state.current_playing_surah, state.favourites[x].ayah, state.current_playing_ayah);
            if (state.favourites[x].surah == state.current_playing_surah && state.favourites[x].ayah == state.current_playing_ayah) {
                return <MaterialIcons name="favorite" size={24} color="black" />;
            }
        }
        return (<MaterialIcons name="favorite-border" size={24} color="black" />);
    };
    //<Text>{state.current_playing_surah}</Text>

    return (
        <View>

            <TouchableOpacity
                style={styles.headerActionButton}
                onPress={() => {
                    var present = 0;
                    var fav = [];
                    fav = state.favourites;
                    for (var x = 0; x < fav.length; x++) {
                        if (fav[x].surah == state.current_playing_surah && fav[x].ayah == state.current_playing_ayah) {
                            fav.splice(x,1);
                            present = 1;
                        }
                    }
            
    
                    if(present==0){
                        fav.push({ surah: state.current_playing_surah, ayah: state.current_playing_ayah, page: state.current_playing_page });
                    }
                    else{
                        fav.rem
                    }
                    updateFavourites(fav);
                    console.log("ON PRESS", state.favourites);

                }}
            >
                {checkIfFavourited()}


            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({

    headerActionButton: {
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 50,
        minWidth: 50,
        zIndex: 100
    },

})

export default React.memo(Favourite);
