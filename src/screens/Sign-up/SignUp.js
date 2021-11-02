import React, { useState, useEffect } from 'react';
import { Image, View, Text, ScrollView, TouchableOpacity, SafeAreaView, TouchableWithoutFeedback, Switch, FlatList, Modal, Pressable, StatusBar, Dimensions } from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import styles from './SignUpStyle';

const SignUp = ({navigation}) => {
    return(
        <SafeAreaView style={styles.container}>
            <View>
                <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
                    <Text>Hello!</Text>
                </KeyboardAwareScrollView>
            </View>
        </SafeAreaView>
    )
}

export default SignUp;