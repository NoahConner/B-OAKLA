import React, { useState, useEffect } from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, SafeAreaView, TouchableWithoutFeedback, Switch, FlatList, Modal, Pressable, StatusBar, Dimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import s from './NewPasswordStyle';
import LoginHeader from '../../components/headers/LoginHeader'
import { Input } from 'react-native-elements';

const NewPassword = ({ navigation }) => {
    return (
        <SafeAreaView style={s.container}>
            <LoginHeader navigation={navigation} backbutton={true} sharebutton={false} logo={false} pagename={'New Password'} />
            <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
                <View style={s.main}>

                    <Text style={s.welcomB}>Create your new password</Text>

                    <View style={s.inpMain}>
                        {/* <TextInput secureTextEntry={true} style={s.input}  placeholder="Password" keyboardType="default" />
                        <TextInput secureTextEntry={true} style={s.input}  placeholder="Confirm Password" keyboardType="default" /> */}

                        <Input
                            placeholder='Password'
                            inputStyle={s.inpStyle}
                            inputContainerStyle={s.inpConStyle}
                            containerStyle={s.conStyle}
                            secureTextEntry={true}
                        />
                        <Input
                            placeholder='Confirm Password'
                            inputStyle={s.inpStyle}
                            inputContainerStyle={s.inpConStyle}
                            containerStyle={s.conStyle}
                            secureTextEntry={true}
                        />

                        <TouchableOpacity>
                            <View style={s.signInBtn}>
                                <Text style={s.signInBtnTxt}>
                                    Stay Loged In
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text style={s.logout}>
                                Logout
                            </Text>
                        </TouchableOpacity>

                    </View>

                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

export default NewPassword;