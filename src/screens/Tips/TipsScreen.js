import React, { useContext,useRef } from 'react';
import { View, Text, Animated,Dimensions  } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { moderateScale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons';
import AppContext from '../../components/Appcontext/contextApi';

import s from './TipsStyle';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Tips = ({ navigation }) => {
    const context = useContext(AppContext)
    const heightty = useRef(new Animated.Value(0)).current
    const widthtty = useRef(new Animated.Value(0)).current
    const opacio = useRef(new Animated.Value(0)).current
    const radio = useRef(new Animated.Value(50)).current
    const opacMain = useRef(new Animated.Value(0.5)).current
    
      

     const heii = (h,w,olo,ra,om) => {
        Animated.timing(
            heightty,
            {
              toValue: h,
              duration: 500,
            }
        ).start()

        Animated.timing(
        widthtty,
        {
            toValue: w,
            duration: 400,
        }
        ).start()

        Animated.timing(
            radio,
            {
                toValue: ra,
                duration: 400,
            }
            ).start()

        Animated.timing(
            opacMain,
            {
                toValue: om,
                duration: 500,
            }
            ).start()

        if(olo == 1){
            setTimeout(() => {
                Animated.timing(
                    opacio,
                    {
                        toValue: olo,
                        duration: 700,
                    }
                    ).start()
            }, 700);
        }else{
            Animated.timing(
                opacio,
                {
                    toValue: olo,
                    duration: 10,
                }
                ).start()
        }
     }

    context.tipsS ?
    heii(windowHeight,windowWidth,1,0,1) :
    heii(0,0,0,50,0.5)

    return (
        <View style={{ alignItems:'flex-end'}}>
            <Animated.View style={{...s.container,height:heightty,width:widthtty,borderRadius:radio,opacity:opacMain}}>
            {
                context.tipsS ? 
                (<>
                    <View style={s.lop}>
                        <TouchableOpacity style={s.infoIcio} onPress={() => context.settipsS(false)}>
                            <Icon name="information-circle-outline" size={moderateScale(25)} color="#666" />
                        </TouchableOpacity>
                    </View>
                </>) : null
            }
                <Animated.View style={{ position: 'relative',opacity:opacio }}>
                    <Text style={s.fonter}>Swipe Right for Like & Left for Dislike</Text>
                    <Text style={[s.fonter, s.mt1]}>And</Text>
                    <Text style={[s.fonter, s.mt1]}>Click for details</Text>
                </Animated.View>
                <Animated.View style={{...s.okk,opacity:opacio}}>
                    <TouchableOpacity onPress={() => context.settipsS(false)}>
                        <Text style={s.okkTxt}>Ok</Text>
                    </TouchableOpacity>
                </Animated.View>
            </Animated.View>
        </View>
    )
}

export default Tips;