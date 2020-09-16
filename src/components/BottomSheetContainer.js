

import React, { useCallback, useEffect } from 'react'
import { StyleSheet, Text, View, StatusBar, Dimensions } from 'react-native'
import BottomSheet from 'reanimated-bottom-sheet'
import Player from '../screens/Player';
import { Entypo } from '@expo/vector-icons';
import Animated from 'react-native-reanimated';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import CurrentPlaying from './CurrentPlaying';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Favourite from './Favourite';
const { height } = Dimensions.get('window');
import { useNavigation } from '@react-navigation/native';

const snapPoints = [
  55,
  Platform.OS === 'ios' ? height : height
];

const BottomSheetContainer = ({ route }) => {
  const { qari, surah, ayah, page } = route.params;
  const navigation = useNavigation();

  React.useEffect(() => {
    bs.current.snapTo(0);
  }, []);

  console.log("BottomSheetContainer SCREEN");

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

  const renderInner = useCallback(
    () => {
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
    }, [qari, surah, ayah, page]
  )

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
            <Favourite storedReciter={qari} storedSurah={surah} storedAyah={ayah} storedPage={page} />
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
    <>
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
        onOpenStart={thisfunc}
        onCloseStart={thisj}

      />
    </>



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

export default React.memo(BottomSheetContainer);
