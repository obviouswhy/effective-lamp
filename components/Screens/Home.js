import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, ImageBackground} from 'react-native';
import { TabNavigation } from 'react-navigation'; 
import bgImage from '../../Assets/Images/main-bg.jpeg';

const {width: WIDTH} = Dimensions.get('window');

class Home extends Component {

  render() {
    return (
      <ImageBackground source={bgImage} blurRadius={97}  resizeMode='cover' style={styles.bgContainer}>
        <ScrollView>
          <View style={styles.wrapper}>
            <Text style={{marginVertical:10}}>Rank</Text>
            <View style={styles.categoryContainer}>
              <Image style={{flex:1}} source={{uri:'https://t2.genius.com/unsafe/440x440/https%3A%2F%2Fimages.genius.com%2F60d3d01611f16283ab3388ed34210652.1000x1000x1.jpg'}}></Image>
              <Image style={{flex:1}} source={{uri:'https://t2.genius.com/unsafe/600x600/https%3A%2F%2Fimages.genius.com%2Fbe9197ecbcd58f7631a1c17709d6dff2.500x500x1.jpg'}}></Image>
              <Image style={{flex:1}} source={{uri:'https://nesthq.com/wp-content/uploads/2017/04/gorillaz-humanz-1024x1024.jpg'}}></Image>
              <Image style={{flex:1}} source={{uri:'https://images-na.ssl-images-amazon.com/images/I/815E90AuAbL._SY355_.jpg'}}></Image>
            </View>
          </View>
          <View style={styles.wrapper}>
            <Text style={{marginVertical:10}}>New</Text>
            <View style={styles.categoryContainer}>
              <Image style={{flex:1}} source={{uri:'https://nesthq.com/wp-content/uploads/2017/04/gorillaz-humanz-1024x1024.jpg'}}></Image>
              <Image style={{flex:1}} source={{uri:'https://images-na.ssl-images-amazon.com/images/I/91CcNMcqAxL._SX466_.jpg'}}></Image>
              <Image style={{flex:1}} source={{uri:'https://t2.genius.com/unsafe/440x440/https%3A%2F%2Fimages.genius.com%2F60d3d01611f16283ab3388ed34210652.1000x1000x1.jpg'}}></Image>
              <Image style={{flex:1}} source={{uri:'https://t2.genius.com/unsafe/600x600/https%3A%2F%2Fimages.genius.com%2Fbe9197ecbcd58f7631a1c17709d6dff2.500x500x1.jpg'}}></Image>
            </View>
          </View>
          <View style={styles.wrapper}>
            <Text style={{marginVertical:10}}>Maternity</Text>
            <View style={styles.categoryContainer}>
              <Image style={{flex:1}} source={{uri:'https://nesthq.com/wp-content/uploads/2017/04/gorillaz-humanz-1024x1024.jpg'}}></Image>
              <Image style={{flex:1}} source={{uri:'https://t2.genius.com/unsafe/440x440/https%3A%2F%2Fimages.genius.com%2F60d3d01611f16283ab3388ed34210652.1000x1000x1.jpg'}}></Image>
              <Image style={{flex:1}} source={{uri:'https://images-na.ssl-images-amazon.com/images/I/815E90AuAbL._SY355_.jpg'}}></Image>
              <Image style={{flex:1}} source={{uri:'https://images-na.ssl-images-amazon.com/images/I/91CcNMcqAxL._SX466_.jpg'}}></Image>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    alignItems: 'center',
  },
  homeView: {
    flex: 1,
    backgroundColor: '#A6DAF7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryContainer: {
    flexDirection:'row',
    height: 120,
    width: WIDTH - 20,
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  wrapper:{
    marginVertical: 10,
    marginHorizontal: 10,
  },
});
