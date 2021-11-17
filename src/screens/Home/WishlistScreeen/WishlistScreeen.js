import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { SafeAreaView } from 'react-native-safe-area-context';
import s from './WishlistStyle';
import Icons from 'react-native-vector-icons/FontAwesome5';
import Iconicons from 'react-native-vector-icons/Ionicons';
import Micon from 'react-native-vector-icons/MaterialCommunityIcons';
import { moderateScale } from 'react-native-size-matters';
import { Image } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import Bars from '../../../assets/svg/bars.svg'
import MapView, { PROVIDER_GOOGLE, Marker, ProviderPropType } from 'react-native-maps';
import { ScrollView } from 'react-native-gesture-handler';

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

const Wishlist = ({ navigation }) => {
    const [savedHome, setsavedHome] = useState(0);
    const [changemap, setchangemap] = useState(false);

    const setTripCount = (event) => {
        var c = event.nativeEvent.selectedSegmentIndex
        setsavedHome(c)
    }

    const ASPECT_RATIO = width / height;
    const LATITUDE = 35.4828833;
    const LONGITUDE = -97.7593856;
    const LATITUDE_DELTA = 0.0922;
    const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
    const SPACE = 0.01;

    return (
        <SafeAreaView >
            <KeyboardAwareScrollView keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
                <View style={[s.container, changemap ? s.mapTrue : null]}>
                    <View style={s.segMn}>
                        <SegmentedControl
                            values={['Saved Homes', 'Saved Searches']}
                            selectedIndex={savedHome}

                            tintColor={'#000'}
                            appearance={'light'}
                            backgroundColor={'#f1f1f1'}
                            style={s.radioBox}
                            fontStyle={{
                                color: '#000'
                            }}
                            activeFontStyle={{
                                color: '#fff'
                            }}
                            onChange={(event) => setTripCount(event)}
                        />
                    </View>
                    {
                        savedHome == 0 ? (
                            <>
                            <View style={[s.dflex, s.mt20]}>
                        <View style={[s.dflex, s.bhj]}>
                            <Text style={s.likeCount}>25 Saved</Text>
                        </View>
                        {
                            !changemap ? (
                                <>
                                    <View style={[s.picker]}>
                                        <RNPickerSelect
                                            onValueChange={(value) => console.log(value)}
                                            items={[
                                                { label: 'ABC', value: 'ABC' },
                                                { label: 'ABC', value: 'ABC' },
                                                { label: 'ABC', value: 'ABC' },
                                            ]}
                                        />
                                    </View>
                                </>
                            ) : (
                                null
                            )
                        }

                        <TouchableOpacity style={s.mapICon} onPress={() => setchangemap(!changemap)}>
                            {
                                changemap ? (
                                    <>
                                        <Bars height={moderateScale(20)} width={moderateScale(20)} />
                                    </>
                                ) : (
                                    <>
                                        <Micon name="map-marker-outline" color="#B48618" style={{ fontSize: moderateScale(20) }} />
                                    </>
                                )
                            }
                        </TouchableOpacity>
                    </View>
                            </>
                        ) : (
                            null
                        )
                    }

                    {
                        savedHome == 0 ? (
                            changemap ? (
                                null
                            ) : (
                                <>
                                    <View style={s.mainj}>
                                        {
                                            arr.map((val, i) => {
                                                return (
                                                    <TouchableOpacity style={s.card} key={i} onPress={() => navigation.navigate('HomeInner')}>
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
                                                                <Text style={s.drp}>{val.address} </Text>
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
                            )
                        ) : (
                            null
                        )
                        
                    }

                </View>
            </KeyboardAwareScrollView>
            {
                changemap && savedHome == 0 ? (
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
                ) : (
                    <>
                            <View style={s.listing}>
                                <ScrollView keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
                                    <TouchableOpacity style={s.listBox}>
                                        <View style={[s.dflex,s.flexStart]}>
                                            <Iconicons name="heart-outline" size={moderateScale(25)} color="#B48618" />
                                            <Text style={s.Stxt}>Spiro, OK 74959</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={s.listBox}>
                                        <View style={[s.dflex,s.flexStart]}>
                                            <Iconicons name="heart-outline" size={moderateScale(25)} color="#B48618" />
                                            <Text style={s.Stxt}>Spiro, OK 74959</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={s.listBox}>
                                        <View style={[s.dflex,s.flexStart]}>
                                            <Iconicons name="heart-outline" size={moderateScale(25)} color="#B48618" />
                                            <Text style={s.Stxt}>Spiro, OK 74959</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={s.listBox}>
                                        <View style={[s.dflex,s.flexStart]}>
                                            <Iconicons name="heart-outline" size={moderateScale(25)} color="#B48618" />
                                            <Text style={s.Stxt}>Spiro, OK 74959</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={s.listBox}>
                                        <View style={[s.dflex,s.flexStart]}>
                                            <Iconicons name="heart-outline" size={moderateScale(25)} color="#B48618" />
                                            <Text style={s.Stxt}>Spiro, OK 74959</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={s.listBox}>
                                        <View style={[s.dflex,s.flexStart]}>
                                            <Iconicons name="heart-outline" size={moderateScale(25)} color="#B48618" />
                                            <Text style={s.Stxt}>Spiro, OK 74959</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={s.listBox}>
                                        <View style={[s.dflex,s.flexStart]}>
                                            <Iconicons name="heart-outline" size={moderateScale(25)} color="#B48618" />
                                            <Text style={s.Stxt}>Spiro, OK 74959</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={s.listBox}>
                                        <View style={[s.dflex,s.flexStart]}>
                                            <Iconicons name="heart-outline" size={moderateScale(25)} color="#B48618" />
                                            <Text style={s.Stxt}>Spiro, OK 74959</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={s.listBox}>
                                        <View style={[s.dflex,s.flexStart]}>
                                            <Iconicons name="heart-outline" size={moderateScale(25)} color="#B48618" />
                                            <Text style={s.Stxt}>Spiro, OK 74959</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={s.listBox}>
                                        <View style={[s.dflex,s.flexStart]}>
                                            <Iconicons name="heart-outline" size={moderateScale(25)} color="#B48618" />
                                            <Text style={s.Stxt}>Spiro, OK 74959</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={s.listBox}>
                                        <View style={[s.dflex,s.flexStart]}>
                                            <Iconicons name="heart-outline" size={moderateScale(25)} color="#B48618" />
                                            <Text style={s.Stxt}>Spiro, OK 74959</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={s.listBox}>
                                        <View style={[s.dflex,s.flexStart]}>
                                            <Iconicons name="heart-outline" size={moderateScale(25)} color="#B48618" />
                                            <Text style={s.Stxt}>Spiro, OK 74959</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={s.listBox}>
                                        <View style={[s.dflex,s.flexStart]}>
                                            <Iconicons name="heart-outline" size={moderateScale(25)} color="#B48618" />
                                            <Text style={s.Stxt}>Spiro, OK 74959</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={s.listBox}>
                                        <View style={[s.dflex,s.flexStart]}>
                                            <Iconicons name="heart-outline" size={moderateScale(25)} color="#B48618" />
                                            <Text style={s.Stxt}>Spiro, OK 74959</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={s.listBox}>
                                        <View style={[s.dflex,s.flexStart]}>
                                            <Iconicons name="heart-outline" size={moderateScale(25)} color="#B48618" />
                                            <Text style={s.Stxt}>Spiro, OK 74959</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={s.listBox}>
                                        <View style={[s.dflex,s.flexStart]}>
                                            <Iconicons name="heart-outline" size={moderateScale(25)} color="#B48618" />
                                            <Text style={s.Stxt}>Spiro, OK 74959</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={s.listBox}>
                                        <View style={[s.dflex,s.flexStart]}>
                                            <Iconicons name="heart-outline" size={moderateScale(25)} color="#B48618" />
                                            <Text style={s.Stxt}>Spiro, OK 74959</Text>
                                        </View>
                                    </TouchableOpacity>
                                </ScrollView>
                            </View>
                            </>
                )
            }

        </SafeAreaView>
    )
}

export default Wishlist;