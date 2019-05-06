import React, {Component} from 'react';
import {
  StyleSheet, 
  View,
  TextInput, 
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const {width: WIDTH} = Dimensions.get('window');

class LoginForm extends Component {
  render() {
    return (
        <View>
            <View>
                <Icon size={15} name="user" style={styles.userIcon}/>
                <TextInput 
                style={styles.input}
                placeholder={'Username'}
                placeholderTextColor={'#A7A7A7'}
                underlineColorAndroid="transparent"
                autoCorrect={false}
                />
            </View>
            <View>
                <Icon size={15} name="lock" style={styles.userIcon}/>
                <TextInput 
                style={styles.input}
                placeholder={'Password'}
                secureTextEntry={true}
                placeholderTextColor={'#A7A7A7'}
                underlineColorAndroid="transparent"
                />    
            </View>
        </View>       
    );
  }
}

export default LoginForm;

const styles = StyleSheet.create({
  input:{
    width: WIDTH - 65,
    height: 35,
    borderRadius: 30,
    paddingLeft: 40,
    backgroundColor: 'rgba(255,255,255,0.7)',
    marginHorizontal: 55
  },
  userIcon:{
    left:75,
    top: 25,
  },
});
