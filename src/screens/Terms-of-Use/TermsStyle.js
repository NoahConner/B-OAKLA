import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

export default StyleSheet.create({
    container: {
        flex: moderateScale(1),
        backgroundColor:'#fff',
    },
    main:{
        // alignItems:'center',
        width:'100%',
        paddingHorizontal:moderateScale(30),
        paddingBottom:moderateScale(25)
    },
    pMatter:{
        textAlign:'left',
        fontFamily:'Poppins-SemiBold',
        fontSize:moderateScale(24),
        color:'#000',
        marginTop:moderateScale(30),
    },
    ptxt:{
        color:'#666',
        fontFamily:'Poppins-Regular',
        fontSize:moderateScale(14),
        lineHeight:moderateScale(22),
        marginTop:moderateScale(15)
    },
    mt50:{
        marginTop:moderateScale(50)
    }
})