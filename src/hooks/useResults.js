import React, { useState, useEffect } from 'react';
import Surah from '../data/Surah.json'

export default () => {
    const [results, setResults] = useState([]);

    const searchApi = (searchTerm) => {
        var surahTitle = [{
            id: "1",
            name: 'Al-Fatiha',
        },];
        for (var x = 1; x < Surah.ListofSurahs.length; x++) {

            surahTitle.push({ id: (x + 1).toString(), name: Surah.ListofSurahs[x].title });
        }
        setResults(surahTitle);
    };
    //BAD CODE searchApi('ts');

    useEffect(() => {
        searchApi('Al-Fatiha')
    }, []);

    return [searchApi, results];
};