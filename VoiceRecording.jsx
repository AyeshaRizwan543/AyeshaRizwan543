import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function RecordingScreen() {
  return (
    <View style={{ backgroundColor: '#fff',flex:1 }}>
      <View style={styles.container}>
        <Text style={{ marginTop: '20%', marginRight: '10%', fontSize: 28, fontWeight: 'bold' }}>قصہ سناؤ</Text>
      </View>
      <Text style={styles.text1}> Record Your </Text>
      <Text style={styles.text2}>Voice</Text>

      <View style={styles.container2}>
        <Text style={{ marginTop: '15%', marginLeft: '15%', marginRight: '23%', fontSize: 20 }}>میرے دل میں ایک خواب ہے، جو میں ہر روز دیکھتا ہوں۔ میں چاہتا ہوں کہ دنیا ایک خوبصورت اور امن بھری جگہ بنے، جہاں ہر شخص اچھے تعلقات میں رہے اور محبت کی بھرمار ہو۔</Text>
      </View>
      <TouchableOpacity activeOpacity={0.9} >
      <View>
        <Image
          source={require('../assets/images/mic1.png')}
          style={styles.image}
        />
      </View>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  text1: {
    
    marginLeft: '28%',
    marginTop: '12%',
    fontSize: 29,
    fontWeight:'bold'
  },
  text2: {
    
    marginLeft: '41%',
    marginTop: '3%',
    fontSize: 29,
    color:'#EE5F21',
    fontWeight:'bold'
  },
  container2: {
    height: '50%',
    width: '75%',
    borderColor: '#000',
    marginBottom: '-30%', // Corrected typo here
    backgroundColor: '#fff',
    marginLeft: '12%',
    marginTop: '4%',
    borderColor: '#DDDDDD', // Border color
    borderWidth: 0.6,
    elevation: 3,

  },
  image: {
    marginLeft:'42%',
    marginBottom:'32%'
  },
});
