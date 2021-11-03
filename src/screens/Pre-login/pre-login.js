import React, { useState, useEffect } from 'react';
import { Image, View, Text, ScrollView, TouchableOpacity, SafeAreaView, TouchableWithoutFeedback, Switch, FlatList, Modal, Pressable, StatusBar, ImageBackground } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import styles from './pre-loginStyle';
import { moderateScale } from 'react-native-size-matters';

import AppLogo from '../../assets/svg/applogo.svg'
import FacebookLogo from '../../assets/svg/FacebookLogo.svg'
import GoogleLogo from '../../assets/svg/GoogleLogo.svg'
import MailLogo from '../../assets/svg/MailLogo.svg'


const PreLogin = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
                <View style={styles.main}>
                    <View style={styles.upView}>
                        <AppLogo height={moderateScale(100)} />

                        <View style={styles.px45}>
                            <Text style={styles.OakH1}>
                                <Text style={styles.goldColor}>Oklahoma</Text> helping to find where to live
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.signInTxt}>Please sign up to buy your favourite homes</Text>
                        </View>

                    </View>
                    <View style={styles.DownView}>
                        <ImageBackground source={require('../../assets/png/overlayBlack.png')} resizeMode="stretch" style={styles.image}>

                            <View style={styles.btnsView}>
                                <TouchableOpacity style={styles.mt20}>
                                    <View style={styles.btns}>
                                        <GoogleLogo height={moderateScale(22)} width={moderateScale(22)} />
                                        <Text style={styles.continueTxt}>Continue with Google</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.mt20}>
                                    <View style={styles.btns}>
                                        <FacebookLogo height={moderateScale(22)} width={moderateScale(22)} />
                                        <Text style={styles.continueTxt}>Continue with Facebook</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.mt20} onPress={() => navigation.navigate('Login') }>
                                    <View style={styles.btns}>
                                        <MailLogo height={moderateScale(22)} width={moderateScale(22)} />
                                        <Text style={styles.continueTxt}>Continue with Mail</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                        </ImageBackground>
                    </View>

                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

export default PreLogin;