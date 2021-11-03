import React, { useState, useEffect } from 'react';
import { Image, View, Text, ScrollView, TouchableOpacity, SafeAreaView, TextInput  } from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import s from './LoginStyle';
import LoginHeader from '../../components/headers/LoginHeader'

const Login = ({navigation}) => {
    return(
        <SafeAreaView style={s.container}>
            <LoginHeader navigation={navigation} backbutton={true} sharebutton={false} logo={true} pagename={false} />
            <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
                <View style={s.main}>

                    <Text style={s.welcomB}>Welcome Back!</Text>
                    <Text style={s.signInP}>Please sign In to your account</Text>

                    <View style={s.inpMain}>
                        <TextInput
                            style={s.input}
                            placeholder="Email Address"
                            keyboardType="default"
                        />
                        <TextInput secureTextEntry={true} style={s.input}  placeholder="Password" keyboardType="default" />
                        <TouchableOpacity onPress={()=> navigation.navigate('ForgotPassword')}>
                            <Text style={s.forgotDiv}>Forgot Password?</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={s.signInBtn}>
                                <Text style={s.signInBtnTxt}>
                                    Sign In
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <View style={s.pleaseSignView}>
                            {/* <Text>New here? Plaase</Text> <TouchableOpacity><Text style={s.pleaseSignS}>Sign Up</Text></TouchableOpacity> */}
                            <Text>New here? Please</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}><Text style={s.pleaseSignS}>Sign Up</Text></TouchableOpacity>
                        </View>
                    </View>

                </View>        
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

export default Login;