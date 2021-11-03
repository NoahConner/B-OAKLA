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
        marginTop:40,
    },
    welcomB:{
        fontSize:moderateScale(30),
        color:'#000',
        fontFamily:'Poppins-Medium',
        textAlign:'center'
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
        marginTop:moderateScale(40)
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
    signInBtn:{
        backgroundColor:'#000',
        padding:moderateScale(16),
        borderRadius:50,
        marginTop:moderateScale(15),
    },
    signInBtnTxt:{
        color:'#B48618',
        fontFamily:'Poppins-Regular',
        fontSize:moderateScale(16),
        textAlign:'center'
    },
    pleaseSignView:{
        // flexDirection:'row',
        justifyContent:'center',
        marginTop:moderateScale(20),
        textAlign:'center',
        alignItems:'center'
    },
    pleaseSignS:{
        color:'#29ABE2',
        fontFamily:'Poppins-Medium',
        marginTop:moderateScale(5),
        alignItems:'center'
    },
    texterr:{
        textAlign:'center'
    },
    resend:{
        width:'100%',alignItems:'center'
    },
    mt10:{
        marginTop:moderateScale(30)
    }

});