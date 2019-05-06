import React, {Component} from 'react';
import { StyleSheet, View,   } from 'react-native';
import {
  SafeAreaView
} from 'react-navigation';
import Login from './components/Login';
import Categories from './components/Categories';
import Player from './components/Player';

export default class App extends Component {
  render() {
    const songs = 
    {
      songs:[
      {
        id:2,
        url:'http://files2.earmilk.com/upload/mp3/2011-02/childishgambin-freaksngeeks.mp3',
        coverImg: 'https://t2.genius.com/unsafe/600x600/https%3A%2F%2Fimages.genius.com%2Fbe9197ecbcd58f7631a1c17709d6dff2.500x500x1.jpg',
        song: 'Freaks and Geeks',
        album: 'EP',
        artist: 'Childish Gambino',
        year: '2011',
        generes: [],
      },
    ]
  };
    return (
      // <SafeAreaView  forceInset={{ bottom: 'never' }} style={styles.safeArea}>
        <View style={{flex:1}}>
          {/* <Login /> */}
          {/* <Categories /> */}
          <Player songs={songs} />
        </View>
      // </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff'
  }
})