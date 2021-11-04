import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

export default StyleSheet.create({
    container: {
        flex: moderateScale(1),
        backgroundColor:'#fff',
    },
    logoHeader:{
        height: moderateScale(70), 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        paddingHorizontal: moderateScale(20),
    },
    cardDetails:{
        position: 'absolute',
        top:moderateScale(20),
        left:moderateScale(20),
        height:'100%',
        width:'100%',
        zIndex:900
    },
    price:{
        color:'#B48618',
        fontFamily:'Poppins-Medium',
        fontSize:moderateScale(34)
    },
    address:{
        color:'#fff',
        fontFamily:'Poppins-Regular',
        fontSize:moderateScale(12),
        marginTop:moderateScale(-8)
    },
    AddView:{
        paddingHorizontal:moderateScale(20),
        position:'absolute',
        bottom:moderateScale(20)
    },
    hearted:{
        position:'absolute',
        top:moderateScale(30),
        right:moderateScale(30),
        zIndex:999
    },
    heret:{
        backgroundColor:'#ffffff50',
        borderRadius:moderateScale(50),
        height:moderateScale(40),
        width:moderateScale(40),
        alignItems:'center',
        justifyContent:'center',
        paddingTop:3
    }
});