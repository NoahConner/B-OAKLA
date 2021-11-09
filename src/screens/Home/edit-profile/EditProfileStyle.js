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
    imageP:{
        height:moderateScale(130),
        width:moderateScale(130),
        borderRadius:moderateScale(100),
        overflow:'hidden',
        marginTop:moderateScale(0)
    },
    name:{
        fontSize:moderateScale(16),
        color:'#000',
        fontFamily:'Poppins-Medium',
        marginTop:moderateScale(10)
    },
    inpMain:{
        width:'100%',
        marginTop:moderateScale(40)
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
    mt30:{
        marginTop:moderateScale(15)
    },
    editbtn:{
        alignItems:'center',
        justifyContent:'center',
        borderWidth:2.5,
        borderColor:'#B48618',
        borderRadius:moderateScale(50),
        paddingTop:moderateScale(12),
        paddingBottom:moderateScale(9),
    },
    idvider:{
        height:1,
        width:'80%',
        marginLeft:'10%',
        backgroundColor:'lightgrey',
        marginVertical:moderateScale(10)
    },
    nono:{
        fontSize:moderateScale(15),
        color:'#666',
        fontFamily:'Poppins-Regular'
    },
});