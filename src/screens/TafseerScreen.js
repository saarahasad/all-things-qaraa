import React, { useState, useEffect, useContext } from 'react'
import {Platform,StyleSheet, Text, View, StatusBar, Dimensions, Image } from 'react-native'
import BottomSheet from 'reanimated-bottom-sheet'
import Header from '../components/Header';
import Player from './Player';
import SafeAreaView from 'react-native-safe-area-view';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';
import Animated from 'react-native-reanimated';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import { useFocusEffect } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CurrentPlaying from '../components/CurrentPlaying';

const { height } = Dimensions.get('window');

const snapPoints = [
  55,
  Platform.OS === 'ios' ? height - Constants.statusBarHeight - Constants.statusBarHeight / 2 : height
];

function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar {...props} /> : null;
}


const TafseerScreen = ({ navigation, route }) => {
  const { qari, surah, ayah, page } = route.params;
  const [favFill, setFavFill] = useState(false);
  const fall = new Animated.Value(1);
  const animatedHeaderContentOpacity = Animated.interpolate(fall, {
    inputRange: [0.75, 1],
    outputRange: [0, 1],
    extrapolate: Animated.Extrapolate.CLAMP,
  });
  const bs = React.createRef()
  const onHeaderPress = () => {
    bs.current.snapTo(1);
  }

  useEffect(() => {
    bs.current.snapTo(0);
  }, []);

  const renderInner = () => {
    const animatedBackgroundOpacity = Animated.sub(
      1, animatedHeaderContentOpacity
    );
    const animatedContentOpacity = Animated.interpolate(fall, {
      inputRange: [0, 1],
      outputRange: [1, 0],
      extrapolate: Animated.Extrapolate.CLAMP,
    });

    return (
      <Animated.View style={[styles.contentContainer]}>
        <Animated.View
          style={[
            styles.contentBackground,
            { opacity: animatedBackgroundOpacity },
          ]}
        />
        <Animated.View style={{ opacity: animatedContentOpacity, }}>
          <Player storedReciter={qari} storedSurah={surah} storedAyah={ayah} storedPage={page} />
        </Animated.View>
      </Animated.View>
    );
  }

  const renderHeader = () => {

    const animatedBackgroundOpacity = Animated.sub(1, animatedHeaderContentOpacity);
    return (
      <TouchableWithoutFeedback
        key={'header-container'}
        onPress={onHeaderPress}
      >
        <Animated.View style={styles.headerContainer}>
          <Animated.View
            intensity={100}
            tint={'default'}
            style={[
              styles.headerContentContainer,
              {
                opacity: animatedHeaderContentOpacity,
                backgroundColor: 'white'
              },
            ]}
          >
            <View style={styles.headerTopBorder} />
            <TouchableOpacity style={styles.headerActionButton} onPress={() => setFavFill(!favFill)}>
              {favFill == true ?
                <MaterialIcons name="favorite" size={24} color="black" /> :
                <MaterialIcons name="favorite-border" size={24} color="black" />
              }

            </TouchableOpacity>
            <Text style={styles.surahTitleSmall}> <CurrentPlaying /></Text>
            <TouchableOpacity style={styles.headerActionButton}>
              <Entypo name="controller-play" size={33} color="black" />
            </TouchableOpacity>

          </Animated.View>
        </Animated.View>
      </TouchableWithoutFeedback>);
  }

  const renderShadow = () => {
    const animatedShadowOpacity = Animated.interpolate(fall, {
      inputRange: [0, 1],
      outputRange: [0.5, 0],
    })
    return (
      <Animated.View
        pointerEvents="none"
        style={[
          styles.shadowContainer,
          {
            opacity: animatedShadowOpacity,
          },
        ]}
      />
    )
  }

  const thisfunc = () => {
    navigation.setOptions({
      tabBarVisible: false,
    })
  }

  const thisj = () => {
    navigation.setOptions({
      tabBarVisible: true,
    })

  }

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <FocusAwareStatusBar barStyle={'light-content'} backgroundColor={'#1C2E4A'} />
        <Header />

        <View style={styles.container}>
          <View style={{ flex: 1, marginHorizontal: 20, position: 'absolute', left: 0, right: 0, bottom: 0, top: 0 }}>
            <Image resizeMode={'contain'} source={require('../../assets/page239.png')} style={{ flex: 1, width: '100%', height: '100%', position: 'absolute', }} />
          </View>
        </View>
        <View style={{ height: 55 }}>

        </View>

      </SafeAreaView>
      {renderShadow()}
      <BottomSheet
        ref={bs}
        renderContent={renderInner}
        renderHeader={renderHeader}
        callbackNode={fall}
        initialSnap={0}
        snapPoints={snapPoints}
        enabledHeaderGestureInteraction={true}
        enabledContentTapInteraction={false}
        enabledContentGestureInteraction={true}
        // onOpenStart={thisfunc}
        // onCloseStart={thisj}
        callbackThreshold={0.5}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  // Screen
  container: {
    flex: 4,
    backgroundColor: 'white',

  },
  // Shadow
  shadowContainer: {
    ...StyleSheet.absoluteFill,
    backgroundColor: '#000',
  },
  // Content
  contentContainer: {
    alignItems: 'center',
    height: snapPoints[1] - snapPoints[0],
    overflow: 'visible',
    backgroundColor: 'white',
    borderTopLeftRadius: 20, borderTopRightRadius: 20, elevation: 20
  },

  contentBackground: {
    backgroundColor: '#fff',

  },

  // Header
  headerContainer: {
    height: snapPoints[0],
  },
  headerBackground: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',

  },

  headerContentContainer: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingRight: 20,
    paddingLeft: 20,

  },

  headerTopBorder: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    opacity: 0.5,
    height: 0.25,
    backgroundColor: '#9B9B9B',
  },

  headerActionButton: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 50,
    minWidth: 50,
    zIndex: 100
  },

  // Handler
  handlerContainer: {
    position: 'absolute',
    alignSelf: 'center',
    top: 10,
    height: 20,
    width: 20,
  },

  handlerBar: {
    position: 'absolute',
    backgroundColor: '#D1D1D6',
    top: 5,
    borderRadius: 3,
    height: 5,
    width: 20,
  },
  surahTitleSmall: {
    flexGrow: 1,
    color: '#333',
    fontSize: 11,
    fontFamily: 'roboto-regular', textAlign: 'center'
  },

})

export default TafseerScreen;

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