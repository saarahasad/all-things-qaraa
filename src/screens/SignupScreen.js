import React from 'react';
import { View, StyleSheet, Image,StatusBar } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Input, Button, Text } from 'react-native-elements';
import SafeAreaView from 'react-native-safe-area-view';

const SignupScreen = ({ navigation }) => {
    const { signUp } = React.useContext(AuthContext);
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="white" />
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => navigation.push('SigninScreen')}>
                    <Text style={[styles.button, { marginLeft: 20 }]} >Sign in</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={{marginLeft: 10}} onPress={() => navigation.push('SignupScreen')} >
                    <View style={styles.underlineTextContainer}>
                        <Text style={[styles.button, {  }]}>Sign up</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../../assets/signin_image.png')}
                />
            </View>
            <View style={styles.formContainer}>
                <Text style={{ marginTop: 50, fontSize: 25,fontFamily:'opensans-regular' }}>Create Account</Text>
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
                    buttonStyle={styles.loginButtion}
                    title="Sign up"
                    titleStyle={{
                        textAlign: 'center'
                    }}
                    onPress={() => signUp()}
                />
                 <TouchableOpacity style={{flex:1, marginTop:30}} onPress={() => navigation.push('SigninScreen')}>
                    <Text style={{fontSize:14,  fontFamily:'roboto-regular',fontWeight:'700'}}>Existing User? Log in.</Text>
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
    formContainer: {
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

        height: 35,
        borderBottomWidth: 2,
        borderBottomColor: '#C70D3A',
    },
    loginButtion: {
        marginTop: 20,
        borderRadius: 15,
        backgroundColor: '#23395D',
        width: 100,
        fontFamily:'opensans-regular'
    }
});
export default SignupScreen;