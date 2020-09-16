
import createDataContext from './createDataContext';
const translationReducer = (state, action) => {
    switch (action.type) {
        case 'update_transaltion':
            return { ...state, translation: action.payload.translation };
        case 'update_nav_surah':
            return { ...state, nav_surah_index: action.payload.nav_surah_index, nav_surah_title: action.payload.nav_surah_title };

        default:
            return state;
    }


};

const updateTranslation = (dispatch) => {
    return (translation) => {
        dispatch({ type: 'update_transaltion', payload: { translation } });
    }
};

const updateNavigateSurah = (dispatch) =>{
    return (nav_surah_index,nav_surah_title) =>{
        dispatch({type:'update_nav_surah', payload:{nav_surah_index,nav_surah_title}})
    }
};


export const { Context, Provider } = createDataContext(
    translationReducer,
    { updateTranslation,updateNavigateSurah },
    { translation: 'Saheeh International',nav_surah_index:'1', nav_surah_title:'Al-Fatiha' }
);