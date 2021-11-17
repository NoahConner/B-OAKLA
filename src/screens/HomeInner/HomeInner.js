import React, { useState, useRef } from 'react';
import { View, Text, ScrollView, Dimensions, SafeAreaView, ActivityIndicator, Animated, FlatList, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import s from './HomeInnerStyle';
import LoginHeader from '../../components/headers/LoginHeader';
import { Image, Input } from 'react-native-elements';
import { moderateScale } from 'react-native-size-matters';
import Icons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HomeIco from 'react-native-vector-icons/AntDesign';
import MapView, { PROVIDER_GOOGLE, Marker, ProviderPropType } from 'react-native-maps';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Sqft from '../../assets/svg/sqft.svg'
import Iconicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 35.4828833;
const LONGITUDE = -97.7593856;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const DATA = [
    {
        id: '1',
        image: 'https://wallpaperaccess.com/full/1126810.jpg',
    },
    {
        id: '2',
        image: 'https://images.alphacoders.com/605/605759.jpg',
    },
    {
        id: '3',
        image: 'https://i.pinimg.com/originals/d7/e5/29/d7e52920b98aa780a4193422811ed674.jpg',
    },
    {
        id: '4',
        image: 'https://media.istockphoto.com/photos/suburban-house-picture-id1269776313?b=1&k=20&m=1269776313&s=170667a&w=0&h=l51twHk4nPDByOemkf31YY4tRcKxLx3CGfS2K3ktWx0=',
    },
    {
        id: '5',
        image: 'https://www.teahub.io/photos/full/1-17220_house-wallpapers-4k.jpg',
    },
];

const HomeInner = ({ navigation }) => {

    const [surrentScroll, setsurrentScroll] = useState(0)
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const [currentImg, setcurrentImg] = useState('https://wallpaperaccess.com/full/3060214.jpg')
    const [formTrue, setformTrue] = useState(false)

    const fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 5000
        }).start();
    };

    const fadeOut = () => {
        // Will change fadeAnim value to 0 in 3 seconds
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 3000
        }).start();
    };

    const renderItem = ({ item, i }) => (
        <TouchableOpacity style={[s.fimgD, item.id == 5 ? s.last : null]} onPress={() => setcurrentImg(item.image)}>
            <Image
                source={{ uri: item.image }}
                style={s.fimg}
                resizeMode={'cover'}
                PlaceholderContent={<ActivityIndicator />}
            />
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={s.container}>
            {
                surrentScroll < 100 ? (
                    <>
                        <LoginHeader navigation={navigation} backbutton={true} sharebutton={true} logo={false} pagename={''} float={true} />
                    </>
                ) : (
                    null
                )
            }

            <ScrollView onScroll={(e) => setsurrentScroll(e.nativeEvent.contentOffset.y)}>
                <View style={s.posin}>
                    <Image
                        source={{ uri: currentImg }}
                        style={{ width: '100%', height: moderateScale(350) }}
                        resizeMode={'cover'}
                        PlaceholderContent={<ActivityIndicator />}
                    />
                    {/* <View style={s.overlayt}></View> */}
                    <LinearGradient colors={['transparent', 'transparent', '#000']} style={s.overlayt}>

                    </LinearGradient>
                </View>
                <View style={s.mainert}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        legacyImplementation={false}
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
                {
                    formTrue ? (
                        <>
                            <View style={s.main}>
                                <Text style={s.ConatctIn}>Contact for more info</Text>
                                <View style={s.form}>
                                    <Input
                                        placeholder='Full Name'
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
                                    {/* <Input
                                        placeholder='Phone'
                                        inputStyle={s.inpStyle}
                                        inputContainerStyle={s.inpConStyle}
                                        containerStyle={s.conStyle}
                                    /> */}
                                    <TextInput
                                        multiline={true}
                                        placeholder="Phone"
                                        style={[s.input,s.pol]}
                                    />
                                    <TextInput
                                        multiline={true}
                                        numberOfLines={6}
                                        placeholder="Message"
                                        style={s.input}
                                    />
                                    <TouchableOpacity style={s.btns}>
                                        <Text style={s.btnsTxt}>Send Message</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={s.btnsC} onPress={() => setformTrue(false)}>
                                        <Text style={[s.btnsTxt,s.cblack]}>Cancel</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </>
                    ) : (
                        <>
                            <View style={s.mamain}>
                                <View style={s.main}>
                                    <Text style={s.price}>$50K</Text>
                                    <Text style={s.address}>770 West Senna Ave. Spiro, OK 74959, 770</Text>
                                    <View style={s.hearted}>
                                        <TouchableOpacity style={s.heret}>
                                            <Iconicons name="heart-outline" size={moderateScale(30)} color="#B48618" />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={s.homeis}>
                                        <View style={s.chipo}>
                                            <Icons name="bed-outline" color="#B48618" style={{ fontSize: moderateScale(22), marginTop: moderateScale(-2) }} />
                                            <Text style={s.chipoTxt}>3 Bed Rooms</Text>
                                        </View>
                                        <View style={s.chipo}>
                                            <Icon name="bath" color="#B48618" style={{ fontSize: moderateScale(18), marginTop: moderateScale(-2) }} />
                                            <Text style={s.chipoTxt}>2 Bath Rooms</Text>
                                        </View>
                                        <View style={s.chipo}>
                                            <Sqft fill="#B48618" style={{ marginTop: moderateScale(-5) }} height={moderateScale(18)} width={moderateScale(18)} />
                                            <Text style={s.chipoTxt}>1360 Sqft</Text>
                                        </View>
                                        <View style={s.chipo}>
                                            <HomeIco name="home" color="#B48618" style={{ fontSize: moderateScale(18), marginTop: moderateScale(-2) }} />
                                            <Text style={s.chipoTxt}>Single Family Home</Text>
                                        </View>

                                        <Text style={s.descp}>Description</Text>
                                        <Text style={s.descPr}>
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure
                                        </Text>



                                    </View>
                                </View>
                                <View style={{ paddingHorizontal: moderateScale(20) }}>
                                    <Text style={[s.descp]}>Location</Text>
                                </View>
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
                                    </MapView>
                                </View>
                                <View style={{ paddingHorizontal: moderateScale(20) }}>
                                    <TouchableOpacity style={s.btns} onPress={() => setformTrue(true)}>
                                        <Text style={s.btnsTxt}>Contact for details</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </>
                    )
                }

            </ScrollView>
        </SafeAreaView>
    )
}
export default HomeInner;