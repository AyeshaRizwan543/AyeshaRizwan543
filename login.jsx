import React, { useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Checkbox } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setChecked] = useState(false);

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={true}
    >
      <View>
        <ImageBackground
          source={require('../assets/images/login.png')}
          style={styles.container1}
          resizeMode="cover"
        >
          <View>
            <Text style={styles.title}>Log In</Text>
            <Text style={styles.title2}>Welcome back! Please enter your details</Text>
          </View>
          <View style={{ marginLeft: 50, marginTop: 20 }}>
            <Text style={styles.text}>Enter your Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View style={{ marginLeft: 50, marginTop: 9 }}>
            <Text style={styles.text}>Enter your Password</Text>
            <TextInput
              style={styles.input}
              placeholder="*******"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.checkboxContainer}>
            <Checkbox
              status={isChecked ? 'checked' : 'unchecked'}
              onPress={() => setChecked(!isChecked)}
            />
            <Text style={styles.containertext}>Remember me</Text>
            <Text style={styles.forgetPasswordText}>Forget Password?</Text>
          </View>

          <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate('NewAccount')}>
            <View style={styles.button}>
              <Text style={{ color: '#fff', textAlign: 'center', fontSize: 15, marginBottom: -10 }}>
                Sign In
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.9} onPress={() => {}}>
            <View style={styles.buttonWithIcon}>
              <View style={{ marginLeft: 47 }}>
                <Icon name="google" size={25} color="#000" />
              </View>
              <Text
                style={{
                  color: '#000',
                  textAlign: 'center',
                  fontSize: 15,
                  marginLeft: 10,
                  marginBottom: 3,
                }}
              >
                Sign in with Google
              </Text>
            </View>
          </TouchableOpacity>

          <View style={{ marginLeft: 50, marginTop: 22 }}>
            <Text> Don’t have an account?</Text>
            <TouchableOpacity  onPress={() => navigation.navigate('NewAccount')}>
            <Text style={{ marginLeft: 175, marginTop: -19, color: '#EE5F21', fontWeight: 'bold' }}>
              {' '}
              Sign up now!
            </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  container1: {
    height: '75%',
    width: '100%', // Updated width to '100%'
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginTop: '90%',
    marginLeft: '38%',
    color: '#000',
  },
  title2: {
    marginRight: '10%',
    marginTop: '2%',
    marginLeft: '12.5%',
    fontWeight: 'light',
    color: 'grey',
    fontSize: 15,
  },
  input: {
    marginTop: '2%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    width: 300,
    marginBottom: 10,
    borderRadius: 12,
  },
  text: {
    fontSize: 14,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12, // Adjusted margin top for spacing
    marginLeft: 50,
  },
  containertext: {
    fontSize: 14,
    color: 'grey',
    marginLeft: 5,
  },
  forgetPasswordText: {
    fontSize: 14,
    color: 'grey',
    marginLeft: 10, // Adjusted margin left for spacing
  },
  button: {
    backgroundColor: '#3F939B',
    padding: 10,
    borderRadius: 15,
    height: 45,
    width: 340,
    marginTop: 10,
    marginLeft: 25,
  },
  buttonWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 15,
    height: 45,
    width: 340,
    marginTop: 17,
    marginLeft: 25,
    borderColor: '#000',
  },
});






        

        
        
        
        

