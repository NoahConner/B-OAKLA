import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import s from './EditProfileStyle';
import { Image, Input  } from 'react-native-elements';
import LoginHeader from '../../../components/headers/LoginHeader';

const ProfileEdit = ({ navigation }) => {
    return (
        <SafeAreaView style={s.container}>
            <LoginHeader navigation={navigation} backbutton={true} sharebutton={false} logo={false} pagename={'Edit Profile'} />
            <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
                <View style={s.main}>
                    <View style={s.imageP}>
                        <Image
                            source={{ uri: 'https://www.anchormortgagellc.com/wp-content/uploads/2015/09/placeholder.png' }}
                            style={{ width: '100%', height: '100%' }}
                            resizeMode={'cover'}
                            PlaceholderContent={<ActivityIndicator />}
                        />
                    </View>
                    <View>
                        <Text style={s.name}>Change Profile</Text>
                    </View>

                    <View style={s.inpMain}>
                        <Input
                            placeholder='Name'
                            inputStyle={s.inpStyle}
                            inputContainerStyle={s.inpConStyle}
                            containerStyle={s.conStyle}
                        />
                        <Input
                            placeholder='Phone No'
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
                        <View style={s.idvider}></View>
                        <View style={[s.mt30]}>
                            <TouchableOpacity style={s.editbtn}>
                                <Text style={s.nono}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

export default ProfileEdit