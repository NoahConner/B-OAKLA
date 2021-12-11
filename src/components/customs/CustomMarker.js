import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Icon } from 'react-native-elements'
class CustomMarker extends React.Component {
  render() {
    return (
    //   <Image
    //     style={styles.image}
    //     source={
    //       this.props.pressed ? require('./ruby.png') : require('./diamond.png')
    //     }
    //     resizeMode="contain"
    //   />
    <Icon
  name='circle'
  type='font-awesome'
  color='#000'
  containerStyle={{backgroundColor:'#b48618',borderRadius: 50,paddingTop:3,paddingBottom:3,paddingLeft:4,paddingRight:4,marginTop:7}}
  />
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 40,
    width: 40,
  },
});

export default CustomMarker;