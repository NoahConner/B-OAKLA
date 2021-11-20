import React, { useState, useEffect } from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, SafeAreaView, TouchableWithoutFeedback, Switch, FlatList, Modal, Pressable, StatusBar, Dimensions } from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import s from './forgotStyle';
import LoginHeader from '../../components/headers/LoginHeader'
import {  Input  } from 'react-native-elements';

const ForgotPassword = ({navigation}) => {
    return(
        <SafeAreaView style={s.container}>
            <LoginHeader navigation={navigation} backbutton={true} sharebutton={false} logo={false} pagename={'Forgot Password'} />
            <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
                <View style={s.main}>

                    <Text style={s.welcomB}>Forgot Password?</Text>
                    <Text style={s.signInP}>Reset password in two quick steps</Text>

                    <View style={s.inpMain}>
                        <Input
                            placeholder='Email Address'
                            inputStyle={s.inpStyle}
                            inputContainerStyle={s.inpConStyle}
                            containerStyle={s.conStyle}
                        />

                        <TouchableOpacity onPress={() => navigation.navigate('VerifyEmail')}>
                            <View style={s.signInBtn}>
                                <Text style={s.signInBtnTxt}>
                                    Reset Password
                                </Text>
                            </View>
                        </TouchableOpacity>

                    </View>

                </View>        
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

export default ForgotPassword;