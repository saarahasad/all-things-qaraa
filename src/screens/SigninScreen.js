import React from 'react';
import { View, StyleSheet, Image, StatusBar } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Input, Button, Text } from 'react-native-elements';
import SafeAreaView from 'react-native-safe-area-view';

const SigninScreen = ({ navigation }) => {
    const { signIn } = React.useContext(AuthContext);
    return (
        <SafeAreaView style={styles.container}>
             <StatusBar barStyle="dark-content" backgroundColor="white" />
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => navigation.push('SigninScreen')}>
                    <View style={[styles.underlineTextContainer,{ marginLeft: 20}]}>
                        <Text style={styles.button} >Sign in</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.push('SignupScreen')} >
                    <Text style={[styles.button,{  marginLeft: 10,}]}>Sign up</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../../assets/signin_image.png')}
                />
            </View>
            <View style={styles.formContainer}>
                <Text style={{ marginTop: 50, fontSize: 25,   fontFamily:'opensans-regular' }}>Welcome Back</Text>
                <View style={{ width: '80%', marginTop: 30 }}>
                    <Input
                        placeholder='Email'
                    />
                </View>
                <View style={{ width: '80%' }}>
                    <Input
                        placeholder='Password'
                    />
                </View>
                <Button
                    buttonStyle={styles.loginButton}
                    title="Login"
                    titleStyle={{
                        textAlign: 'center'
                    }}
                    onPress={() => signIn()}
                />
                <TouchableOpacity style={{flex:1, marginTop:30}} onPress={() => navigation.push('SignupScreen')}>
                    <Text style={{fontSize:14,  fontFamily:'roboto-regular',fontWeight:'700'}}>New User? Sign up.</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: 50,
        marginLeft: 10
    },
    imageContainer: {
        flex: 1,
        alignItems: 'center'
    },
    formContainer:{
        flex: 5,
        flexDirection: 'column',
        alignItems: 'center'
    },
    button: {
        padding: 8,
        fontSize: 16,
        fontFamily:'roboto-regular'
    },
    underlineTextContainer: {
        marginLeft: 20,
        height: 35,
        borderBottomWidth: 2,
        borderBottomColor: '#C70D3A',
    },
    loginButton: {
        marginTop: 20,
        borderRadius: 15,
        backgroundColor: '#23395D',
        width: 100,
        fontFamily:'opensans-regular'
    }
});

export default SigninScreen;