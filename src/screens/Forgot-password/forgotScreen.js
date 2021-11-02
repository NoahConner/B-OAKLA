import React, { useState, useEffect } from 'react';
import { Image, View, Text, ScrollView, TouchableOpacity, SafeAreaView, TouchableWithoutFeedback, Switch, FlatList, Modal, Pressable, StatusBar, Dimensions } from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import styles from './forgotStyle';

const ForgotPassword = ({navigation}) => {
    return(
        <SafeAreaView>
            <View style={styles.container}>
                <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
                    <Text>Hello!</Text>
                </KeyboardAwareScrollView>
            </View>
        </SafeAreaView>
    )
}

export default ForgotPassword;