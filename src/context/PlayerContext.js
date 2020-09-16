
import createDataContext from './createDataContext';
const playerReducer = (state, action) => {
    switch (action.type) {
        case 'update_reciter':
            return { ...state, reciter: action.payload.reciter };

        case 'update_ayat_end':
            return { ...state, ayatend: action.payload.ayatend };
        case 'update_surah_end':
            return { ...state, surahend: action.payload.surahend };

        case 'update_from_ayat':
            return { ...state, fromayat: action.payload.fromayat };
        case 'update_surah_start':
            return { ...state, surahstart: action.payload.surahstart };

        case 'update_page_start':
            return { ...state, pagestart: action.payload.pagestart };
        case 'update_page_end':
            return { ...state, pageend: action.payload.pageend };

        case 'update_surah':
            return { ...state, surah: action.payload.surah };
        case 'update_ayah':
            return { ...state, ayah: action.payload.ayah };
        case 'update_page':
            return { ...state, page: action.payload.page };

        case 'update_current_playing':
            return {
                ...state,
                current_playing_surah: action.payload.current_playing_surah,
                current_playing_ayah: action.payload.current_playing_ayah,
                current_playing_page: action.payload.current_playing_page,
            };
        case 'update_favourites':
            return {
                ...state,
                favourites: action.payload.favourites
            }
        case 'get_values':
            return { ...state };


        default:
            return state;
    }


};

const updateReciter = (dispatch) => {
    return (reciter) => {
        dispatch({ type: 'update_reciter', payload: { reciter } });
    }
};

const updateSurah = (dispatch) => {
    return (surah) => {
        dispatch({ type: 'update_surah', payload: { surah } });
    }
};



const updatePageStart = (dispatch) => {
    return (pagestart) => {
        dispatch({ type: 'update_page_start', payload: { pagestart } });
    }
};

const updatePageEnd = (dispatch) => {
    return (pageend) => {
        dispatch({ type: 'update_page_end', payload: { pageend } });
    }
};



const updateFromAyah = (dispatch) => {
    return (fromayat) => {
        dispatch({ type: 'update_from_ayat', payload: { fromayat } });
    }
};

const updateAyatEnd = (dispatch) => {
    return (ayatend) => {
        dispatch({ type: 'update_ayat_end', payload: { ayatend } });
    }
};

const updateSurahStart = (dispatch) => {
    return (surahstart) => {
        dispatch({ type: 'update_surah_start', payload: { surahstart } });
    }
};

const updateSurahEnd = (dispatch) => {
    return (surahend) => {
        dispatch({ type: 'update_surah_end', payload: { surahend } });
    }
};


const updateAyah = (dispatch) => {
    return (ayah) => {
        dispatch({ type: 'update_ayah', payload: { ayah } })
    }
}
const updatePage = (dispatch) => {
    return (page) => {
        dispatch({ type: 'update_page', payload: { page } });
    }
};

const getValues = (dispatch) => {
    return () => {
        dispatch({ type: 'get_values' });
    }
};


const updateCurrentPlaying = (dispatch) => {
    return (current_playing_surah, current_playing_ayah, current_playing_page) => {
        dispatch({ type: 'update_current_playing', payload: { current_playing_surah, current_playing_ayah, current_playing_page } })

    }
};

const updateFavourites = (dispatch) => {
    return (favourites) => {
        dispatch({ type: 'update_favourites', payload: { favourites } })
    }
};



export const { Context, Provider } = createDataContext(
    playerReducer,
    { getValues, updateReciter, updateAyah, updateSurah, updateAyatEnd, updateSurahEnd, updateFromAyah, updateSurahStart, updatePage, updatePageStart, updatePageEnd, updateCurrentPlaying, updateFavourites },
    { reciter: 'reciter', page: '1', ayah: '1', surah: 'Al-Fatiha', fromayat: '1', surahstart: 'Al-Fatiha', ayatend: '6', surahend: 'An-Nas', pageend: '604', favourites: [{ surah: 'Al-Fatiha', ayah: '1', page: '1' }] }
);