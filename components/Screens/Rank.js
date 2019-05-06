import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, ImageBackground, FlatList, TouchableOpacity } from 'react-native';
import { TabNavigation } from 'react-navigation'; 
import Icon from 'react-native-vector-icons/FontAwesome';

const {width: WIDTH} = Dimensions.get('window');
import bgImage from '../../Assets/Images/main-bg.jpeg';


class Rank extends Component {
state={
    songs:[
      {
        id:1,
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
      {
        id:3,
        coverImg: 'https://images-na.ssl-images-amazon.com/images/I/91CcNMcqAxL._SX466_.jpg',
        song: 'On Melancholy Hill',
        album: 'Humanz',
        artist: 'Gorillaz',
        year: '2010',
        generes: [],
      },
      {
        id:4,
        coverImg: 'https://nesthq.com/wp-content/uploads/2017/04/gorillaz-humanz-1024x1024.jpg',
        song: 'Saturnz Barz',
        album: 'Humanz',
        artist: 'Gorillaz',
        year: '2017',
        generes: [],
      },
      {
        id:5,
        coverImg: 'https://images-na.ssl-images-amazon.com/images/I/815E90AuAbL._SY355_.jpg',
        song: 'U.S.A.',
        album: ' - ',
        artist: 'Da Pump',
        year: '2018',
        generes: [],
      },
      {
        id:6,
        coverImg: 'https://upload.wikimedia.org/wikipedia/en/7/79/Gorillaz_-_The_Now_Now.jpg',
        song: 'Humility',
        album: 'The Now Now',
        artist: 'Gorillaz',
        year: '2018',
        generes: [],
      },
    ]
}

render() {
  const { songs } = this.state;
  return (
    <ImageBackground source={bgImage} blurRadius={97}  resizeMode='cover' style={styles.bgContainer}>
      <ScrollView style={{paddingTop:20,}}>
        <FlatList 
          data={songs}
          keyExtractor={(item, index) => item.id.toString()}
          renderItem={({ item }) => 
            <View style={styles.songInfo} >
            <TouchableOpacity style={{flex:1,}} >
            <View  style={{flex:1, borderRadius:5}} backgroundColor='#fff' >
            <ImageBackground  style={{ flex:1, flexDirection:'row', }} imageStyle= {{opacity:0.5, borderRadius:5, }} blurRadius={15} source={{uri: item.coverImg}}>
              <View style={{flex:.2, justifyContent:'center', alignItems:'center'}}>
                <Text>{item.id} </Text>
              </View>
              <TouchableOpacity style={{flex:.5,}} >
                <ImageBackground style={{flex:1, resizeMode: 'contain'}} source={{uri: item.coverImg}}>
                  <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                    <Icon size={50} name="play-circle" style={{opacity:0.8}} color='#fff' />
                  </View>
                </ImageBackground>
              </TouchableOpacity>
              <View style={{flex:1,justifyContent:'center', alignItems:'flex-start', paddingLeft:15 }}>
                <Text>Song: {item.song} </Text>
                <Text>Album: {item.album} </Text>
                <Text>Artist: {item.artist} </Text>
                <Text>Year: {item.year} </Text>
              </View>
            </ImageBackground>
            </View>
            </TouchableOpacity>
            </View>
          }
        />
      </ScrollView>
    </ImageBackground>
  );
  }
}

export default Rank;

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rankView: {
    flex: 1,
    backgroundColor: '#e17055',
  },
  songInfo: {
    display: 'flex',
    flexDirection: 'row',
    height: 100,
    marginVertical: 2,
    marginHorizontal: 10,
    width: WIDTH - 20,
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderRadius: 5,
  },
  albumCover:{
    flex:1,
  },
});
