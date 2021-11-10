import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
        flex: moderateScale(1),
        backgroundColor:'#fff',
        paddingHorizontal:moderateScale(20),
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
        left:moderateScale(90)
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
    mapICon:{
        backgroundColor:'#000',
        paddingHorizontal:moderateScale(18),
        paddingVertical:moderateScale(10),
        borderRadius:moderateScale(50)
    },
    mapD:{
        // backgroundColor:'#00205b',
        width:'100%',
        height:windowHeight,
    },
    mapTrue:{
        zIndex:1,
        paddingBottom:moderateScale(10)
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
      listing:{
          backgroundColor:'#fff',
          width:'100%',
          height:windowHeight,
          position:'absolute',
          zIndex:-1,
          paddingTop:moderateScale(80),
          paddingBottom:moderateScale(75),
        //   top:moderateScale(80),
      },
      segMn:{
          zIndex:1
      },
      listBox:{
        borderTopWidth:0.7,
        borderBottomWidth:0.7,
        borderColor:'lightgrey',
        width:'100%',
        paddingVertical:moderateScale(20),
        paddingHorizontal:moderateScale(20),
          
        //   backgroundColor:'#000'
      },
      flexStart:{
        justifyContent:'flex-start'
      },
      Stxt:{
          fontSize:moderateScale(14),
          fontFamily:'Poppins-Medium',
          marginLeft:moderateScale(15),
          color:'#666'
      }
});