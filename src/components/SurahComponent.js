import React, { useState, useContext, useEffect, useCallback } from 'react';
import { View, StyleSheet, Text, StatusBar, TouchableOpacity, TouchableHighlight, FlatList, TextInput, Picker } from 'react-native';
import { SearchBar } from 'react-native-elements';


class SurahComponent extends React.Component {
    constructor(props) {
        super(props);
        this.list = this.props.list
        this.state = {
            listsurah: this.list,
            selectedSurah: null,
            selectedId: null,
            value: ''
        };
        console.log("SURAH COMPO");

    }

    onPress(item) {
        this.setState({ selectedSurah: item.name, selectedId: item.id }, this.props.parentCallback(item.id, item.name))
    };


    renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                underlayColor='#bdbdbd'
                key={(item) => item.id}
                style={{ height: 50, borderRadius: 5, marginVertical: 2, backgroundColor: this.props.type == 'Ayah' || this.props.type == 'Page' ? '#f5f5f5' : 'white', alignItems: this.props.type == 'Ayah' || this.props.type == 'Page' ? 'center' : 'flex-start', paddingLeft: this.props.type == 'Ayah' ? 0 : 25, justifyContent: 'center' }}
                onPress={this.onPress.bind(this, item)}
            >
                {this.props.type == 'Ayah' || this.props.type == 'Page' ? <Text style={styles.flatlistText}>{item.id}</Text> : <Text style={styles.flatlistText} >{item.id}. {item.name}</Text>}
            </TouchableOpacity>);
    }

    searchFilterFunction = text => {
        this.setState({
            value: text
        });
        const newData = this.list.filter(item => {
            const itemData = ` ${item.id.toUpperCase()} ${item.name.toUpperCase()}`;
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
            <View style={{ flex: 1 }}>
                <FlatList
                    keyExtractor={(item) => item.id}
                    data={this.state.listsurah}
                    renderItem={this.renderItem}
                    extraData={this.state.selectedId, this.state.selectedSurah}
                    ListHeaderComponent={this.renderHeader}
                    getItemLayout={(data, index) => this.getItemLayout(data, index)}

                    stickyHeaderIndices={[0]}
                />
            </View>
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
    flatlistText: {
        fontFamily: 'opensans-regular',
        fontSize: 17
    }


});

export default SurahComponent;
/* <ListItem
                    title={this.props.type=='Ayah'?<Text>{item.id}</Text>:<Text>{item.id}. {item.name}</Text>}
                    key={(item) => item.id}
                    containerStyle={{ paddingLeft: 25, paddingRight: 25, borderBottomColor: 'white', borderBottomWidth: 2, backgroundColor : this.props.type=='Ayah'?'#eceff1':'white'}}
                    titleStyle={{ fontSize: 15 }}
                    subtitleStyle={{ fontSize: 13 }}
                    bottomDivider
                ></ListItem>*/