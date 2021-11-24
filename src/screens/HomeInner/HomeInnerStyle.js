import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { Dimensions } from 'react-native';

const windowWidth  = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
        flex: moderateScale(1),
        backgroundColor:'#fff',
        position:'relative',
    },
    main:{
        paddingHorizontal:moderateScale(20),
        backgroundColor:'#fff',
        borderTopRightRadius:moderateScale(25),
        borderTopLeftRadius:moderateScale(25),
        paddingTop:moderateScale(20),
        // marginTop:moderateScale(-35),
        position:'relative'
    },
    hearted:{
        position:'absolute',
        right:moderateScale(20),
        top:moderateScale(20)
    },
    price:{
        fontSize:moderateScale(26),
        fontFamily:'Poppins-Medium',
        color:'#000',
    },
    address:{
        fontSize:moderateScale(15),
        color:'#666',
        paddingRight:moderateScale(50),
        marginTop:moderateScale(-5)
    },
    chipo:{
        backgroundColor:'#F7F3E7',
        alignSelf:"flex-start",
        paddingHorizontal:moderateScale(12),
        paddingTop:moderateScale(8),
        paddingBottom:moderateScale(4),
        borderRadius:moderateScale(50),
        flexDirection:'row',
        alignItems:'center',
        marginRight:moderateScale(10),
        marginBottom:moderateScale(20)
    },
    chipoTxt:{
        fontSize:moderateScale(14),
        color:'#000',
        fontFamily:'Poppins-Regular',
        marginLeft:moderateScale(8)
    },
    homeis:{
        marginTop:moderateScale(40),
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap',
    },
    descp:{
        fontSize:moderateScale(18),
        color:'#000',
        fontFamily:'Poppins-Regular',
        marginTop:moderateScale(10)
    },
    descPr:{
        fontSize:moderateScale(14),
        color:'#666',
        fontFamily:'Poppins-Regular',
        marginTop:moderateScale(10)
    },
    mt20:{
        marginTop:moderateScale(60),
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    mapD: {
        width: '100%',
        height: moderateScale(300),
        marginTop:moderateScale(20)
    },
    btns:{
        backgroundColor:'#000',

        marginTop:moderateScale(20),
        borderRadius:moderateScale(50),
        alignItems:'center',
        paddingTop:moderateScale(18),
        paddingBottom:moderateScale(16)
    },
    btnsC:{
        backgroundColor:'#fff',
        marginBottom:moderateScale(20),
        borderRadius:moderateScale(50),
        alignItems:'center',
        paddingTop:moderateScale(18),
        paddingBottom:moderateScale(16)
    },
    btnsTxt:{
        color:'#fff',
        fontSize:moderateScale(14),
        fontFamily:'Poppins-Regular',
    },
    cblack:{
        color:'#000',
    },
    fimg:{ 
        width: moderateScale(120), 
        height: moderateScale(70) ,
        borderRadius:moderateScale(10),
    },
    fimgD:{
        borderColor:'#B48618',
        borderWidth:1,
        padding:moderateScale(3),
        marginLeft:moderateScale(10),
        borderRadius:moderateScale(10),
        // marginRight:moderateScale(10)
    },
    mainert:{
        marginTop:moderateScale(-115),
        marginBottom:moderateScale(20),
    },
    posin:{
        position:'relative'
    },
    overlayt:{
        position:'absolute',
        height:'100%',
        width:'100%',
    },
    last:{
        marginRight:moderateScale(10)
    },
    ConatctIn:{
        fontSize:moderateScale(20),
        fontFamily:'Poppins-Medium',
        color:'#000'
    },
    inpMain:{
        width:'100%',
        marginTop:moderateScale(40)
    },
    inpStyle:{
        fontSize:moderateScale(14),
        fontFamily:'Poppins-Medium',
        margin:0,
        color:'#000'
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
    input:{
        backgroundColor:'#f1f1f1',
        borderRadius:moderateScale(15),
        padding:moderateScale(15),
        fontSize:moderateScale(14),
        fontFamily:'Poppins-Medium',
        color:'#000'
    },
    pol:{
        borderRadius:moderateScale(50),
        marginBottom:moderateScale(15),
        paddingLeft:moderateScale(25),
        paddingTop:moderateScale(11),
        paddingBottom:moderateScale(9)
    },
    mamain:{
        marginBottom:moderateScale(20)
    }
})