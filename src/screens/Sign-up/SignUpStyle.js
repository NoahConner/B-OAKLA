import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

export default StyleSheet.create({
    container: {
        flex: moderateScale(1),
        backgroundColor:'#fff',
    },
    main:{
        alignItems:'center',
        width:'100%',
        paddingHorizontal:moderateScale(30),
        marginTop:70,
    },
    welcomB:{
        fontSize:moderateScale(30),
        color:'#000',
        fontFamily:'Poppins-Medium'
    },
    signInP:{
        fontSize:moderateScale(12),
        color:'#808080',
        fontFamily:'Poppins-Regular',
        marginTop:10,
        textAlign:'center'
    },
    inpMain:{
        width:'100%',
        marginTop:moderateScale(50)
    },
    input:{
        backgroundColor:'#f1f1f1',
        paddingHorizontal:moderateScale(20),
        fontSize:moderateScale(16),
        marginTop:moderateScale(15),
        borderRadius:50,
        paddingVertical:moderateScale(15),
        fontFamily:'Poppins-Regular',
    },
    forgotDiv:{
        color:'#29ABE2',
        fontFamily:'Poppins-Regular',
        fontSize:moderateScale(14),
        textAlign:'right',
        marginTop:moderateScale(10),
    },
    signInBtn:{
        backgroundColor:'#000',
        padding:moderateScale(16),
        borderRadius:50,
        marginTop:moderateScale(35),
    },
    signInBtnTxt:{
        color:'#B48618',
        fontFamily:'Poppins-Regular',
        fontSize:moderateScale(16),
        textAlign:'center'
    },
    pleaseSignView:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:moderateScale(20)
    },
    pleaseSignS:{
        color:'#29ABE2',
        fontFamily:'Poppins-Medium',
        // marginLeft:moderateScale(5)
    },
    termsAgree:{
        flexDirection:'row',
        justifyContent:'flex-start',
        marginTop:moderateScale(10),
        flexWrap:'wrap'
    },
    f12:{
        fontSize:13
    }
});