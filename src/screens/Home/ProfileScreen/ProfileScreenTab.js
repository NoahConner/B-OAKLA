import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import s from './ProfileStyle';
import LoginHeader from '../../../components/headers/LoginHeader';
import { Image } from 'react-native-elements';

import PhoneIcon from '../../../assets/svg/phone.svg'
import EnvelopIcon from '../../../assets/svg/envelope.svg'
import TermsIcon from '../../../assets/svg/terms.svg'
import PrivacyIcon from '../../../assets/svg/privacy.svg'
import LockIcon from '../../../assets/svg/lock.svg'
import LogoutIcon from '../../../assets/svg/logout.svg'

const Profile = ({ navigation }) => {
    return (
        <SafeAreaView style={s.container}>
            <LoginHeader navigation={navigation} backbutton={false} sharebutton={false} logo={false} pagename={'Account'} />
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
                        <Text style={s.name}>Jacob Gomez</Text>
                    </View>

                    <View style={s.cMain}>
                        <View style={[s.dflex,s.mb30]}>
                            <View style={s.icon}>
                                <PhoneIcon height={30} width={30} />
                            </View>
                            <View>
                                <Text style={s.pno}>Phone Number</Text>
                                <Text style={s.nono}>+123456789</Text>
                            </View>
                        </View>

                        <View style={[s.dflex,s.mb30]}>
                            <View style={s.icon}>
                                <EnvelopIcon height={30} width={30} />
                            </View>
                            <View>
                                <Text style={s.pno}>Email Address</Text>
                                <Text style={s.nono}>jacob@yahoo.com</Text>
                            </View>
                        </View>

                        <View style={[s.mb30]}>
                            <TouchableOpacity style={s.editbtn}>
                                <Text style={s.nono}>Edit Profile</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={s.idvider}></View>

                        <View>
                            <Text style={[s.pno,s.mt20,s.mb30]}>About the App</Text>
                        </View>

                        <TouchableOpacity style={[s.dflex,s.mb30]}>
                            <View style={s.icon}>
                                <TermsIcon height={30} width={30} />
                            </View>
                            <View>
                                <Text style={s.nono}>Terms of Use</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[s.dflex,s.mb30]}>
                            <View style={s.icon}>
                                <PrivacyIcon height={30} width={30} />
                            </View>
                            <View>
                                <Text style={s.nono}>Privacy Policy</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[s.dflex,s.mb30]}>
                            <View style={s.icon}>
                                <LockIcon height={30} width={30} />
                            </View>
                            <View>
                                <Text style={s.nono}>Forgot password</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[s.dflex,s.mb30]}>
                            <View style={s.icon}>
                                <LogoutIcon height={30} width={30} />
                            </View>
                            <View>
                                <Text style={[s.nono,s.logout]}>Log Out</Text>
                            </View>
                        </TouchableOpacity>

                    </View>

                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

export default Profile;