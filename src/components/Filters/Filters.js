import React, { useState, useEffect, useContext } from 'react';
import { Switch, Text, View, Dimensions, TextInput, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import s from './FiltersStyle'
import { SearchBar, CheckBox } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
import ToggleSwitch from 'toggle-switch-react-native'
import AppContext from '../Appcontext/contextApi';
import { Input } from 'react-native-elements';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import CustomLabel from '../customs/CustomLabel';
import CustomMarker from '../customs/CustomMarker';
import { moderateScale } from 'react-native-size-matters';
import MultiSelect from 'react-native-multiple-select';

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
    },
    {
        'stories': [
            {
                'name': 'Single',
                'selected': false
            },
            {
                'name': 'Multi',
                'selected': false
            },
        ]
    },
    {
        'garage' : [
            {
                'name': '1',
                'selected': false
            },
            {
                'name': '2',
                'selected': false
            },
            {
                'name': '3',
                'selected': false
            },
            {
                'name': '4+',
                'selected': false
            }
        ]
    },
    {
        'parking' : [
            {
                'name': 'Carport',
                'selected': false
            },
            {
                'name': 'Boat/RV',
                'selected': false
            },
        ]
    },
]

var deni = [
    {
        'name':'Office/Den',
        'data':[
            {
                'name': 'Dining Room',
                'selected': false
            },
            {
                'name': 'Family Room',
                'selected': false
            },
            {
                'name': 'Secondary Suite',
                'selected': false
            },
            {
                'name': 'Basement',
                'selected': false
            },
            {
                'name': 'Fireplace',
                'selected': false
            }
        ]
    },
    {
        'name':'The Lot',
        'data':[
            {
                'name': 'Pool',
                'selected': false
            },
            {
                'name': 'Spa',
                'selected': false
            },
            {
                'name': 'Outdoor Kitchen',
                'selected': false
            },
            {
                'name': 'Fireplace/Pit',
                'selected': false
            },
            {
                'name': 'Patio/Deck',
                'selected': false
            },
            {
                'name': 'Storm Shelter',
                'selected': false
            },
            {
                'name': 'Out Buildings',
                'selected': false
            }
        ]
    },
    {
        'name':'The Views',
        'data':[
            {
                'name': 'Corner Lot',
                'selected': false
            },
            {
                'name': 'Waterfront',
                'selected': false
            },{
                'name': 'Backs to Greenspace',
                'selected': false
            }
            ,{
                'name': 'Cul-de-sac',
                'selected': false
            }
            ,{
                'name': 'Lake View',
                'selected': false
            },
            {
                'name': 'Golf Course Lot',
                'selected': false
            }
        ]
    },
    {
        'name':'The Neighborhood',
        'data':[
            {
                'name': 'Pool',
                'selected': false
            },
            {
                'name': 'Clubhouse',
                'selected': false
            },
            {
                'name': 'Gated',
                'selected': false
            },
            {
                'name': 'Golf Course',
                'selected': false
            },
            {
                'name': 'Park',
                'selected': false
            },
            {
                'name': 'Stocked Pond',
                'selected': false
            },
            {
                'name': 'Splash Pad',
                'selected': false
            },
            {
                'name': 'Dock',
                'selected': false
            }
        ]
    }
]

const windowWidth = Dimensions.get('window').width;
const Filters = ({ navigation, from }) => {
    var ui
    const [arrData, setarrData] = useState(filtersdata)
    const [ForSale, setForSale] = useState(null)
    const [OfficeDen, setOfficeDen] = useState(null)
    const [TheLot, setTheLot] = useState(null)
    const [TheViews, setTheViews] = useState(null)
    const [TheNeighborhood, setTheNeighborhood] = useState(null)
    const [search, setsearch] = useState('')
    const [tripType, setTripType] = useState(0);

    const [MustHaveGarage, setMustHaveGarage] = useState(false);
    const [WaterFont, setWaterFont] = useState(false);
    const [HasView, setHasView] = useState(false)
    const [Basement, setBasement] = useState(false)
    const [AccessibleHome, setAccessibleHome] = useState(false)
    const [Elevator, setElevator] = useState(false)
    const [GreenHome, setGreenHome] = useState(false)
    const [OpenHouses, setOpenHouses] = useState(false)
    const [DWalkthroughVideoTour, setDWalkthroughVideoTour] = useState(false)
    const [SelfTourOnly, setSelfTourOnly] = useState(false)
    const [Exclude55Communities, setExclude55Communities] = useState(false)
    const [SchoolMap, setSchoolMap] = useState(false)
    const [ActiveLS, seActiveLS] = useState(false)
    const [PendingContingentSL, sePendingContingentSL] = useState(false)
    const [NewLS, seNewLS] = useState(false)
    const [denio, setdenio] = useState([deni])
    const [acres,setacres] = useState('Acres')
    const [acres2, setacres2] = useState('Acres')

    const myContext = useContext(AppContext)

    const [
        nonCollidingMultiSliderValue,
        setNonCollidingMultiSliderValue,
    ] = React.useState([1000000, 9000000]);

    const [
        homeSize,
        sethomeSize,
    ] = React.useState([1500, 9000]);

    const [
        lotSize,
        setlotSize,
    ] = React.useState([45000, 395600]);

    const [increamentRate, setincreamentRate] = useState(25000)

    const nonCollidingMultiSliderValuesChange = (values) => {
        setNonCollidingMultiSliderValue(values);
        console.log(values[0])
    }

    const homeSizess = (values) => {
        sethomeSize(values);
        console.log(values[0])
    }
    const lotSizes = (values) => {
        setlotSize(values);
        console.log(values[0])
        // if(values[0] > 43560){
        //     setacres('Acres')
        // }else{
        //     setacres('sqft')
        // }
        // if(values[1] > 43560){
        //     setacres2('Acres')
        // }else{
        //     setacres2('sqft')
        // }
    }

    const [selectedItems, setselectedItems] = useState([])

    const onSelectedItemsChange = (e) => {
        setselectedItems(e)
    }

    const changeDen = (val1,i,val2,io) =>{
        denio[0][i].data[io].selected = !denio[0][i].data[io].selected;
        setdenio([...denio, denio])
        console.log(denio)
    }

    const renderDens = () => {
        return(
            denio[0].map((val,i)=>{
                return(
                <View key={i}>
                    <Text style={[s.hTxt, s.mt25]}>{val.name}</Text>
                        <View style={[s.dflex, s.checkboxi]} >
                            {
                                val.data.map((val2,io)=>{
                                    return(
                                        <CheckBox
                                        key={io}
                                            title={val2.name}
                                            iconType='fontawesome'
                                            checkedIcon='circle'
                                            uncheckedIcon='circle'
                                            checkedColor='#B48618'
                                            uncheckedColor='lightgrey'
                                            checked={val2.selected ? true : false}
                                            onPress={() => changeDen(val,i,val2,io)}
                                            textStyle={s.radioChk}
                                            containerStyle={s.radioCOnt}
                                        />
                                    )
                                })
                            }
                        </View>
                </View>
                )
            })
        )
    }

    const togglearrData = (e) => {
        e == 'MustHaveGarage' ?
            setMustHaveGarage(MustHaveGarage => !MustHaveGarage) :
            e == 'WaterFont' ?
                setWaterFont(WaterFont => !WaterFont) :
                e == 'HasView' ?
                    setHasView(HasView => !HasView) :
                    e == 'Basement' ?
                        setBasement(Basement => !Basement) :
                        e == 'AccessibleHome' ?
                            setAccessibleHome(AccessibleHome => !AccessibleHome) :
                            e == 'Elevator' ?
                                setElevator(Elevator => !Elevator) :
                                e == 'GreenHome' ?
                                    setGreenHome(GreenHome => !GreenHome) :
                                    e == 'OpenHouses' ?
                                        setOpenHouses(OpenHouses => !OpenHouses) :
                                        e == 'DWalkthroughVideoTour' ?
                                            setDWalkthroughVideoTour(DWalkthroughVideoTour => !DWalkthroughVideoTour) :
                                            e == 'SelfTourOnly' ?
                                                setSelfTourOnly(SelfTourOnly => !SelfTourOnly) :
                                                e == 'Exclude55Communities' ?
                                                    setExclude55Communities(Exclude55Communities => !Exclude55Communities) :
                                                    e == 'SchoolMap' ?
                                                        setSchoolMap(SchoolMap => !SchoolMap) :
                                                        e == 'ActiveLS' ?
                                                            seActiveLS(ActiveLS => !ActiveLS) :
                                                            e == 'PendingContingentSL' ?
                                                                sePendingContingentSL(PendingContingentSL => !PendingContingentSL) :
                                                                e == 'NewLS' ?
                                                                    seNewLS(NewLS => !NewLS) :
                                                                    null
    }

    const setTripCount = (event) => {
        var c = event.nativeEvent.selectedSegmentIndex
        setTripType(c)
    }

    const changeTypes = (p, t, i) => {
        // ui = arrData
        arrData[p][t][i].selected = !arrData[p][t][i].selected;
        console.log(arrData[p][t][i].selected)

        setarrData([...arrData, arrData]);
    }



    const dataTer = (p, t) => {
        return (
            arrData[p][t].map((val2, i) => {
                return (
                    <TouchableOpacity key={i} onPress={() => changeTypes(p, t, i)}>
                        <Text style={[s.chips, val2.selected ? s.gold : null]}>{val2.name}</Text>
                    </TouchableOpacity>
                )
            })
        )
    }

    return (
        <SafeAreaView style={s.container}>
            <KeyboardAwareScrollView keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
                <View style={s.mainHeader}>
                    <Text style={s.hTxt}>Filters</Text>
                    <TouchableOpacity onPress={() => myContext.setFilterShow(false)}>
                        <Text style={[s.hTxt, s.reset]}>Reset</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <SegmentedControl
                        values={['Buy', 'Rent']}
                        selectedIndex={tripType}

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

                <View>
                    <SearchBar
                        placeholder="Address, City, Zip or Neighborhood"
                        containerStyle={s.searchContainer}
                        inputContainerStyle={s.sinpContainer}
                        inputStyle={s.sinp}
                        leftIconContainerStyle={s.leftSIcon}
                        onChangeText={(event) => setsearch(event)}
                        value={search}
                    />
                </View>

                <View>
                    <View>
                        <Text style={[s.hTxt, s.mt25]}>Price</Text>
                        <View style={s.dflex}>
                            <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                <MultiSlider
                                    values={[
                                        nonCollidingMultiSliderValue[0],
                                        nonCollidingMultiSliderValue[1],
                                    ]}
                                    onValuesChange={nonCollidingMultiSliderValuesChange}
                                    min={50000}
                                    max={10000000}
                                    step={increamentRate}
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
                                    sliderLength={moderateScale(windowWidth - 115)}
                                />
                                <View style={s.sliderOne}>
                                    <Text style={s.text}>{nonCollidingMultiSliderValue[0]} </Text>
                                    <Text style={s.text}>{nonCollidingMultiSliderValue[1]}</Text>
                                </View>
                            </View>
                            {/* <View style={s.mInp}>
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
                                    placeholder='Max $'
                                    inputStyle={s.inpStyle}
                                    inputContainerStyle={s.inpConStyle}
                                    containerStyle={s.conStyle}
                                    secureTextEntry={true}
                                />
                            </View> */}
                        </View>
                    </View>
                </View>

                <View>
                    <View>
                        <Text style={[s.hTxt, s.mt15]}>Beds</Text>
                        <View style={[s.dflex, s.chipset]}>
                            {
                                dataTer(0, 'beds')
                            }
                        </View>
                    </View>
                </View>

                <View>
                    <View>
                        <Text style={[s.hTxt, s.mt25]}>Baths</Text>
                        <View style={[s.dflex, s.chipset]}>
                            {
                                dataTer(1, 'baths')
                            }
                        </View>
                    </View>
                </View>

                <View>
                    <View>
                        <Text style={[s.hTxt, s.mt25]}>Property Type</Text>
                        <View style={[s.dflex, s.chipset]}>
                            {
                                dataTer(2, 'property-type')
                            }
                        </View>
                    </View>
                </View>

                <View style={s.divider}></View>

                <View>
                    <View>
                        <Text style={[s.hTxt, s.mt25]}>Listing Type</Text>

                        <View style={[s.dflex, s.checkboxi]}>
                            <View>
                                <CheckBox

                                    title='For Sale'
                                    iconType='fontawesome'
                                    checkedIcon='circle'
                                    uncheckedIcon='circle'
                                    checkedColor='#B48618'
                                    uncheckedColor='lightgrey'
                                    checked={ForSale == 'for-sale' ? true : false}
                                    onPress={() => ForSale == 'for-sale' ? setForSale(null) : setForSale('for-sale')}
                                    textStyle={s.radioChk}
                                    containerStyle={s.radioCOnt}
                                />
                            </View>
                            <View>
                                <CheckBox
                                    title='Just Sold'
                                    iconType='fontawesome'
                                    checkedIcon='circle'
                                    uncheckedIcon='circle'
                                    checkedColor='#B48618'
                                    uncheckedColor='lightgrey'
                                    checked={ForSale == 'for-sold' ? true : false}
                                    onPress={() => ForSale == 'for-sold' ? setForSale(null) : setForSale('for-sold')}
                                    textStyle={s.radioChk}
                                    containerStyle={s.radioCOnt}
                                />
                            </View>
                            <View>
                                <CheckBox
                                    title='New Construction'
                                    iconType='fontawesome'
                                    checkedIcon='circle'
                                    uncheckedIcon='circle'
                                    checkedColor='#B48618'
                                    uncheckedColor='lightgrey'
                                    checked={ForSale == 'for-construction' ? true : false}
                                    onPress={() => ForSale == 'for-construction' ? setForSale(null) : setForSale('for-construction')}
                                    textStyle={s.radioChk}
                                    containerStyle={s.radioCOnt}
                                />
                            </View>
                        </View>
                    </View>
                </View>

                <View>
                    <View>
                        <Text style={[s.hTxt, s.mt25]}>Listing Status</Text>
                        <View>
                            {/* <RNPickerSelect
                                onValueChange={(value) => console.log(value)}
                                items={[
                                    // { label: 'Active + coming soon listings', value: 'Active + coming soon listings' },
                                    // { label: 'Coming soon listings', value: 'Coming soon listings' },
                                    // { label: 'Active listings', value: 'Active listings' },
                                    // { label: 'Active + under contract/pending', value: 'Active + under contract/pending' },
                                    // { label: 'Only under contract/pending', value: 'Only under contract/pending' },
                                    { label: 'New', value: 'New' },
                                    { label: 'Active', value: 'Active' },
                                    { label: 'Pending/Contingent ', value: 'Pending/Contingent ' }
                                ]}
                            /> */}
                        </View>

                    </View>
                </View>
                <View style={[s.dflex, s.mt20]}>
                    <TouchableOpacity onPress={() => togglearrData('NewLS')}>
                        <Text style={s.mustHave}>New</Text>
                    </TouchableOpacity>
                    <View >
                        <ToggleSwitch
                            isOn={NewLS}
                            trackOnStyle={{ backgroundColor: '#E5D8B7' }}
                            trackOffStyle={{ backgroundColor: '#f1f1f1' }}
                            thumbOnStyle={{ backgroundColor: '#B48618' }}
                            thumbOffStyle={{ backgroundColor: '#C4C4C4' }}
                            size="medium"
                            onToggle={() => togglearrData('NewLS')}
                        />
                    </View>
                </View>
                <View style={[s.dflex, s.mt20]}>
                    <TouchableOpacity onPress={() => togglearrData('ActiveLS')}>
                        <Text style={s.mustHave}>Active</Text>
                    </TouchableOpacity>
                    <View >
                        <ToggleSwitch
                            isOn={ActiveLS}
                            trackOnStyle={{ backgroundColor: '#E5D8B7' }}
                            trackOffStyle={{ backgroundColor: '#f1f1f1' }}
                            thumbOnStyle={{ backgroundColor: '#B48618' }}
                            thumbOffStyle={{ backgroundColor: '#C4C4C4' }}
                            size="medium"
                            onToggle={() => togglearrData('ActiveLS')}
                        />
                    </View>
                </View>
                <View style={[s.dflex, s.mt20]}>
                    <TouchableOpacity onPress={() => togglearrData('PendingContingentSL')}>
                        <Text style={s.mustHave}>Pending/Contingent</Text>
                    </TouchableOpacity>
                    <View >
                        <ToggleSwitch
                            isOn={PendingContingentSL}
                            trackOnStyle={{ backgroundColor: '#E5D8B7' }}
                            trackOffStyle={{ backgroundColor: '#f1f1f1' }}
                            thumbOnStyle={{ backgroundColor: '#B48618' }}
                            thumbOffStyle={{ backgroundColor: '#C4C4C4' }}
                            size="medium"
                            onToggle={() => togglearrData('PendingContingentSL')}
                        />
                    </View>
                </View>

                <View>
                    <View>
                        <Text style={[s.hTxt, s.mt25]}>Days on Buy Oklahoma</Text>
                        <View style={s.picker}>
                            <RNPickerSelect
                                onValueChange={(value) => console.log(value)}
                                items={[
                                    { label: 'No max', value: 'No max' },
                                    // { label: 'New listings', value: 'New listings' },
                                    { label: 'Less than 3 days', value: 'Less than 3 days' },
                                    { label: 'Less than 7 days', value: 'Less than 7 days' },
                                    { label: 'Less than 14 days', value: 'Less than 14 days' },
                                    { label: 'Less than 30 days', value: 'Less than 30 days' },
                                    { label: 'More than 7 days', value: 'More than 7 days' },
                                    { label: 'More than 14 days', value: 'More than 14 days' },
                                    { label: 'More than 30 days', value: 'More than 30 days' },
                                    { label: 'More than 45 days', value: 'More than 45 days' },
                                    { label: 'More than 60 days', value: 'More than 60 days' },
                                    { label: 'More than 90 days', value: 'More than 90 days' },
                                    { label: 'More than 180 days', value: 'More than 180 days' }
                                ]}
                            />
                        </View>
                    </View>
                </View>


                <View style={[s.dflex, s.mt30]}>
                    <TouchableOpacity onPress={() => togglearrData('OpenHouses')}>
                        <Text style={s.mustHave}>Open Houses</Text>
                    </TouchableOpacity>
                    <View >
                        <ToggleSwitch
                            isOn={OpenHouses}
                            trackOnStyle={{ backgroundColor: '#E5D8B7' }}
                            trackOffStyle={{ backgroundColor: '#f1f1f1' }}
                            thumbOnStyle={{ backgroundColor: '#B48618' }}
                            thumbOffStyle={{ backgroundColor: '#C4C4C4' }}
                            size="medium"
                            onToggle={() => togglearrData('OpenHouses')}
                        />
                    </View>
                </View>
                <View style={[s.dflex, s.mt30]}>
                    <TouchableOpacity onPress={() => togglearrData('DWalkthroughVideoTour')}>
                        <Text style={s.mustHave}>3D Walkthrough & Video Tour</Text>
                    </TouchableOpacity>
                    <View >
                        <ToggleSwitch
                            isOn={DWalkthroughVideoTour}
                            trackOnStyle={{ backgroundColor: '#E5D8B7' }}
                            trackOffStyle={{ backgroundColor: '#f1f1f1' }}
                            thumbOnStyle={{ backgroundColor: '#B48618' }}
                            thumbOffStyle={{ backgroundColor: '#C4C4C4' }}
                            size="medium"
                            onToggle={() => togglearrData('DWalkthroughVideoTour')}
                        />
                    </View>
                </View>
                {/* <View style={[s.dflex, s.mt30]}>
                    <TouchableOpacity onPress={() => togglearrData('SelfTourOnly')}>
                        <Text style={s.mustHave}>Self Tour Only</Text>
                    </TouchableOpacity>
                    <View >
                        <ToggleSwitch
                            isOn={SelfTourOnly}
                            trackOnStyle={{ backgroundColor: '#E5D8B7' }}
                            trackOffStyle={{ backgroundColor: '#f1f1f1' }}
                            thumbOnStyle={{ backgroundColor: '#B48618' }}
                            thumbOffStyle={{ backgroundColor: '#C4C4C4' }}
                            size="medium"
                            onToggle={() => togglearrData('SelfTourOnly')}
                        />
                    </View>
                </View>
                <View style={[s.dflex, s.mt30]}>
                    <TouchableOpacity onPress={() => togglearrData('Exclude55Communities')}>
                        <Text style={s.mustHave}>Exclude 55+ Communities</Text>
                    </TouchableOpacity>
                    <View >
                        <ToggleSwitch
                            isOn={Exclude55Communities}
                            trackOnStyle={{ backgroundColor: '#E5D8B7' }}
                            trackOffStyle={{ backgroundColor: '#f1f1f1' }}
                            thumbOnStyle={{ backgroundColor: '#B48618' }}
                            thumbOffStyle={{ backgroundColor: '#C4C4C4' }}
                            size="medium"
                            onToggle={() => togglearrData('Exclude55Communities')}
                        />
                    </View>
                </View> */}

                <View>
                    <View>
                        <Text style={[s.hTxt, s.mt25]}>Price Reduced</Text>
                        <View style={s.picker}>
                            <RNPickerSelect
                                onValueChange={(value) => console.log(value)}
                                items={[
                                    { label: 'No max', value: 'No max' },
                                    // { label: 'New listings', value: 'New listings' },
                                    { label: 'In the last day', value: 'In the last day' },
                                    { label: '3 days', value: '3 days' },
                                    { label: '7 days', value: '7 days' },
                                    { label: '14 days', value: '14 days' },
                                    { label: '21 days', value: '21 days' },
                                    { label: '30 days', value: '30 days' },
                                ]}
                            />
                        </View>
                    </View>
                </View>

                <View style={[s.divider, s.mt30]}></View>

                <View>
                    <View>
                        <Text style={[s.hTxt, s.mt20]}>The Home</Text>
                    </View>
                </View>

                {/* <View>
                    <View>
                        <Text style={[s.hTxt, s.mt20]}>Stories</Text>
                        <View style={s.dflex}>
                            <View style={s.mInp2}>
                                <View style={[s.picker, s.mt0]}>
                                    <RNPickerSelect
                                        onValueChange={(value) => console.log(value)}
                                        items={[
                                            { label: '1', value: '1' },
                                            { label: '2', value: '2' },
                                            { label: '3', value: '3' },
                                            { label: '4', value: '3' },
                                            { label: '5', value: '3' },
                                            { label: '6', value: '3' },
                                            { label: '7', value: '3' },
                                            { label: '8', value: '3' },
                                            { label: '9', value: '3' },

                                        ]}
                                    />
                                </View>
                            </View>
                            <View>
                                <Text style={s.to}>To</Text>
                            </View>
                            <View style={s.mInp2}>
                                <View style={[s.picker, s.mt0]}>
                                    <RNPickerSelect
                                        onValueChange={(value) => console.log(value)}
                                        items={[
                                            { label: 'No Max', value: 'No Max' },
                                            { label: '1', value: '1' },
                                            { label: '2', value: '2' },
                                            { label: '3', value: '3' },
                                            { label: '4', value: '3' },
                                            { label: '5', value: '3' },
                                            { label: '6', value: '3' },
                                            { label: '7', value: '3' },
                                            { label: '8', value: '3' },
                                            { label: '9', value: '3' },
                                        ]}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </View> */}
                <View>
                    <View>
                        <Text style={[s.hTxt, s.mt15]}>Stories</Text>
                        <View style={[s.dflex, s.chipset]}>
                            {
                                dataTer(3, 'stories')
                            }
                        </View>
                    </View>
                </View>

                <View>
                    <View>
                        <Text style={[s.hTxt, s.mt15]}>Garage</Text>
                        <View style={[s.dflex, s.chipset]}>
                            {
                                dataTer(4, 'garage')
                            }
                        </View>
                    </View>
                </View>

                {/* <View>
                    <View>
                        <Text style={[s.hTxt, s.mt25]}>Parking</Text>
                        <View style={s.picker}>
                            <RNPickerSelect
                                onValueChange={(value) => console.log(value)}
                                items={[
                                    { label: '1+', value: '1+' },
                                    { label: '2+', value: '2+' },
                                    { label: '3+', value: '3+' },
                                    { label: '4+', value: '4+' },
                                    { label: '5+', value: '5+' },
                                ]}
                            />
                        </View>
                    </View>
                </View> */}
                <View>
                    <View>
                        <Text style={[s.hTxt, s.mt15]}>Parking</Text>
                        <View style={[s.dflex, s.chipset]}>
                            {
                                dataTer(5, 'parking')
                            }
                        </View>
                    </View>
                </View>

                <View>
                    <View>
                        <Text style={[s.hTxt, s.mt25]}>Home Size</Text>
                        <View style={s.dflex}>
                            <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                <MultiSlider
                                    values={[
                                        homeSize[0],
                                        homeSize[1],
                                    ]}
                                    onValuesChange={homeSizess}
                                    min={500}
                                    max={10000}
                                    step={1}
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
                                    sliderLength={moderateScale(windowWidth - 115)}
                                />
                                <View style={s.sliderOne}>
                                    <Text style={s.text}>{homeSize[0]} </Text>
                                    <Text style={s.text}>{homeSize[1]}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <View>
                    <View>
                        <Text style={[s.hTxt, s.mt25]}>Lot Size</Text>
                        <View style={s.dflex}>
                            <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                <MultiSlider
                                    values={[
                                        lotSize[0],
                                        lotSize[1],
                                    ]}
                                    onValuesChange={lotSizes}
                                    min={2000}
                                    max={435601}
                                    step={1}
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
                                    sliderLength={moderateScale(windowWidth - 115)}
                                />
                                <View style={s.sliderOne}>
                                    <Text style={s.text}>{lotSize[0]} {acres}</Text>
                                    <Text style={s.text}>{lotSize[1]} {acres2}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                {/* <View>
                    <View>
                        <Text style={[s.hTxt, s.mt25]}>Pool Type</Text>
                        <View style={s.picker}>
                            <RNPickerSelect
                                onValueChange={(value) => console.log(value)}
                                items={[
                                    { label: 'Private pool', value: 'Private pool' },
                                    { label: 'Community pool', value: 'Community pool' },
                                    { label: 'Private or community pool', value: 'Private or community pool' },
                                ]}
                            />
                        </View>
                    </View>
                </View> */}

                <View style={[s.dflex, s.mt30]}>
                    <TouchableOpacity onPress={() => togglearrData('MustHaveGarage')}>
                        <Text style={s.mustHave}>Must Have Garage</Text>
                    </TouchableOpacity>
                    <View >
                        <ToggleSwitch
                            isOn={MustHaveGarage}
                            trackOnStyle={{ backgroundColor: '#E5D8B7' }}
                            trackOffStyle={{ backgroundColor: '#f1f1f1' }}
                            thumbOnStyle={{ backgroundColor: '#B48618' }}
                            thumbOffStyle={{ backgroundColor: '#C4C4C4' }}
                            size="medium"
                            onToggle={() => togglearrData('MustHaveGarage')}
                        />
                    </View>
                </View>
                <View style={[s.dflex, s.mt20]}>
                    <TouchableOpacity onPress={() => togglearrData('WaterFont')}>
                        <Text style={s.mustHave}>Water front</Text>
                    </TouchableOpacity>
                    <View >
                        <ToggleSwitch
                            isOn={WaterFont}
                            trackOnStyle={{ backgroundColor: '#E5D8B7' }}
                            trackOffStyle={{ backgroundColor: '#f1f1f1' }}
                            thumbOnStyle={{ backgroundColor: '#B48618' }}
                            thumbOffStyle={{ backgroundColor: '#C4C4C4' }}
                            size="medium"
                            onToggle={() => togglearrData('WaterFont')}
                        />
                    </View>
                </View>
                <View style={[s.dflex, s.mt20]}>
                    <TouchableOpacity onPress={() => togglearrData('HasView')}>
                        <Text style={s.mustHave}>Has view</Text>
                    </TouchableOpacity>
                    <View >
                        <ToggleSwitch
                            isOn={HasView}
                            trackOnStyle={{ backgroundColor: '#E5D8B7' }}
                            trackOffStyle={{ backgroundColor: '#f1f1f1' }}
                            thumbOnStyle={{ backgroundColor: '#B48618' }}
                            thumbOffStyle={{ backgroundColor: '#C4C4C4' }}
                            size="medium"
                            onToggle={() => togglearrData('HasView')}
                        />
                    </View>
                </View>
                <View style={[s.dflex, s.mt20]}>
                    <TouchableOpacity onPress={() => togglearrData('Basement')}>
                        <Text style={s.mustHave}>Basement</Text>
                    </TouchableOpacity>
                    <View >
                        <ToggleSwitch
                            isOn={Basement}
                            trackOnStyle={{ backgroundColor: '#E5D8B7' }}
                            trackOffStyle={{ backgroundColor: '#f1f1f1' }}
                            thumbOnStyle={{ backgroundColor: '#B48618' }}
                            thumbOffStyle={{ backgroundColor: '#C4C4C4' }}
                            size="medium"
                            onToggle={() => togglearrData('Basement')}
                        />
                    </View>
                </View>
                <View style={[s.dflex, s.mt20]}>
                    <TouchableOpacity onPress={() => togglearrData('AccessibleHome')}>
                        <Text style={s.mustHave}>Accessible Home</Text>
                    </TouchableOpacity>
                    <View >
                        <ToggleSwitch
                            isOn={AccessibleHome}
                            trackOnStyle={{ backgroundColor: '#E5D8B7' }}
                            trackOffStyle={{ backgroundColor: '#f1f1f1' }}
                            thumbOnStyle={{ backgroundColor: '#B48618' }}
                            thumbOffStyle={{ backgroundColor: '#C4C4C4' }}
                            size="medium"
                            onToggle={() => togglearrData('AccessibleHome')}
                        />
                    </View>
                </View>
                <View style={[s.dflex, s.mt20]}>
                    <TouchableOpacity onPress={() => togglearrData('Elevator')}>
                        <Text style={s.mustHave}>Elevator</Text>
                    </TouchableOpacity>
                    <View >
                        <ToggleSwitch
                            isOn={Elevator}
                            trackOnStyle={{ backgroundColor: '#E5D8B7' }}
                            trackOffStyle={{ backgroundColor: '#f1f1f1' }}
                            thumbOnStyle={{ backgroundColor: '#B48618' }}
                            thumbOffStyle={{ backgroundColor: '#C4C4C4' }}
                            size="medium"
                            onToggle={() => togglearrData('Elevator')}
                        />
                    </View>
                </View>
                <View style={[s.dflex, s.mt20]}>
                    <TouchableOpacity onPress={() => togglearrData('GreenHome')}>
                        <Text style={s.mustHave}>Green Home</Text>
                    </TouchableOpacity>
                    <View >
                        <ToggleSwitch
                            isOn={GreenHome}
                            trackOnStyle={{ backgroundColor: '#E5D8B7' }}
                            trackOffStyle={{ backgroundColor: '#f1f1f1' }}
                            thumbOnStyle={{ backgroundColor: '#B48618' }}
                            thumbOffStyle={{ backgroundColor: '#C4C4C4' }}
                            size="medium"
                            onToggle={() => togglearrData('GreenHome')}
                        />
                    </View>
                </View>

                <View>
                    {renderDens()}
                </View>

                {/* <View>
                    <Text style={[s.hTxt, s.mt25]}>Office/Den</Text>

                    <View style={[s.dflex, s.checkboxi]}>
                        <View>
                            <CheckBox

                                title='Dining Room'
                                iconType='fontawesome'
                                checkedIcon='circle'
                                uncheckedIcon='circle'
                                checkedColor='#B48618'
                                uncheckedColor='lightgrey'
                                checked={OfficeDen == 'DiningRoom' ? true : false}
                                onPress={() => OfficeDen == 'DiningRoom' ? setOfficeDen(null) : setOfficeDen('DiningRoom')}
                                textStyle={s.radioChk}
                                containerStyle={s.radioCOnt}
                            />
                        </View>
                        <View>
                            <CheckBox
                                title='Family Room'
                                iconType='fontawesome'
                                checkedIcon='circle'
                                uncheckedIcon='circle'
                                checkedColor='#B48618'
                                uncheckedColor='lightgrey'
                                checked={OfficeDen == 'FamilyRoom' ? true : false}
                                onPress={() => OfficeDen == 'FamilyRoom' ? setOfficeDen(null) : setOfficeDen('FamilyRoom')}
                                textStyle={s.radioChk}
                                containerStyle={s.radioCOnt}
                            />
                        </View>
                        <View>
                            <CheckBox
                                title='Secondary Suite'
                                iconType='fontawesome'
                                checkedIcon='circle'
                                uncheckedIcon='circle'
                                checkedColor='#B48618'
                                uncheckedColor='lightgrey'
                                checked={OfficeDen == 'SecondarySuite' ? true : false}
                                onPress={() => OfficeDen == 'SecondarySuite' ? setOfficeDen(null) : setOfficeDen('SecondarySuite')}
                                textStyle={s.radioChk}
                                containerStyle={s.radioCOnt}
                            />
                        </View>
                        <View>
                            <CheckBox
                                title='Basement'
                                iconType='fontawesome'
                                checkedIcon='circle'
                                uncheckedIcon='circle'
                                checkedColor='#B48618'
                                uncheckedColor='lightgrey'
                                checked={OfficeDen == 'Basement' ? true : false}
                                onPress={() => OfficeDen == 'Basement' ? setOfficeDen(null) : setOfficeDen('Basement')}
                                textStyle={s.radioChk}
                                containerStyle={s.radioCOnt}
                            />
                        </View>
                        <View>
                            <CheckBox
                                title='Fireplace'
                                iconType='fontawesome'
                                checkedIcon='circle'
                                uncheckedIcon='circle'
                                checkedColor='#B48618'
                                uncheckedColor='lightgrey'
                                checked={OfficeDen == 'Fireplace' ? true : false}
                                onPress={() => OfficeDen == 'Fireplace' ? setOfficeDen(null) : setOfficeDen('Fireplace')}
                                textStyle={s.radioChk}
                                containerStyle={s.radioCOnt}
                            />
                        </View>
                    </View>
                </View>

                <View>
                    <Text style={[s.hTxt, s.mt25]}>The Lot</Text>

                    <View style={[s.dflex, s.checkboxi]}>
                        <View>
                            <CheckBox

                                title='Pool'
                                iconType='fontawesome'
                                checkedIcon='circle'
                                uncheckedIcon='circle'
                                checkedColor='#B48618'
                                uncheckedColor='lightgrey'
                                checked={TheLot == 'Pool' ? true : false}
                                onPress={() => TheLot == 'Pool' ? setTheLot(null) : setTheLot('Pool')}
                                textStyle={s.radioChk}
                                containerStyle={s.radioCOnt}
                            />
                        </View>
                        <View>
                            <CheckBox
                                title='Spa'
                                iconType='fontawesome'
                                checkedIcon='circle'
                                uncheckedIcon='circle'
                                checkedColor='#B48618'
                                uncheckedColor='lightgrey'
                                checked={TheLot == 'Spa' ? true : false}
                                onPress={() => TheLot == 'Spa' ? setTheLot(null) : setTheLot('Spa')}
                                textStyle={s.radioChk}
                                containerStyle={s.radioCOnt}
                            />
                        </View>
                        <View>
                            <CheckBox
                                title='Outdoor Kitchen'
                                iconType='fontawesome'
                                checkedIcon='circle'
                                uncheckedIcon='circle'
                                checkedColor='#B48618'
                                uncheckedColor='lightgrey'
                                checked={TheLot == 'OutdoorKitchen' ? true : false}
                                onPress={() => TheLot == 'OutdoorKitchen' ? setTheLot(null) : setTheLot('OutdoorKitchen')}
                                textStyle={s.radioChk}
                                containerStyle={s.radioCOnt}
                            />
                        </View>
                        <View>
                            <CheckBox
                                title='Fireplace/Pit'
                                iconType='fontawesome'
                                checkedIcon='circle'
                                uncheckedIcon='circle'
                                checkedColor='#B48618'
                                uncheckedColor='lightgrey'
                                checked={TheLot == 'Fireplace/Pit' ? true : false}
                                onPress={() => TheLot == 'Fireplace/Pit' ? setTheLot(null) : setTheLot('Fireplace/Pit')}
                                textStyle={s.radioChk}
                                containerStyle={s.radioCOnt}
                            />
                        </View>
                        <View>
                            <CheckBox
                                title='Patio/Deck'
                                iconType='fontawesome'
                                checkedIcon='circle'
                                uncheckedIcon='circle'
                                checkedColor='#B48618'
                                uncheckedColor='lightgrey'
                                checked={TheLot == 'Patio/Deck' ? true : false}
                                onPress={() => TheLot == 'Patio/Deck' ? setTheLot(null) : setTheLot('Patio/Deck')}
                                textStyle={s.radioChk}
                                containerStyle={s.radioCOnt}
                            />
                        </View>
                        <View>
                            <CheckBox
                                title='Storm Shelter'
                                iconType='fontawesome'
                                checkedIcon='circle'
                                uncheckedIcon='circle'
                                checkedColor='#B48618'
                                uncheckedColor='lightgrey'
                                checked={TheLot == 'StormShelter' ? true : false}
                                onPress={() => TheLot == 'StormShelter' ? setTheLot(null) : setTheLot('StormShelter')}
                                textStyle={s.radioChk}
                                containerStyle={s.radioCOnt}
                            />
                        </View>
                        <View>
                            <CheckBox
                                title='Out Buildings'
                                iconType='fontawesome'
                                checkedIcon='circle'
                                uncheckedIcon='circle'
                                checkedColor='#B48618'
                                uncheckedColor='lightgrey'
                                checked={TheLot == 'OutBuildings' ? true : false}
                                onPress={() => TheLot == 'OutBuildings' ? setTheLot(null) : setTheLot('OutBuildings')}
                                textStyle={s.radioChk}
                                containerStyle={s.radioCOnt}
                            />
                        </View>
                    </View>
                </View>

                <View>
                    <Text style={[s.hTxt, s.mt25]}>The Neighborhood</Text>

                    <View style={[s.dflex, s.checkboxi]}>
                        <View>
                            <CheckBox

                                title='Pool'
                                iconType='fontawesome'
                                checkedIcon='circle'
                                uncheckedIcon='circle'
                                checkedColor='#B48618'
                                uncheckedColor='lightgrey'
                                checked={TheNeighborhood == 'Pool' ? true : false}
                                onPress={() => TheNeighborhood == 'Pool' ? setTheNeighborhood(null) : setTheNeighborhood('Pool')}
                                textStyle={s.radioChk}
                                containerStyle={s.radioCOnt}
                            />
                        </View>
                        <View>
                            <CheckBox
                                title='Clubhouse'
                                iconType='fontawesome'
                                checkedIcon='circle'
                                uncheckedIcon='circle'
                                checkedColor='#B48618'
                                uncheckedColor='lightgrey'
                                checked={TheNeighborhood == 'Clubhouse' ? true : false}
                                onPress={() => TheNeighborhood == 'Clubhouse' ? setTheNeighborhood(null) : setTheNeighborhood('Clubhouse')}
                                textStyle={s.radioChk}
                                containerStyle={s.radioCOnt}
                            />
                        </View>
                        <View>
                            <CheckBox
                                title='Gated'
                                iconType='fontawesome'
                                checkedIcon='circle'
                                uncheckedIcon='circle'
                                checkedColor='#B48618'
                                uncheckedColor='lightgrey'
                                checked={TheNeighborhood == 'Gated' ? true : false}
                                onPress={() => TheNeighborhood == 'Gated' ? setTheNeighborhood(null) : setTheNeighborhood('Gated')}
                                textStyle={s.radioChk}
                                containerStyle={s.radioCOnt}
                            />
                        </View>
                        <View>
                            <CheckBox
                                title='Golf Course'
                                iconType='fontawesome'
                                checkedIcon='circle'
                                uncheckedIcon='circle'
                                checkedColor='#B48618'
                                uncheckedColor='lightgrey'
                                checked={TheNeighborhood == 'Golf Course' ? true : false}
                                onPress={() => TheNeighborhood == 'Golf Course' ? setTheNeighborhood(null) : setTheNeighborhood('Golf Course')}
                                textStyle={s.radioChk}
                                containerStyle={s.radioCOnt}
                            />
                        </View>
                        <View>
                            <CheckBox
                                title='Park'
                                iconType='fontawesome'
                                checkedIcon='circle'
                                uncheckedIcon='circle'
                                checkedColor='#B48618'
                                uncheckedColor='lightgrey'
                                checked={TheNeighborhood == 'Park' ? true : false}
                                onPress={() => TheNeighborhood == 'Park' ? setTheNeighborhood(null) : setTheNeighborhood('Park')}
                                textStyle={s.radioChk}
                                containerStyle={s.radioCOnt}
                            />
                        </View>
                        <View>
                            <CheckBox
                                title='StockedPond'
                                iconType='fontawesome'
                                checkedIcon='circle'
                                uncheckedIcon='circle'
                                checkedColor='#B48618'
                                uncheckedColor='lightgrey'
                                checked={TheNeighborhood == 'StockedPond' ? true : false}
                                onPress={() => TheNeighborhood == 'StockedPond' ? setTheNeighborhood(null) : setTheNeighborhood('StockedPond')}
                                textStyle={s.radioChk}
                                containerStyle={s.radioCOnt}
                            />
                        </View>
                        <View>
                            <CheckBox
                                title='SplashPad'
                                iconType='fontawesome'
                                checkedIcon='circle'
                                uncheckedIcon='circle'
                                checkedColor='#B48618'
                                uncheckedColor='lightgrey'
                                checked={TheNeighborhood == 'SplashPad' ? true : false}
                                onPress={() => TheNeighborhood == 'SplashPad' ? setTheNeighborhood(null) : setTheNeighborhood('SplashPad')}
                                textStyle={s.radioChk}
                                containerStyle={s.radioCOnt}
                            />
                        </View>
                        <View>
                            <CheckBox
                                title='Dock'
                                iconType='fontawesome'
                                checkedIcon='circle'
                                uncheckedIcon='circle'
                                checkedColor='#B48618'
                                uncheckedColor='lightgrey'
                                checked={TheNeighborhood == 'Dock' ? true : false}
                                onPress={() => TheNeighborhood == 'Dock' ? setTheNeighborhood(null) : setTheNeighborhood('Dock')}
                                textStyle={s.radioChk}
                                containerStyle={s.radioCOnt}
                            />
                        </View>
                    </View>
                </View> */}

                <View style={[s.divider, s.mt30]}></View>

                <View>
                    <View>
                        <Text style={[s.hTxt, s.mt20]}>The Schools</Text>
                    </View>
                </View>

                <View>
                    <View>
                        <Text style={[s.hTxt, s.mt25]}>Great Schools Rating</Text>
                        <View style={s.picker}>
                            <RNPickerSelect
                                onValueChange={(value) => console.log(value)}
                                items={[
                                    { label: '1+', value: '1' },
                                    { label: '2+', value: '2' },
                                    { label: '3+', value: '3' },
                                    { label: '4+', value: '3' },
                                    { label: '5+', value: '3' },
                                    { label: '6+', value: '3' },
                                    { label: '7+', value: '3' },
                                    { label: '8+', value: '3' },
                                    { label: '9+', value: '3' },
                                ]}
                            />
                        </View>
                    </View>
                </View>
                <View style={[s.dflex, s.mt30]}>
                    <TouchableOpacity onPress={() => togglearrData('SchoolMap')}>
                        <Text style={s.mustHave}>Show School on Map</Text>
                    </TouchableOpacity>
                    <View >
                        <ToggleSwitch
                            isOn={SchoolMap}
                            trackOnStyle={{ backgroundColor: '#E5D8B7' }}
                            trackOffStyle={{ backgroundColor: '#f1f1f1' }}
                            thumbOnStyle={{ backgroundColor: '#B48618' }}
                            thumbOffStyle={{ backgroundColor: '#C4C4C4' }}
                            size="medium"
                            onToggle={() => togglearrData('SchoolMap')}
                        />
                    </View>
                </View>

            </KeyboardAwareScrollView>
            {
                from == 'search' ? (
                    <>
                        <View style={s.dflex}>
                            <TouchableOpacity style={[s.View, s.allf]} onPress={() => myContext.setFilterShow(false)}>
                                <Text style={s.tct}>View 54 Results</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                ) : from == 'Home' ? (
                    <>
                        <View style={s.dflex}>
                            <TouchableOpacity style={s.View} onPress={() => myContext.setFilterShow(false)}>
                                <Text style={s.tct}>View</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={s.Skip} onPress={() => myContext.setFilterShow(false)}>
                                <Text style={s.tcts}>Skip</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                ) : null
            }

        </SafeAreaView>
    )
}

export default Filters;