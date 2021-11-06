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
                'name': '5',
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
                'name': 'Studio',
                'selected': false
            },
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
                'name': '4',
                'selected': false
            },
            {
                'name': '5',
                'selected': false
            },
        ]
    },
    {
        'property-type': [
            {
                'name': 'Land',
                'selected': false
            },
            {
                'name': 'Other',
                'selected': false
            },
            {
                'name': 'Mobile / Mfd',
                'selected': false
            },
            {
                'name': 'Farm / Ranches',
                'selected': false
            },
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


        ]
    }
]

const Filters = ({ navigation }) => {
    var ui
    const [arrData, setarrData] = useState(filtersdata)
    const [ForSale, setForSale] = useState(null)
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
    
    const myContext = useContext(AppContext)

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
                        placeholder="Type Here..."
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
                            <View style={s.mInp}>
                                <Text style={s.mtxt}>Min $</Text>
                                <TextInput
                                    style={s.input}
                                />
                            </View>
                            <View style={s.mInp}>
                                <Text style={s.mtxt}>Max $</Text>
                                <TextInput
                                    style={s.input}
                                />
                            </View>
                        </View>
                    </View>
                </View>

                <View>
                    <View>
                        <Text style={[s.hTxt, s.mt25]}>Beds</Text>
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
                        <Text style={[s.hTxt, s.mt25]}>Property Type</Text>

                        <View style={[s.dflex, s.checkboxi]}>
                            <View>
                                <CheckBox

                                    title='For Sale'

                                    iconType='fontawesome'
                                    checkedIcon='circle'
                                    uncheckedIcon='circle'
                                    checkedColor='#B48618'
                                    uncheckedColor='lightgrey'
                                    checked={ForSale == true ? true : false}
                                    onPress={() => ForSale ? setForSale(null) : setForSale(true)}
                                    textStyle={s.radioChk}
                                    containerStyle={s.radioCOnt}
                                />
                            </View>
                            <View>
                                <CheckBox
                                    title='Sold'
                                    iconType='fontawesome'
                                    checkedIcon='circle'
                                    uncheckedIcon='circle'
                                    checkedColor='#B48618'
                                    uncheckedColor='lightgrey'
                                    checked={ForSale == false ? true : false}
                                    onPress={() => ForSale || ForSale == null ? setForSale(false) : setForSale(null)}
                                    textStyle={s.radioChk}
                                    containerStyle={s.radioCOnt}
                                />
                            </View>
                        </View>
                    </View>
                </View>

                <View>
                    <View>
                        <Text style={[s.hTxt, s.mt25]}>Status</Text>
                        <View style={s.picker}>
                            <RNPickerSelect
                                onValueChange={(value) => console.log(value)}
                                items={[
                                    { label: 'ABC', value: 'ABC' },
                                    { label: 'ABC', value: 'ABC' },
                                    { label: 'ABC', value: 'ABC' },
                                ]}
                            />
                        </View>
                    </View>
                </View>

                <View>
                    <View>
                        <Text style={[s.hTxt, s.mt25]}>Time on Buy Oklahoma</Text>
                        <View style={s.picker}>
                            <RNPickerSelect
                                onValueChange={(value) => console.log(value)}
                                items={[
                                    { label: 'ABC', value: 'ABC' },
                                    { label: 'ABC', value: 'ABC' },
                                    { label: 'ABC', value: 'ABC' },
                                ]}
                            />
                        </View>
                    </View>
                </View>

                <View>
                    <View>
                        <Text style={[s.hTxt, s.mt25]}>Time on Buy Oklahoma</Text>
                        <View style={s.picker}>
                            <RNPickerSelect
                                onValueChange={(value) => console.log(value)}
                                items={[
                                    { label: 'ABC', value: 'ABC' },
                                    { label: 'ABC', value: 'ABC' },
                                    { label: 'ABC', value: 'ABC' },
                                ]}
                            />
                        </View>
                    </View>
                </View>

                <View style={[s.dflex,s.mt30]}>
                    <TouchableOpacity onPress={() => togglearrData('OpenHouses')}>
                        <Text style={s.mustHave}>Open Houses</Text>
                    </TouchableOpacity>
                    <View >
                        <ToggleSwitch
                            isOn={OpenHouses}
                            trackOnStyle={{backgroundColor:'#E5D8B7'}}
                            trackOffStyle={{backgroundColor:'#f1f1f1'}}
                            thumbOnStyle={{backgroundColor:'#B48618'}}
                            thumbOffStyle={{backgroundColor:'#C4C4C4'}}
                            size="medium"
                            onToggle={() => togglearrData('OpenHouses')}
                        />
                    </View>
                </View>
                <View style={[s.dflex,s.mt30]}>
                    <TouchableOpacity onPress={() => togglearrData('DWalkthroughVideoTour')}>
                        <Text style={s.mustHave}>3D Walkthrough & Video Tour</Text>
                    </TouchableOpacity>
                    <View >
                        <ToggleSwitch
                            isOn={DWalkthroughVideoTour}
                            trackOnStyle={{backgroundColor:'#E5D8B7'}}
                            trackOffStyle={{backgroundColor:'#f1f1f1'}}
                            thumbOnStyle={{backgroundColor:'#B48618'}}
                            thumbOffStyle={{backgroundColor:'#C4C4C4'}}
                            size="medium"
                            onToggle={() => togglearrData('DWalkthroughVideoTour')}
                        />
                    </View>
                </View>
                <View style={[s.dflex,s.mt30]}>
                    <TouchableOpacity onPress={() => togglearrData('SelfTourOnly')}>
                        <Text style={s.mustHave}>Self Tour Only</Text>
                    </TouchableOpacity>
                    <View >
                        <ToggleSwitch
                            isOn={SelfTourOnly}
                            trackOnStyle={{backgroundColor:'#E5D8B7'}}
                            trackOffStyle={{backgroundColor:'#f1f1f1'}}
                            thumbOnStyle={{backgroundColor:'#B48618'}}
                            thumbOffStyle={{backgroundColor:'#C4C4C4'}}
                            size="medium"
                            onToggle={() => togglearrData('SelfTourOnly')}
                        />
                    </View>
                </View>
                <View style={[s.dflex,s.mt30]}>
                    <TouchableOpacity onPress={() => togglearrData('Exclude55Communities')}>
                        <Text style={s.mustHave}>Exclude 55+ Communities</Text>
                    </TouchableOpacity>
                    <View >
                        <ToggleSwitch
                            isOn={Exclude55Communities}
                            trackOnStyle={{backgroundColor:'#E5D8B7'}}
                            trackOffStyle={{backgroundColor:'#f1f1f1'}}
                            thumbOnStyle={{backgroundColor:'#B48618'}}
                            thumbOffStyle={{backgroundColor:'#C4C4C4'}}
                            size="medium"
                            onToggle={() => togglearrData('Exclude55Communities')}
                        />
                    </View>
                </View>

                <View style={[s.divider,s.mt30]}></View>

                <View>
                    <View>
                        <Text style={[s.hTxt, s.mt20]}>Home Amenities</Text>
                    </View>
                </View>

                <View>
                    <View>
                        <Text style={[s.hTxt, s.mt20]}>Price</Text>
                        <View style={s.dflex}>
                            <View style={s.mInp2}>
                                <View style={[s.picker,s.mt0]}>
                                    <RNPickerSelect
                                        onValueChange={(value) => console.log(value)}
                                        items={[
                                            { label: 'ABC', value: 'ABC' },
                                            { label: 'ABC', value: 'ABC' },
                                            { label: 'ABC', value: 'ABC' },
                                        ]}
                                    />
                                </View>
                            </View>
                            <View>
                                <Text style={s.to}>To</Text>
                            </View>
                            <View style={s.mInp2}>
                                <View style={[s.picker,s.mt0]}>
                                    <RNPickerSelect
                                        onValueChange={(value) => console.log(value)}
                                        items={[
                                            { label: 'ABC', value: 'ABC' },
                                            { label: 'ABC', value: 'ABC' },
                                            { label: 'ABC', value: 'ABC' },
                                        ]}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <View>
                    <View>
                        <Text style={[s.hTxt, s.mt25]}>Parking Spaces</Text>
                        <View style={s.picker}>
                            <RNPickerSelect
                                onValueChange={(value) => console.log(value)}
                                items={[
                                    { label: 'ABC', value: 'ABC' },
                                    { label: 'ABC', value: 'ABC' },
                                    { label: 'ABC', value: 'ABC' },
                                ]}
                            />
                        </View>
                    </View>
                </View>

                <View>
                    <View>
                        <Text style={[s.hTxt, s.mt25]}>Pool</Text>
                        <View style={s.picker}>
                            <RNPickerSelect
                                onValueChange={(value) => console.log(value)}
                                items={[
                                    { label: 'ABC', value: 'ABC' },
                                    { label: 'ABC', value: 'ABC' },
                                    { label: 'ABC', value: 'ABC' },
                                ]}
                            />
                        </View>
                    </View>
                </View>

                <View style={[s.dflex,s.mt30]}>
                    <TouchableOpacity onPress={() => togglearrData('MustHaveGarage')}>
                        <Text style={s.mustHave}>Must Have Garage</Text>
                    </TouchableOpacity>
                    <View >
                        <ToggleSwitch
                            isOn={MustHaveGarage}
                            trackOnStyle={{backgroundColor:'#E5D8B7'}}
                            trackOffStyle={{backgroundColor:'#f1f1f1'}}
                            thumbOnStyle={{backgroundColor:'#B48618'}}
                            thumbOffStyle={{backgroundColor:'#C4C4C4'}}
                            size="medium"
                            onToggle={() => togglearrData('MustHaveGarage')}
                        />
                    </View>
                </View>
                <View style={[s.dflex,s.mt20]}>
                    <TouchableOpacity onPress={() => togglearrData('WaterFont')}>
                    <Text style={s.mustHave}>Water front</Text>
                    </TouchableOpacity>
                    <View >
                        <ToggleSwitch
                            isOn={WaterFont}
                            trackOnStyle={{backgroundColor:'#E5D8B7'}}
                            trackOffStyle={{backgroundColor:'#f1f1f1'}}
                            thumbOnStyle={{backgroundColor:'#B48618'}}
                            thumbOffStyle={{backgroundColor:'#C4C4C4'}}
                            size="medium"
                            onToggle={() => togglearrData('WaterFont')}
                        />
                    </View>
                </View>
                <View style={[s.dflex,s.mt20]}>
                    <TouchableOpacity onPress={() => togglearrData('HasView')}>
                    <Text style={s.mustHave}>Has view</Text>
                    </TouchableOpacity>
                    <View >
                        <ToggleSwitch
                            isOn={HasView}
                            trackOnStyle={{backgroundColor:'#E5D8B7'}}
                            trackOffStyle={{backgroundColor:'#f1f1f1'}}
                            thumbOnStyle={{backgroundColor:'#B48618'}}
                            thumbOffStyle={{backgroundColor:'#C4C4C4'}}
                            size="medium"
                            onToggle={() => togglearrData('HasView')}
                        />
                    </View>
                </View>
                <View style={[s.dflex,s.mt20]}>
                    <TouchableOpacity onPress={() => togglearrData('Basement')}>
                    <Text style={s.mustHave}>Basement</Text>
                    </TouchableOpacity>
                    <View >
                        <ToggleSwitch
                            isOn={Basement}
                            trackOnStyle={{backgroundColor:'#E5D8B7'}}
                            trackOffStyle={{backgroundColor:'#f1f1f1'}}
                            thumbOnStyle={{backgroundColor:'#B48618'}}
                            thumbOffStyle={{backgroundColor:'#C4C4C4'}}
                            size="medium"
                            onToggle={() => togglearrData('Basement')}
                        />
                    </View>
                </View>
                <View style={[s.dflex,s.mt20]}>
                    <TouchableOpacity onPress={() => togglearrData('AccessibleHome')}>
                    <Text style={s.mustHave}>Accessible Home</Text>
                    </TouchableOpacity>
                    <View >
                        <ToggleSwitch
                            isOn={AccessibleHome}
                            trackOnStyle={{backgroundColor:'#E5D8B7'}}
                            trackOffStyle={{backgroundColor:'#f1f1f1'}}
                            thumbOnStyle={{backgroundColor:'#B48618'}}
                            thumbOffStyle={{backgroundColor:'#C4C4C4'}}
                            size="medium"
                            onToggle={() => togglearrData('AccessibleHome')}
                        />
                    </View>
                </View>
                <View style={[s.dflex,s.mt20]}>
                    <TouchableOpacity onPress={() => togglearrData('Elevator')}>
                    <Text style={s.mustHave}>Elevator</Text>
                    </TouchableOpacity>
                    <View >
                        <ToggleSwitch
                            isOn={Elevator}
                            trackOnStyle={{backgroundColor:'#E5D8B7'}}
                            trackOffStyle={{backgroundColor:'#f1f1f1'}}
                            thumbOnStyle={{backgroundColor:'#B48618'}}
                            thumbOffStyle={{backgroundColor:'#C4C4C4'}}
                            size="medium"
                            onToggle={() => togglearrData('Elevator')}
                        />
                    </View>
                </View>
                <View style={[s.dflex,s.mt20]}>
                    <TouchableOpacity onPress={() => togglearrData('GreenHome')}>
                    <Text style={s.mustHave}>Green Home</Text>
                    </TouchableOpacity>
                    <View >
                        <ToggleSwitch
                            isOn={GreenHome}
                            trackOnStyle={{backgroundColor:'#E5D8B7'}}
                            trackOffStyle={{backgroundColor:'#f1f1f1'}}
                            thumbOnStyle={{backgroundColor:'#B48618'}}
                            thumbOffStyle={{backgroundColor:'#C4C4C4'}}
                            size="medium"
                            onToggle={() => togglearrData('GreenHome')}
                        />
                    </View>
                </View>
                
                <View style={[s.divider,s.mt30]}></View>

                <View>
                    <View>
                        <Text style={[s.hTxt, s.mt20]}>Schools</Text>
                    </View>
                </View>

                <View>
                    <View>
                        <Text style={[s.hTxt, s.mt25]}>Great Schools Rating</Text>
                        <View style={s.picker}>
                            <RNPickerSelect
                                onValueChange={(value) => console.log(value)}
                                items={[
                                    { label: 'ABC', value: 'ABC' },
                                    { label: 'ABC', value: 'ABC' },
                                    { label: 'ABC', value: 'ABC' },
                                ]}
                            />
                        </View>
                    </View>
                </View>
                <View style={[s.dflex,s.mt30]}>
                    <TouchableOpacity onPress={() => togglearrData('SchoolMap')}>
                        <Text style={s.mustHave}>Show School on Map</Text>
                    </TouchableOpacity>
                    <View >
                        <ToggleSwitch
                            isOn={SchoolMap}
                            trackOnStyle={{backgroundColor:'#E5D8B7'}}
                            trackOffStyle={{backgroundColor:'#f1f1f1'}}
                            thumbOnStyle={{backgroundColor:'#B48618'}}
                            thumbOffStyle={{backgroundColor:'#C4C4C4'}}
                            size="medium"
                            onToggle={() => togglearrData('SchoolMap')}
                        />
                    </View>
                </View>
                
            </KeyboardAwareScrollView>
            <View style={s.dflex}>
                <TouchableOpacity style={s.View}>
                    <Text style={s.tct}>View</Text>
                </TouchableOpacity>
                <TouchableOpacity style={s.Skip}>
                    <Text style={s.tcts}>Skip</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Filters;