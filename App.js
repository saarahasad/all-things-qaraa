import { StatusBar } from 'expo-status-bar';
import React, { useState, useContext } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AsyncStorage } from 'react-native';

import { StyleSheet, View } from 'react-native';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, CardStyleInterpolators, HeaderBackButton } from '@react-navigation/stack';

import { AuthContext } from './src/context/AuthContext';
import { Provider as PlayerProvider } from './src/context/PlayerContext';
import { Provider as TranslationProvider } from './src/context/TranslationContext';

import HomeScreen from './src/screens/HomeScreen';
import TafseerScreen from './src/screens/TafseerScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import LandingScreen from './src/screens/LandingScreen';

import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import SplashScreen from './src/screens/SplashScreen';
import ReciterList from './src/screens/ReciterList';
import PlayerList from './src/screens/PlayerList';
import SurahIndex from './src/screens/SurahIndex';

import Favourite from './src/components/Favourite';

import { Context as PlayerContext } from './src/context/PlayerContext';

import TranslationtoptabStackScreen from './src/screens/TranslationtoptabStackScreen';
import ForyoutoptabStackScreen from './src/screens/ForyoutoptabStackScreen';
import Player from './src/screens/Player';

import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import BottomSheetContainer from './src/components/BottomSheetContainer';

const fetchFonts = () => {
  return Font.loadAsync({
    'opensans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    'opensans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'opensans-semibold': require('./assets/fonts/OpenSans-SemiBold.ttf'),
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),

    'me_quran': require('./assets/fonts/me_quran.ttf'),
    'scheherazade': require('./assets/fonts/Scheherazade-Bold.ttf'),

  });

};


const Tabs = createBottomTabNavigator();
const AuthStack = createStackNavigator();
const MainStack = createStackNavigator();

const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="LandingScreen"
      component={LandingScreen}
      options={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    />
    <AuthStack.Screen
      name="SigninScreen"
      component={SigninScreen}
      options={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    />
    <AuthStack.Screen
      name="SignupScreen"
      component={SignupScreen}
      options={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}

    />
  </AuthStack.Navigator>
);


const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);
  const [fontsLoaded, setFontLoaded] = useState(false);
  const [surah, setSurah] = useState('Al-Fatiha');
  const [ayah, setAyah] = useState('1');
  const [page, setPage] = useState('1');
  const [qari, setQari] = useState('');

  const forFade = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken('token');
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken('token');
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      },
    }
  }, []);


  const load = async () => {
    try {
      const reciterAsync = await AsyncStorage.getItem('qari');
      const surahAsync = await AsyncStorage.getItem('surah');
      const ayahAsync = await AsyncStorage.getItem('ayah');
      const pageAsync = await AsyncStorage.getItem('page');
      if (reciterAsync !== null) {
        setQari(JSON.parse(reciterAsync));
      }
      if (surahAsync !== null) {
        setSurah(JSON.parse(surahAsync));
      }
      if (ayahAsync !== null) {
        setAyah(JSON.parse(ayahAsync));
      }
      if (pageAsync !== null) {
        setPage(JSON.parse(pageAsync));
      }
      else {
        console.log('empty')
      }
    } catch (e) {
      console.error(e)
    }
  }


  React.useEffect(() => {
    load();
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, []);

  if (!fontsLoaded) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} />
  }
  if (isLoading) {
    return <SplashScreen />;
  }


  const TabStack = () => {

    const getTabBarVisible = (route) => {
      const params = route.params;
      if (params) {
        if (params.tabBarVisible === false) {
          return false;
        }
      }
      return true;
    };

    return (<Tabs.Navigator
      initialRouteName="Home"

      tabBarOptions={{
        activeTintColor: '#375B95',
        inactiveTintColor: '#5A5A5A',
        tabStyle: {
          marginBottom: 5
        }
      }}
    >
      <Tabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        initialParams={{ qari: qari, surah: surah, ayah: ayah, page: page }}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" color={color} size={20} style={{ marginTop: 10 }} />
          )
        }}
      />
      <Tabs.Screen
        name="Translation"
        component={TranslationtoptabStackScreen}
        initialParams={{ qari: qari, surah: surah, ayah: ayah, page: page }}
        options={{
          tabBarLabel: 'Translation',
          tabBarIcon: ({ color, size }) => (
            <Feather name="book-open" size={19} color={color} style={{ marginTop: 10 }} />
          )
        }}
      />
      <Tabs.Screen
        name="Tafseer"
        component={TafseerScreen}
        initialParams={{ qari: qari, surah: surah, ayah: ayah, page: page }}
        options={{
          tabBarVisible: ({ route }) => getTabBarVisible(route),
          tabBarLabel: 'Tafseer',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="text" size={20} color={color} style={{ marginTop: 10 }} />
          )
        }}

      />
      <Tabs.Screen
        name="Foryou"
        component={ForyoutoptabStackScreen}
        initialParams={{ qari: qari, surah: surah, ayah: ayah, page: page }}
        options={{
          tabBarLabel: 'For you',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="star" color={color} size={20} style={{ marginTop: 10 }} />
          )
        }}
      />
      <Tabs.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" color={color} size={22} style={{ marginTop: 10 }} />
          )
        }} />
    </Tabs.Navigator>
    );
  };

  const MainStackScreen = () => {
    return (
      <MainStack.Navigator
      >
        <MainStack.Screen
          name="TabStack"
          component={TabStack}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Player"
          component={Player}
          options={{
            headerShown: false, cardOverlayEnabled: true, tabBarVisible: false,
            cardStyle: { backgroundColor: 'white' },
            cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid,
            gestureEnabled: true,
            gestureDirection: "vertical",
          }}

        />
        <MainStack.Screen
          name="ReciterList"
          component={ReciterList}
          options={{
            headerShown: false,
            gestureEnabled: true,
            gestureDirection: "horizontal",
            cardStyleInterpolator: forFade
          }}
        />
        <MainStack.Screen
          name="PlayerList"
          component={PlayerList}
          options={{
            headerShown: false,
            gestureEnabled: true,
            gestureDirection: "horizontal",
            cardStyleInterpolator: forFade
          }}
        />
        <MainStack.Screen
          name="Favourite"
          component={Favourite}
          options={{
            headerShown: false,
            gestureEnabled: true,
            gestureDirection: "horizontal",
            cardStyleInterpolator: forFade
          }}
        />
        <MainStack.Screen
          name="SurahIndex"
          component={SurahIndex}
          options={{
            headerShown: false,
            gestureEnabled: true,
            gestureDirection: "horizontal",
            cardStyleInterpolator: forFade
          }}
        />
      </MainStack.Navigator>
    )
  }



  return (
    <PlayerProvider>
      <TranslationProvider>
        <AuthContext.Provider value={authContext}>
          <NavigationContainer>
            {
              userToken ? (
                <MainStackScreen />
              ) :
                <AuthStackScreen />

            }
          </NavigationContainer>

        </AuthContext.Provider>
      </TranslationProvider>
    </PlayerProvider>

  );
}


export default App;