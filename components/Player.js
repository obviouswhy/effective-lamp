import React, {Component} from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image, ImageBackground, Dimensions } from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/FontAwesome';
import Slider from 'react-native-slider'

const {width: WIDTH} = Dimensions.get('window');

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPaused : false,
      totalLength: 1,
      currentPosition: 0,
    };
  }
  togglePause() {
    this.state.isPaused? this.setState({isPaused:false}) : this.setState({isPaused:true});
  
  }
  getPaused(){
    this.state.isPaused? a = 'play' : a = 'pause';
    return a;
  }
  setDuration(data) {
    // console.log(totalLength);
    this.setState({totalLength: Math.floor(data.duration)});
  }

  setTime(data) {
    //console.log(data);
    this.setState({currentPosition: Math.floor(data.currentTime)});
  }

  render() {

    const { songs } = this.props.songs;

    function pad(n, width, z=0) {
      n = n + '';
      return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }
    
    const minutesAndSeconds = (position) => ([
      pad(Math.floor(position / 60), 2),
      pad(position % 60, 2),
    ]);
    const elapsed = minutesAndSeconds(this.state.currentPosition);
    const remaining = minutesAndSeconds(this.state.totalLength - this.state.currentPosition);

    return (
      <View  style={{flex:1}} backgroundColor='#fff'>
      <ImageBackground style={{flex:1, resizeMode: 'cover', paddingTop:100}} opacity={.5} blurRadius={40} source={{uri: songs[0].coverImg}}>
            <Image
              style={{flex:2,marginHorizontal: WIDTH-325}}
              source={{uri: songs[0].coverImg}}
              resizeMode='contain'
            />
         <View style={{flex:.3 ,marginHorizontal: WIDTH-325, marginVertical:20}}>
          <Slider
            maximumValue={Math.max(this.state.totalLength, 1, this.state.currentPosition + 1)}
            value={this.state.currentPosition}
            style={styles.slider}
            minimumTrackTintColor='#564D4A5d'
            maximumTrackTintColor='#564D4A3d'
            thumbStyle={styles.thumb}
            trackStyle={styles.track}/>
            <View style={{ alignItems:'flex-end', justifyContent:'space-between', flexDirection:'row'}}>
              <Text style={{fontSize:12,}}>{elapsed[0] + ":" + elapsed[1]} </Text>
              <Text style={{fontSize:12,}}> {"- " + remaining[0] + ":" + remaining[1]} </Text>
            </View>
         </View>
        <View style={{flex:.5,  alignItems:'center', justifyContent:'center'}}>
          <Text style={{fontSize:17,fontWeight:'700', marginBottom:10}}>{songs[0].song}</Text>
          <Text style={{fontSize:15,fontWeight:'600', color:'#3949B2'}}>{songs[0].album}</Text>
        </View>
        <View style={{flex:1, flexDirection: 'row', alignItems:'center', justifyContent:'space-around', top:-20}}>
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
            progressUpdateInterval={200.0}          // [iOS] Interval to fire onProgress (default to ~250ms) // Callback when the stream receive some metadata
            style={{flex:1}}
            opacity={0} 
            onLoad={this.setDuration.bind(this)}    // Callback when video loads
            onProgress={this.setTime.bind(this)} 
            style={{flex:0.01}}
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
  track: {
    height: 2,
    borderRadius: 1,
  },
  thumb: {
    width: 7,
    height:7,
    borderRadius: 5,
    backgroundColor: '#EFF1F3',
  },
});
