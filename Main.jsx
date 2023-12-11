import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

export default function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/main-screen.png')}
        style={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          <Text style={styles.text}>
            <Text style={styles.bring}>Bring</Text>
            <Text style={styles.your}> your </Text>
          </Text>
          <Text style={styles.text}>
            <Text style={styles.narratives}>narratives </Text>
            <Text style={styles.to}>to </Text>
            <Text style={styles.life}>life</Text>
          </Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentText}>Craft stories that echo love, narrated by your dearest ones.</Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Don’t have an account?</Text>
          <TouchableOpacity activeOpacity={0.9}  onPress={() => navigation.navigate('NewAccount')}>
            <Text style={styles.createAccountText}>Create Account</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  backgroundImage: {
    width: '100%',
    height: '90%',
  },
  overlay: {
    marginTop: '110%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: '2%',
    marginTop: '0%',
  },
  bring: {
    color: '#5E6C5B',
  },
  your: {
    color: '#EE5F21',
  },
  narratives: {
    color: '#5E6C5B',
  },
  to: {
    color: '#EE5F21',
  },
  life: {
    color: '#5E6C5B',
  },
  content: {
    paddingHorizontal: 20,
    marginBottom: '22%',
    color: '#5E6C5B',
    marginLeft: 28,
    fontWeight: 'bold',
    fontSize: 19.2,
  },
  contentText: {
    color: '#5E6C5B',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: -30,
  },
  footerText: {
    color: '#5E6C5B',
    marginRight: 5,
  },
  createAccountText: {
    color: '#EE5F21', // Set your desired color for the Create Account text
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});


