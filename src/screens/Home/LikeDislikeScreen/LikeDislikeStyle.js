import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

export default StyleSheet.create({
    container: {
        flex: moderateScale(1),
        backgroundColor:'#fff',
        paddingHorizontal:moderateScale(20)
    },
    radioBox: {
        marginTop: moderateScale(20),
        height: moderateScale(35),
        borderRadius: moderateScale(8),
        width: '100%',
        alignSelf: 'center',
        justifyContent: 'center',
        borderWidth: moderateScale(1.5),
        borderColor: '#f1f1f1',
    },dflex:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    likeCount:{
        fontFamily:'Poppins-Medium',
        fontSize:moderateScale(16),
        color:'#000',
        marginTop:moderateScale(7)
    },
    mt20:{
        marginTop:moderateScale(20)
    },
    card:{
        backgroundColor:'#f1f1f1',
        borderBottomEndRadius:moderateScale(10),
        borderBottomStartRadius:moderateScale(10),
        marginBottom:moderateScale(15),
        position:'relative'
    },
    image:{
        backgroundColor:'#000',
        height:moderateScale(200),
        borderRadius:moderateScale(12),
        overflow:'hidden'
    },
    price:{
        fontSize:moderateScale(22),
        fontFamily:'Poppins-Medium',
        color:'#000'
    },
    drp:{
        fontFamily:'Poppins-Regular',
        color:'#666',
        fontSize:moderateScale(12)
    },
    dDivh:{
        paddingVertical:moderateScale(5),
        paddingHorizontal:moderateScale(10)
    },
    mainj:{
        marginTop: moderateScale(30),
        paddingBottom:moderateScale(70)
    },
    picker:{
        marginTop:moderateScale(10),
        borderRadius:moderateScale(50),
        fontFamily:'Poppins-Medium',
        position:'absolute',
        backgroundColor:'#f1f1f1',
        width:130,
        left:moderateScale(75)
    },
    bhj:{
        // backgroundColor:'#000',
        width:moderateScale(200),
        position:'relative'
    },
    mr20:{
        left:moderateScale(100)
    },
    mr30:{
        left:moderateScale(120)
    },
    hearted:{
        position:'absolute',
        top:moderateScale(8),
        right:moderateScale(8),
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
    },
});