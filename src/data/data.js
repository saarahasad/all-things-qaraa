import * as Surah from '../data/Surah.json';

export const surahTitles = () => {
    var surahTitle = [{
        id: "1",
        name: 'Al-Fatiha',
    },];
    for (var x = 1; x < Surah.ListofSurahs.length; x++) {
        surahTitle.push({ id: (x + 1).toString(), name: Surah.ListofSurahs[x].title });
    }
    const lists = surahTitle;
    return surahTitle;
}

export const ayahCount = ({ surahName }) => {
    var count = 0;
    for (var x = 0; x < Surah.ListofSurahs.length; x++) {
        if (Surah.ListofSurahs[x].title == surahName)
            count = Surah.ListofSurahs[x].count
    }
    return count;
}

export const reciterTitles = [
    {
        id: "1",
        name: 'Abdul Basit AbdulSamad',
        avatar_url: 'https://i.pinimg.com/originals/41/53/0a/41530a053e4d0876f98924d728594dea.jpg',
        subtitle: 'Vice President'
    },
    {
        id: "2",
        name: 'Abdurrahmaan As-Sudais',
        avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQu7aYhH0g-DBdG4Tm_us2NE2uKx2Bt1tS_-Q&usqp=CAU',
        subtitle: 'Vice President'
    },
    {
        id: "3",
        name: 'Hani Rifai',
        avatar_url: 'https://masjidassunnah-fl.com/wp-content/uploads/2012/12/Hani-Ar-Rifai.jpg',
        subtitle: 'Vice President'
    },
    {
        id: "4",
        name: 'Hudhaify',
        avatar_url: 'https://www.islamkingdom.com/images/en/mid/2019-05/ali-abdurrahman-al-hudhaifi-islamkingdom.com.jpg',
        subtitle: 'Vice President'
    },
    {
        id: "5",
        name: 'Husary',
        avatar_url: 'https://en.quran.com.kw/wp-content/uploads/alhusarey.jpg',
        subtitle: 'Vice President'
    }, {
        id: "6",
        name: 'Minshawy',
        avatar_url: 'https://alchetron.com/cdn/mohamed-siddiq-el-minshawi-54d7ccd8-dc6d-41ac-aca2-fb9c401ded8-resize-750.jpeg',
        subtitle: 'Vice President'
    }, {
        id: "9",
        name: 'Mishary Al-Efasi',
        avatar_url: 'https://upload.wikimedia.org/wikipedia/commons/2/24/%D0%9C%D0%B8%D1%88%D0%B0%D1%80%D0%B8_%D0%A0%D0%B0%D1%88%D0%B8%D0%B4.jpg',
        subtitle: 'Vice President'
    }, {
        id: "7",
        name: 'Sa’ad Al-Ghamdi',
        avatar_url: 'https://i1.sndcdn.com/artworks-000070458505-xfomyg-t500x500.jpg',
        subtitle: 'Vice President'
    }, {
        id: "8",
        name: 'Sa’ud Ash-Shuraim',
        avatar_url: 'https://2.bp.blogspot.com/-B-sh_shKR1Q/VQam4knoN8I/AAAAAAAACzs/lIu0Gg8e_9s/s1600/islamic_luminaries.jpg',
        subtitle: 'Vice President'
    }
]
export const favourites = [
    {
        surah: 'Al-Fatiha',
        ayah: '2',
        page: '1'
    },
    {
        surah: 'Al-Fatiha',
        ayah: '3',
        page: '1'
    },


]