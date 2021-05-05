import React from 'react';
import {Text,View,Image,StyleSheet} from 'react-native';


export default class Instagram extends React.Component{
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
              'http://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png',
          }}
        />

      <Text style = {styles.toptext}>Welcome to Instagram!</Text>

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