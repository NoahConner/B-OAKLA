import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

export default StyleSheet.create({
    container: {
        // backgroundColor:'#00205b',
        paddingHorizontal:moderateScale(20),
        paddingVertical:moderateScale(5),
        height:moderateScale(65)
    },
    main:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    backBtn:{
        backgroundColor:'#fff',
        borderRadius:moderateScale(50),
        height:moderateScale(30),
        width:moderateScale(30),
        alignItems:'center',
        justifyContent:'center'
    },
    tf:{
        backgroundColor:'transparent'
    },
    nameHEader:{
        position:'absolute',
        left:moderateScale(65),
        
    },
    nmaeTxt:{
        fontSize:moderateScale(16),
        fontFamily:'Poppins-Medium',
        marginTop:3,
        color:'#999'
    },
    leftMin:{
        left:moderateScale(20),
    }
});