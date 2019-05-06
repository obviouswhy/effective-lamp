import React, {Component} from 'react';
import {
  StyleSheet, 
  View,
  ImageBackground, 
  Image, 
  TextInput, 
  Dimensions,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import bgImage from '../Assets/Images/main-bg.jpeg';
import logoImg from '../Assets/Images/logo.png';
import LongButton from './Common/LongButton';
import LoginForm from './Login/LoginForm';

const {width: WIDTH} = Dimensions.get('window');

class Login extends Component {
  render() {
    return (
      <ImageBackground source={bgImage} blurRadius={30}  resizeMode='cover' style={styles.bgContainer}>
        <KeyboardAvoidingView>
          <View style={styles.logoContainer}>
              <Image source={logoImg} style={styles.logo}/>
          </View>
          <View style={styles.inputContainer}>
            <LoginForm />
            {/* <View style={styles.linkContainer}>
              <TouchableOpacity >
                <Text style={{color: 'white'}}> Forgot Your Password? </Text>
              </TouchableOpacity>
              <TouchableOpacity >
                <Text style={{color: 'white'}} > Need Help? </Text>
              </TouchableOpacity>
            </View> */}
            <TouchableOpacity >
                <Text style={{color: 'white', marginLeft: 200, marginTop:20}}> Forgot Your Password? </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <LongButton text='Log In' textColor='#ffff' bgColor='#A6DAF766' />
            <LongButton text='Sign Up'  textColor='#ffff' bgColor='#A6DAF766' />
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,  
  },
  logoContainer:{
    flex:1,
    top: 100,
    alignItems: 'center',
  },
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
  inputContainer:{
    flex: 1,
    top: 70,
  },
  buttonContainer:{
    flex:.5,
    justifyContent: 'center',
    top: -45,
    left: 55,

  },
});
