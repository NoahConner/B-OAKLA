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
        marginTop:10
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
        color:'#000'
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
    inpStyle:{
        fontSize:moderateScale(14),
        fontFamily:'Poppins-Medium',
        margin:0,
        
    },
    conStyle:{
        backgroundColor:'#f1f1f1',
        height:50,
        borderRadius:moderateScale(50),
        overflow: 'hidden',
        marginBottom:moderateScale(15)
    },
    inpConStyle:{
        // backgroundColor:'#00205b',
        borderBottomColor:'transparent',
        borderBottomWidth:0,
        paddingLeft:moderateScale(10),
        paddingTop:moderateScale(5)
    },

});