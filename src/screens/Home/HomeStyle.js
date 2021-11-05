import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

export default StyleSheet.create({
    container: {
        flex: moderateScale(1),
        backgroundColor:'#fff',
    },
    borrderd:{
        borderColor:'#B48618',
    },
    viewr:{
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
        width:moderateScale(44),
        borderTopWidth:3
    }
});