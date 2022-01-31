import React, { useContext } from 'react';
import { ActivityIndicator, Text, View, Dimensions, Animated, PanResponder, Modal, Pressable } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import AppLogo from '../../../assets/svg/logo2.svg'
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import s from './O-tabStyle'
import LinearGradient from 'react-native-linear-gradient';
import { Image, Button } from 'react-native-elements';
import Tips from '../../Tips/TipsScreen'
import Guide from '../../Guide/Guide';
import Filters from '../../../components/Filters/Filters'
import AppContext from '../../../components/Appcontext/contextApi';
import { BottomNavigation } from 'react-native-paper';
import Swiper from 'react-native-deck-swiper'

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width
const Users = [
    {
        id: "1",
        uri: 'https://wallpaperaccess.com/full/3060214.jpg',
        price: '50k',
        address: '770 West Senna Ave. Spiro, OK 74959 3 bd, 2 bath, 1360 sqft'
    },
    {
        id: "2",
        uri: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        price: '30k',
        address: '770 West Senna Ave. Spiro, OK 74959'
    },
    {
        id: "3",
        uri: 'https://wallpapercave.com/wp/wp2124316.jpg',
        price: '90k',
        address: '770 West Senna Ave. Spiro, OK 74959 3 bd, 2 bath, 1360 sqft'
    },
    {
        id: "4",
        uri: 'https://lh3.googleusercontent.com/proxy/uzjDkVx9OZBnpXRQSUEt-GrytpK_XhzcY5pzLgFvldYlsGOOSsT_BhI-7zdo-SBDY9NIMbCwrgSwETjUWgVjdZwVupPZd-NyxotR9nuyl4e-_c0G_fGx3BuDS-h1hqxvd7KlbDL7hcXOSnVWSUBlp7yblryEEIk',
        price: '10k',
        address: '770 West Senna Ave. Spiro, OK 74959 3 bd, 2 bath, 1360 sqft'
    },
    {
        id: "5",
        uri: 'https://www.setaswall.com/wp-content/uploads/2017/06/House-Wallpapers-37-1920-x-1200.jpg',
        price: '25k',
        address: '770 West Senna Ave. Spiro, OK 74959 3 bd, 2 bath, 1360 sqft'
    },
]


// demo purposes only
function* range(start, end) {
    for (let i = start; i <= end; i++) {
        yield i
    }
}
export default class OTAB extends React.Component {
    
    constructor() {
        super()

        this.position = new Animated.ValueXY()
        this.state = {
            currentIndex: 0,
            modalVisible: true,

            cards: [...range(1, 50)],
            swipedAllCards: false,
            swipeDirection: '',
            cardIndex: 0,
            pidton: new Animated.Value(0),
            pidtonRed: new Animated.Value(0),
            opacity: new Animated.Value(1),
            swipedCard: 0
        }

        this.rotate = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: ['-15deg', '0deg', '15deg'],
            extrapolate: 'clamp'
        })

        this.rotateAndTranslate = {
            transform: [
                {
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


        this.likeOpacity0 = this.state.pidton.interpolate({
            inputRange: [-20, 0, 20],
            outputRange: [0, 0, 1],
            extrapolate: 'clamp'
        })
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
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

    renderUsers = (navigation) => {

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
                        </Animated.View>

                        <Animated.View style={{ opacity: this.dislikeOpacity, position: 'absolute', top: moderateScale(20), left: moderateScale(20), zIndex: 1000, backgroundColor: '#ff000052', height: '100%', width: '100%', borderRadius: moderateScale(20) }}>

                        </Animated.View>

                        <Animated.View style={s.cardDetails}>
                            <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 1, y: 1 }} colors={['transparent', 'transparent', '#000']} style={{ height: '100%', borderRadius: 20 }}>
                                <View style={s.AddView}>
                                    <Text style={s.price}>${item.price}</Text>
                                    <Text style={s.address}>{item.address}</Text>
                                </View>
                            </LinearGradient>
                        </Animated.View>

                        <Animated.View style={s.hearted}>
                            <TouchableOpacity style={s.heret}>
                                <Icon name="heart-outline" size={moderateScale(25)} color="#B48618" />
                            </TouchableOpacity>
                        </Animated.View>

                        <Animated.View style={[s.hearted, s.hert]}>
                            <TouchableOpacity style={[s.hereto]} onPress={() => navigation.navigate('HomeInner')}>

                            </TouchableOpacity>
                        </Animated.View>

                        <Image
                            source={{ uri: item.uri }}
                            style={{ height: '100%', width: '100%', resizeMode: 'cover', borderRadius: moderateScale(20) }}
                            PlaceholderContent={<ActivityIndicator />}
                        />

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
                        <Animated.View style={{ opacity: 0, position: 'absolute', top: moderateScale(20), left: moderateScale(20), zIndex: 1000, backgroundColor: '#00800052', height: '100%', width: '100%', borderRadius: moderateScale(20) }}></Animated.View>

                        <Animated.View style={{ opacity: 0, position: 'absolute', top: moderateScale(20), left: moderateScale(20), zIndex: 1000, backgroundColor: '#ff000052', height: '100%', width: '100%', borderRadius: moderateScale(20) }}></Animated.View>
                        <Animated.View style={s.cardDetails}>
                            <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 1, y: 1 }} colors={['transparent', 'transparent', '#000']} style={{ height: '100%', borderRadius: 20 }}>
                                <View style={s.AddView}>
                                    <Text style={s.price}>${item.price}</Text>
                                    <Text style={s.address}>{item.address}</Text>
                                </View>
                            </LinearGradient>
                        </Animated.View>

                        <Animated.View style={s.hearted}>
                            <TouchableOpacity style={s.heret}>
                                <Icon name="heart-outline" size={moderateScale(25)} color="#B48618" />
                            </TouchableOpacity>
                        </Animated.View>

                        <Image
                            source={{ uri: item.uri }}
                            style={{ height: '100%', width: '100%', resizeMode: 'cover', borderRadius: moderateScale(20) }}
                            PlaceholderContent={<ActivityIndicator />}
                        />

                    </Animated.View>
                )
            }
        }).reverse()
    }



    // 8909

    onSwiped = (type) => {
        console.log(`on swiped ${type}`)
        if (type != undefined) {
            this.setState({ swipedCard: type + 1 })
        }
    }

    getCardsCords = (e, i) => {
        this.onSwiped(i)
        if (typeof (e) == 'number') {
            if (e < 0) {

                Animated.timing(
                    this.state.pidton,
                    {
                        toValue: 1,
                        duration: 130,
                    }
                ).start();
                Animated.timing(
                    this.state.pidtonRed,
                    {
                        toValue: 0,
                        duration: 0,
                    }
                ).start();

                Animated.timing(
                    this.state.opacity,
                    {
                        toValue: 0,
                        duration: 150,
                    }
                ).start();
            }
            if (e > 0) {
                Animated.timing(
                    this.state.pidtonRed,
                    {
                        toValue: 1,
                        duration: 130,
                    }
                ).start();
                Animated.timing(
                    this.state.pidton,
                    {
                        toValue: 0,
                        duration: 0,
                    }
                ).start();
                Animated.timing(
                    this.state.opacity,
                    {
                        toValue: 0,
                        duration: 150,
                    }
                ).start();
            }
        } else {
            Animated.timing(
                this.state.pidtonRed,
                {
                    toValue: 0,
                    duration: 0,
                }
            ).start();
            Animated.timing(
                this.state.pidton,
                {
                    toValue: 0,
                    duration: 0,
                }
            ).start();
            Animated.timing(
                this.state.opacity,
                {
                    toValue: 1,
                    duration: 200,
                }
            ).start();
        }
    }
    gotoInner = (e) => {
        if (e) {
            this.props.navigation.navigate('HomeInner')
        }
    }

    onSwipedAllCards = () => {
        this.setState({
            swipedAllCards: true
        })
    };

    swipeLeft = () => {
        this.swiper.swipeLeft()
    };

    static contextType = AppContext;

    render() {
        // console.log(this.context.FilterShow)
        return (
            <SafeAreaView>
                <View style={{ flex: 1 }}>
                    <View style={s.logoHeader}>
                        <View>
                            <AppLogo width={moderateScale(110)} height={moderateScale(60)} />
                        </View>
                        <TouchableOpacity onPress={() => this.context.settipsS(true)}>
                            <Icon name="information-circle-outline" size={moderateScale(25)} color="#666" />
                        </TouchableOpacity>
                    </View>
                    <View style={s.cardSwipAlb}>
                        <Animated.View style={{ ...s.hearted, opacity: this.state.opacity }} >
                            <TouchableOpacity style={s.heret} onPress={() => this.gotoInner(false)}>
                                <Icon name="heart-outline" size={moderateScale(25)} color="#B48618" />
                            </TouchableOpacity>
                        </Animated.View>
                        <Swiper
                            cards={Users}
                            renderCard={(card, cardindex) => {
                                return (
                                    <View style={s.card}>
                                        <Animated.View style={s.cardDetails} onPress={() => this.gotoInner(true)}>
                                            <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 1, y: 1 }} colors={['transparent', 'transparent', '#000']} style={{ height: '100%', borderRadius: 20 }}>
                                                <View style={s.AddView}>
                                                    <Text style={s.price}>${card.price}</Text>
                                                    <Text style={s.address}>{card.address}</Text>
                                                </View>
                                            </LinearGradient>
                                        </Animated.View>

                                        {
                                            cardindex == this.state.swipedCard ? (
                                                <>
                                                    <Animated.View style={{ opacity: this.state.pidtonRed, position: 'absolute', top: moderateScale(0), left: moderateScale(0), zIndex: 1000, backgroundColor: '#00800052', height: '100%', width: '100%', borderRadius: moderateScale(20) }}></Animated.View>
                                                    <Animated.View style={{ opacity: this.state.pidton, position: 'absolute', top: moderateScale(0), left: moderateScale(0), zIndex: 1000, backgroundColor: '#ff000052', height: '100%', width: '100%', borderRadius: moderateScale(20) }}></Animated.View>
                                                </>
                                            ) : null
                                        }

                                        <Image
                                            source={{ uri: card.uri }}
                                            style={{ height: '100%', width: '100%', resizeMode: 'cover', borderRadius: moderateScale(15) }}
                                            PlaceholderContent={<ActivityIndicator />}

                                        />
                                    </View>

                                )
                            }}
                            backgroundColor={'transparent'}
                            cardVerticalMargin={0}
                            stackSize={2}
                            infinite={true}
                            verticalSwipe={false}
                            cardStyle={{
                                height: '100%',
                                paddingVertical: 10,
                            }}
                            onSwipedRight={() => this.props.navigation.navigate('HomeInner')}
                            onTapCard={() => this.gotoInner(true)}
                            onSwiping={(e) => this.getCardsCords(e)}
                            onSwiped={(e) => this.getCardsCords(false, e)}
                            onSwipedAborted={(e) => this.getCardsCords(false, e)}
                        // showSecondCard={false}
                        >
                        </Swiper>
                    </View>

                </View>
                        <View>
                            <Tips/>
                        </View>
                        <View>
                            <Guide/>
                        </View>
                <View style={s.centeredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.context.FilterShow}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            this.setModalVisible(!this.context.FilterShow);
                        }}
                    >
                        <Filters from={'Home'} />
                    </Modal>
                </View>
            </SafeAreaView>

        );
    }
}