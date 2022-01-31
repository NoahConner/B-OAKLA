import { StyleSheet,Dimensions  } from 'react-native';
import { moderateScale } from 'react-native-size-matters';


export default StyleSheet.create({
    container: {
        // flex: moderateScale(1),
        backgroundColor:'#fff',
        backgroundColor:'#000',
        height:'100%',
        width:'100%',
        bottom:0,
        right:0,
        position:'relative',
        zIndex:10,
        justifyContent:'center',
        paddingHorizontal:moderateScale(30),
        // opacity:0.8
        overflow:'hidden',
        // position:'absolute',
       
        
        
    },
    hei:{
        height:0,
        width:0,
    },
    fonter:{
        fontSize:moderateScale(24),
        color:'#fff',
        fontFamily:'Poppins-Regular'
    },
    mt1:{
        marginTop:moderateScale(20)
    },
    infoIcio:{
        backgroundColor:'#fff',
        alignSelf: 'flex-start',
        borderRadius:moderateScale(50),
        padding:moderateScale(4),
        paddingBottom:moderateScale(3),
    },
    lop:{
        position: 'absolute',
        top:moderateScale(27),
        right:moderateScale(16),
    },
    okk:{
        position:'absolute',
        bottom:moderateScale(20),
        right:moderateScale(25),
    },
    okkTxt:{
        color:'#fff',
        fontFamily:'Poppins-SemiBold',
        fontSize:moderateScale(18)
    }
})