import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions, TouchableOpacity, ActivityIndicator,Animated, PanResponder } from 'react-native';
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

const { width, height } = Dimensions.get('window');

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

const Users = [
    {
        id: "1",
        uri: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
        price: '50k',
        address: '770 West Senna Ave. Spiro, OK 74959 3 bd, 2 bath, 1360 sqft'
    },
    {
        id: "2",
        uri: 'https://images.unsplash.com/photo-1532980400857-e8d9d275d858?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
        price: '30k',
        address: '770 West Senna Ave. Spiro, OK 74959'
    },
    {
        id: "3",
        uri: 'https://i.pinimg.com/originals/de/68/9f/de689f4606ca47b01db489679afbe6fa.jpg',
        price: '90k',
        address: '770 West Senna Ave. Spiro, OK 74959 3 bd, 2 bath, 1360 sqft'
    },
    {
        id: "4",
        uri: 'https://i.pinimg.com/736x/f3/6b/58/f36b5886f63b1131246fae4cc83efac8.jpg',
        price: '10k',
        address: '770 West Senna Ave. Spiro, OK 74959 3 bd, 2 bath, 1360 sqft'
    },
    {
        id: "5",
        uri: 'https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__480.jpg',
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

export default class Search extends React.Component {

    constructor() {
        super()
        this.state = {
            currentIndex: 0,
            modalVisible: true,
            changemap: 'swip'
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

    renderUsers = () => {

        return Users.map((item, i) => {


            if (i < this.state.currentIndex) {
                return null
            }
            else if (i == this.state.currentIndex) {

                return (
                    <Animated.View
                        {...this.PanResponder.panHandlers}
                        key={item.id} style={[this.rotateAndTranslate, { height: height - 170, width: width, padding: moderateScale(20), position: 'absolute',top:moderateScale(20) }]}>
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
                            height: height - 170, width: width, padding: moderateScale(20), position: 'absolute',top:moderateScale(20)
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
                                <TouchableOpacity style={s.chipset}>
                                    <Foun name="filter" size={moderateScale(18)} color="#B48618" style={{ marginTop: moderateScale(-3), marginRight: moderateScale(4) }} />
                                    <Text style={s.chipsetxt}>Filter</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={s.chipset}>
                                    <Text style={s.chipsetxt}>Price</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={s.chipset}>
                                    <Text style={s.chipsetxt}>Property Type</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={s.chipset}>
                                    <Text style={s.chipsetxt}>Bed/Bath</Text>
                                </TouchableOpacity>
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
                                    {this.renderUsers()}
                                </View>
                            </View>
                        </>
                    ) : (null)
                }

            </SafeAreaView>
        )
    }
}

// const Search = ({ navigation }) => {
//     const [swipView, setswipView] = useState(false);
//     const [changemap, setchangemap] = useState('map');


//     const ASPECT_RATIO = width / height;
//     const LATITUDE = 35.4828833;
//     const LONGITUDE = -97.7593856;
//     const LATITUDE_DELTA = 0.0922;
//     const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
//     const SPACE = 0.01;

//     return (
//         <SafeAreaView >
//             <KeyboardAwareScrollView keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
//                 <View style={[s.container, changemap == 'map' ? s.mapTrue : null]}>
//                     <View>
//                         <View style={[s.dflex2, s.mt20]}>
//                             <TouchableOpacity style={[s.mapICon, changemap == 'map' ? s.maper : null]} onPress={() => setchangemap(changemap != 'map' ? 'map' : 'cards')}>
//                                 <Micon name="map-marker-outline" color={changemap == 'map' ? '#B48618' : '#000'} style={{ fontSize: moderateScale(20) }} />
//                             </TouchableOpacity>
//                             <View style={s.search}>
//                                 <SearchBar
//                                     placeholder="Search"
//                                     onChangeText={(e) => console.log(e)}
//                                     containerStyle={s.searCon}
//                                     inputContainerStyle={s.searConInp}
//                                     inputStyle={s.searInp}
//                                     leftIconContainerStyle={s.lftICoo}
//                                 />
//                             </View>
//                             <TouchableOpacity style={[s.mapICon, s.maper]} onPress={() => {
//                                 setchangemap(changemap != 'cards' ? 'cards' : 'swip')
//                             }}>
//                                 {
//                                     changemap == 'cards' ? (
//                                         <>
//                                             <Upfinger height={moderateScale(20)} width={moderateScale(20)} />
//                                         </>
//                                     ) : (
//                                         <>
//                                             <Bars height={moderateScale(20)} width={moderateScale(20)} />
//                                         </>
//                                     )
//                                 }

//                             </TouchableOpacity>
//                         </View>
//                         <View style={[s.dflex,s.chiD]}>
//                             <TouchableOpacity style={s.chipset}>
//                                 <Foun name="filter" size={moderateScale(18)} color="#B48618" style={{marginTop:moderateScale(-3),marginRight:moderateScale(4)}} />
//                                 <Text style={s.chipsetxt}>Filter</Text>
//                             </TouchableOpacity>
//                             <TouchableOpacity style={s.chipset}>
//                                 <Text style={s.chipsetxt}>Price</Text>
//                             </TouchableOpacity>
//                             <TouchableOpacity style={s.chipset}>
//                                 <Text style={s.chipsetxt}>Property Type</Text>
//                             </TouchableOpacity>
//                             <TouchableOpacity style={s.chipset}>
//                                 <Text style={s.chipsetxt}>Bed/Bath</Text>
//                             </TouchableOpacity>
//                         </View>
//                     </View>
//                     {
//                         changemap == 'cards' ? (
//                             <>
//                                 <View style={s.mainj}>
//                                     {
//                                         arr.map((val, i) => {
//                                             return (
//                                                 <TouchableOpacity style={s.card} key={i}>
//                                                     <View style={s.image}>
//                                                         <Image
//                                                             source={{ uri: val.image }}
//                                                             style={{ width: '100%', height: '100%' }}
//                                                             resizeMode={'cover'}
//                                                             PlaceholderContent={<ActivityIndicator />}
//                                                         />
//                                                     </View>
//                                                     <View style={[s.dflex, s.dDivh]}>
//                                                         <View>
//                                                             <Text style={s.price}>${val.price}K</Text>
//                                                             <Text style={s.drp}>{val.amenities}</Text>
//                                                             <Text style={s.drp}>{val.address}</Text>
//                                                         </View>
//                                                         <TouchableOpacity>
//                                                             <Icons name="share-alt" color="#000" style={{ fontSize: moderateScale(24) }} />
//                                                         </TouchableOpacity>
//                                                     </View>

//                                                     <View style={s.hearted}>
//                                                         <TouchableOpacity style={s.heret}>
//                                                             <Iconicons name="heart-outline" size={moderateScale(25)} color="#B48618" />
//                                                         </TouchableOpacity>
//                                                     </View>
//                                                 </TouchableOpacity>
//                                             )
//                                         })
//                                     }
//                                 </View>

//                             </>
//                         ) : (
//                             null
//                         )

//                     }

//                 </View>
//             </KeyboardAwareScrollView>
//             {
//                 changemap == 'map' ? (
//                     <>
//                         <View style={s.mapD}>
//                             <MapView
//                                 provider={PROVIDER_GOOGLE} // remove if not using Google Maps
//                                 style={s.map}
//                                 region={{
//                                     latitude: LATITUDE,
//                                     longitude: LONGITUDE,
//                                     latitudeDelta: LATITUDE_DELTA,
//                                     longitudeDelta: LONGITUDE_DELTA,
//                                 }}
//                             >

//                                 <Marker
//                                     coordinate={{
//                                         latitude: 35.4828833,
//                                         longitude: -97.7593855,
//                                     }}
//                                     title={'Jone`s House'}
//                                     onPress={e => console.log('onSelect', e)}
//                                 />
//                                 <Marker
//                                     coordinate={{
//                                         latitude: 35.499999,
//                                         longitude: -97.7593855,
//                                     }}
//                                     title={'Emily`s House'}
//                                     onPress={e => console.log('onSelect', e)}
//                                 />

//                                 <Marker
//                                     coordinate={{
//                                         latitude: 35.498999,
//                                         longitude: -97.7433855,
//                                     }}
//                                     title={'Mark`s House'}
//                                     onPress={e => console.log('onSelect', e)}
//                                 />
//                             </MapView>
//                         </View>
//                     </>
//                 ) : changemap == 'swip' ? (
//                     <>
//                         <View style={s.listing}>

//                         </View>
//                     </>
//                 ) : (null)
//             }

//         </SafeAreaView>
//     )
// }

// export default Search;

