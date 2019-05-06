import React, {Component} from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/FontAwesome';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPaused : false,
    };
  }
  togglePause() {
    this.state.isPaused? this.setState({isPaused:false}) : this.setState({isPaused:true});
  
  }
  getPaused(){
    this.state.isPaused? a = 'play' : a = 'pause';
    return a;
  }
  render() {
    const { songs } = this.props.songs;
    return (
      <View  style={{flex:1}} backgroundColor='#fff'>
      <ImageBackground style={{flex:1, resizeMode: 'cover', paddingTop:100}} opacity={.4} blurRadius={40} source={{uri: songs[0].coverImg}}>
            <Image
              style={{flex:1.5,marginHorizontal:45}}
              source={{uri: songs[0].coverImg}}
              resizeMode='contain'
            />
        <View style={{flex:.5,  alignItems:'center', justifyContent:'center'}}>
          <Text>{songs[0].song}</Text>
          <Text>{songs[0].album}</Text>
          <Text>{this.state.isPaused.toString()}</Text>
        </View>
        
        <View style={{flex:1, flexDirection: 'row', alignItems:'center', justifyContent:'space-around'}}>
         <TouchableOpacity >
             <Icon size={30} name='backward' />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {this.togglePause()}}>
             <Icon size={40} name={this.getPaused()} />
          </TouchableOpacity>
          <TouchableOpacity >
             <Icon size={30} name='forward' />
          </TouchableOpacity>
        </View>
          <Video source={{uri: songs[0].url}}   // Can be a URL or a local file.
            ref={(ref) => {
              this.player = ref
            }}                                      // Store reference
            rate={1.0}  
            controls={true}                            // 0 is paused, 1 is normal.
            volume={1.0}                            // 0 is muted, 1 is normal.
            muted={false}                           // Mutes the audio entirely.
            paused={this.state.isPaused}                         // Pauses playback entirely.''
            playInBackground={true}                // Audio continues to play when app entering background.
            playWhenInactive={true}                // [iOS] Video continues to play when control or notification center are shown.
            ignoreSilentSwitch={"ignore"}           // [iOS] ignore | obey - When 'ignore', audio will still play with the iOS hard silent switch set to silent. When 'obey', audio will toggle with the switch. When not specified, will inherit audio settings as usual.
            progressUpdateInterval={250.0}          // [iOS] Interval to fire onProgress (default to ~250ms) // Callback when the stream receive some metadata
            style={{flex:1}}
            opacity={0} 
            controls= {true}
            style={{flex:0.001}}
          />
      </ImageBackground>
      </View>

    );
  }
}

export default Player;

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
