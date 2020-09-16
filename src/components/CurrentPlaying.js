 
 
 import React, { useContext } from 'react'
 import { Context as PlayerContext } from '../context/PlayerContext';
 import { Text } from 'react-native'

  const CurrentPlaying = () => {
    const { state } = useContext(PlayerContext);
    return (<Text style={{fontFamily: 'roboto-regular'}}>Surah {state.current_playing_surah} - Ayah {state.current_playing_ayah} - Page {state.current_playing_page} </Text>);
  }
  
  export default CurrentPlaying;
