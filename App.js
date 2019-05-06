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
        id:1,
        url:'https://hiphopshuffle.net/wp-content/uploads/2019/04/LIL_DICKY_-_EARTH_Hiphopshuffle.net.mp3',
        coverImg: 'https://t2.genius.com/unsafe/440x440/https%3A%2F%2Fimages.genius.com%2F60d3d01611f16283ab3388ed34210652.1000x1000x1.jpg',
        song: 'Earth',
        album: 'LD2',
        artist: 'Lil Dicky',
        year: '2019',
        generes: [],
      },
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