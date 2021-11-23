import React, { useState, useEffect } from 'react';
import { Image, View, Text, ScrollView, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import s from './SignUpStyle';
import LoginHeader from '../../components/headers/LoginHeader'
import { Input } from 'react-native-elements';

const SignUp = ({navigation}) => {
    return(
        <SafeAreaView style={s.container}>
            <LoginHeader navigation={navigation} backbutton={true} sharebutton={false} logo={true} pagename={false} />
            <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
                <View style={s.main}>

                    <Text style={s.welcomB}>Hello!</Text>
                    <Text style={[s.signInP,s.newH]}>Please Sign Up to find your favourite home in Oklahoma</Text>

                    <View style={s.inpMain}>
                        <Input
                            placeholder='Full Name'
                            inputStyle={s.inpStyle}
                            inputContainerStyle={s.inpConStyle}
                            containerStyle={s.conStyle}
                        />
                        <Input
                            placeholder='Email Address'
                            inputStyle={s.inpStyle}
                            inputContainerStyle={s.inpConStyle}
                            containerStyle={s.conStyle}
                        />
                        <Input
                            placeholder='Password'
                            inputStyle={s.inpStyle}
                            inputContainerStyle={s.inpConStyle}
                            containerStyle={s.conStyle}
                        />
                        
                        <View style={s.termsAgree}>
                            <Text style={[s.f12,s.newH]}>by creating an account you agree to our </Text>
                            <TouchableOpacity><Text style={[s.pleaseSignS,s.f12]}>Terms of use</Text></TouchableOpacity>
                            <Text style={[s.f12,s.newH]}> and </Text>
                            <TouchableOpacity><Text style={[s.pleaseSignS,s.f12]}>Privacy Notice</Text></TouchableOpacity>
                        </View>

                        <TouchableOpacity>
                            <View style={s.signInBtn}>
                                <Text style={s.signInBtnTxt}>
                                    Sign In
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <View style={s.pleaseSignView}>
                            <Text style={s.newH}>Have an Account? Plaase </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text style={s.pleaseSignS}>Sign In</Text></TouchableOpacity>
                        </View>
                    </View>

                </View>        
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

export default SignUp;