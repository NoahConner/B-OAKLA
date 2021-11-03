import React, { useState, useContext } from 'react';
import { Image, View, TouchableOpacity, SafeAreaView,Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { moderateScale } from 'react-native-size-matters';
import s from './LoginHeaderStyle';

import AppLogo from '../../assets/svg/applogo.svg'
import LeftICon from '../../assets/svg/leftarrow.svg'
import ShareIcon from '../../assets/svg/shareicon.svg'

import AppContext from '../../components/Appcontext/contextApi';


const LoginHeader = ({ navigation, backbutton, sharebutton, logo, pagename }) => {
    const myContext = useContext(AppContext)
    return (
        <View style={[s.main, s.container]}>
            <View>
                {
                    backbutton ? (
                        <>
                            <TouchableOpacity style={s.backBtn} onPress={() => navigation.goBack()}>
                                <LeftICon width={moderateScale(20)} height={moderateScale(18)} />
                            </TouchableOpacity>
                        </>
                    ) : (
                        <View style={[s.backBtn, s.tf]}>

                        </View>
                    )
                }
            </View>
            <View>
                {
                    logo ? (
                        <>
                            <AppLogo width={moderateScale(100)} height={moderateScale(50)} />
                        </>
                    ) : (
                        null
                    )
                }
            </View>
            <View>
                {
                    sharebutton ? (
                        <>
                            <TouchableOpacity style={s.backBtn}>
                                <ShareIcon width={moderateScale(20)} height={moderateScale(16)} />
                            </TouchableOpacity>
                        </>
                    ) : (
                        <View style={[s.backBtn, s.tf]}>

                        </View>
                    )
                }
            </View>

            {
                pagename != '' ? (
                    <>
                        <View style={s.nameHEader}>
                            <Text style={s.nmaeTxt}>{pagename}</Text>
                        </View>
                    </>
                ) : (
                    null
                )
            }
        </View>
    )
}

export default LoginHeader;