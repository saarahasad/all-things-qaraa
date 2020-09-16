import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { SurahIndexData } from '../data/SurahIndexData';


class SurahIndexList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listsurah: this.list,
            selectedSurah: null,
            selectedId: null,
            value: ''
        };
        console.log("SURAH INDEX LIST");

    }

    onPress(item) {
        this.setState({ selectedId: item.index, selectedSurah: item.translation }, this.props.parentCallback(item.index, item.translation))
    };



    renderItem = ({ item }) => {
        const backgroundColor = item.id === this.selectedId ? "#f9f9f9" : "white";
        return (
            <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: '#F3F3F3', paddingLeft: 25, paddingVertical: 5, marginHorizontal: 8 }}>
                    <Text style={{ fontFamily: 'opensans-semibold', fontSize: 17 }}>{item.juz} {item.surahs.surah}</Text>
                </View>
                {item.surahs.map((s, i) => (
                    <TouchableOpacity key={i} onPress={this.onPress.bind(this, s)} style={{ padding: 15, flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: '#F3F3F3', borderBottomWidth: 1 }}>
                        <View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ paddingLeft: 25, paddingBottom: 2, fontFamily: 'scheherazade', fontSize: 20 }}>
                                    سورة {s.name}
                                </Text>
                                <Text style={{ paddingTop: 10, fontSize: 13, fontFamily: 'roboto-regular', paddingBottom: 10, textTransform: 'uppercase' }}> | SURAH {s.translation}</Text>

                            </View>
                            <Text style={{ fontSize: 11, paddingLeft: 25, fontFamily: 'opensans-regular' }}>AYAT {s.verse_start.split('verse_').filter(item => item)} - {s.verse_end.split('verse_').filter(item => item)}</Text>

                        </View>
                        <View>
                            <Text style={{ paddingRight: 25, paddingTop: 10, fontFamily: 'opensans-semibold', fontSize: 13 }}>
                                Page {s.page}
                            </Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>);
    }

    searchFilterFunction = text => {
        this.setState({
            value: text
        });
        const newData = SurahIndexData.filter(item => {
            const itemData = ` ${item.juz.toUpperCase()}`;
            const textData = text.toUpperCase();
            return itemData.includes(textData); // this will return true if our itemData contains the textData
        });

        this.setState({
            listsurah: newData
        });
    };

    renderHeader = () => (
        <SearchBar
            placeholder={this.props.type == 'Ayah' ? "Ayah" : "Surah name or number"}
            value={this.state.value}
            containerStyle={styles.searchcontainer}
            inputContainerStyle={{ backgroundColor: 'white', height: 55, }}
            inputStyle={{ fontSize: 15.5, color: 'black', fontFamily: 'opensans-regular' }}
            lightTheme
            onChangeText={text => this.searchFilterFunction(text)} // now we are using the correct function to capture the text
        />
    );
    getItemLayout(data, index) {
        return (
            {
                length: 54,
                offset: 54 * index,
                index
            }
        );
    }

    render() {
        return (
            <FlatList
                data={SurahIndexData}
                renderItem={this.renderItem}
                keyExtractor={(item) => item.juz}
                extraData={this.state.selectedId, this.state.selectedSurah}
           
            />
        );
    }

}

const styles = StyleSheet.create({
    searchcontainer: {
        backgroundColor: 'white',
        borderWidth: 0, //no effect
        shadowColor: 'white', //no effect
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
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
        fontFamily: 'me_quran'

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
        justifyContent: 'center'
    }


});

export default SurahIndexList;
