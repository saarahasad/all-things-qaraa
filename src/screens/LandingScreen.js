import React from 'react';
import { View, StyleSheet, Image,Dimensions,StatusBar } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { useIsFocused } from '@react-navigation/native';

const { height } = Dimensions.get("window");

function FocusAwareStatusBar(props) {
    const isFocused = useIsFocused();
    return isFocused ? <StatusBar {...props} /> : null;
  }
const LandingScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <FocusAwareStatusBar barStyle="dark-content" backgroundColor="white" />
            <View style={{ flex: 3, alignItems: 'center',flexDirection:'column', justifyContent:'flex-end',  }}>
                <View style={styles.imageContainer}>
                    <Image
                        style={{
                            width: '100%',
                            height: '100%',
                            resizeMode: 'cover',
                        }}
                        source={require('../../assets/circular_logo.png')}
                    />
                </View>
            </View>

            <View style={styles.titleContainer}>
                <Text style={{fontFamily:'roboto-regular', fontSize:20, color:'black'}}>ALL THINGS QA’RAA</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    buttonStyle={styles.loginButton}
                    title="Log in"
                    titleStyle={{
                        textAlign: 'center',
                        color: 'black'
                    }}
                    onPress={() => navigation.push('SigninScreen')}
                />
                <Button
                    buttonStyle={styles.signupButton}
                    title="Sign up"
                    titleStyle={{alignItems:'center',
                        textAlign: 'center',
                        color:'white'
                    }}
                    onPress={() => navigation.push('SignupScreen')}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
    },
    imageContainer: {
        alignItems: 'center',
        width: 237,
        height: 223,
    },
    titleContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    buttonContainer: {
        flex: 2,
        alignItems:'center',
        justifyContent: 'flex-start',
        paddingTop:35,
    },
    loginButton: {
        marginTop: 20,
        borderRadius: 5,
        backgroundColor: 'transparent',
        width: 200,
        height:45,
        borderColor:'#1C2E4A',
        borderWidth:1.7,
        fontFamily: 'opensans-regular',
        alignItems:'center'
    },
    signupButton: {
        marginTop: 20,
        borderRadius: 5,
        backgroundColor: '#1C2E4A',
        height:45,
        width: 200,
        fontFamily: 'opensans-regular',
        alignItems:'center'
    }
});

export default LandingScreen;