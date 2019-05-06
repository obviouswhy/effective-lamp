import React, {Component} from 'react';
import {
  StyleSheet, 
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const {width: WIDTH} = Dimensions.get('window');

class LongButton extends Component {
  render() {
    return (
        <TouchableOpacity style={[styles.btnDefault, {backgroundColor: this.props.bgColor}]} >
            <Text style={[styles.textStyle, {color: this.props.textColor}]}> {this.props.text} </Text>
        </TouchableOpacity>
    );
  }
}

export default LongButton;

const styles = StyleSheet.create({
  btnDefault:{
    width: WIDTH - 65,
    height: 35,
    borderRadius: 10,
    backgroundColor: '#A6DAF766',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
});
