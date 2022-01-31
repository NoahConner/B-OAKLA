import { StyleSheet,Dimensions  } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    // container: {
    //     // flex: moderateScale(1),
    //     backgroundColor:'#000',
    //     backgroundColor:'#000',
    //     height:'100%',
    //     width:'100%',
    //     bottom:0,
    //     right:0,
    //     position:'relative',
    //     zIndex:10,
    //     justifyContent:'center',
    //     paddingHorizontal:moderateScale(30),
    //     overflow:'hidden',
    // }, 
    images:{
        marginTop:moderateScale(-80)
    },
    cony:{
        position:'relative',
        height:windowHeight-0,
        width:windowWidth
    },
    buttons:{
        position:'absolute',
        bottom: moderateScale(15,0.1),
        right:moderateScale(20,0.1),
        flexDirection:'row',
        alignItems:'center'
    },
    skipTxt:{
        color:'#fff',
        fontSize:moderateScale(16),
        fontFamily:'Poppins-Regular',
        marginRight:moderateScale(15)
    },
    nextTxt:{
        fontSize:moderateScale(16),
        fontFamily:'Poppins-Regular',
        backgroundColor:'#fff',
        color:'#B48618',
        paddingHorizontal:moderateScale(20),
        paddingTop:moderateScale(8),
        paddingBottom:moderateScale(5),
        borderRadius:moderateScale(50)
    },
    right:{
        alignItems:'flex-end'
    },
    left:{
        alignItems:'flex-start'
    },
    bottom:{
        alignItems:'center',
        justifyContent:'center',
    }
});