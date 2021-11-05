import React, { useState,useCallback } from 'react';
import { ActivityIndicator, Text, View, Dimensions, TextInput, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import s from './FiltersStyle'
import { SearchBar, CheckBox   } from 'react-native-elements';

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
    const [arrData,setarrData] = useState(filtersdata)
    const [ForSale,setForSale] = useState(null)
    const [Sold,setSold] = useState(false)
    const [search, setsearch] = useState('')
    const [tripType, setTripType] = useState(0);

    const setTripCount = (event) => {
        var c = event.nativeEvent.selectedSegmentIndex
        setTripType(c)
    }

    const changeTypes = (p,t,i) => {
        ui = arrData
        ui[p][t][i].selected = !ui[p][t][i].selected;

        setarrData(ui)
        console.log(ui[p][t][i].selected)
    }

    const dataTer = (p,t) => {
        return (
            arrData[p][t].map((val2, i) => {
                return (
                    <TouchableOpacity key={i} onPress={() => changeTypes(p,t,i)}>
                        <Text  style={[s.chips,val2.selected ? s.gold : null]}>{val2.name}</Text>
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
                    <TouchableOpacity >
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
                                dataTer(0,'beds')
                            }
                        </View>
                    </View>
                </View>

                <View>
                    <View>
                        <Text style={[s.hTxt, s.mt25]}>Baths</Text>
                        <View style={[s.dflex, s.chipset]}>
                            {
                                dataTer(1,'baths')
                            }
                        </View>
                    </View>
                </View>

                <View>
                    <View>
                        <Text style={[s.hTxt, s.mt25]}>Property Type</Text>
                        <View style={[s.dflex, s.chipset]}>
                            {
                                dataTer(2,'property-type')
                            }
                        </View>
                    </View>
                </View>

                <View style={s.divider}></View>

                <View>
                    <View>
                        <Text style={[s.hTxt, s.mt25]}>Property Type</Text>
                        
                        <View style={[s.dflex,s.checkboxi]}>
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

            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

export default Filters;