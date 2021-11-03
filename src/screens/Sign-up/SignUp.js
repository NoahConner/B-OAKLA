import React, { useState, useEffect } from 'react';
import { Image, View, Text, ScrollView, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import s from './SignUpStyle';

const SignUp = ({navigation}) => {
    return(
        <SafeAreaView style={s.container}>
            <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
                <View style={s.main}>

                    <Text style={s.welcomB}>Hello!</Text>
                    <Text style={s.signInP}>Please Sign Up to find your favourite home in Oklahoma</Text>

                    <View style={s.inpMain}>
                        <TextInput
                            style={s.input}
                            placeholder="Full Name"
                            keyboardType="default"
                        />
                        <TextInput
                            style={s.input}
                            placeholder="Email Address"
                            keyboardType="default"
                        />
                        <TextInput secureTextEntry={true} style={s.input}  placeholder="Password" keyboardType="default" />
                        
                        <View style={s.termsAgree}>
                            <Text style={s.f12}>by creating an account you agree to our</Text>
                            <TouchableOpacity><Text style={[s.pleaseSignS,s.f12]}>Terms of use</Text></TouchableOpacity>
                            <Text style={s.f12}> and </Text>
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
                            <Text>Have an Account? Plaase </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text style={s.pleaseSignS}>Sign In</Text></TouchableOpacity>
                        </View>
                    </View>

                </View>        
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

export default SignUp;