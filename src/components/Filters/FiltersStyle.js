import { StyleSheet } from 'react-native';
import { fonts } from 'react-native-elements/dist/config';
import { moderateScale } from 'react-native-size-matters';

export default StyleSheet.create({
    container: {
        flex: moderateScale(1),
        backgroundColor: '#fff',
        padding: moderateScale(20)
    },
    mainHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    hTxt: {
        fontSize: moderateScale(16),
        color: '#000',
        fontFamily: 'Poppins-Regular'
    },
    reset: {
        color: '#666'
    },
    segmentStyle: {
        fontFamily: 'Poppins-Regular',
    },
    radioBox: {
        marginTop: moderateScale(20),
        height: moderateScale(40),
        borderRadius: moderateScale(8),
        width: '100%',
        alignSelf: 'center',
        justifyContent: 'center',
        borderWidth: moderateScale(1.5),
        borderColor: '#f1f1f1',
    },
    searchContainer: {
        backgroundColor: '#f1f1f1',
        margin: 0,
        padding: 0,
        borderTopColor:'#fff',
        borderBottomColor:'#fff',
        borderRadius:moderateScale(24),
        overflow:'hidden',
        marginTop:moderateScale(15)
    },
    sinpContainer:{
        backgroundColor:'#f1f1f1',
    },
    sinp:{
        fontSize:14,
        fontFamily:'Poppins-Medium',
        lineHeight:moderateScale(20)
    },
    leftSIcon:{
        marginLeft:moderateScale(20)
    },
    mt25:{
        marginTop:moderateScale(25)
    },
    dflex:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:moderateScale(10),
        flexWrap:'wrap'
    },
    input:{
        backgroundColor:'#f1f1f1',
        borderRadius:moderateScale(50),
        paddingLeft:moderateScale(65),
        fontSize: moderateScale(15),
        color: '#000',
        fontFamily: 'Poppins-Regular',
        paddingTop:moderateScale(11)
    },
    mInp:{
        position:'relative',
        width:'48%',
    },
    mtxt:{
        position:'absolute',
        zIndex:1,
        top:moderateScale(12),
        left:moderateScale(20),
        fontSize: moderateScale(15),
        color: '#666',
        fontFamily: 'Poppins-Regular'
    },
    chips:{
        backgroundColor:'#f1f1f1',
        paddingHorizontal:moderateScale(18),
        paddingTop:moderateScale(10),
        paddingBottom:moderateScale(8),
        borderRadius:moderateScale(50),
        fontFamily: 'Poppins-Regular',
        color:'#000',
        marginRight:moderateScale(10),
        marginBottom:moderateScale(10)
    },
    chipset:{
        justifyContent:'flex-start'
    },
    divider:{
        backgroundColor:'#666',
        height:1,
        width:'80%',
        marginLeft:'10%',
        marginVertical:15,
        opacity:0.3
    },
    checkboxi:{
        justifyContent:'flex-start'
    },
    radioChk:{
        fontFamily:'Poppins-Regular',
        color:'#000',
        fontSize:16
    },
    radioCOnt:{
        backgroundColor:'transparent',
        padding:0,
        borderColor:'transparent'
    },
    gold:{
        backgroundColor:'#B48618'
    }
})