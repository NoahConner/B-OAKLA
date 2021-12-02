// import { StyleSheet,Dimensions  } from 'react-native';
// import { moderateScale } from 'react-native-size-matters';

// const windowHeight = Dimensions.get('window').height;

// export default StyleSheet.create({
//     container: {
//         flex: moderateScale(1),
//         backgroundColor:'#fff',
//     },
//     logoHeader:{
//         height: moderateScale(70), 
//         flexDirection: 'row', 
//         alignItems: 'center', 
//         justifyContent: 'space-between', 
//         paddingHorizontal: moderateScale(20),
//         // backgroundColor:'#00205b',
//         marginBottom:moderateScale(-10),
//         marginTop:moderateScale(10)
//     },
//     cardDetails:{
//         position: 'absolute',
//         top:moderateScale(20),
//         left:moderateScale(20),
//         height:'100%',
//         width:'100%',
//         zIndex:900
//     },
//     price:{
//         color:'#B48618',
//         fontFamily:'Poppins-Medium',
//         fontSize:moderateScale(34)
//     },
//     address:{
//         color:'#fff',
//         fontFamily:'Poppins-Regular',
//         fontSize:moderateScale(12),
//         marginTop:moderateScale(-8)
//     },
//     AddView:{
//         paddingHorizontal:moderateScale(20),
//         position:'absolute',
//         bottom:moderateScale(20)
//     },
//     hearted:{
//         position:'absolute',
//         top:moderateScale(30),
//         right:moderateScale(30),
//         zIndex:999
//     },
//     heret:{
//         backgroundColor:'#ffffff50',
//         borderRadius:moderateScale(50),
//         height:moderateScale(40),
//         width:moderateScale(40),
//         alignItems:'center',
//         justifyContent:'center',
//         paddingTop:3
//     },

//     touchDiv:{
//         backgroundColor: '#00800052',
//         height:100,
//     },
//     hert:{
//         top:moderateScale(130),
//         right:moderateScale(80),
//         zIndex:9999
//     },
//     hereto:{
//         backgroundColor:'transparent',
//         borderRadius:moderateScale(50),
//         height:moderateScale(300),
//         width:moderateScale(200),
//     },
//     centeredView: {
//         flex: 1,
//         zIndex:10000
//       },

//     //   

//     card: {
//         flex: 1,
//         borderRadius: moderateScale(15),
//         borderWidth: 0,
//         borderColor: 'transparent',
//         justifyContent: 'center',
//         backgroundColor: 'white',
//         overflow:'hidden'
//       },
//       text: {
//         textAlign: 'center',
//         fontSize: 50,
//         backgroundColor: 'transparent'
//       },
//       done: {
//         textAlign: 'center',
//         fontSize: 30,
//         color: 'white',
//         backgroundColor: 'transparent'
//       },
//       cardSwipAlb:{
//         //   backgroundColor:'#00205b',
//           width:'100%',
//           height:moderateScale(windowHeight-185),
//           paddingHorizontal:moderateScale(20),
//           paddingTop:moderateScale(10),
//           overflow:'hidden'
//       }
      
// });









import { StyleSheet,Dimensions  } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const windowHeight = Dimensions.get('window').height;

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
        marginBottom:moderateScale(-10),
        marginTop:moderateScale(10)
    },
    cardDetails:{
        position: 'absolute',
        top:moderateScale(0),
        left:moderateScale(0),
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
        top:moderateScale(20),
        right:moderateScale(30),
        zIndex:99999,
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
        backgroundColor: '#00800052',
        height:100,
    },
    hert:{
        top:moderateScale(130),
        right:moderateScale(80),
        zIndex:9999
    },
    hereto:{
        backgroundColor:'transparent',
        borderRadius:moderateScale(50),
        height:moderateScale(300),
        width:moderateScale(200),
    },
    centeredView: {
        flex: 1,
        zIndex:10000
      },  

    card: {
        flex: 1,
        borderRadius: moderateScale(15),
        borderWidth: 0,
        borderColor: 'transparent',
        justifyContent: 'center',
        backgroundColor: 'white',
        overflow:'hidden'
      },
      text: {
        textAlign: 'center',
        fontSize: 50,
        backgroundColor: 'transparent'
      },
      done: {
        textAlign: 'center',
        fontSize: 30,
        color: 'white',
        backgroundColor: 'transparent'
      },
      cardSwipAlb:{
          width:'100%',
          height:moderateScale(windowHeight-210),
          paddingHorizontal:moderateScale(20),
          paddingTop:moderateScale(10),
          overflow:'hidden'
      }
      
});