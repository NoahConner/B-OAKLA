import React, { useState, useEffect } from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, SafeAreaView, TouchableWithoutFeedback, Switch, FlatList, Modal, Pressable, StatusBar, Dimensions } from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import s from './forgotStyle';

const ForgotPassword = ({navigation}) => {
    return(
        <SafeAreaView style={s.container}>
            <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
                <View style={s.main}>

                    <Text style={s.welcomB}>Forgot Password?</Text>
                    <Text style={s.signInP}>Reset password in two quick steps</Text>

                    <View style={s.inpMain}>
                        <TextInput
                            style={s.input}
                            placeholder="Email Address"
                            keyboardType="default"
                        />

                        <TouchableOpacity>
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