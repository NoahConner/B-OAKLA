import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Animated, PanResponder } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import AppLogo from '../../../assets/svg/applogo.svg'
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width
const Users = [
    { id: "1", uri: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80' },
    { id: "2", uri: 'https://images.unsplash.com/photo-1532980400857-e8d9d275d858?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80' },
    { id: "3", uri: 'https://i.pinimg.com/originals/de/68/9f/de689f4606ca47b01db489679afbe6fa.jpg' },
    { id: "4", uri: 'https://i.pinimg.com/736x/f3/6b/58/f36b5886f63b1131246fae4cc83efac8.jpg' },
    { id: "5", uri: 'https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__480.jpg' },
]

export default class OTAB extends React.Component {

    constructor() {
        super()

        this.position = new Animated.ValueXY()
        this.state = {
            currentIndex: 0
        }

        this.rotate = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: ['-30deg', '0deg', '15deg'],
            extrapolate: 'clamp'
        })

        this.rotateAndTranslate = {
            transform: [{
                rotate: this.rotate
            },
            ...this.position.getTranslateTransform()
            ]
        }

        this.likeOpacity = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: [0, 0, 1],
            extrapolate: 'clamp'
        })
        this.dislikeOpacity = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: [1, 0, 0],
            extrapolate: 'clamp'
        })

        this.nextCardOpacity = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: [1, 0, 1],
            extrapolate: 'clamp'
        })
        this.nextCardScale = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: [1, 0.8, 1],
            extrapolate: 'clamp'

        })

    }
    UNSAFE_componentWillMount() {
        this.PanResponder = PanResponder.create({

            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onPanResponderMove: (evt, gestureState) => {

                this.position.setValue({ x: gestureState.dx, y: gestureState.dy })
            },
            onPanResponderRelease: (evt, gestureState) => {

                if (gestureState.dx > 120) {
                    Animated.spring(this.position, {
                        useNativeDriver: true,
                        toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy }
                    }).start(() => {
                        this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
                            this.position.setValue({ x: 0, y: 0 })
                        })
                    })
                }
                else if (gestureState.dx < -120) {
                    Animated.spring(this.position, {
                        useNativeDriver: true,
                        toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy }
                    }).start(() => {
                        this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
                            this.position.setValue({ x: 0, y: 0 })
                        })
                    })
                }
                else {
                    Animated.spring(this.position, {
                        useNativeDriver: true,
                        toValue: { x: 0, y: 0 },
                        friction: 4
                    }).start()
                }
            }
        })
    }

    renderUsers = () => {

        return Users.map((item, i) => {


            if (i < this.state.currentIndex) {
                return null
            }
            else if (i == this.state.currentIndex) {

                return (
                    <Animated.View
                        {...this.PanResponder.panHandlers}
                        key={item.id} style={[this.rotateAndTranslate, { height: SCREEN_HEIGHT - 140, width: SCREEN_WIDTH, padding: moderateScale(20), position: 'absolute' }]}>
                        <Animated.View style={{ opacity: this.likeOpacity, position: 'absolute', top: moderateScale(20), left: moderateScale(20), zIndex: 1000, backgroundColor: '#00800052', height: '100%', width: '100%', borderRadius: moderateScale(20) }}>
                            {/* <Text style={{ borderWidth: 1, borderColor: 'green', color: 'green', fontSize: 32, fontWeight: '800', padding: 10 }}>LIKE</Text> */}

                        </Animated.View>

                        <Animated.View style={{ opacity: this.dislikeOpacity, position: 'absolute', top: moderateScale(20), left: moderateScale(20), zIndex: 1000, backgroundColor: '#ff000052', height: '100%', width: '100%', borderRadius: moderateScale(20) }}>
                            {/* <Text style={{ borderWidth: 1, borderColor: 'red', color: 'red', fontSize: 32, fontWeight: '800', padding: 10 }}>NOPE</Text> */}
                        </Animated.View>

                        <Image
                            style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: moderateScale(20) }}
                            source={{ uri: item.uri }} />

                    </Animated.View>
                )
            }
            else {
                return (
                    <Animated.View

                        key={item.id} 
                        style={[{
                            opacity: this.nextCardOpacity,
                            transform: [{ scale: this.nextCardScale }],
                            height: SCREEN_HEIGHT - 140, width: SCREEN_WIDTH, padding: moderateScale(20), position: 'absolute'
                        }]}>
                        <Animated.View style={{ opacity: 0, position: 'absolute', top: moderateScale(20), left: moderateScale(20), zIndex: 1000, backgroundColor: '#00800052', height: '100%', width: '100%', borderRadius: moderateScale(20) }}>
                            {/* <Text style={{ borderWidth: 1, borderColor: 'green', color: 'green', fontSize: 32, fontWeight: '800', padding: 10 }}>LIKE</Text> */}

                        </Animated.View>

                        <Animated.View style={{ opacity: 0, position: 'absolute', top: moderateScale(20), left: moderateScale(20), zIndex: 1000, backgroundColor: '#ff000052', height: '100%', width: '100%', borderRadius: moderateScale(20) }}>
                            {/* <Text style={{ borderWidth: 1, borderColor: 'red', color: 'red', fontSize: 32, fontWeight: '800', padding: 10 }}>NOPE</Text> */}

                        </Animated.View>

                        <Image
                            style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: moderateScale(20) }}
                            source={{ uri: item.uri }} />

                    </Animated.View>
                )
            }
        }).reverse()
    }

    render() {
        return (
            <SafeAreaView>
                <View style={{ flex: 1 }}>
                    <View style={{ height: moderateScale(70), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: moderateScale(20) }}>
                        <View>
                            <AppLogo width={moderateScale(110)} height={moderateScale(60)} />
                        </View>
                        <TouchableOpacity>
                            <Icon name="information-circle-outline" size={moderateScale(25)} color="#666" />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1 }}>
                        {this.renderUsers()}
                    </View>
                </View>
            </SafeAreaView>

        );
    }
}