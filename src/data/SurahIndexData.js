
/* 
    <--------CODE TO GENERATE THE FOLLOWING LIST------->

    const index = [];
    
    var j = 1;
    var surah = []
    for (var x = 0; x < Surah.ListofSurahs.length; x++) {
        for (var y = 0; y < Surah.ListofSurahs[x].juz.length; y++) {
            if (j == parseInt(Surah.ListofSurahs[x].juz[y].index)) {
                surah.push({ id: (y + 1).toString(), index: Surah.ListofSurahs[x].index, name: Surah.ListofSurahs[x].titleAr, translation: Surah.ListofSurahs[x].title, page: Surah.ListofSurahs[x].pages, verse_start: Surah.ListofSurahs[x].juz[y].verse.start, verse_end: Surah.ListofSurahs[x].juz[y].verse.end });
            }
            else {
                index.push({ juz: j.toString(), surahs: surah })
                j = j + 1;
                surah = [];
                surah.push({ id: (y + 1).toString(), index: Surah.ListofSurahs[x].index, name: Surah.ListofSurahs[x].titleAr, translation: Surah.ListofSurahs[x].title, page: Surah.ListofSurahs[x].pages, verse_start: Surah.ListofSurahs[x].juz[y].verse.start, verse_end: Surah.ListofSurahs[x].juz[y].verse.end });
            }
        }
    }
    index.push({ juz: j.toString(), surahs: surah })


    */



export const SurahIndexData = [
    {
        "juz": "1",
        "surahs": [
            {
                "id": "1",
                "index": "001",
                "name": "الفاتحة",
                "translation": "Al-Fatiha",
                "page": "1",
                "verse_start": "verse_1",
                "verse_end": "verse_7"
            },
            {
                "id": "1",
                "index": "002",
                "name": "البقرة",
                "translation": "Al-Baqara",
                "page": "2",
                "verse_start": "verse_1",
                "verse_end": "verse_141"
            }
        ]
    },
    {
        "juz": "2",
        "surahs": [
            {
                "id": "2",
                "index": "002",
                "name": "البقرة",
                "translation": "Al-Baqara",
                "page": "2",
                "verse_start": "verse_142",
                "verse_end": "verse_252"
            }
        ]
    },
    {
        "juz": "3",
        "surahs": [
            {
                "id": "3",
                "index": "002",
                "name": "البقرة",
                "translation": "Al-Baqara",
                "page": "2",
                "verse_start": "verse_253",
                "verse_end": "verse_286"
            },
            {
                "id": "1",
                "index": "003",
                "name": "آل عمران",
                "translation": "Aal-Imran",
                "page": "50",
                "verse_start": "verse_1",
                "verse_end": "verse_92"
            }
        ]
    },
    {
        "juz": "4",
        "surahs": [
            {
                "id": "2",
                "index": "003",
                "name": "آل عمران",
                "translation": "Aal-Imran",
                "page": "50",
                "verse_start": "verse_93",
                "verse_end": "verse_200"
            },
            {
                "id": "1",
                "index": "004",
                "name": "النساء",
                "translation": "An-Nisaa'",
                "page": "77",
                "verse_start": "verse_1",
                "verse_end": "verse_23"
            }
        ]
    },
    {
        "juz": "5",
        "surahs": [
            {
                "id": "2",
                "index": "004",
                "name": "النساء",
                "translation": "An-Nisaa'",
                "page": "77",
                "verse_start": "verse_24",
                "verse_end": "verse_147"
            }
        ]
    },
    {
        "juz": "6",
        "surahs": [
            {
                "id": "3",
                "index": "004",
                "name": "النساء",
                "translation": "An-Nisaa'",
                "page": "77",
                "verse_start": "verse_148",
                "verse_end": "verse_176"
            },
            {
                "id": "1",
                "index": "005",
                "name": "المائدة",
                "translation": "Al-Ma'ida",
                "page": "106",
                "verse_start": "verse_1",
                "verse_end": "verse_81"
            }
        ]
    },
    {
        "juz": "7",
        "surahs": [
            {
                "id": "2",
                "index": "005",
                "name": "المائدة",
                "translation": "Al-Ma'ida",
                "page": "106",
                "verse_start": "verse_82",
                "verse_end": "verse_120"
            },
            {
                "id": "1",
                "index": "006",
                "name": "الأنعام",
                "translation": "Al-An'am",
                "page": "128",
                "verse_start": "verse_1",
                "verse_end": "verse_110"
            }
        ]
    },
    {
        "juz": "8",
        "surahs": [
            {
                "id": "2",
                "index": "006",
                "name": "الأنعام",
                "translation": "Al-An'am",
                "page": "128",
                "verse_start": "verse_111",
                "verse_end": "verse_165"
            },
            {
                "id": "1",
                "index": "007",
                "name": "الأعراف",
                "translation": "Al-A'raf",
                "page": "151",
                "verse_start": "verse_1",
                "verse_end": "verse_87"
            }
        ]
    },
    {
        "juz": "9",
        "surahs": [
            {
                "id": "2",
                "index": "007",
                "name": "الأعراف",
                "translation": "Al-A'raf",
                "page": "151",
                "verse_start": "verse_88",
                "verse_end": "verse_206"
            },
            {
                "id": "1",
                "index": "008",
                "name": "الأنفال",
                "translation": "Al-Anfal",
                "page": "177",
                "verse_start": "verse_1",
                "verse_end": "verse_40"
            }
        ]
    },
    {
        "juz": "10",
        "surahs": [
            {
                "id": "2",
                "index": "008",
                "name": "الأنفال",
                "translation": "Al-Anfal",
                "page": "177",
                "verse_start": "verse_41",
                "verse_end": "verse_75"
            },
            {
                "id": "1",
                "index": "009",
                "name": "التوبة",
                "translation": "Al-Tawba",
                "page": "187",
                "verse_start": "verse_1",
                "verse_end": "verse_92"
            }
        ]
    },
    {
        "juz": "11",
        "surahs": [
            {
                "id": "2",
                "index": "009",
                "name": "التوبة",
                "translation": "Al-Tawba",
                "page": "187",
                "verse_start": "verse_93",
                "verse_end": "verse_129"
            },
            {
                "id": "1",
                "index": "010",
                "name": "يونس",
                "translation": "Yunus",
                "page": "208",
                "verse_start": "verse_1",
                "verse_end": "verse_109"
            },
            {
                "id": "1",
                "index": "011",
                "name": "هود",
                "translation": "Hud",
                "page": "221",
                "verse_start": "verse_1",
                "verse_end": "verse_5"
            }
        ]
    },
    {
        "juz": "12",
        "surahs": [
            {
                "id": "2",
                "index": "011",
                "name": "هود",
                "translation": "Hud",
                "page": "221",
                "verse_start": "verse_6",
                "verse_end": "verse_123"
            },
            {
                "id": "1",
                "index": "012",
                "name": "يوسف",
                "translation": "Yusuf",
                "page": "235",
                "verse_start": "verse_1",
                "verse_end": "verse_52"
            }
        ]
    },
    {
        "juz": "13",
        "surahs": [
            {
                "id": "2",
                "index": "012",
                "name": "يوسف",
                "translation": "Yusuf",
                "page": "235",
                "verse_start": "verse_53",
                "verse_end": "verse_111"
            },
            {
                "id": "1",
                "index": "013",
                "name": "الرعد",
                "translation": "Ar-Ra'd",
                "page": "249",
                "verse_start": "verse_1",
                "verse_end": "verse_43"
            },
            {
                "id": "1",
                "index": "014",
                "name": "إبراهيم",
                "translation": "Ibrahim",
                "page": "255",
                "verse_start": "verse_1",
                "verse_end": "verse_52"
            }
        ]
    },
    {
        "juz": "14",
        "surahs": [
            {
                "id": "1",
                "index": "015",
                "name": "الحجر",
                "translation": "Al-Hijr",
                "page": "262",
                "verse_start": "verse_1",
                "verse_end": "verse_99"
            },
            {
                "id": "1",
                "index": "016",
                "name": "النحل",
                "translation": "An-Nahl",
                "page": "267",
                "verse_start": "verse_1",
                "verse_end": "verse_128"
            }
        ]
    },
    {
        "juz": "15",
        "surahs": [
            {
                "id": "1",
                "index": "017",
                "name": "الإسراء",
                "translation": "Al-Israa",
                "page": "282",
                "verse_start": "verse_1",
                "verse_end": "verse_111"
            },
            {
                "id": "1",
                "index": "018",
                "name": "الكهف",
                "translation": "Al-Kahf",
                "page": "293",
                "verse_start": "verse_1",
                "verse_end": "verse_74"
            }
        ]
    },
    {
        "juz": "16",
        "surahs": [
            {
                "id": "2",
                "index": "018",
                "name": "الكهف",
                "translation": "Al-Kahf",
                "page": "293",
                "verse_start": "verse_75",
                "verse_end": "verse_110"
            },
            {
                "id": "1",
                "index": "019",
                "name": "مريم",
                "translation": "Maryam",
                "page": "305",
                "verse_start": "verse_1",
                "verse_end": "verse_98"
            },
            {
                "id": "1",
                "index": "020",
                "name": "طه",
                "translation": "Ta-Ha",
                "page": "312",
                "verse_start": "verse_1",
                "verse_end": "verse_135"
            }
        ]
    },
    {
        "juz": "17",
        "surahs": [
            {
                "id": "1",
                "index": "021",
                "name": "الأنبياء",
                "translation": "Al-Anbiya",
                "page": "322",
                "verse_start": "verse_1",
                "verse_end": "verse_112"
            },
            {
                "id": "1",
                "index": "022",
                "name": "الحج",
                "translation": "Al-Hajj",
                "page": "332",
                "verse_start": "verse_1",
                "verse_end": "verse_78"
            }
        ]
    },
    {
        "juz": "18",
        "surahs": [
            {
                "id": "1",
                "index": "023",
                "name": "المؤمنون",
                "translation": "Al-Muminun",
                "page": "342",
                "verse_start": "verse_1",
                "verse_end": "verse_118"
            },
            {
                "id": "1",
                "index": "024",
                "name": "النور",
                "translation": "An-Nur",
                "page": "350",
                "verse_start": "verse_1",
                "verse_end": "verse_64"
            },
            {
                "id": "1",
                "index": "025",
                "name": "الفرقان",
                "translation": "Al-Furqan",
                "page": "359",
                "verse_start": "verse_1",
                "verse_end": "verse_20"
            }
        ]
    },
    {
        "juz": "19",
        "surahs": [
            {
                "id": "2",
                "index": "025",
                "name": "الفرقان",
                "translation": "Al-Furqan",
                "page": "359",
                "verse_start": "verse_21",
                "verse_end": "verse_77"
            },
            {
                "id": "1",
                "index": "026",
                "name": "الشعراء",
                "translation": "Ash-Shuara",
                "page": "367",
                "verse_start": "verse_1",
                "verse_end": "verse_227"
            },
            {
                "id": "1",
                "index": "027",
                "name": "النمل",
                "translation": "An-Naml",
                "page": "377",
                "verse_start": "verse_1",
                "verse_end": "verse_55"
            }
        ]
    },
    {
        "juz": "20",
        "surahs": [
            {
                "id": "2",
                "index": "027",
                "name": "النمل",
                "translation": "An-Naml",
                "page": "377",
                "verse_start": "verse_56",
                "verse_end": "verse_93"
            },
            {
                "id": "1",
                "index": "028",
                "name": "القصص",
                "translation": "Al-Qasas",
                "page": "385",
                "verse_start": "verse_1",
                "verse_end": "verse_88"
            },
            {
                "id": "1",
                "index": "029",
                "name": "العنكبوت",
                "translation": "Al-Ankabut",
                "page": "396",
                "verse_start": "verse_1",
                "verse_end": "verse_45"
            }
        ]
    },
    {
        "juz": "21",
        "surahs": [
            {
                "id": "2",
                "index": "029",
                "name": "العنكبوت",
                "translation": "Al-Ankabut",
                "page": "396",
                "verse_start": "verse_46",
                "verse_end": "verse_69"
            },
            {
                "id": "1",
                "index": "030",
                "name": "الروم",
                "translation": "Ar-Rum",
                "page": "404",
                "verse_start": "verse_1",
                "verse_end": "verse_60"
            },
            {
                "id": "1",
                "index": "031",
                "name": "لقمان",
                "translation": "Luqman",
                "page": "411",
                "verse_start": "verse_1",
                "verse_end": "verse_34"
            },
            {
                "id": "1",
                "index": "032",
                "name": "السجدة",
                "translation": "As-Sajdah",
                "page": "415",
                "verse_start": "verse_1",
                "verse_end": "verse_30"
            },
            {
                "id": "1",
                "index": "033",
                "name": "الأحزاب",
                "translation": "Al-Ahzab",
                "page": "418",
                "verse_start": "verse_1",
                "verse_end": "verse_30"
            }
        ]
    },
    {
        "juz": "22",
        "surahs": [
            {
                "id": "2",
                "index": "033",
                "name": "الأحزاب",
                "translation": "Al-Ahzab",
                "page": "418",
                "verse_start": "verse_31",
                "verse_end": "verse_73"
            },
            {
                "id": "1",
                "index": "034",
                "name": "سبأ",
                "translation": "Saba",
                "page": "428",
                "verse_start": "verse_1",
                "verse_end": "verse_54"
            },
            {
                "id": "1",
                "index": "035",
                "name": "فاطر",
                "translation": "Fatir",
                "page": "434",
                "verse_start": "verse_1",
                "verse_end": "verse_45"
            },
            {
                "id": "1",
                "index": "036",
                "name": "يس",
                "translation": "Yasin",
                "page": "440",
                "verse_start": "verse_1",
                "verse_end": "verse_27"
            }
        ]
    },
    {
        "juz": "23",
        "surahs": [
            {
                "id": "2",
                "index": "036",
                "name": "يس",
                "translation": "Yasin",
                "page": "440",
                "verse_start": "verse_28",
                "verse_end": "verse_83"
            },
            {
                "id": "1",
                "index": "037",
                "name": "الصافات",
                "translation": "As-Saffat",
                "page": "446",
                "verse_start": "verse_1",
                "verse_end": "verse_182"
            },
            {
                "id": "1",
                "index": "038",
                "name": "ص",
                "translation": "Sad",
                "page": "453",
                "verse_start": "verse_1",
                "verse_end": "verse_88"
            },
            {
                "id": "1",
                "index": "039",
                "name": "الزمر",
                "translation": "Az-Zumar",
                "page": "458",
                "verse_start": "verse_1",
                "verse_end": "verse_31"
            }
        ]
    },
    {
        "juz": "24",
        "surahs": [
            {
                "id": "2",
                "index": "039",
                "name": "الزمر",
                "translation": "Az-Zumar",
                "page": "458",
                "verse_start": "verse_32",
                "verse_end": "verse_75"
            },
            {
                "id": "1",
                "index": "040",
                "name": "غافر",
                "translation": "Ghafir",
                "page": "467",
                "verse_start": "verse_1",
                "verse_end": "verse_85"
            },
            {
                "id": "1",
                "index": "041",
                "name": "فصلت",
                "translation": "Fussilat",
                "page": "477",
                "verse_start": "verse_1",
                "verse_end": "verse_46"
            }
        ]
    },
    {
        "juz": "25",
        "surahs": [
            {
                "id": "2",
                "index": "041",
                "name": "فصلت",
                "translation": "Fussilat",
                "page": "477",
                "verse_start": "verse_47",
                "verse_end": "verse_54"
            },
            {
                "id": "1",
                "index": "042",
                "name": "الشورى",
                "translation": "Ash-Shura",
                "page": "483",
                "verse_start": "verse_1",
                "verse_end": "verse_53"
            },
            {
                "id": "1",
                "index": "043",
                "name": "الزخرف",
                "translation": "Az-Zukhruf",
                "page": "489",
                "verse_start": "verse_1",
                "verse_end": "verse_89"
            },
            {
                "id": "1",
                "index": "044",
                "name": "الدخان",
                "translation": "Ad-Dukhan",
                "page": "496",
                "verse_start": "verse_1",
                "verse_end": "verse_59"
            },
            {
                "id": "1",
                "index": "045",
                "name": "الجاثية",
                "translation": "Al-Jathiya",
                "page": "499",
                "verse_start": "verse_1",
                "verse_end": "verse_37"
            }
        ]
    },
    {
        "juz": "26",
        "surahs": [
            {
                "id": "1",
                "index": "046",
                "name": "الأحقاف",
                "translation": "Al-Ahqaf",
                "page": "502",
                "verse_start": "verse_1",
                "verse_end": "verse_35"
            },
            {
                "id": "1",
                "index": "047",
                "name": "محمد",
                "translation": "Muhammad",
                "page": "468",
                "verse_start": "verse_1",
                "verse_end": "verse_38"
            },
            {
                "id": "1",
                "index": "048",
                "name": "الفتح",
                "translation": "Al-Fath",
                "page": "507",
                "verse_start": "verse_1",
                "verse_end": "verse_29"
            },
            {
                "id": "1",
                "index": "049",
                "name": "الحجرات",
                "translation": "Al-Hujurat",
                "page": "511",
                "verse_start": "verse_1",
                "verse_end": "verse_18"
            },
            {
                "id": "1",
                "index": "050",
                "name": "ق",
                "translation": "Qaf",
                "page": "515",
                "verse_start": "verse_1",
                "verse_end": "verse_45"
            },
            {
                "id": "1",
                "index": "051",
                "name": "الذاريات",
                "translation": "Az-Zariyat",
                "page": "518",
                "verse_start": "verse_1",
                "verse_end": "verse_30"
            }
        ]
    },
    {
        "juz": "27",
        "surahs": [
            {
                "id": "2",
                "index": "051",
                "name": "الذاريات",
                "translation": "Az-Zariyat",
                "page": "518",
                "verse_start": "verse_31",
                "verse_end": "verse_60"
            },
            {
                "id": "1",
                "index": "052",
                "name": "الطور",
                "translation": "At-Tur",
                "page": "520",
                "verse_start": "verse_1",
                "verse_end": "verse_49"
            },
            {
                "id": "1",
                "index": "053",
                "name": "النجم",
                "translation": "An-Najm",
                "page": "523",
                "verse_start": "verse_1",
                "verse_end": "verse_62"
            },
            {
                "id": "1",
                "index": "054",
                "name": "القمر",
                "translation": "Al-Qamar",
                "page": "526",
                "verse_start": "verse_1",
                "verse_end": "verse_55"
            },
            {
                "id": "1",
                "index": "055",
                "name": "الرحمن",
                "translation": "Ar-Rahman",
                "page": "531",
                "verse_start": "verse_1",
                "verse_end": "verse_78"
            },
            {
                "id": "1",
                "index": "056",
                "name": "الواقعة",
                "translation": "Al-Waqia",
                "page": "534",
                "verse_start": "verse_1",
                "verse_end": "verse_96"
            },
            {
                "id": "1",
                "index": "057",
                "name": "الحديد",
                "translation": "Al-Hadid",
                "page": "499",
                "verse_start": "verse_1",
                "verse_end": "verse_29"
            }
        ]
    },
    {
        "juz": "28",
        "surahs": [
            {
                "id": "1",
                "index": "058",
                "name": "المجادلة",
                "translation": "Al-Mujadilah",
                "page": "504",
                "verse_start": "verse_1",
                "verse_end": "verse_22"
            },
            {
                "id": "1",
                "index": "059",
                "name": "الحشر",
                "translation": "Al-Hashr",
                "page": "507",
                "verse_start": "verse_1",
                "verse_end": "verse_24"
            },
            {
                "id": "1",
                "index": "060",
                "name": "الممتحنة",
                "translation": "Al-Mumtahinah",
                "page": "510",
                "verse_start": "verse_1",
                "verse_end": "verse_13"
            },
            {
                "id": "1",
                "index": "061",
                "name": "الصف",
                "translation": "As-Saff",
                "page": "513",
                "verse_start": "verse_1",
                "verse_end": "verse_14"
            },
            {
                "id": "1",
                "index": "062",
                "name": "الجمعة",
                "translation": "Al-Jumu'ah",
                "page": "515",
                "verse_start": "verse_1",
                "verse_end": "verse_11"
            },
            {
                "id": "1",
                "index": "063",
                "name": "المنافقون",
                "translation": "Al-Munafiqun",
                "page": "516",
                "verse_start": "verse_1",
                "verse_end": "verse_11"
            },
            {
                "id": "1",
                "index": "064",
                "name": "التغابن",
                "translation": "At-Taghabun",
                "page": "518",
                "verse_start": "verse_1",
                "verse_end": "verse_18"
            },
            {
                "id": "1",
                "index": "065",
                "name": "الطلاق",
                "translation": "At-Talaq",
                "page": "520",
                "verse_start": "verse_1",
                "verse_end": "verse_12"
            },
            {
                "id": "1",
                "index": "066",
                "name": "التحريم",
                "translation": "At-Tahrim",
                "page": "522",
                "verse_start": "verse_1",
                "verse_end": "verse_12"
            }
        ]
    },
    {
        "juz": "29",
        "surahs": [
            {
                "id": "1",
                "index": "067",
                "name": "الملك",
                "translation": "Al-Mulk",
                "page": "524",
                "verse_start": "verse_1",
                "verse_end": "verse_30"
            },
            {
                "id": "1",
                "index": "068",
                "name": "القلم",
                "translation": "Al-Qalam",
                "page": "526",
                "verse_start": "verse_1",
                "verse_end": "verse_52"
            },
            {
                "id": "1",
                "index": "069",
                "name": "الحاقة",
                "translation": "Al-Haqqah",
                "page": "529",
                "verse_start": "verse_1",
                "verse_end": "verse_52"
            },
            {
                "id": "1",
                "index": "070",
                "name": "المعارج",
                "translation": "Al-Ma'arij",
                "page": "531",
                "verse_start": "verse_1",
                "verse_end": "verse_44"
            },
            {
                "id": "1",
                "index": "071",
                "name": "نوح",
                "translation": "Nuh",
                "page": "533",
                "verse_start": "verse_1",
                "verse_end": "verse_28"
            },
            {
                "id": "1",
                "index": "072",
                "name": "الجن",
                "translation": "Al-Jinn",
                "page": "534",
                "verse_start": "verse_1",
                "verse_end": "verse_28"
            },
            {
                "id": "1",
                "index": "073",
                "name": "المزمل",
                "translation": "Al-Muzzammil",
                "page": "537",
                "verse_start": "verse_1",
                "verse_end": "verse_20"
            },
            {
                "id": "1",
                "index": "074",
                "name": "المدثر",
                "translation": "Al-Muddaththir",
                "page": "538",
                "verse_start": "verse_1",
                "verse_end": "verse_56"
            },
            {
                "id": "1",
                "index": "075",
                "name": "القيامة",
                "translation": "Al-Qiyamah",
                "page": "540",
                "verse_start": "verse_1",
                "verse_end": "verse_40"
            },
            {
                "id": "1",
                "index": "076",
                "name": "الإنسان",
                "translation": "Al-Insan",
                "page": "542",
                "verse_start": "verse_1",
                "verse_end": "verse_31"
            },
            {
                "id": "1",
                "index": "077",
                "name": "المرسلات",
                "translation": "Al-Mursalat",
                "page": "544",
                "verse_start": "verse_1",
                "verse_end": "verse_50"
            }
        ]
    },
    {
        "juz": "30",
        "surahs": [
            {
                "id": "1",
                "index": "078",
                "name": "النبأ",
                "translation": "An-Naba",
                "page": "545",
                "verse_start": "verse_1",
                "verse_end": "verse_40"
            },
            {
                "id": "1",
                "index": "079",
                "name": "النازعات",
                "translation": "An-Naziat",
                "page": "547",
                "verse_start": "verse_1",
                "verse_end": "verse_46"
            },
            {
                "id": "1",
                "index": "080",
                "name": "عبس",
                "translation": "Abasa",
                "page": "548",
                "verse_start": "verse_1",
                "verse_end": "verse_42"
            },
            {
                "id": "1",
                "index": "081",
                "name": "التكوير",
                "translation": "At-Takwir",
                "page": "550",
                "verse_start": "verse_1",
                "verse_end": "verse_29"
            },
            {
                "id": "1",
                "index": "082",
                "name": "الإنفطار",
                "translation": "Al-Infitar",
                "page": "551",
                "verse_start": "verse_1",
                "verse_end": "verse_19"
            },
            {
                "id": "1",
                "index": "083",
                "name": "المطففين",
                "translation": "Al-Mutaffifin",
                "page": "552",
                "verse_start": "verse_1",
                "verse_end": "verse_36"
            },
            {
                "id": "1",
                "index": "084",
                "name": "الإنشقاق",
                "translation": "Al-Inshiqaq",
                "page": "553",
                "verse_start": "verse_1",
                "verse_end": "verse_25"
            },
            {
                "id": "1",
                "index": "085",
                "name": "البروج",
                "translation": "Al-Buruj",
                "page": "554",
                "verse_start": "verse_1",
                "verse_end": "verse_22"
            },
            {
                "id": "1",
                "index": "086",
                "name": "الطارق",
                "translation": "At-Tariq",
                "page": "555",
                "verse_start": "verse_1",
                "verse_end": "verse_17"
            },
            {
                "id": "1",
                "index": "087",
                "name": "الأعلى",
                "translation": "Al-Ala",
                "page": "556",
                "verse_start": "verse_1",
                "verse_end": "verse_19"
            },
            {
                "id": "1",
                "index": "088",
                "name": "الغاشية",
                "translation": "Al-Ghashiyah",
                "page": "556",
                "verse_start": "verse_1",
                "verse_end": "verse_26"
            },
            {
                "id": "1",
                "index": "089",
                "name": "الفجر",
                "translation": "Al-Fajr",
                "page": "557",
                "verse_start": "verse_1",
                "verse_end": "verse_30"
            },
            {
                "id": "1",
                "index": "090",
                "name": "البلد",
                "translation": "Al-Balad",
                "page": "559",
                "verse_start": "verse_1",
                "verse_end": "verse_20"
            },
            {
                "id": "1",
                "index": "091",
                "name": "الشمس",
                "translation": "Ash-Shams",
                "page": "559",
                "verse_start": "verse_1",
                "verse_end": "verse_15"
            },
            {
                "id": "1",
                "index": "092",
                "name": "الليل",
                "translation": "Al-Lail",
                "page": "560",
                "verse_start": "verse_1",
                "verse_end": "verse_21"
            },
            {
                "id": "1",
                "index": "093",
                "name": "الضحى",
                "translation": "Ad-Duha",
                "page": "561",
                "verse_start": "verse_1",
                "verse_end": "verse_11"
            },
            {
                "id": "1",
                "index": "094",
                "name": "الشرح",
                "translation": "Ash-Sharh",
                "page": "561",
                "verse_start": "verse_1",
                "verse_end": "verse_8"
            },
            {
                "id": "1",
                "index": "095",
                "name": "التين",
                "translation": "At-Tin",
                "page": "562",
                "verse_start": "verse_1",
                "verse_end": "verse_8"
            },
            {
                "id": "1",
                "index": "096",
                "name": "العلق",
                "translation": "Al-Alaq",
                "page": "562",
                "verse_start": "verse_1",
                "verse_end": "verse_19"
            },
            {
                "id": "1",
                "index": "097",
                "name": "القدر",
                "translation": "Al-Qadr",
                "page": "563",
                "verse_start": "verse_1",
                "verse_end": "verse_5"
            },
            {
                "id": "1",
                "index": "098",
                "name": "البينة",
                "translation": "Al-Bayinah",
                "page": "563",
                "verse_start": "verse_1",
                "verse_end": "verse_8"
            },
            {
                "id": "1",
                "index": "099",
                "name": "الزلزلة",
                "translation": "Az-Zalzalah",
                "page": "564",
                "verse_start": "verse_1",
                "verse_end": "verse_8"
            },
            {
                "id": "1",
                "index": "100",
                "name": "العاديات",
                "translation": "Al-Adiyat",
                "page": "564",
                "verse_start": "verse_1",
                "verse_end": "verse_11"
            },
            {
                "id": "1",
                "index": "101",
                "name": "القارعة",
                "translation": "Al-Qariah",
                "page": "565",
                "verse_start": "verse_1",
                "verse_end": "verse_11"
            },
            {
                "id": "1",
                "index": "102",
                "name": "التكاثر",
                "translation": "Al-Takathur",
                "page": "565",
                "verse_start": "verse_1",
                "verse_end": "verse_8"
            },
            {
                "id": "1",
                "index": "103",
                "name": "العصر",
                "translation": "Al-Asr",
                "page": "566",
                "verse_start": "verse_1",
                "verse_end": "verse_3"
            },
            {
                "id": "1",
                "index": "104",
                "name": "الهمزة",
                "translation": "Al-Humazah",
                "page": "566",
                "verse_start": "verse_1",
                "verse_end": "verse_9"
            },
            {
                "id": "1",
                "index": "105",
                "name": "الفيل",
                "translation": "Al-Fil",
                "page": "566",
                "verse_start": "verse_1",
                "verse_end": "verse_5"
            },
            {
                "id": "1",
                "index": "106",
                "name": "قريش",
                "translation": "Quraish",
                "page": "567",
                "verse_start": "verse_1",
                "verse_end": "verse_4"
            },
            {
                "id": "1",
                "index": "107",
                "name": "الماعون",
                "translation": "Al-Ma'un",
                "page": "567",
                "verse_start": "verse_1",
                "verse_end": "verse_7"
            },
            {
                "id": "1",
                "index": "108",
                "name": "الكوثر",
                "translation": "Al-Kauthar",
                "page": "567",
                "verse_start": "verse_1",
                "verse_end": "verse_3"
            },
            {
                "id": "1",
                "index": "109",
                "name": "الكافرون",
                "translation": "Al-Kafirun",
                "page": "568",
                "verse_start": "verse_1",
                "verse_end": "verse_6"
            },
            {
                "id": "1",
                "index": "110",
                "name": "النصر",
                "translation": "An-Nasr",
                "page": "568",
                "verse_start": "verse_1",
                "verse_end": "verse_3"
            },
            {
                "id": "1",
                "index": "111",
                "name": "المسد",
                "translation": "Al-Masad",
                "page": "568",
                "verse_start": "verse_1",
                "verse_end": "verse_5"
            },
            {
                "id": "1",
                "index": "112",
                "name": "الإخلاص",
                "translation": "Al-Ikhlas",
                "page": "569",
                "verse_start": "verse_1",
                "verse_end": "verse_4"
            },
            {
                "id": "1",
                "index": "113",
                "name": "الفلق",
                "translation": "Al-Falaq",
                "page": "569",
                "verse_start": "verse_1",
                "verse_end": "verse_5"
            },
            {
                "id": "1",
                "index": "114",
                "name": "الناس",
                "translation": "An-Nas",
                "page": "569",
                "verse_start": "verse_1",
                "verse_end": "verse_6"
            }
        ]
    }
];