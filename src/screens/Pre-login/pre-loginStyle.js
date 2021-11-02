import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Font from '../../assets/fonts/fonts';
import { Dimensions } from 'react-native';
import { color } from 'react-native-reanimated';

const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
        flex: moderateScale(1),
        backgroundColor:'#fff',
    },
    main:{
        alignItems:'center',
        width:'100%',
    },
    px45:{
        paddingHorizontal:moderateScale(45)
    },
    OakH1:{
        fontSize:24,
        textAlign:'center',
        fontFamily:Font.medium,
        marginTop:moderateScale(60)
    },
    goldColor:{
        color:'#B48618'
    },
    upView:{
        height:(windowHeight/2) - 30,
        // backgroundColor:'#00205b',
        width:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    DownView:{
        height:(windowHeight/2) + 30,
        // backgroundColor:'#666',
        width:'100%'
    },
    signInTxt:{
        color:'#808080',
        marginTop:moderateScale(20)
    },
    image: {
        flex: 1,
        justifyContent: "center",
        resizeMode: "cover",
    },
    btns:{
        backgroundColor:'#fff',
        borderRadius:50,
        width:'100%',
        padding:moderateScale(12),
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center'
    },
    btnsView:{
        paddingHorizontal:moderateScale(30),
    },
    continueTxt:{
        fontSize:moderateScale(16),
        color:'#000',
        fontFamily:'Poppins-Regular',
        marginLeft:moderateScale(12)
    },
    mt20:{
        marginTop:moderateScale(20)
    }
});