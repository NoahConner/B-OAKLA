import React, { useState, useEffect } from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, SafeAreaView, TouchableWithoutFeedback, Switch, FlatList, Modal, Pressable, StatusBar, Dimensions } from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import s from './VerifyEmailStyle';
import LoginHeader from '../../components/headers/LoginHeader'

const VerifyEmail = ({navigation}) => {
    return(
        <SafeAreaView style={s.container}>
            <LoginHeader navigation={navigation} backbutton={true} sharebutton={false} logo={false} pagename={'Verify Your Email'} />
            <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
                <View style={s.main}>

                    <Text style={s.welcomB}>We sent a code to your email</Text>
                    {/* <Text style={s.signInP}>Enter the 6-digit verification code sent to j*********@gmail.com</Text> */}
                        <View style={s.pleaseSignView}>
                            <Text style={s.texterr}>Enter the 6-digit verification code sent to j*********@gmail.com </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}><Text style={s.pleaseSignS}>Change</Text></TouchableOpacity>
                        </View>
                    <View style={s.inpMain}>
                        <TextInput
                            style={s.input}
                            placeholder="6 Digit Code"
                            keyboardType="number-pad"
                        />
                        <TouchableOpacity style={s.resend}>
                            <Text style={s.pleaseSignS}>
                                Resend Code
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('NewPassword')}>
                            <View style={s.signInBtn}>
                                <Text style={s.signInBtnTxt}>
                                    Submit
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <View style={s.mt10}>
                            <Text style={s.texterr}>if you don`t see the email in your inbox, check your spam folder</Text>
                        </View>
                    </View>

                </View>        
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

export default VerifyEmail;