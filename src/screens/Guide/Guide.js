import React, { useContext, useState } from 'react';
import { View, Text, Animated, Dimensions, Easing } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { moderateScale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons';
import AppContext from '../../components/Appcontext/contextApi';
import s from './GuideStyle';
import Right from '../../assets/svg/right.svg'
import Left from '../../assets/svg/left.svg'
import Center from '../../assets/svg/center.svg';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Guide = ({ navigation }) => {
    const context = useContext(AppContext)
    const [slides, setslides] = useState(1)

    let opacity = new Animated.Value(0);
    const animate = easing => {
        opacity.setValue(0);
        Animated.timing(opacity, {
            toValue: 1,
            duration: 1200,
            easing
        }).start();
    };

    const sizeH = opacity.interpolate({
        inputRange: [0, 1],
        outputRange: [0, windowHeight]
    });
    const sizeW = opacity.interpolate({
        inputRange: [0, 1],
        outputRange: [0, windowWidth]
    });

    const animatedStyles = [
        s.images,
        {
            opacity,
            width: sizeW,
            height: sizeH
        }
    ];

    animate(Easing.bounce)
    // animate(Easing.in(Easing.bounce))
    // animate(Easing.quad)
    // animate(Easing.bezier(0, 1, 1, -1))


    const sliders = () => {
        if (slides == 1) {
            setslides(2)
        } else if (slides == 2) {
            setslides(3)
        } else if (slides == 3) {
            setslides(null)
            context.setguideR(false)
        }
    }

    return (
        <View style={s.cony}>
            {
                context.guideR ? (
                    slides == 1 ? (
                        <>
                            <View style={[s.right]}>
                                <Animated.View style={[animatedStyles]}>
                                    <Right width={'100%'} height={moderateScale(windowHeight + 140, 0.1)} />
                                </Animated.View>
                            </View>
                        </>
                    ) : slides == 2 ? (
                        <>
                            <View style={s.left}>
                                <Animated.View style={[animatedStyles]}>
                                    <Left width={'100%'} height={moderateScale(windowHeight + 140, 0.1)} />
                                </Animated.View>
                            </View>
                        </>
                    ) : slides == 3 ? (
                        <>
                            <View style={s.bottom}>
                                <Animated.View style={[animatedStyles]}>
                                    <Center width={'100%'} height={moderateScale(windowHeight + 140, 0.1)} />
                                </Animated.View>
                            </View>
                        </>
                    ) : null
                ) : null
            }



            {
                context.guideR ? (
                    <>
                        <View style={s.buttons}>
                            <TouchableOpacity style={s.skip} onPress={() => context.setguideR(false)}>
                                <Text style={s.skipTxt}>Skip</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={s.next} onPress={() => sliders()}>
                                <Text style={s.nextTxt}>Next</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                ) : null
            }
        </View>
    )
}

export default Guide;