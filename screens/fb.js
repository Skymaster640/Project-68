import React from 'react';
import {Text,View,Image,StyleSheet} from 'react-native';


export default class Facebook extends React.Component{
  render(){
    return(
      <View style = {styles.itemcontainer}>

        <Image
          style={{
            width: 150,
            height: 150,
            borderColor: 'black',
            borderWidth: 0,
            marginTop: 20,
          }}
          source={{
            uri:
              'https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png',
          }}
        />

      <Text style = {styles.toptext}>Welcome to Facebook!</Text>

      

      </View>

    )
  }
}


const styles = StyleSheet.create({
  toptext: {
    alignItems: 'center',
    marginTop: 50,

  },
  itemcontainer: {
    alignItems: 'center',
  }
})