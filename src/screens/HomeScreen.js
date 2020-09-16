import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import Header from '../components/Header';
import SafeAreaView from 'react-native-safe-area-view';
import { useIsFocused } from '@react-navigation/native';
import BottomSheetContainer from '../components/BottomSheetContainer';


function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar {...props} /> : null;
}

const HomeScreen = ({ route }) => {


  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <FocusAwareStatusBar barStyle={'light-content'} backgroundColor={'#1C2E4A'} />
        <Header />
        <View style={styles.container}>
          <View style={{ flex: 9 }}>
            <Text>Hello</Text>
          </View>
          <View style={{ flex: 1 }}>
          </View>
        </View>
      </SafeAreaView>
      <BottomSheetContainer route={route} />
    </View>
  )

}


const styles = StyleSheet.create({
  // Screen
  container: {
    flex: 5,
    backgroundColor: 'white',
  },



})

export default HomeScreen;

/*<FocusAwareStatusBar barStyle={dark ? 'dark-content' : 'light-content'} backgroundColor={dark ? '#0E1925' : '#1C2E4A'} />
 const darkStatusBar = async () => {
    setDark(1);


  }

  const lightStatusBar = () => {
    setDark(0)

     <SafeAreaView style={{ flex: 1 }}>
        <FocusAwareStatusBar barStyle={'light-content'} backgroundColor={'#1C2E4A'} />
        <Header />
        <View style={styles.container}>
          <View style={{ flex: 9 }}>
            <Text>Hello</Text>
          </View>
          <View style={{ flex: 1 }}>
          </View>
        </View>
      </SafeAreaView>
     // {renderShadow()}
  }*/