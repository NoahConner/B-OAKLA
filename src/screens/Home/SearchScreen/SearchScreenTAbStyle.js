import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
        flex: moderateScale(1),
        backgroundColor: '#fff',
        paddingHorizontal: moderateScale(20),
        // height:windowHeight
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
    }, dflex: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    dflex2: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    likeCount: {
        fontFamily: 'Poppins-Medium',
        fontSize: moderateScale(16),
        color: '#000',
        marginTop: moderateScale(7)
    },
    mt20: {
        marginTop: moderateScale(20)
    },
    card: {
        backgroundColor: '#f1f1f1',
        borderBottomEndRadius: moderateScale(10),
        borderBottomStartRadius: moderateScale(10),
        marginBottom: moderateScale(15),
        position: 'relative'
    },
    image: {
        backgroundColor: '#000',
        height: moderateScale(200),
        borderRadius: moderateScale(12),
        overflow: 'hidden'
    },
    price: {
        fontSize: moderateScale(22),
        fontFamily: 'Poppins-Medium',
        color: '#000'
    },
    drp: {
        fontFamily: 'Poppins-Regular',
        color: '#666',
        fontSize: moderateScale(12)
    },
    dDivh: {
        paddingVertical: moderateScale(5),
        paddingHorizontal: moderateScale(10)
    },
    mainj: {
        marginTop: moderateScale(20),
        paddingBottom: moderateScale(70),
    },
    bhj: {
        // backgroundColor:'#000',
        width: moderateScale(200),
        position: 'relative'
    },
    mr20: {
        left: moderateScale(100)
    },
    mr30: {
        left: moderateScale(120)
    },
    hearted: {
        position: 'absolute',
        top: moderateScale(8),
        right: moderateScale(8),
        zIndex: 9999
    },
    heret: {
        backgroundColor: '#ffffff50',
        borderRadius: moderateScale(50),
        height: moderateScale(40),
        width: moderateScale(40),
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 3
    },
    mapICon: {
        backgroundColor: '#f1f1f1',
        paddingHorizontal: moderateScale(18),
        paddingVertical: moderateScale(10),
        borderRadius: moderateScale(50)
    },
    maper: {
        backgroundColor: '#000'
    },
    mapD: {
        // backgroundColor:'#00205b',
        width: '100%',
        height: windowHeight,
    },
    mapTrue: {
        zIndex: 1,
        paddingBottom: moderateScale(10)
    },
    marker: {
        marginLeft: 46,
        marginTop: 33,
        fontWeight: 'bold',
    },

    containerMap: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    listing: {
        backgroundColor: '#fff',
        width: '100%',
        height: windowHeight,
        position: 'absolute',
        zIndex:-1,
        paddingTop: moderateScale(80),
        paddingBottom: moderateScale(75),
        //   top:moderateScale(80),
    },
    segMn: {
        zIndex: 1
    },
    search: {
        width: moderateScale(windowWidth - 170),
        height:moderateScale(42),
        overflow: 'hidden',
    },
    searCon: {
        backgroundColor: '#fff',
        padding: 0,
        borderRadius: moderateScale(50),
        overflow: 'hidden',
        height: moderateScale(44),
        borderColor: 'transparent',
        borderWidth: 0,
        marginHorizontal: moderateScale(10),
        marginTop:moderateScale(-1)
    },
    searInp: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        fontSize: moderateScale(14),
        fontFamily: 'Poppins-Regular',
        paddingTop: moderateScale(10),
        borderWidth: 0
    },
    searConInp: {
        backgroundColor: '#f1f1f1',
        borderColor: '#000',
        borderWidth: 0
    },
    lftICoo: {
        // backgroundColor:'#00205b',
        height:30,
        width:33,
    },
    chipset:{
        backgroundColor:'#f1f1f1',
        paddingTop:moderateScale(7),
        paddingBottom:moderateScale(5),
        paddingHorizontal:moderateScale(12),
        borderRadius:moderateScale(50),
        flexDirection:'row',
        alignItems:'center',
        marginRight:moderateScale(10)
    },
    chipsetxt:{
        fontFamily:'Poppins-Regular',
        fontSize:moderateScale(11)
    },
    chiD:{
        marginTop:moderateScale(8),
        justifyContent:'flex-start'
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
    },

    touchDiv:{
        // backgroundColor:'#00205b',
        backgroundColor: '#00800052',
        height:'100%'
    },


    centeredView: {
        flex: 1,
        zIndex:10000
      },
});