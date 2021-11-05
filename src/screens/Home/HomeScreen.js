import React, { useState, useEffect } from 'react';
import { Image, View, Text, ScrollView, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import s from './HomeStyle';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { moderateScale } from 'react-native-size-matters';

import LikeDislike from './LikeDislikeScreen/LikeDislikeScreenTab'
import OTAB from './O-tab/O-tabScreen'
import Profile from './ProfileScreen/ProfileScreenTab'
import Search from './SearchScreen/SearchScreenTab'
import Wishlist from './WishlistScreeen/WishlistScreeen'

import OaklaO from '../../assets/svg/oaklaO.svg'
import Magnifine from '../../assets/svg/magnifine.svg'
import LikeDislikeIcon from '../../assets/svg/LIkeDislike.svg'
import Heart from '../../assets/svg/heart.svg'
import Men from '../../assets/svg/men.svg'

const Tab = createBottomTabNavigator();
const Home = ({ navigation }) => {
    return (
        <Tab.Navigator
            tabBarOptions={{ showLabel: false }}
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: [
                    {
                        display: "flex",
                        position: 'absolute',
                        bottom: 0,
                        backgroundColor: '#000',
                        width: '96%',
                        marginLeft: '2%',
                        marginBottom: '2%',
                        borderRadius: moderateScale(15),
                        height: moderateScale(60)
                    },
                    null
                ]
            }}
        >
            <Tab.Screen name="OTAB" component={OTAB}
                navigation={navigation}
                options={
                    {
                        tabBarIcon: ({ focused }) => (

                            <View style={[focused ? s.borrderd : null,s.viewr]}>

                                <OaklaO height={moderateScale(30)} width={moderateScale(20)} fill={focused ? '#B48618' : '#fff'} />

                            </View>

                        )
                    }
                }
            />
            <Tab.Screen name="Search" component={Search}
                navigation={navigation}
                options={
                    {
                        tabBarIcon: ({ focused }) => (

                            <View style={[focused ? s.borrderd : null,s.viewr]}>

                                <Magnifine height={moderateScale(40)} width={moderateScale(23)} fill={focused ? '#B48618' : '#fff'} />

                            </View>

                        )
                    }
                }
            />
            <Tab.Screen name="LikeDislike" component={LikeDislike}
                navigation={navigation}
                options={
                    {
                        tabBarIcon: ({ focused }) => (

                            <View style={[focused ? s.borrderd : null,s.viewr]}>

                                <LikeDislikeIcon height={moderateScale(30)} width={moderateScale(27)} fill={focused ? '#B48618' : '#fff'} />

                            </View>

                        )
                    }
                }
            />
            <Tab.Screen name="Wishlist" component={Wishlist}
                navigation={navigation}
                options={
                    {
                        tabBarIcon: ({ focused }) => (

                            <View style={[focused ? s.borrderd : null,s.viewr]}>

                                <Heart height={moderateScale(30)} width={moderateScale(25)} fill={focused ? '#B48618' : '#fff'} />

                            </View>

                        )
                    }
                }
            />
            <Tab.Screen name="Profile" component={Profile}

                navigation={navigation}
                options={
                    {
                        tabBarIcon: ({ focused }) => (

                            <View style={[focused ? s.borrderd : null,s.viewr]}>
                                <Men height={moderateScale(27)} width={moderateScale(27)} />
                            </View>

                        )
                    }
                } />
        </Tab.Navigator>
    )
}


export default Home;