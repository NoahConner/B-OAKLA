import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions, TouchableOpacity, ActivityIndicator, Animated, PanResponder, TextInput, Modal } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { SafeAreaView } from 'react-native-safe-area-context';
import s from './SearchScreenTAbStyle';
import Icons from 'react-native-vector-icons/FontAwesome5';
import Iconicons from 'react-native-vector-icons/Ionicons';
import Foun from 'react-native-vector-icons/AntDesign';
import Micon from 'react-native-vector-icons/MaterialCommunityIcons';
import { moderateScale } from 'react-native-size-matters';
import { Image, SearchBar } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
import Bars from '../../../assets/svg/bars.svg'
import Upfinger from '../../../assets/svg/upFinger.svg'
import MapView, { PROVIDER_GOOGLE, Marker, ProviderPropType } from 'react-native-maps';
import LinearGradient from 'react-native-linear-gradient';
import Filters from '../../../components/Filters/Filters'
import AppContext from '../../../components/Appcontext/contextApi';
import Swiper from 'react-native-deck-swiper'
import { Input } from 'react-native-elements';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import CustomLabel from '../../../components/customs/CustomLabel';
import CustomMarker from '../../../components/customs/CustomMarker';

const { width, height } = Dimensions.get('window');
const windowWidth = Dimensions.get('window').width;
var arr = [
    {
        'image': 'https://wallpapercave.com/wp/wp2124316.jpg',
        'price': '50',
        'amenities': '3 bd, 2 bath, 1360 sqft',
        'address': '770 West Senna Ave. Spiro, OK 74959'
    },
    {
        'image': 'https://c4.wallpaperflare.com/wallpaper/846/173/87/5c1cbaf96bcec-wallpaper-preview.jpg',
        'price': '70',
        'amenities': '2 bd, 2 bath, 1360 sqft',
        'address': '770 West Senna Ave. Spiro, OK 74959'
    },
    {
        'image': 'https://wallpaperaccess.com/full/3060213.jpg',
        'price': '40',
        'amenities': '3 bd, 2 bath, 1360 sqft',
        'address': '770 East Senna Ave. Spiro, OK 74959'
    }
]

var filtersdata = [
    {
        'beds': [
            {
                'name': 'Any',
                'selected': true
            },
            {
                'name': 'Studio',
                'selected': false
            },
            {
                'name': '1',
                'selected': false
            },
            {
                'name': '2',
                'selected': true
            },
            {
                'name': '3',
                'selected': false
            },
            {
                'name': '4',
                'selected': false
            },
            {
                'name': '5+',
                'selected': false
            },
        ]
    },
    {
        'baths': [
            {
                'name': 'Any',
                'selected': false
            },
            {
                'name': '1+',
                'selected': false
            },
            {
                'name': '2+',
                'selected': false
            },
            {
                'name': '3+',
                'selected': false
            },
            {
                'name': '4+',
                'selected': false
            },
            {
                'name': '5+',
                'selected': false
            },
        ]
    },
    {
        'property-type': [
            {
                'name': 'Single Family Home',
                'selected': false
            },
            {
                'name': 'Condo / Townhouse / Co-op',
                'selected': false
            },
            {
                'name': 'Multi-Family',
                'selected': false
            },
            {
                'name': 'Manufactured/Mobile',
                'selected': false
            },
            {
                'name': 'Farm/Ranches',
                'selected': false
            },
            {
                'name': 'Land',
                'selected': false
            },
            {
                'name': 'Other',
                'selected': false
            },
        ]
    }
]

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
const ASPECT_RATIO = width / height;
const LATITUDE = 35.4828833;
const LONGITUDE = -97.7593856;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

// demo purposes only
function* range(start, end) {
    for (let i = start; i <= end; i++) {
        yield i
    }
}
export default class Search extends React.Component {

    constructor() {
        super()
        this.state = {
            currentIndex: 0,
            modalVisible: true,
            changemap: 'swip',
            arrData: filtersdata,
            priseFilter: false,
            propertyFilter: false,
            bedBathFilter: false,
            cards: [...range(1, 50)],
            swipedAllCards: false,
            swipeDirection: '',
            cardIndex: 0,
            pidton: new Animated.Value(0),
            pidtonRed: new Animated.Value(0),
            opacity: new Animated.Value(1),
            swipedCard: 0,
            nonCollidingMultiSliderValue: [1000000, 9000000],
            polo:[1000000, 9000000]
        }
        this.position = new Animated.ValueXY()
        this.rotate = this.position.x.interpolate({
            inputRange: [-width / 2, 0, width / 2],
            outputRange: ['-15deg', '0deg', '15deg'],
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
            inputRange: [-width / 2, 0, width / 2],
            outputRange: [0, 0, 1],
            extrapolate: 'clamp'
        })
        this.dislikeOpacity = this.position.x.interpolate({
            inputRange: [-width / 2, 0, width / 2],
            outputRange: [1, 0, 0],
            extrapolate: 'clamp'
        })

        this.nextCardOpacity = this.position.x.interpolate({
            inputRange: [-width / 2, 0, width / 2],
            outputRange: [1, 0, 1],
            extrapolate: 'clamp'
        })
        this.nextCardScale = this.position.x.interpolate({
            inputRange: [-width / 2, 0, width / 2],
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
                        toValue: { x: width + 100, y: gestureState.dy }
                    }).start(() => {
                        this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
                            this.position.setValue({ x: 0, y: 0 })
                        })
                    })
                }
                else if (gestureState.dx < -120) {
                    Animated.spring(this.position, {
                        useNativeDriver: true,
                        toValue: { x: -width - 100, y: gestureState.dy }
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

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    changeTypes = (p, t, i) => {
        // ui = arrData
        this.state.arrData[p][t][i].selected = !this.state.arrData[p][t][i].selected;
        this.setState({ arrData: this.state.arrData })
    }
    dataTer = (p, t) => {
        return (
            this.state.arrData[p][t].map((val2, i) => {
                return (
                    <TouchableOpacity key={i} onPress={() => this.changeTypes(p, t, i)}>
                        <Text style={[s.chips, val2.selected ? s.gold : null]}>{val2.name}</Text>
                    </TouchableOpacity>
                )
            })
        )
    }

    filtersOn = (con) => {
        if (con == 'Price') {
            this.setState({ propertyFilter: false })
            this.setState({ bedBathFilter: false })
            this.setState({ priseFilter: !this.state.priseFilter })
        } else if (con == 'Property Type') {
            this.setState({ propertyFilter: !this.state.propertyFilter })
            this.setState({ bedBathFilter: false })
            this.setState({ priseFilter: false })
        } else if (con == 'Bed/Bath') {
            this.setState({ propertyFilter: false })
            this.setState({ bedBathFilter: !this.state.bedBathFilter })
            this.setState({ priseFilter: false })
        }
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
                        key={item.id} style={[this.rotateAndTranslate, { height: height - 170, width: width, padding: moderateScale(20), position: 'absolute', top: moderateScale(20) }]}>
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
                                <Iconicons name="heart-outline" size={moderateScale(25)} color="#B48618" />
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
                            height: height - 170, width: width, padding: moderateScale(20), position: 'absolute', top: moderateScale(20)
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
                                <Iconicons name="heart-outline" size={moderateScale(25)} color="#B48618" />
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
    trueModal = () => {
        this.context.setFilterShow(true)
        console.log(this.context.FilterShow)
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

    nonCollidingMultiSliderValuesChange = (values) => {
        // console.log(values)
        this.setState({polo:values});
        console.log(this.state.polo)
    }

    static contextType = AppContext;

    render() {
        return (
            <SafeAreaView >
                <KeyboardAwareScrollView keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
                    <View style={[s.container, this.state.changemap == 'map' ? s.mapTrue : null]}>
                        <View>
                            <View style={[s.dflex2, s.mt20]}>
                                <TouchableOpacity style={[s.mapICon, this.state.changemap == 'map' ? s.maper : null]} onPress={() => this.setState({ changemap: this.state.changemap != 'map' ? 'map' : 'cards' })}>
                                    <Micon name="map-marker-outline" color={this.state.changemap == 'map' ? '#B48618' : '#000'} style={{ fontSize: moderateScale(20) }} />
                                </TouchableOpacity>
                                <View style={s.search}>
                                    <SearchBar
                                        placeholder="Search"
                                        onChangeText={(e) => console.log(e)}
                                        containerStyle={s.searCon}
                                        inputContainerStyle={s.searConInp}
                                        inputStyle={s.searInp}
                                        leftIconContainerStyle={s.lftICoo}
                                    />
                                </View>
                                <TouchableOpacity style={[s.mapICon, s.maper]} onPress={() => {
                                    this.setState({ changemap: this.state.changemap != 'cards' ? 'cards' : 'swip' })
                                }}>
                                    {
                                        this.state.changemap == 'cards' ? (
                                            <>
                                                <Upfinger height={moderateScale(20)} width={moderateScale(20)} />
                                            </>
                                        ) : (
                                            <>
                                                <Bars height={moderateScale(20)} width={moderateScale(20)} />
                                            </>
                                        )
                                    }
                                </TouchableOpacity>
                            </View>
                            <View style={[s.dflex, s.chiD]}>
                                <TouchableOpacity style={s.chipset} onPress={() => this.trueModal()}>
                                    <Foun name="filter" size={moderateScale(18)} color="#B48618" style={{ marginTop: moderateScale(-3), marginRight: moderateScale(4) }} />
                                    <Text style={s.chipsetxt}>Filter</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[s.chipset, this.state.priseFilter ? s.bblack : null]} onPress={() => this.filtersOn('Price')}>
                                    <Text style={[s.chipsetxt, this.state.priseFilter ? s.twhite : null]}>Price</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[s.chipset, this.state.propertyFilter ? s.bblack : null]} onPress={() => this.filtersOn('Property Type')}>
                                    <Text style={[s.chipsetxt, this.state.propertyFilter ? s.twhite : null]}>Property Type</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[s.chipset, this.state.bedBathFilter ? s.bblack : null]} onPress={() => this.filtersOn('Bed/Bath')}>
                                    <Text style={[s.chipsetxt, this.state.bedBathFilter ? s.twhite : null]}>Bed/Bath</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={s.fResult}>

                                {
                                    this.state.priseFilter ? (
                                        <>
                                            {/* <View style={[s.priceDiv, s.pdo]}>
                                                <Text style={[s.hTxt]}>Price</Text>
                                                <View style={s.dflex}>
                                                    <View style={s.mInp}>
                                                        <Input
                                                            placeholder='Min $'
                                                            inputStyle={s.inpStyle}
                                                            inputContainerStyle={s.inpConStyle}
                                                            containerStyle={s.conStyle}
                                                            secureTextEntry={true}
                                                        />
                                                    </View>
                                                    <View style={s.mInp}>
                                                        <Input
                                                            placeholder='Min $'
                                                            inputStyle={s.inpStyle}
                                                            inputContainerStyle={s.inpConStyle}
                                                            containerStyle={s.conStyle}
                                                            secureTextEntry={true}
                                                        />
                                                    </View>
                                                </View>
                                                <View style={[s.flexRow, s.mt20]}>
                                                    <TouchableOpacity style={s.cancelFD}>
                                                        <Text style={s.cancelF}>Cancel</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={s.cancelFD}>
                                                        <Text style={[s.cancelF, s.reset]}>Reset</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={s.viewRes}>
                                                        <Text style={[s.cancelF, s.Vres]}>View 56 Results</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View> */}
                                            <View>
                                                <Text style={[s.hTxt, s.mt25]}>Price</Text>
                                                <View style={s.dflex}>
                                                    <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                                        <MultiSlider
                                                            values={[
                                                                this.state.polo[0],
                                                                this.state.polo[1],
                                                            ]}
                                                            sliderLength={280}
                                                            onValuesChange={this.nonCollidingMultiSliderValuesChange}
                                                            min={50000}
                                                            max={10000000}
                                                            step={25000}
                                                            allowOverlap={false}
                                                            snapped
                                                            minMarkerOverlapDistance={20}
                                                            customMarker={CustomMarker}
                                                            customLabel={CustomLabel}
                                                            selectedStyle={{
                                                                backgroundColor: '#000',
                                                            }}
                                                            unselectedStyle={{
                                                                backgroundColor: 'lightgrey',
                                                            }}
                                                            containerStyle={{
                                                                height: 20,
                                                                marginTop: 20,

                                                            }}
                                                            trackStyle={{
                                                                height: 10,
                                                                backgroundColor: '#000',
                                                                borderRadius: 10,
                                                            }}
                                                            touchDimensions={{
                                                                height: 60,
                                                                width: 40,
                                                                borderRadius: 20,
                                                                slipDisplacement: 40,
                                                            }}
                                                            sliderLength={moderateScale(windowWidth - 90)}
                                                        />
                                                        <View style={s.sliderOne}>
                                                            <Text style={s.text}>{this.state.polo[0]} </Text>
                                                            <Text style={s.text}>{this.state.polo
                                                            [1]}</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>
                                        </>
                                    ) : this.state.propertyFilter ? (
                                        <>
                                            <View style={[s.propertyDiv, s.pdo]}>
                                                <Text style={[s.hTxt]}>Property Type</Text>
                                                <View style={[s.dflex, s.chipes]}>
                                                    {
                                                        this.dataTer(2, 'property-type')
                                                    }
                                                </View>
                                                <View style={[s.flexRow, s.mt20]}>
                                                    <TouchableOpacity style={s.cancelFD}>
                                                        <Text style={s.cancelF}>Cancel</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={s.cancelFD}>
                                                        <Text style={[s.cancelF, s.reset]}>Reset</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={s.viewRes}>
                                                        <Text style={[s.cancelF, s.Vres]}>View 56 Results</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </>
                                    ) : this.state.bedBathFilter ? (
                                        <>
                                            <View style={[s.propertyDiv, s.pdo]}>
                                                <Text style={[s.hTxt]}>Bed</Text>
                                                <View style={[s.dflex, s.chipes]}>
                                                    {
                                                        this.dataTer(0, 'beds')
                                                    }
                                                </View>

                                                <Text style={[s.hTxt, s.mt1]}>Bath</Text>
                                                <View style={[s.dflex, s.chipes]}>
                                                    {
                                                        this.dataTer(1, 'baths')
                                                    }
                                                </View>
                                                <View style={[s.flexRow, s.mt20]}>
                                                    <TouchableOpacity style={s.cancelFD}>
                                                        <Text style={s.cancelF}>Cancel</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={s.cancelFD}>
                                                        <Text style={[s.cancelF, s.reset]}>Reset</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={s.viewRes}>
                                                        <Text style={[s.cancelF, s.Vres]}>View 56 Results</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </>
                                    ) : (null)
                                }

                            </View>
                        </View>
                        {
                            this.state.changemap == 'cards' ? (
                                <>
                                    <View style={s.mainj}>
                                        {
                                            arr.map((val, i) => {
                                                return (
                                                    <TouchableOpacity style={s.card} key={i}>
                                                        <View style={s.image}>
                                                            <Image
                                                                source={{ uri: val.image }}
                                                                style={{ width: '100%', height: '100%' }}
                                                                resizeMode={'cover'}
                                                                PlaceholderContent={<ActivityIndicator />}
                                                            />
                                                        </View>
                                                        <View style={[s.dflex, s.dDivh]}>
                                                            <View>
                                                                <Text style={s.price}>${val.price}K</Text>
                                                                <Text style={s.drp}>{val.amenities}</Text>
                                                                <Text style={s.drp}>{val.address}</Text>
                                                            </View>
                                                            <TouchableOpacity>
                                                                <Icons name="share-alt" color="#000" style={{ fontSize: moderateScale(24) }} />
                                                            </TouchableOpacity>
                                                        </View>

                                                        <View style={s.hearted}>
                                                            <TouchableOpacity style={s.heret}>
                                                                <Iconicons name="heart-outline" size={moderateScale(25)} color="#B48618" />
                                                            </TouchableOpacity>
                                                        </View>
                                                    </TouchableOpacity>
                                                )
                                            })
                                        }
                                    </View>

                                </>
                            ) : (
                                null
                            )

                        }

                    </View>
                </KeyboardAwareScrollView>
                {
                    this.state.changemap == 'map' ? (
                        <>
                            <View style={s.mapD}>
                                <MapView
                                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                                    style={s.map}
                                    region={{
                                        latitude: LATITUDE,
                                        longitude: LONGITUDE,
                                        latitudeDelta: LATITUDE_DELTA,
                                        longitudeDelta: LONGITUDE_DELTA,
                                    }}
                                >

                                    <Marker
                                        coordinate={{
                                            latitude: 35.4828833,
                                            longitude: -97.7593855,
                                        }}
                                        title={'Jone`s House'}
                                        onPress={e => console.log('onSelect', e)}
                                    />
                                    <Marker
                                        coordinate={{
                                            latitude: 35.499999,
                                            longitude: -97.7593855,
                                        }}
                                        title={'Emily`s House'}
                                        onPress={e => console.log('onSelect', e)}
                                    />

                                    <Marker
                                        coordinate={{
                                            latitude: 35.498999,
                                            longitude: -97.7433855,
                                        }}
                                        title={'Mark`s House'}
                                        onPress={e => console.log('onSelect', e)}
                                    />
                                </MapView>
                            </View>
                        </>
                    ) : this.state.changemap == 'swip' ? (
                        <>
                            <View style={s.listing}>
                                <View style={{ flex: 1 }}>
                                    {/* {this.renderUsers()} */}
                                    <View style={s.cardSwipAlb}>
                                        <Animated.View style={{ ...s.hearted, opacity: this.state.opacity }} >
                                            <TouchableOpacity style={s.heret} onPress={() => this.gotoInner(false)}>
                                                <Iconicons name="heart-outline" size={moderateScale(25)} color="#B48618" />
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
                                            marginTop={30}
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
                            </View>
                        </>
                    ) : (null)
                }
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
                        <Filters from={'search'} />
                    </Modal>
                </View>
            </SafeAreaView>
        )
    }
}

