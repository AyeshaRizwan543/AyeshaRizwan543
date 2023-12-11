import React, { useState } from 'react';
import { View, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

export default function CreateNewAccount() {
  const [email, setEmail] = useState('');
  const [username, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  return (
    <ImageBackground
      style={{ flex: 1, height: '35%' }}
      source={require('..//assets/images/singup.png')}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 24, color: '#000', marginTop: '73%', fontWeight: 'bold' }}>SIGN UP</Text>
        <Text style={{ color: '#000', marginBottom: 24 }}>Registration! Please enter your details</Text>

        <View>
          <Text style={{ color: '#000' }}>Full Name</Text>
          <TextInput
            placeholder='Enter your name'
            value={name}
            onChangeText={(text) => setName(text)}
            style={styles.input}
          />
        </View>

        <View>
          <Text style={{ color: '#000' }}>Username</Text>
          <TextInput
            placeholder='Enter your username'
            value={username}
            onChangeText={(text) => setFullName(text)}
            style={styles.input}
          />
        </View>

        <View>
          <Text style={{ color: '#000' }}>Email</Text>
          <TextInput
            placeholder='Enter your valid email'
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
          />
        </View>

        <View>
          <Text style={{ color: '#000' }}>Password</Text>
          <TextInput
            placeholder='Enter password'
            value={password}
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            style={styles.input}
          />
        </View>

        <TouchableOpacity onPress={() => {}}>
          <View style={styles.button}>
            <Text style={{ color: '#fff', textAlign: 'center', fontSize: 19, fontWeight: 'bold' }}>Sign Up</Text>
          </View>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', marginTop: 16 }}>
          <Text style={{ color: '#000' }}>Already have an account? </Text>
          <TouchableOpacity><Text style={{ color: '#3F939B', fontWeight: 'bold' }}>Log in now!</Text></TouchableOpacity>
          
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
    width: 300,
    marginTop:8
  },
  button: {
    backgroundColor: '#3F939B',
    padding: 10,
    borderRadius: 15,
    height: 45,
    width: 300,
    marginTop: 20,
  },
});



